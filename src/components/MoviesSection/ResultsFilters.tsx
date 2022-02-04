import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup } from 'reactstrap';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import { FilterButtonInfo } from '../../types';
import { FilterButton } from '../shared';

export const ResultsFilters: FC = () => {
  const dispatch = useDispatch();
  const filterClick = (button: FilterButtonInfo) => {
    const chosenButton = document.getElementById(button.buttonId) as HTMLButtonElement;
    chosenButton.parentElement?.childNodes.forEach(child => {
      const curButton = child as HTMLButtonElement;
      curButton.classList.remove('chosen');
    });
    chosenButton?.classList.add('chosen');
    dispatch(getMoviesCreator(0, 8,
      {
        'filter': button.buttonText
      }
    ));
  };

  const buttons: FilterButtonInfo[] = [
    { buttonId: 'all-filter', buttonText: 'All' },
    { buttonId: 'documentary-filter', buttonText: 'Documentary' },
    { buttonId: 'comedy-filter', buttonText: 'Comedy' },
    { buttonId: 'horror-filter', buttonText: 'Horror' },
    { buttonId: 'crime-filter', buttonText: 'Crime' },
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
