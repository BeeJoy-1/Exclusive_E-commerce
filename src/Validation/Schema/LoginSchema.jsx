import React from "react";
import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;
const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

export const LoginSchema = Yup.object({
  emailOrphone: Yup.string()
    .matches(mailFormat, "Invalid email address")
    .required("Email Missing !!"),

  password: Yup.string()
    .min(8, "password Length can be 8 chractar")
    .max(14, "Passowrd length can over 14")
    .matches(
      passwordFormat,
      "password includes 1 special character number Uppercase and lowercase"
    )
    .required("Password Required"),
});

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .matches(mailFormat, "Invalid email address")
    .required("Email is Required"),
  phone: Yup.string()
    .required("Phone Number is Required")
    .matches(bdPhoneNumberRegex, "Invalid Phone Number"),
  message: Yup.string().required("Message is Required"),
});
