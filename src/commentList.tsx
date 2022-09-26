import { useAppDispatch, useAppSelector } from './app/hooks';

export interface commentsListProps {
  id?: string;
  name?: string;
  text?: string;
}

export const CommentsList: React.FC<commentsListProps> = () => {
  const comments = useAppSelector((state) => state.comments.list);
  console.log(comments)
  return (
    <div className="app-sidebar-notes">
      {comments.map((comment) => (
        <div
          key={comment.id}
              className={`app-sidebar-note`}>
              
          <div className="sidebar-note-title">
            <strong>{comment.name}</strong>
          </div>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};
