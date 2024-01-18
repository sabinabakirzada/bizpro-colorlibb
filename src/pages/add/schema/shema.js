import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Not Empty"),
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Not Empty"),
  contactTitle: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Not Empty"),
  postalCode: Yup.number()
    .min(20, "Too Short!")
    .max(500, "Too Long!")
    .required("Not Empty"),
});
