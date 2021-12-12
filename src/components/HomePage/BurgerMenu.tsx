import React from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { MovieInfo } from '../../types';
import DeleteMovie from './Modals/DeleteMovie';
import EditMovie from './Modals/EditMovie';

type BurgerMenuProps = {
  movieInfo: MovieInfo
};
type BurgerMenuState = {
  isOpen: boolean;
};

class BurgerMenu extends React.Component<BurgerMenuProps, BurgerMenuState> {
  constructor(props: BurgerMenuProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // todo: update logic in the nest tasks

  render() {
    return (
      <div className="burger-menu-movie">
        <Navbar color="light" light>
          <NavbarToggler className="me-2" onClick={this.toggle} />
          <Collapse navbar isOpen={this.state.isOpen} className="mt-2">
            <Nav navbar>
              <NavItem>
                <EditMovie movieInfo={this.props.movieInfo} />
              </NavItem>
              <NavItem>
                <DeleteMovie movieInfo={this.props.movieInfo} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BurgerMenu;
