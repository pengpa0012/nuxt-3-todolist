export default defineEventHandler(async(event) => {
  const { todo } = await readBody(event)

  return {
    message: "create todo",
    todos: todo
  }
})
