import React, { FC, useState } from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { useToggle } from 'react-use';
import { useDispatch } from 'react-redux';
import { SortName } from '../../model/enums/SortName';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import {SortFields} from "../../model/enums/SortFields";

export const SortDropdown: FC = () => {
  const dispatch = useDispatch();
  const defaultSortName = 'Sort';
  const [dropdownOpen, toggleDropdown] = useToggle(false);
  const [SortNameValue, setSortName] = useState(defaultSortName);

  const sortOptions = [SortName.HIGHEST_RATING, SortName.NEWEST];

  const items = sortOptions.map(
    (option, id) => (
      <div key={option}>
        <DropdownItem>
          {option}
        </DropdownItem>
        {id !== sortOptions.length - 1 ? <DropdownItem divider /> : ''}
      </div>
    ),
  );

  const chooseSortName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    e.stopPropagation();
    if (button.textContent) {
      setSortName(button.textContent);
      let sortField = '';
      if (button.textContent === SortName.HIGHEST_RATING) {
        sortField = SortFields.VOTE_AVERAGE;
      } else if (button.textContent === SortName.NEWEST) {
        sortField = SortFields.RELEASE_DATE;
      }
      dispatch(getMoviesCreator(1, 8,
        {
          'sortBy': sortField
        }
      ));
    } else {
      setSortName(defaultSortName);
    }
    toggleDropdown();
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="md">
      <DropdownToggle caret>{SortNameValue}</DropdownToggle>
      <DropdownMenu onClickCapture={chooseSortName}>
        {items}
      </DropdownMenu>
    </ButtonDropdown>
  );
};
