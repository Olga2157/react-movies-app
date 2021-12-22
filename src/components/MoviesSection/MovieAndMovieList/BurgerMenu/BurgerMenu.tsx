import React, { FC, useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { MovieInfo } from '../../../../types';
import { DeleteMovie } from '../../../HomePage/Modals/DeleteMovie';
import { EditMovie } from '../../../HomePage/Modals/EditMovie';
import './BurgerMenu.scss';

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
