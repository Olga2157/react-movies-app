import * as React from 'react';
import { ButtonGroup } from 'reactstrap';
import { FilterButtonInfo } from '../../types';
import FilterButton from '../shared/Buttons/FilterButton';

const ResultsFilters: React.FC<{}> = function () {
  const filterClick = (button: FilterButtonInfo) => {
    // console.log(button.buttonText);
    // todo: add logic when I start next tasks
  };

  const buttons : FilterButtonInfo[] = [
    { buttonId: 'all-filter', buttonText: 'all' },
    { buttonId: 'documentary-filter', buttonText: 'documentary' },
    { buttonId: 'comedy-filter', buttonText: 'comedy' },
    { buttonId: 'horror-filter', buttonText: 'horror' },
    { buttonId: 'crime-filter', buttonText: 'crime' },
  ];

  return (
    <ButtonGroup size="sm" id="color-active-button">
      {buttons.map((button, id) => (
        <FilterButton
          buttonId={button.buttonId}
          key={button.buttonText}
          listener={() => filterClick(button)}
          buttonText={button.buttonText}
        />
      ))}
    </ButtonGroup>
  );
};

export default ResultsFilters;
