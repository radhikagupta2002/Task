import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  FirstName: Yup.string().required("Please enter your name"),
  LastName: Yup.string(),
  Email: Yup.string().email().required("Please enter a valid e-mail."),
  Password: Yup.string()
    .min(6)
    .max(25)
    .required("Please enter atleast 6 characters."),
  PhoneNo: Yup.number().required("Please enter a valid phone no."),
});
