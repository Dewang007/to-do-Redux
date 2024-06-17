import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTodo, deleteTodo } from "../features/todoSlice";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleEdit = (index) => {
    dispatch(
      setCurrentTodo({
        ...todos[index],
        index,
      })
    );
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="w-2/3">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">
          Add your to do here...
        </p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-white shadow overflow-hidden rounded-md px-6 py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {todo.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{todo.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-indigo-600 hover:text-indigo-900 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-900 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
