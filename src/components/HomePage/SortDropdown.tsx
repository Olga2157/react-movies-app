import React, { FC } from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { SortName } from '../../model/enums/SortName';

export const SortDropdown: FC = function () {
  const defaultSortName = 'Sort';
  const [dropdownOpen, setOpen] = React.useState(false);
  const [SortNameValue, setSortName] = React.useState(defaultSortName);

  const toggle = () => setOpen(!dropdownOpen);

  const sortOptions = [SortName.HIGHEST_RATING, SortName.NEWEST];

  const items = [];
  for (let i = 0; i < sortOptions.length; i++) {
    items.push(<DropdownItem>
      {sortOptions[i]}
    </DropdownItem>);
    if (i < sortOptions.length - 1) {
      items.push(<DropdownItem divider />);
    }
  }

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
