import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
})

// turning schema into a model
// then export a model to perform CFUD operation in Database as required

const PostMessage =  mongoose.model('PostMessage' , postSchema);
export default PostMessage;