import * as React from 'react';
import { MouseEventHandler } from 'react';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';

type SortByButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}
type SortByButtonState = {}

class SortByButton extends React.Component<SortByButtonProps, SortByButtonState> {
  render() {
    return (
      <ButtonDropdown
        toggle={function sortFunction() { }}
      >
        <DropdownToggle caret>
          Choose
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            Release date
          </DropdownItem>
          <DropdownItem divider>
            Rating
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

// todo: add sortFunction when I start next tasks

export default SortByButton;
