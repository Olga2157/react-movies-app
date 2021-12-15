import {FC}  from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { PaginationItemInfo } from '../../../types';

export const PaginationItemWithLink: FC<{ itemInfo: PaginationItemInfo, callBack: Function }> = (props) => {
  const { pageKey, active } = props.itemInfo;

  return (
    <PaginationItem
          key={pageKey}
          className="pagination-item-style"
          active={active}
          onClickCapture={() => props.callBack(pageKey)}
        >
          <PaginationLink
            className="pagination-link-style"
          >
            {pageKey}
          </PaginationLink>
        </PaginationItem>
    
  );
};
