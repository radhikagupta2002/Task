import * as Yup from "yup";

export const LoginSchema = Yup.object({
  Email: Yup.string().email().required("Please enter a valid e-mail."),
  Password: Yup.string()
    .min(6)
    .max(25)
    .required("Please enter atleast 6 characters."),
});
