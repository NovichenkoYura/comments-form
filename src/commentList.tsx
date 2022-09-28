import { useAppSelector } from './app/hooks';

export interface commentsListProps {
  id?: string;
  name?: string;
  text?: string;
}

export const CommentsList: React.FC<commentsListProps> = () => {
  const { list } = useAppSelector((state) => state.comments);

  return (
    <div className="app-sidebar-notes">
      {list.map((comment) => (
        <div key={comment.id} className="commentList__item">
          <div className="commentListItem__name">{comment.name}</div>
          <div>{comment.text}</div>
        </div>
      ))}
    </div>
  );
};
