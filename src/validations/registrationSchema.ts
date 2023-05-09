import * as yup from "yup"

const registrationSchema = yup.object({
    fullname: yup
        .string()
        .required("fullname cannot be empty")
        .min(6, "fullname must be at least 6 characters"),
    email: yup.string().email().required("email cannot be empty"),
    phone: yup
        .string()
        .required("phone cannot be empty"),
    message: yup.string().required("message cannot be empty")
})

export type RegistrationFormData = yup.InferType<typeof registrationSchema>

export default registrationSchema