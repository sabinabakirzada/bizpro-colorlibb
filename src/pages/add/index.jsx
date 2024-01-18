import React from "react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "./schema/shema";
import axios from "axios";
import "./index.scss";
const Add = () => {
  return (
    <div className="add">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BizPro || Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="This is Add Page" />
      </Helmet>

      <Formik
        initialValues={{
          companyName: "",
          contactName: "",
          contactTitle: "",
          postalCode: 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          let obj = {
            companyName: values.companyName,
            contactName: values.contactName,
            contactTitle: values.contactTitle,
            address: {
              postalCode: values.postalCode,
            },
          };
          try {
            await axios.post("https://northwind.vercel.app/api/suppliers", obj);
            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="input">
            <Field
              className="field"
              type="text"
              name="companyName"
              placeholder="Company Name"
            />
            {errors.companyName && touched.companyName && (
              <p>{errors.companyName}</p>
            )}
            <Field
              className="field"
              type="text"
              name="contactName"
              placeholder="Contact Name"
            />
            {errors.contactName && touched.contactName && (
              <p>{errors.contactName}</p>
            )}

            <Field
              className="field"
              type="text"
              name="contactTitle"
              placeholder="Contact Title"
            />
            {errors.contactTitle && touched.contactTitle && (
              <p>{errors.contactTitle}</p>
            )}

            <Field
              className="field"
              type="number"
              name="postalCode"
              placeholder="Postal Code"
            />
            {errors.postalCode && touched.postalCode && (
              <p>{errors.postalCode}</p>
            )}

            <button
              className="field field-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
