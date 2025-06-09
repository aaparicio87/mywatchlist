import React from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";

import { useAuthContextContext } from "@/contexts/AuthContext/AuthContext";
import { LoginScreenProps } from "@/navigation/types.navigation";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";


interface ILogin {
    email: string,
    password: string,
}

const INITIAL_STATE: ILogin = {
  email: 'user@test.com',
  password: 'Password'
}

const LOGIN_VALIDATION_SCHEMA = z.object({
  email: z.email({ message: 'Invalid email address' }),

  password: z.string()
    .min(1,'Password is required')
})

export const useLogin = () => {
  const { navigation } = useNavigation<LoginScreenProps>()
  const { handleLogin } = useAuthContextContext() 
  const [displayPassword, setDisplayPassword] = React.useState(true)

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isLoading }
  } = useForm<ILogin>({
    defaultValues: { ...INITIAL_STATE },
    resolver: zodResolver(LOGIN_VALIDATION_SCHEMA)
  })

  React.useEffect(() => {
    if (!isSubmitSuccessful) { return }
    reset(INITIAL_STATE)
  }, [isSubmitSuccessful])

  const handleDisplayPassword = () => setDisplayPassword((prevState) => !prevState)

  const onLoginSubmit = handleSubmit(async() => {
    const data = getValues()
    try {
        const isLoggedIn = await handleLogin(data)
        if(isLoggedIn) {
            navigation.navigate('BottomTab')
        }else {
         Alert.alert('Error', 'Invalid credentials. Please try again.');
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
    displayPassword,
    isLoading
  }

}