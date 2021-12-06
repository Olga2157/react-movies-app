import * as React from 'react'
import { MouseEventHandler } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

type SortByButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}
type SortByButtonState = {}

class SortByButton extends React.Component<SortByButtonProps, SortByButtonState> {

  render() {

    return (
      // <Button id={this.props.buttonId} color="dark" onClick={this.props.listener} className="text-uppercase btn btn-primary">{this.props.buttonText}</Button>
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

export default SortByButton
