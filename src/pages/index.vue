<script setup>
import { generateUUID } from "@/utilities/index"

const todos = useState('todos', () => [])
const todoText = useState('todoText', () => "")

const addTodo = (text) => {
  if(!text) return
  todos.value.push({
    id: generateUUID(),
    text
  })
  todoText.value = ""
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

</script>

<template>
  <div class="w-[500px] p-6 shadow rounded-md">
    <h1 class="text-2xl mb-4 text-center">Todo APP</h1>
    <div class="flex gap-2">
      <input type="text" placeholder="Add Todo..." class="border rounded-md text-xl p-2 w-full outline-none" v-model="todoText">
      <button class="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white" @click.prevent="addTodo(todoText)">Add</button>
    </div>
    <ul class="py-6">
      <div v-for="todo in todos" :key="todo.id">
        <li class="text-xl mb-2 flex justify-between">
          <span>{{todo.text}}</span>
          <button class="text-red-500 font-bold" @click="removeTodo(todo.id)">&#10005;</button>
        </li> 
      </div>
    </ul>
  </div>
</template>