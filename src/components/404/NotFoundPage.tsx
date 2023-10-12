import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Heading, AppButton } from '../shared';
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => {

  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-column align-items-center justify-content-between not-found-div">
          <Heading headingText="Page Not Found" />
          <div className="no-style">404</div>
          <Link to="/">
            <AppButton buttonId="back-btn" buttonText="Go back to Home" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};
