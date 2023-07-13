import { create } from "zustand"

export const useRecipes = create((set) => ({
    recipes: [],
    loading: false,
    error: false,
    page: 1,
    fetchRecipes: async () => {
        set({ loading: true })
        try {
            const data = await fetch('https://api.punkapi.com/v2/beers?page=1')
            const result = await data.json()
            set({ recipes: result })
        } catch (e) {
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    }
}))