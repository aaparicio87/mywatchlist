import React from "react"
import { mmkvDecryptedStorage } from "@constants/mmkv"

export interface IAuth {
    isLoggedIn: boolean,
    handleLogin: () => void,
    handleLogout: () => void,
}

export const useAuth = () => {
    const login = mmkvDecryptedStorage.getBoolean('@isLoggedIn') ?? false
    const [isLoggedIn, setIsLoggedIn] = React.useState(login)


    const handleLogin = () => {
        setIsLoggedIn(true)
        mmkvDecryptedStorage.set('@isLoggedIn', true)
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