import React from 'react'
import { Button, Input, MainForm } from './styles'
import { useForm } from 'react-hook-form';

const Form = () => {
  const { handleSubmit, register } = useForm();

  const handleSubmitData = (data) => {
    console.log(data)
  }

  return (
    <>
      <MainForm onSubmit={handleSubmit(handleSubmitData)}>
        <h1>Ricardo&#39;s Oficina</h1>
        <Input type='text' { ...register('name')} placeholder='Nome'/>
        <Input type='email' { ...register('email')} placeholder='Email'/>
        <Button type='submit'>Gerar</Button>
      </MainForm>
    </>
  )
}

export default Form