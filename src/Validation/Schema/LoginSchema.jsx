import React from "react";
import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
// const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

export const LoginSchema = Yup.object({
  emailOrphone: Yup.string()
    .matches(mailFormat, "Invalid email address")
    .required("Email Missing !!"),

  password: Yup.string()
    .min(8, "password Length can be 8 chractar")
    .max(14, "Passowrd length can over 14")
    .matches(
      passwordFormat,
      "password inclues 1 spceacila character number Uppercase and lowecase"
    )
    .required("Password Required"),
});
