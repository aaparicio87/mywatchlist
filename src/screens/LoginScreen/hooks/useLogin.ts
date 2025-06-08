import React from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";

import { useAuthContextContext } from "@/contexts/AuthContext/AuthContext";


interface ILogin {
    email: string,
    password: string,
}

const INITIAL_STATE: ILogin = {
  email: '',
  password: ''
}

const LOGIN_VALIDATION_SCHEMA = z.object({
  email: z.email({ message: 'Invalid email address' }),

  password: z.string()
    .min(1,'Password is required')
})

export const useLogin = () => {

  const { handleLogin } = useAuthContextContext() 
  const [displayPassword, setDisplayPassword] = React.useState(true)

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ILogin>({
    defaultValues: { ...INITIAL_STATE },
    resolver: zodResolver(LOGIN_VALIDATION_SCHEMA)
  })

  React.useEffect(() => {
    if (!isSubmitSuccessful) { return }
    reset()
  }, [isSubmitSuccessful])

  const handleDisplayPassword = () => setDisplayPassword((prevState) => !prevState)

  const onLoginSubmit = handleSubmit(() => {
    const data = getValues()
    try {
        if(data.email === 'user_test@test.com' && data.password === 'Test123') {
            handleLogin()
        }
    
    } catch (error) {
        console.log(error)
    }
  })

  return {
    onLoginSubmit,
    control,
    errors,
    isSubmitting,
    handleDisplayPassword,
    displayPassword
  }

}