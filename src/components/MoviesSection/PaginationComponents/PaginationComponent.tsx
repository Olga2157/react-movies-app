import React, { FC, useCallback } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationItemWithLink } from './PaginationItemWithLink';
import './Pagination.scss';
import { moviesDataSelector } from '../../../redux/selector/selectors';
import store from '../../../store';
import { setCurrentPageCreator } from '../../../redux/actions/actionCreators/actionCreators';

export const PaginationComponent: FC = () => {

  let { totalPages, totalAmount } = useSelector(moviesDataSelector);
  const { currentPage } = useSelector(moviesDataSelector);
  const dispatch = useDispatch();

  store.subscribe(() => {
    totalPages = store.getState().movieReducer.totalPages;
    totalAmount = store.getState().movieReducer.totalAmount;
  });

  const changePage = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPageCreator(page));
    }
  }, []);

  const range = (currentPage: number, totalPages: number) => {
    if (totalPages === 0) {
      return [];
    }
    let start = 0;
    let end = 0;
    if (currentPage === 1) {
      start = 1;
      end = Math.min(totalPages + 1, 9);
    } else if (currentPage < 8) {
      start = 1;
      end = Math.min(9, totalPages + 1);
    } else {
      start = currentPage;
      end = Math.min(start + 8, totalPages + 1);
    }
    return Array.from(Array.from(Array(Math.ceil(end - start)).keys()), x => start + x);
  };

  return (
    <Pagination id="nav-pagination">
      <PaginationItem onClickCapture={() => changePage(currentPage - 1)}>
        <PaginationLink id="previous-page" className="pagination-link-style-arrow" previous />
      </PaginationItem>
      {
        range(currentPage, totalPages).map((key) => (
          <PaginationItemWithLink
            key={key}
            itemInfo={{
              pageKey: key,
              active: currentPage === key,
            }}
            callBack={changePage}
          />
        ))
      }
      <PaginationItem onClickCapture={() => changePage(currentPage + 1)}>
        <PaginationLink id="next-page" className="pagination-link-style-arrow" next />
      </PaginationItem>
    </Pagination>
  );
};
