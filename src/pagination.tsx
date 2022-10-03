import React from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setCurrentPage } from './store/commentSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export interface paginationProps {
  currentPage?: number;
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
    if (pageNumbers.length <= 8) {
      pageNumbers.push(i);
    }
  }

  const dispatch = useAppDispatch();
  const paginate = (number: number) => dispatch(setCurrentPage(number));
  const paginateDecriment = (currentPage: number) => dispatch(setCurrentPage(currentPage - 1));
  const paginateIncriment = (currentPage: number) => dispatch(setCurrentPage(currentPage + 1));

  return (
    <div className="pagination__section">
      <ul className="pagination">
        <li className="page__item">
          <a href="!#" className="page__link" onClick={() => paginateDecriment(currentPage)}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li className="page__item" key={number}>
            <a
              href="!#"
              className={`page__link ${currentPage === number && 'active'}`}
              onClick={() => paginate(number)}
            >
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
