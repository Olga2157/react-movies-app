import React, { FC, useState } from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { useToggle } from 'react-use';
import { SortName } from '../../model/enums/SortName';

export const SortDropdown: FC = () => {
  const defaultSortName = 'Sort';
  const [dropdownOpen, toggle] = useToggle(false);
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
    )
  )

  const chooseSortName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    e.stopPropagation();
    if (button.textContent) {
      setSortName(button.textContent);
      if (button.textContent === SortName.HIGHEST_RATING) {
        // todo: add logic in next tasks
      } else if (button.textContent === SortName.NEWEST) {
        // todo: add logic in next tasks
      }
    } else {
      setSortName(defaultSortName);
    }
    toggle();
  };

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} size="md">
      <DropdownToggle caret>{SortNameValue}</DropdownToggle>
      <DropdownMenu onClickCapture={chooseSortName}>
        {items}
      </DropdownMenu>
    </ButtonDropdown>
  );
};
