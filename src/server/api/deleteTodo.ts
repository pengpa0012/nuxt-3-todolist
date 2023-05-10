import { Todo } from "../models/index.model"

export default defineEventHandler(async(event) => {
  const { id } = await readBody(event)
  const data = await Todo.deleteOne({id})

  return {
    message: "delete todo",
    todo: data
  }
})
