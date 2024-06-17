import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  currentTodo: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { index, updatedTodo } = action.payload;
      state.todos[index] = updatedTodo;
      state.currentTodo = null;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, editTodo, setCurrentTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
