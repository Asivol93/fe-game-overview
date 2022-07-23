import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

function SignIn() {
  type Inputs = {
    username: String
    password: any
    email: any
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input></input>
    </form>
  )
}

export default SignIn
