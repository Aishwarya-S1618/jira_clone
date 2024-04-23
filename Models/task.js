import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Task = new Schema({
  title: {type: String,required: true},
  description: {type: String,required: true},
  project: {type: String,required: true},
  category: {type: String,required: true},
  priority: {type: String,required: true},
  dueDate: {type: Date,required: true},
  assignedTo: {type: String,required: true},
  createdBy: {type: String,required: true},
  createdOn: {type: String,required: true}
});

const Tasks = mongoose.model('Tasks', Task);
export default Tasks;