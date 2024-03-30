import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Singin.css"

function Singin() {
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchemaSingIn = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <div className="formsSingIn">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSingIn}
      >
        {(props) => (
          <Form className="SingIn">
            <Field
              label="Username"
              name="username"
              placeholder="Enter username"
              required
              helpertext={<ErrorMessage name="username" />}
            />
            <Field
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              required
              helpertext={<ErrorMessage name="password" />}
            />
            <Field name="remember" label="Remember me" />
            <button type="submit" disabled={props.isSubmitting} >
              {props.isSubmitting ? "Loading" : "Sign in"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Singin;
