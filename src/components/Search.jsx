import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import {
  FormControl, FormGroup, Button,
} from 'react-bootstrap';
import * as Yup from 'yup';
import getData from '../slices/asyncActions';
import getUrl from '../utils';
import Error from './Error.jsx';

const validationMessage = Yup.object().shape({
  text: Yup.string()
    .required('Введите текст'),
});

const Search = () => {
  const dispatch = useDispatch();
  const currentUrl = useSelector((state) => state.url);
  const handleSubmit = async ({ text }, { resetForm, setErrors }) => {
    try {
      const url = getUrl(text);
      await dispatch(getData(url));
      resetForm();
    } catch (e) {
      await dispatch(getData(currentUrl));
      setErrors({ text: 'Город не найден' });
    }
  };

  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={validationMessage}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

          <Field name="text">
            {({ field }) => (
              <FormGroup controlId="text" className="mt-3">
                <div className="d-flex flex-row">
                  <FormControl
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                  />
                  <Button variant="secondary" type="submit" className="ml-1" disabled={isSubmitting}>
                    Найти
                  </Button>

                </div>
              </FormGroup>
            )}
          </Field>
          <ErrorMessage component={Error} name="text" />
        </Form>
      )}
    </Formik>
  );
};

export default Search;
