import React, { createContext, useContext } from "react";
import { IAuth, useAuth } from "@/hooks/useAuth";


const AuthContext = createContext<IAuth | null>(null)

type Props = {
    children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {

    const auth = useAuth()

    return (
        <AuthContext.Provider
            value={auth}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContextContext() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(
            'useAuthContextContext must be used within a AuthContext'
        )
    }
    return context
}

export { AuthProvider, useAuthContextContext }