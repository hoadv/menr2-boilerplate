// grab the mongoose module
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    text : {type : String, required: true},
    completed: {type: Boolean, default: false}
});
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('todo', todoSchema);