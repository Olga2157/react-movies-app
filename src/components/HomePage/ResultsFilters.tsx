import { FC } from 'react';
import { ButtonGroup } from 'reactstrap';
import { FilterButtonInfo } from '../../types';
import { FilterButton } from '../shared/Buttons/FilterButton';

export const ResultsFilters: FC = () => {
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
      {buttons.map((button) => (
        <FilterButton
          buttonId={button.buttonId}
          key={button.buttonId}
          listener={() => filterClick(button)}
          buttonText={button.buttonText}
        />
      ))}
    </ButtonGroup>
  );
};
