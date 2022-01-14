import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup } from 'reactstrap';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import { FilterButtonInfo } from '../../types';
import { FilterButton } from '../shared';

export const ResultsFilters: FC = () => {
  const dispatch = useDispatch();
  const filterClick = (button: FilterButtonInfo) => {
    // console.log(button.buttonText);
    // todo: add logic when I start next tasks
    if (button.buttonId === 'all-filter') {
      dispatch(getMoviesCreator());
    }
  };

  const buttons: FilterButtonInfo[] = [
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
