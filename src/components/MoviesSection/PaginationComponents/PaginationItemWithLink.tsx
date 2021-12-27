import React, { FC } from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { PaginationItemInfo } from '../../../types';
import './Pagination.scss';

export const PaginationItemWithLink: FC<{ itemInfo: PaginationItemInfo,
  callBack: Function }> = (props) => {
    const { callBack, itemInfo } = props;
    const { pageKey, active } = itemInfo;

    return (
      <PaginationItem
        key={pageKey}
        className="pagination-item-style"
        active={active}
        onClickCapture={() => callBack(pageKey)}
      >
        <PaginationLink
          className="pagination-link-style"
        >
          {pageKey}
        </PaginationLink>
      </PaginationItem>

    );
  };
