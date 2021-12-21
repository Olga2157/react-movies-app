import React, { FC, useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { MovieInfo } from '../../../types';
import { DeleteMovie } from '../Modals/DeleteMovie';
import { EditMovie } from '../Modals/EditMovie';
import './BurgerMenu.css';

type BurgerMenuProps = {
  movieInfo: MovieInfo
};

export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  const { movieInfo } = props;
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  // todo: update logic in the nest tasks

  return (
    <div className="burger-menu-movie">
      <Navbar color="light" light>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse navbar isOpen={isOpen} className="mt-2">
          <Nav navbar>
            <NavItem>
              <EditMovie movieInfo={movieInfo} />
            </NavItem>
            <NavItem>
              <DeleteMovie movieInfo={movieInfo} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
