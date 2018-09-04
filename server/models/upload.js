const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UploadSchema = new Schema({
    userid: {type:Schema.Types.ObjectId,ref:"Users",require:true},
    filename:{type:String, required: true},
    filepath:{type:String, required: true},
   
});
module.exports = mongoose.model('Uploads', UploadSchema, 'Uploads');