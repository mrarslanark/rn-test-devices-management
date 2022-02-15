import * as Yup from "yup";

export const addDeviceValidation = Yup.object().shape({
  make: Yup.string().required("Device make is required"),
  model: Yup.string().required("Device model is required"),
  os: Yup.string().required("Device operating system is required"),
  owner: Yup.string().required("Device owner is required"),
  // createdAt: Yup.date().required(),
});
