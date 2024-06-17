import React from 'react';
import Form from './componants/Form';
import List from './componants/List';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md p-8 flex space-x-8">
        <Form />
        <List />
      </div>
    </div>
  );
};

export default App;
