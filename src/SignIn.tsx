import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Form, { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

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
    <form>
      <FormGroup>
        <FormLabel>Username</FormLabel>
        <FormControl type='input' placeholder='username...' />
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl type='email' placeholder='email@example.com...' />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl type='password' placeholder='password...' />
      </FormGroup>
      <Button variant='primary'>Sign In</Button>
    </form>
  )
}

export default SignIn
