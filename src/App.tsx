import React, { useEffect } from 'react';
import { CommentsForm } from './commentForm';
import { CommentsList, commentsListProps } from './commentList';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { getCommentsThunk } from './store/commentSlice';


export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getCommentsThunk())
  }, [])


  return (
    <div className="App">
      <CommentsForm />

      <CommentsList />
    </div>
  );
};
