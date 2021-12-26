import React, { FC, useCallback, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { PaginationItemWithLink } from './PaginationItemWithLink';
import './Pagination.scss';

export const PaginationComponent: FC = () => {
  const [currentPage, setPage] = useState(1);
  const [totalPages] = useState(8);
  // just mock data that will be updated with Redux in the next tasks

  const changePage = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      setPage(page);
    }
  }, []);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(<PaginationItemWithLink
      key={i}
      itemInfo={{
        pageKey: i,
        active: currentPage === i,
      }}
      callBack={changePage}
    />);
  }

  return (
    <Pagination id="nav-pagination">
      <PaginationItem onClickCapture={() => changePage(currentPage - 1)}>
        <PaginationLink id="previous-page" className="pagination-link-style-arrow" previous />
      </PaginationItem>
      {pages}
      <PaginationItem onClickCapture={() => changePage(currentPage + 1)}>
        <PaginationLink id="next-page" className="pagination-link-style-arrow" next />
      </PaginationItem>
    </Pagination>
  );
};
