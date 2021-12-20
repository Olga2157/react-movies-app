import React, { FC } from 'react';
import { Button, Form } from 'reactstrap';
import { MovieInfo } from '../../../types';
// import './Form.css';

export const DeleteMovieForm: FC<{ movieInfo: MovieInfo }> = function () {
  // todo: add function for confirm button onclick
  // delete movie from db for id = {movieInfo.movieInfo.id.toString()}
  // update data in the next tasks with State and Redux

  return (
    <Form id="DeleteMovieFormId" className="text-right">
      <Button
        type="submit"
        color="danger"
        className="text-uppercase"
      >
        Confirm
      </Button>
    </Form>
  );
};
