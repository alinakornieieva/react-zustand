import { create } from "zustand"

export const useRecipes = create((set, get) => ({
    recipes: [],
    allRecipes: [],
    selectedRecipes: [],
    loading: false,
    error: false,
    moreLoading: false,
    moreError: false,
    page: 1,
    start: 0,
    end: 15,
    selectRecipe: (recipe) => {
        set({ selectedRecipes: [...get().selectedRecipes, recipe] })
    },
    deleteSelected: (itemId) => {
        set({ selectedRecipes: get().selectedRecipes.filter(s => s.id !== itemId) })
    },
    fetchRecipes: async () => {
        if (get().recipes.length > 0) {
            return
        }
        set({ loading: true })
        try {
            const data = await fetch(`https://api.punkapi.com/v2/beers?page=${get().page}`)
            const result = await data.json()
            set({ allRecipes: result })
            set({ recipes: result.slice(0, 15) })
        } catch (e) {
            set({ error: true })
        } finally {
            set({ loading: false })
        }
    },
    fetchMoreRecipes: async () => {
        set({ start: get().start + 15 })
        set({ end: get().end + 15 })
        if (get().end > get().allRecipes.length) {
            set({ moreLoading: true })
            try {
                set({ page: get().page + 1 })
                const data = await fetch(`https://api.punkapi.com/v2/beers?page=${get().page}`)
                const result = await data.json()
                set({ allRecipes: [...get().allRecipes, ...result] })
            } catch (e) {
                set({ moreError: true })
                console.log(e)
            } finally {
                set({ moreLoading: false })
            }
        }
        set({ recipes: [...get().recipes, ...get().allRecipes.slice(get().start, get().end)] })
    }
}))