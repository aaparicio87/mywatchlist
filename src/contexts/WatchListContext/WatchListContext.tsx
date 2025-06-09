import React, { createContext, useContext } from "react";
import { IUseWatchList, useWatchList } from "@hooks/useWatchList";


const WatchListContext = createContext<IUseWatchList | null>(null)

type Props = {
    children: React.ReactNode
}

const WatchListProvider = ({ children }: Props) => {
    const watchList = useWatchList()

    return (
        <WatchListContext.Provider
            value={watchList}
        >
            {children}
        </WatchListContext.Provider>
    )
}

function useWatchListContextContext() {
    const context = useContext(WatchListContext)
    if (!context) {
        throw new Error(
            'useWatchListContextContext must be used within a WatchListContext'
        )
    }
    return context
}

export { WatchListProvider, useWatchListContextContext }