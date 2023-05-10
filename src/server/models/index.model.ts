import { defineMongooseModel } from '#nuxt/mongoose'

export const Todo = defineMongooseModel('Todo', {
  id: {
    type: String,
    required: true,
  },
  todo: { 
    type: String,
    required: true
  }
})