import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PaginationItemWithLink from './PaginationItemWithLink';

type PaginationComponentProps = {
}
type PaginationComponentState = {
  currentPage: number,
  totalPages: number
}

class PaginationComponent extends React.Component<PaginationComponentProps, PaginationComponentState> {

  constructor(props: PaginationComponentProps) {
    super(props);

    this.state = {
      currentPage: 1,
      totalPages: 10
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage = (page: number) => {
    if (page > 0 && page <= this.state.totalPages) {
      this.setState({
        currentPage: page
      });
    }
  }

  render() {
    const { totalPages, currentPage } = this.state;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(<PaginationItemWithLink key={i} itemInfo={{
        pageKey: i,
        active: currentPage === i
      }} callBack={this.changePage} />);
    }
    return (

      <Pagination id="nav-pagination">
        <PaginationItem onClickCapture={() => this.changePage(currentPage - 1)}>
          <PaginationLink id="previous-page" className="pagination-link-style-arrow" previous />
        </PaginationItem>
        {pages}
        <PaginationItem onClickCapture={() => this.changePage(currentPage + 1)}>
          <PaginationLink id="next-page" className="pagination-link-style-arrow" next />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PaginationComponent;
