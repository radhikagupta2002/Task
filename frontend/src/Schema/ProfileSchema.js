import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const ProfileSchema = Yup.object({
 
  FirstName:Yup.string().required("Please enter your current password"),
  LastName: Yup.string(),
  Email: Yup.string().email().required("Please enter a valid email"),
  PhoneNo: Yup.string()
  .required("Please enter a valid phone no.")
  .matches(phoneRegExp, "Phone number is not valid")
  .min(10, "too short")
  .max(10, "too long"),
  file: Yup.mixed()
  .nullable()
  .required("Please upload a profile pic.")
  .test(
    "FILE_SIZE",
    "Uploaded file is too big.",
    (value) => value && value.size <= 2000000
  )
  .test(
    "FILE_TYPE",
    "Uploaded file has an unsupported format.",
    (value) =>
      value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
  )

});

