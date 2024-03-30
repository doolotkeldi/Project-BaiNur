import React from 'react'
import { Formik, Form, Field } from "formik";
import { signupValidation } from "../Registration/signupValidation";


const initialValues = {
    name: "",
    surname: "",
    email: "",
    number: "",
    password: "",
  };

function Login() {

  return (
    
    <section>
      <div className="forms">
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors }) => (
            <Form className="form">
              <Field type="text" placeholder="имя" name="name" />
              <br />
              {errors.name && (
                <small style={{ color: "red", textAlign:"start" }}>{errors.name}</small>
              )}
              <br />
              <Field type="surname" placeholder="фамилия" name="surname" />
              <br />
              {errors.surname && (
                <small style={{ color: "red" }}>{errors.surname}</small>
              )}
              <br />
              <Field type="email" placeholder="E-mail" name="email" />
              <br />
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email}</small>
              )}
              <br />
              <Field type="telephone" placeholder="+996" name="number" />
              <br />
              {errors.number && (
                <small style={{ color: "red" }}>{errors.number}</small>
              )}
              <br />
              <Field type="password" placeholder="пароль" name="password" />
              <br />
              {errors.password && (
                <small style={{ color: "red" }}>{errors.password}</small>
              )}
              <br />
              <button type="submit">Регистрация</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Login