import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// interface
interface IState {
  isOpen: boolean
}

interface IParams extends Partial<IState> {}

interface IStore extends IState {
  handleHomeStore: (value: IParams) => void
}

// store
export const useHomeStore = create<IStore>()(
  devtools(
    (set) => ({
      isOpen: false,
      handleHomeStore: (params: IParams) => set((state: IState) => ({ ...state, ...params })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' },
  ),
)
