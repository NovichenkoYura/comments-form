import React from 'react'
import { useAppSelector } from './app/hooks';

export interface paginationProps {
  currentpage?: number; 
  perPage?: number;
  totalQtyComments?: number;
}

export const Pagination: React.FC<paginationProps> = () => {
  const { list, isFetching, currentpage, perPage, totalQtyComments } = useAppSelector((state) => state.comments);
  const totalQtyPages = Math.ceil(totalQtyComments/perPage);

  const pageNumbers = [];

  for (let i=1; i <= totalQtyPages; i++){
      pageNumbers.push(i);
  }

  return (
    <div>
    <ul class>   


  
    </div>

);
};
