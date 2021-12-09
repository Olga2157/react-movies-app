import * as React from 'react';
import { MouseEventHandler } from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';

type SortByButtonProps = {
  listener?: MouseEventHandler<HTMLButtonElement>
}
type SortByButtonState = {}

class SortByButton extends React.Component<SortByButtonProps, SortByButtonState> {
  render() {
    return (
      <div className="row-flex">
        <ButtonDropdown id="sort-filter"
          toggle={function sortFunction() { }}
        >
          <DropdownToggle caret>
            Sort
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem divider>
              Highest Rating
            </DropdownItem>
            <DropdownItem divider>
              Newest
            </DropdownItem>
            <DropdownItem divider>
              Top Rated
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

// todo: add sortFunction when I start next tasks

export default SortByButton;
