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

  sortOptions = ["Highest Rating", "Newest", "Top Rated"];

  render() {
    const items = [];
    for (let i = 0; i < this.sortOptions.length; i++) {
      items.push(<DropdownItem>
        {this.sortOptions[i]}
      </DropdownItem>);
      if (i < this.sortOptions.length - 1) {
        items.push(<DropdownItem divider />);
      }
    }

    return (
      <div className="row-flex">
        <ButtonDropdown id="sort-filter"
          // isOpen={true}
          toggle={function sortFunction() { }}
        >
          <DropdownToggle caret>
            Sort
          </DropdownToggle>
          <DropdownMenu>
            {this.sortOptions.map((option, id) => (
              <DropdownItem>
                {option}
              </DropdownItem>
            ))
            }
            {/* {items} */}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

// todo: add sortFunction when I start next tasks

export default SortByButton;
