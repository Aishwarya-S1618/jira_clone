import AllTasks from '../../../Models/task.js';
import connectDB from "../../../controllerUtils/dbConnector.js"

export const POST = async (req) => {
  const {title, description, project, category, priority, dueDate, assignedTo, createdBy, createdOn} = await req.json()
  try{
    await connectDB();
    const newDocument = new AllTasks({
      title, description, project, category, priority, dueDate, assignedTo, createdBy, createdOn 
    });
    await newDocument.save();
    return new Response(JSON.stringify(newDocument, {status: 201}))
  } catch(error){
    console.log("Failed to create a new task due to : ",error.message)
  }
}