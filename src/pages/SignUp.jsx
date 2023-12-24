import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
// import { signUp } from '../api/users';
import { useNavigate } from 'react-router-dom';
// import { formatError } from '../utils';

const signUpSchema = z.object({
  name: z.string(),
  username: z.string(),
  biography: z.string(),
  location: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  return (
    <>
      <h1 className="fs-4 my-2 fw-bolder">Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {}}
        validationSchema={toFormikValidationSchema(signUpSchema)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={
                  touched.username && errors.username ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            {/* <Form.Group>
              <Form.Label>Profile Photo</Form.Label>
              <Form.Control
                type="file"
                name="profilePhoto"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target?.files) {
                    const file = e.target.files[0];
                    setFieldValue('profilePhoto', file);
                  }
                }}
              />
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? 'is-invalid' : ''}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  touched.password && errors.password ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="rounded-pill text-white px-4"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
