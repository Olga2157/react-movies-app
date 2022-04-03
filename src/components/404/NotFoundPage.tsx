import React, { FC } from 'react';
import { Header, Footer, Heading, AppButton } from '../shared';
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => {
  const goBack = () => {
    // todo: add logic
  };

  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-column align-items-center justify-content-between not-found-div">
          <Heading headingText="Page Not Found" />
          <div className="no-style">404</div>
          <AppButton buttonId="back-btn" buttonText="Go back to Home" listener={goBack} />
        </div>
      </main>
      <Footer />
    </>
  );
};
