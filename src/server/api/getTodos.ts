import { Todo } from "../models/index.model"

export default defineEventHandler(async() => {
  const data = await Todo.find()
  return {
    message: "all todos",
    todos: data
  }
})
