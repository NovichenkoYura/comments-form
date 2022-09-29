import React from 'react';
import { useAppSelector } from './app/hooks';

export interface paginationProps {
  currentpage?: number;
  perPage?: number;
  totalQtyComments?: number;
}

export const Pagination: React.FC<paginationProps> = () => {
  const { list, isFetching, currentPage, perPage, totalQtyComments } = useAppSelector(
    (state) => state.comments
  );
  const totalQtyPages = Math.ceil(list.length / perPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalQtyPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page__item" key={number}>
            <a href="!#" className="page__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
