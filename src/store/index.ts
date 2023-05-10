import  {defineStore} from 'pinia'
export const useTodosStore = defineStore('todos', {
  state: () =>  {
    return {
      todos: [] as any[]
    }
  },
  getters: {
    getTodos(): any[] {
      return this.todos
    }
  },
  actions: {
    addTodo(todo: any) {
      this.todos.push([...this.todos, todo])
    },
  },
})