import * as React from 'react';
import { Button, Form } from 'reactstrap';
import { MovieInfo } from '../../../types';

const DeleteMovieForm: React.FC<{ movieInfo: MovieInfo }> = function (movieInfo) {
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

export default DeleteMovieForm;
