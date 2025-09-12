import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { Product } from '../../(app)/[locale]/products/page'

// interface
interface IState {
  menu: boolean
  favoriteProducts: Product[]
}
interface IStore extends IState {
  handleGlobalStore: (value: Partial<IState>) => void
  addFavorite: (product: Product) => void
}

const initialState: IState = {
  menu: false,
  favoriteProducts: [],
}

// store
export const useGlobalStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        menu: false,
        handleGlobalStore: (value: Partial<IState>) => set((state: IState) => ({ ...state, ...value })),

        addFavorite: (product: Product) => {
          set((state) => ({
            favoriteProducts: [...state.favoriteProducts, product],
          }))
        },
      }),
      {
        name: 'global-storage',
      },
    ),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
