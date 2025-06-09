import {
  ILoadPersistedDataParams,
  IWatchListActionsParams,
  IWatchListSearchParams,
  IWatchListSortParams
} from "./watchListReducer";

export enum WatchlistActionTypes {
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST',
  REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST',
  UPDATE_PRICES = 'UPDATE_PRICES',
  SEARCH_INSTRUMENTS = 'SEARCH_INSTRUMENTS',
  SET_SORT_BY = 'SET_SORT_BY',
  TOGGLE_SORT_ORDER = 'TOGGLE_SORT_ORDER',
  LOAD_PERSISTED_DATA = 'LOAD_PERSISTED_DATA',
  PERSIST_DATA = 'PERSIST_DATA',
}

interface IToggleFavoriteAction {
  type: WatchlistActionTypes.TOGGLE_FAVORITE,
  payload: IWatchListActionsParams
}

interface IAddToWatchlistAction {
  type: WatchlistActionTypes.ADD_TO_WATCHLIST,
  payload: IWatchListActionsParams;
}

interface IRemoveFromWatchlistAction {
  type: WatchlistActionTypes.REMOVE_FROM_WATCHLIST,
  payload: IWatchListActionsParams;
}

interface IUpdatePricesAction {
  type: WatchlistActionTypes.UPDATE_PRICES,
}

interface ISearchInstrumentsAction {
  type: WatchlistActionTypes.SEARCH_INSTRUMENTS,
  payload: IWatchListSearchParams;
}

interface ISetSortByAction {
  type: WatchlistActionTypes.SET_SORT_BY,
  payload: IWatchListSortParams;
}

interface IToggleSortOrderAction {
  type: WatchlistActionTypes.TOGGLE_SORT_ORDER,
}

interface ILoadPersistedDataAction {
  type: WatchlistActionTypes.LOAD_PERSISTED_DATA,
  payload: ILoadPersistedDataParams
}


export type TWatchlistActions = IToggleFavoriteAction
  | IAddToWatchlistAction
  | IRemoveFromWatchlistAction
  | IUpdatePricesAction
  | ISearchInstrumentsAction
  | ISetSortByAction
  | IToggleSortOrderAction
  | ILoadPersistedDataAction
