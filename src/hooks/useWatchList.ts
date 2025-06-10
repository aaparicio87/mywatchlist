import React from "react";
import { mmkvDecryptedStorage, mmkvEncryptedStorage } from "@constants/mmkv";

import { 
    INITIAL_STATE_WATCHLIST, 
    Instrument, 
    IWatchList, 
    TSortBy, 
    WatchlistActionTypes, 
    watchListReducer 
} from "@reducers/watchList";


export interface IUseWatchList {
    toggleFavorite: (instrumentId: string) => void;
    addToWatchlist: (instrumentId: string) => void;
    removeFromWatchlist: (instrumentId: string) => void;
    updatePrices: () => void;
    searchInstruments: (query: string) => void;
    setSortBy: (sortBy: TSortBy) => void;
    toggleSortOrder: () => void;
    loadPersistedData: () => void;
    persistData: () => void;
    watchList: IWatchList
    openDetail: (instrument: Instrument) => void
    handleCloseDetail: () => void
}

export const useWatchList = ():IUseWatchList => {
    const [watchList, dispatch] = React.useReducer(watchListReducer,INITIAL_STATE_WATCHLIST);

    const toggleFavorite = (instrumentId: string) => {
        dispatch({type: WatchlistActionTypes.TOGGLE_FAVORITE, payload: {instrumentId}});
    };
    const addToWatchlist = (instrumentId: string) => {
        dispatch({type: WatchlistActionTypes.ADD_TO_WATCHLIST, payload: {instrumentId}});
    };
    const removeFromWatchlist = (instrumentId: string) => {
        dispatch({type: WatchlistActionTypes.REMOVE_FROM_WATCHLIST, payload: {instrumentId}});
    };
    const updatePrices = () => {
        dispatch({type: WatchlistActionTypes.UPDATE_PRICES});
    };
    const searchInstruments = (query: string) => {
        dispatch({type: WatchlistActionTypes.SEARCH_INSTRUMENTS, payload: {query}});
    };
    const setSortBy = (sortBy: TSortBy) => {
        dispatch({type: WatchlistActionTypes.SET_SORT_BY, payload: {sortBy}});
    };
    const toggleSortOrder = () => {
        dispatch({type: WatchlistActionTypes.TOGGLE_SORT_ORDER});
    };
    const loadPersistedData = () => {
         const savedData = mmkvDecryptedStorage.getString('@watchlist');
         if (savedData) {
            const parsedData = JSON.parse(savedData) as IWatchList;
            dispatch({type: WatchlistActionTypes.LOAD_PERSISTED_DATA, payload: {parsedData}});
         }
    };
    const persistData = () => {
        mmkvEncryptedStorage.set('@watchlist', JSON.stringify(watchList));
    };

    const openDetail = (instrument: Instrument) => {
        dispatch({type: WatchlistActionTypes.OPEN_DETAIL, payload: {instrument}});
    };

    const handleCloseDetail = () => {
        dispatch({type: WatchlistActionTypes.CLOSE_DETAIL});
    }

    return {
        toggleFavorite,
        addToWatchlist,
        removeFromWatchlist,
        updatePrices,
        searchInstruments,
        setSortBy,
        toggleSortOrder,
        loadPersistedData,
        persistData,
        watchList,
        handleCloseDetail,
        openDetail
    }
}