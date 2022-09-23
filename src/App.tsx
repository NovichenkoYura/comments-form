import React from 'react';
import { CommentsForm } from './commentForm';
import { CommentsList, commentsListProps } from './commentList';
import './App.css';

export const App: React.FC = () => {  
  return (
    <div className="App">
      <CommentsForm />
      <CommentsList />
    </div>
  );
};
