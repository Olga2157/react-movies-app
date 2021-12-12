import * as React from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { SortName } from '../../model/enums/SortName';

const SortDropdown = () => {
  const defaultSortName = 'Sort';
  const [dropdownOpen, setOpen] = React.useState(false);
  const [SortNameValue, setSortName] = React.useState(defaultSortName);

  const toggle = () => setOpen(!dropdownOpen);

  const chooseSortName = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement;
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
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} size="md">
      <DropdownToggle caret >{SortNameValue}</DropdownToggle>
      <DropdownMenu onClickCapture={chooseSortName}>
        <DropdownItem>
          {SortName.HIGHEST_RATING}
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
        {SortName.NEWEST}
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default SortDropdown
