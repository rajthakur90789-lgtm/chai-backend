import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // claudinary url
            required: true
        },
        thumbnail: {
            type: String, // claudinary url
            required: true
        },
        tittle: {
            type: String, 
            required: true
        },
        descriptio: {
            type: String, 
            required: true 
        },
        duration: {
            type: Number, 
            required: true

        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "USer"

        }
    },
    {
        timestamps: true
    }
)

videoSchema. plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video",videoSchema)