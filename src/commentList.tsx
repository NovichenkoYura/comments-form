import { useAppSelector } from './app/hooks';
import { useState } from 'react';


export interface commentsListProps {
  id?: string;
  name?: string;
  text?: string;
}

export const CommentsList: React.FC<commentsListProps> = () => {
  const { list, isFetching, currentPage, perPage, totalQtyComments } = useAppSelector(
    (state) => state.comments
  );

  const [actualPerPage, setactualPerPage] = useState<number>(perPage);
  console.log(actualPerPage)
  
  const showmore = () => {
    setactualPerPage(actualPerPage + 3);
    console.log('shomore');
  };

  const lastPageIndex = currentPage * actualPerPage;
  const firstPageIndex = lastPageIndex - actualPerPage;
  const currentListComments = list.slice(firstPageIndex, lastPageIndex);
  

  return (
    <div className="app-sidebar-notes">
      {currentListComments.map((comment) => (
        <div key={comment.id} className="commentList__item">
          <div className="commentListItem__name">{comment.name}</div>
          <div>{comment.text}</div>
        </div>
      ))}
      <button onClick={showmore}>Show more</button>
    </div>
  );
};
