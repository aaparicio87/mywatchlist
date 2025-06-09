import React from "react"
import { mmkvDecryptedStorage } from "@constants/mmkv"

export interface IAuth {
    isLoggedIn: boolean,
    handleLogin: ({ email, password }: ILogin) => Promise<boolean>
    handleLogout: () => void,
}

interface User {
  email: string;
  password: string;
}

interface ILogin {
    email: string,
    password: string,
}

// Mock user for demo purposes
const mockUser: User = {
  email:'user@test.com',
  password: 'Password',
};

export const useAuth = () => {
    const login = mmkvDecryptedStorage.getBoolean('@isLoggedIn') ?? false
    const [isLoggedIn, setIsLoggedIn] = React.useState(login)


    const handleLogin = async ({email, password}: ILogin) => {

        try { 
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            
            if(email === mockUser.email && password === mockUser.password) {
                mmkvDecryptedStorage.set('@isLoggedIn', true)
                setIsLoggedIn(true)
                return true
            }
            return false

        } catch (error) {
            console.error(error)
            return false
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        mmkvDecryptedStorage.delete('@isLoggedIn')
    }


    return {
        isLoggedIn,
        handleLogin,
        handleLogout
    }
}