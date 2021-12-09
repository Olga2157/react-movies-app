import * as React from 'react';
import SortByButton from './SortByButton';
import SortOrderButton from './SortOrderButton';

const ResultsSort: React.FC<{}> = function (props) {
  const sortFilterClick = () => {
    // todo: add logic when I start next tasks
  };
  const sortOrderClick = () => {
    // todo: add logic when I start next tasks
  };
  const choosenSortOrder = 'desc';
  // mock data, later it will be data from state or context

  return (
    <div className="row-flex">
      <p className="pt-2">SORT BY</p>
      <SortByButton buttonId="sort-filter" listener={sortFilterClick} buttonText="test" />
      <SortOrderButton sortOrder={choosenSortOrder} listener={sortOrderClick} />
    </div>
  );
};

export default ResultsSort;
