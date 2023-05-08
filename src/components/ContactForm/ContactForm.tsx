import React from 'react'
import { TextField, Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import registrationSchema, { RegistrationFormData } from '../../validations/registrationSchema';
import './ContactForm.scss'

const ContactForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema)
})
const onSubmit = (data: RegistrationFormData) => {
    console.log(data)
}
return (
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
    <Controller
        control={control}
        name="username"
        render={({ field: { onChange } }) => (
            <TextField
                className='contact-form__input'
                placeholder="Username"
                label="Username"
                onChange={onChange}
            />
        )}
    />
    <div>{errors.username && (<p>{errors.username.message}</p>)}</div>
    <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
            <TextField
                className='contact-form__input'
                placeholder="alia@mail.com"
                label="Enter your email"
                type="email"
                onChange={onChange}
            />
        )}
    />
    <Controller
        control={control}
        name="phone"
        render={({ field: { onChange } }) => (
            <TextField
                className='contact-form__input'
                placeholder="08354858"
                label="Enter your phone"
                onChange={onChange}
            />
        )}
    />
    <Controller
        control={control}
        name="message"
        render={({ field: { onChange } }) => (
            <TextField
                className='contact-form__input'
                label="Enter your message"
                type="text"
                onChange={onChange}
            />
        )}
    />
    <Button className='contact-form__button' type="submit">SEND</Button>
    </form>
  )
}

export default ContactForm