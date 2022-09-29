import React from 'react';
import { number } from 'yup/lib/locale';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setCurrentPage } from './store/commentSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

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

  const dispatch = useAppDispatch();
  const paginate = (number: number) => dispatch(setCurrentPage(number));
  const paginateDecriment = (currentPage: number) => dispatch(setCurrentPage(currentPage - 1));
  const paginateIncriment = (currentPage: number) => dispatch(setCurrentPage(currentPage + 1));

  return (
    <div>
      <ul className="pagination">
        <li className="page__item">
          <a href="!#" className="page__link" onClick={() => paginateDecriment(currentPage)}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li className="page__item" key={number}>
            <a href="!#" className="page__link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <li className="page__item">
          <a href="!#" className="page__link" onClick={() => paginateIncriment(currentPage)}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </li>
      </ul>
    </div>
  );
};
