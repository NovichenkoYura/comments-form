import { useAppSelector } from './app/hooks';

export interface commentsListProps {
  id?: string;
  name?: string;
  text?: string;
}

export const CommentsList: React.FC<commentsListProps> = () => {
  const { list, isFetching, currentPage, perPage, totalQtyComments } = useAppSelector(
    (state) => state.comments
  );

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentListComments = list.slice(firstPageIndex, lastPageIndex);

  return (
    <div className="app-sidebar-notes">
      {currentListComments.map((comment) => (
        <div key={comment.id} className="commentList__item">
          <div className="commentListItem__name">{comment.name}</div>
          <div>{comment.text}</div>
        </div>
      ))}
    </div>
  );
};
