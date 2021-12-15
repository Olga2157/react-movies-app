import * as React from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { PaginationItemInfo } from '../../../types';

const PaginationItemWithLink: React.FC<{ itemInfo: PaginationItemInfo, callBack: Function }> = (props) => {
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

export default PaginationItemWithLink;
