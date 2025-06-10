import { TWatchlistActions, WatchlistActionTypes } from "./actions";

export type TCategory = 'stock' | 'crypto' | 'forex';
export type TSortBy = 'name' | 'price' | 'change'
export type TSortOrder = 'asc' | 'desc'

export interface Instrument {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap?: string;
  volume?: string;
  high24h?: number;
  low24h?: number;
  category: TCategory;
  isFavorite: boolean;
  isInWatchlist: boolean;
  historicalData: number[];
}

export interface IWatchList {
  instruments: Instrument[];
  favorites: string[];
  watchlist: string[];
  searchResults: Instrument[];
  isLoading: boolean;
  error: string | null;
  sortBy: TSortBy;
  sortOrder: TSortOrder;
  visbleDetail: boolean
  instrumentDetail: Instrument | null
}

export interface IWatchListActionsParams {
    instrumentId: string
}

export interface IOpenDetailActionsParams {
    instrument: Instrument
}

export interface IWatchListSearchParams {
  query: string;
}

export interface IWatchListSortParams {
  sortBy: TSortBy;
}

export interface ILoadPersistedDataParams{
    parsedData: IWatchList
}

// Mock data for instruments
const generateHistoricalData = (basePrice: number) => {
  const data = [];
  let currentPrice = basePrice;
  for (let i = 0; i < 30; i++) {
    currentPrice += (Math.random() - 0.5) * basePrice * 0.05;
    data.push(Math.max(0, currentPrice));
  }
  return data;
};

const initialInstruments: Instrument[] = [
  {
    id: '1',
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    price: 45678.90,
    change: 1234.56,
    changePercent: 2.78,
    marketCap: '$875.2B',
    volume: '$32.1B',
    category: 'crypto',
    isFavorite: false,
    isInWatchlist: true,
    historicalData: generateHistoricalData(45678.90),
    high24h: 46890.12,
    low24h: 44123.45,
  },
  {
    id: '2',
    symbol: 'ETH/USD',
    name: 'Ethereum',
    price: 2456.32,
    change: -89.45,
    changePercent: -3.52,
    marketCap: '$295.1B',
    volume: '$15.8B',
    category: 'crypto',
    isFavorite: true,
    isInWatchlist: true,
    historicalData: generateHistoricalData(2456.32),
    high24h: 2567.89,
    low24h: 2389.12,
  },
  {
    id: '3',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 178.25,
    change: 2.15,
    changePercent: 1.22,
    marketCap: '$2.8T',
    volume: '$54.2M',
    category: 'stock',
    isFavorite: false,
    isInWatchlist: true,
    historicalData: generateHistoricalData(178.25),
    high24h: 179.45,
    low24h: 175.80,
  },
  {
    id: '4',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.58,
    change: -1.89,
    changePercent: -1.31,
    marketCap: '$1.8T',
    volume: '$28.7M',
    category: 'stock',
    isFavorite: true,
    isInWatchlist: true,
    historicalData: generateHistoricalData(142.58),
    high24h: 145.12,
    low24h: 141.23,
  },
  {
    id: '5',
    symbol: 'EUR/USD',
    name: 'Euro to US Dollar',
    price: 1.0845,
    change: 0.0012,
    changePercent: 0.11,
    volume: '$1.2T',
    category: 'forex',
    isFavorite: false,
    isInWatchlist: true,
    historicalData: generateHistoricalData(1.0845),
    high24h: 1.0867,
    low24h: 1.0823,
  },
  {
    id: '6',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 248.91,
    change: 12.34,
    changePercent: 5.21,
    marketCap: '$785.4B',
    volume: '$89.1M',
    category: 'stock',
    isFavorite: false,
    isInWatchlist: true,
    historicalData: generateHistoricalData(248.91),
    high24h: 252.15,
    low24h: 235.67,
  },
  {
    id: '7',
    symbol: 'ADA/USD',
    name: 'Cardano',
    price: 0.4523,
    change: 0.0234,
    changePercent: 5.45,
    marketCap: '$15.8B',
    volume: '$567M',
    category: 'crypto',
    isFavorite: true,
    isInWatchlist: true,
    historicalData: generateHistoricalData(0.4523),
    high24h: 0.4678,
    low24h: 0.4289,
  },
  {
    id: '8',
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.85,
    change: -4.22,
    changePercent: -1.10,
    marketCap: '$2.8T',
    volume: '$42.3M',
    category: 'stock',
    isFavorite: false,
    isInWatchlist: true,
    historicalData: generateHistoricalData(378.85),
    high24h: 382.45,
    low24h: 375.12,
  },
];

// Additional instruments for search
const allInstruments: Instrument[] = [
  ...initialInstruments,
  {
    id: '9',
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 492.18,
    change: 15.67,
    changePercent: 3.29,
    marketCap: '$1.2T',
    volume: '$67.8M',
    category: 'stock',
    isFavorite: false,
    isInWatchlist: false,
    historicalData: generateHistoricalData(492.18),
    high24h: 498.23,
    low24h: 485.34,
  },
  {
    id: '10',
    symbol: 'SOL/USD',
    name: 'Solana',
    price: 98.76,
    change: -2.15,
    changePercent: -2.13,
    marketCap: '$44.2B',
    volume: '$2.1B',
    category: 'crypto',
    isFavorite: false,
    isInWatchlist: false,
    historicalData: generateHistoricalData(98.76),
    high24h: 102.34,
    low24h: 96.45,
  },
];

export const INITIAL_STATE_WATCHLIST: IWatchList = {
  instruments: initialInstruments,
  favorites: initialInstruments.filter(i => i.isFavorite).map(i => i.id),
  watchlist: initialInstruments.filter(i => i.isInWatchlist).map(i => i.id),
  searchResults: [],
  isLoading: false,
  error: null,
  sortBy: 'name',
  sortOrder: 'asc',
  visbleDetail: false,
  instrumentDetail: null
};

export const watchListReducer = (state: IWatchList, action: TWatchlistActions) => {
    switch (action.type) {
        case WatchlistActionTypes.TOGGLE_FAVORITE:{
            const { instrumentId } = action.payload;

            const updatedInstruments = state.instruments.map(instrument =>
                instrument.id === instrumentId
                ? { ...instrument, isFavorite: !instrument.isFavorite }
                : instrument
            );

            const newFavorites = updatedInstruments
                                .filter(i => i.isFavorite)
                                .map(i => i.id);

            return {
                ...state,
                instruments: updatedInstruments,
                favorites: newFavorites
            };
        }
        case WatchlistActionTypes.ADD_TO_WATCHLIST:{
            const { instrumentId } = action.payload;
            const instrumentToAdd = allInstruments.find(i => i.id === instrumentId);

            if (!instrumentToAdd) return state;

            const existingInstrument = state.instruments.find(i => i.id === instrumentId);
      
            let updatedInstruments;
            if (existingInstrument) {
                updatedInstruments = state.instruments.map(instrument =>
                instrument.id === instrumentId
                    ? { ...instrument, isInWatchlist: true }
                    : instrument
                );
            } else {
                updatedInstruments = [...state.instruments, { ...instrumentToAdd, isInWatchlist: true }];
            }

            const newWatchlist = updatedInstruments
                .filter(i => i.isInWatchlist)
                .map(i => i.id);
            
            return {
                ...state,
                instruments: updatedInstruments,
                watchlist: newWatchlist,
            };
        }
        case WatchlistActionTypes.REMOVE_FROM_WATCHLIST:{
            const { instrumentId } = action.payload;

             const updatedInstruments = state.instruments.map(instrument =>
                    instrument.id === instrumentId
                    ? { ...instrument, isInWatchlist: false }
                    : instrument
                );

            const newWatchlist = updatedInstruments
                .filter(i => i.isInWatchlist)
                .map(i => i.id);

             return {
                ...state,
                instruments: updatedInstruments,
                watchlist: newWatchlist,
            };
        }
        case WatchlistActionTypes.UPDATE_PRICES:{
            const updatedInstruments = state.instruments.map(instrument => {
                const priceChange = (Math.random() - 0.5) * instrument.price * 0.02;
                const newPrice = Math.max(0, instrument.price + priceChange);
                const change = newPrice - instrument.price;
                const changePercent = (change / instrument.price) * 100;
                 return {
                    ...instrument,
                    price: Number(newPrice.toFixed(instrument.category === 'forex' ? 4 : 2)),
                    change: Number(change.toFixed(2)),
                    changePercent: Number(changePercent.toFixed(2)),
                } as Instrument
            })

            return {
                ...state,
                instruments: updatedInstruments,
            };
        }
        case WatchlistActionTypes.SEARCH_INSTRUMENTS:{
            const { query } = action.payload;
            if (!query.trim()) {
                return {
                    ...state,
                    searchResults: [],
                };
            }

            const filtered = allInstruments.filter(instrument =>
                instrument.name.toLowerCase().includes(query.toLowerCase()) ||
                instrument.symbol.toLowerCase().includes(query.toLowerCase())
            );

            return {
                    ...state,
                    searchResults: filtered,
                };
        }
        case WatchlistActionTypes.SET_SORT_BY:{
            const { sortBy } = action.payload;
            return {
                ...state,
                sortBy,
            };
        }
        case WatchlistActionTypes.TOGGLE_SORT_ORDER:{
            const { sortOrder } = state;
            const toogledSortOrder : TSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            return {
                ...state,
                sortOrder: toogledSortOrder
            };
        }
        case WatchlistActionTypes.LOAD_PERSISTED_DATA:{
            const { parsedData: {favorites, watchlist} } = action.payload;
            const updatedInstruments = state.instruments.map(instrument => ({
                    ...instrument,
                    isFavorite: favorites.includes(instrument.id),
                    isInWatchlist: watchlist.includes(instrument.id),
                } as Instrument))
            return {
                ...state,
                favorites,
                watchlist,
                instruments: updatedInstruments ,
            };
        }
        case WatchlistActionTypes.OPEN_DETAIL:{
            const { instrument } = action.payload;
            return {
                ...state,
                visbleDetail: true,
                instrumentDetail: instrument
            };
        }
        case WatchlistActionTypes.CLOSE_DETAIL:{
            return {
                ...state,
                visbleDetail: false,
                instrumentDetail: null
            };
        }
        default:
            return state
    }
}