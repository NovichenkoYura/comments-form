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
          className={"commentList__item"}>
          <div className="commentListItem__name">{comment.name}</div>         
          <div>{comment.text}</div>
        </div>
      ))}
    </div>
  );
};
