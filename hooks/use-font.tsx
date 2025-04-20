import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontClass = 'font-inter' | 'font-roboto' | 'font-mono';

export type FontStore = {
  selectedFont: FontClass
  setFont: (font: FontClass) => void
}

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      selectedFont: 'font-inter',
      setFont: (font) => set({ selectedFont: font }),
    }),
    {
      name: 'font-store',
    }
  )
)
