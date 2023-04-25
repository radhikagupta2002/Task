import * as Yup from "yup";


export const ChangePassword = Yup.object({
 
  CurrentPassword:Yup.string().min(6).max(25).required("Please enter your current password"),
  NewPassword: Yup.string()
    .min(6)
    .max(25)
    .required("Please enter atleast 6 characters."),
  ConfirmPassword: Yup.string()
    .required("Please re-enter your password ")
    .oneOf([Yup.ref("NewPassword"), null], "Password should match."),
});
