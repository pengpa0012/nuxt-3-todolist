import { Todo } from "../models/index.model"

export default defineEventHandler(async(event) => {
  const { id, todo } = await readBody(event)

  const data = await Todo.insertMany({id, todo})

  return {
    message: "created todo",
    todos: data
  }
})
