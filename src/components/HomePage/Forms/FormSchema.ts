import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  title: Yup.string()
      .required('Required'),
  releaseDate: Yup.string(),
  posterPath: Yup.string()
      .required('Required'),
  overview: Yup.string(),
  runtime: Yup.number()
      .min(0, 'Too small!')
      .required('Required'),
  genres: Yup.array()
      .min(1, 'Choose at least 1 genre')
      .required('Required'),
});
