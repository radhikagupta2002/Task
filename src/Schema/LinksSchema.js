import * as Yup from "yup";

export const LinkSchema = Yup.object({
  LinkedIn: Yup.string(),
  Twitter: Yup.string(),
  Facebook: Yup.string(),
  Instagram: Yup.string(),
  Website: Yup.string(),
  Github: Yup.string(),
});
