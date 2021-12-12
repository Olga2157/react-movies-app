import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

type PaginationComponentProps = {
}
type PaginationComponentState = {
  currentPage: number,
  totalPages: number,
  // totalItems : number,
  pageSize: number,
  pages: number[]
}

class PaginationComponent extends React.Component<PaginationComponentProps,
  PaginationComponentState> {
  constructor(props: PaginationComponentProps) {
    super(props);

    this.state = {
      currentPage: 2,
      totalPages: 10,
      pageSize: 8,
      pages: [1, 2],
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(page: number) {
    this.setState({
      // todo: update logic in the next task with state
    });
  }

  render() {
    // const { someNumbersList, currentPage } = this.state;
    return (

      <Pagination id="nav-pagination">
        <PaginationItem>
          <PaginationLink className="pagination-link-style-arrow" previous />
        </PaginationItem>
        {/* Now the is just mock data in UI. Will be changed in the next tasks */}
        <PaginationItem
          key={0}
          className="pagination-item-style"
          active={false}
        >
          <PaginationLink
            className="pagination-link-style"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          key={1}
          className="pagination-item-style"
          active
        >
          <PaginationLink
            className="pagination-link-style"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          key={2}
          className="pagination-item-style"
          active={false}
        >
          <PaginationLink
            className="pagination-link-style"
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink id="next-page" className="pagination-link-style-arrow" next />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PaginationComponent;
