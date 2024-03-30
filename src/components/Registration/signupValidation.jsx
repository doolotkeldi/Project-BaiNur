import React from 'react'
import * as  Yup from 'yup'

export const signupValidation = Yup.object({
    name: Yup.string().min(3).required('please enter name'),
    surname: Yup.string().min(7).required('please enter surname'),
    number: Yup.number().nullable().required('please eneter your phone number'),
    email: Yup.string().email("please enter Valid email").required('please enter eamil'),
    password: Yup.string().min(5).required('please enter password'),
})