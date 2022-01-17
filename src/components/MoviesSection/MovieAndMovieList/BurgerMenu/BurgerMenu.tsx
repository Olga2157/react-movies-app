import React, { FC } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { useToggle } from 'react-use';
import { MovieInfoDetails } from '../../../../types';
import { DeleteMovie } from '../../../HomePage/Modals/DeleteMovie';
import './BurgerMenu.scss';
import { MovieModal } from '../../../HomePage/Modals/MovieModal';

type BurgerMenuProps = {
  movieInfo: MovieInfoDetails
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ movieInfo }) => {
  const [isOpen, toggleMenu] = useToggle(false);

  return (
    <div className="burger-menu-movie">
      <Navbar color="light" light>
        <NavbarToggler className="me-2" onClick={toggleMenu} />
        <Collapse navbar isOpen={isOpen} className="mt-2">
          <Nav navbar>
            <NavItem>
              <MovieModal newMovie={false} movieInfo={movieInfo} onClickCallBack={toggleMenu} />
            </NavItem>
            <NavItem>
              <DeleteMovie movieInfo={movieInfo} onClickCallBack={toggleMenu} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
