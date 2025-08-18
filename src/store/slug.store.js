import { create } from "zustand";

export const useSlugStore = create((set) => ({
  slugs: JSON.parse(localStorage.getItem("slugs")) || [],

  addSlug: (newSlug) =>
    set((state) => {
      const updated = [...state.slugs, newSlug];
      localStorage.setItem("slugs", JSON.stringify(updated));
      return { slugs: updated };
    }),

  loadSlugs: () => {
    const stored = JSON.parse(localStorage.getItem("slugs")) || [];
    set({ slugs: stored });
  },
}));
