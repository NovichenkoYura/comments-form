//@ts-nocheck
import React from 'react';
import { CommentsForm } from './commentForm';
import { CommentsList } from './commentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <CommentsForm />
      <CommentsList />
    </div>
  );
}

export default App;
