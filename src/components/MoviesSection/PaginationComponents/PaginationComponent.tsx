import React, { FC, useCallback } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationItemWithLink } from './PaginationItemWithLink';
import './Pagination.scss';
import { moviesDataSelector } from '../../../redux/selector/selectors';
import store from '../../../store';
import { setCurrentPageCreator } from '../../../redux/actions/actionCreators/actionCreators';

export const PaginationComponent: FC = () => {

  let { totalPages } = useSelector(moviesDataSelector);
  const { currentPage } = useSelector(moviesDataSelector);
  const dispatch = useDispatch();

  store.subscribe(() => {
    totalPages = store.getState().movieReducer.totalPages;
  });

  const changePage = useCallback((page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPageCreator(page));
    }
  }, []);

  const range = (current: number, total: number) => {
    if (total === 0) {
      return [];
    }
    let start: number;
    let end: number;
    if (current === 1) {
      start = 1;
      end = Math.min(total + 1, 9);
    } else if (current < 8) {
      start = 1;
      end = Math.min(9, total + 1);
    } else {
      start = current;
      end = Math.min(start + 8, total + 1);
    }
    return Array(end - start).fill(start).map((x, y) => x + y);
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
