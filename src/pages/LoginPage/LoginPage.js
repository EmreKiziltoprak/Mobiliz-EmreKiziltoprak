import React from 'react'
import LoginForm from '../../features/authentication/components/LoginForm';
import { useDoLoginMutation } from '../../store/api/apiSlice';

function LoginPage() {


  return (
    <LoginForm login={useDoLoginMutation}/>
  )
}

export default LoginPage