import { create } from "zustand";
import axios from "axios";

export const useDashboardStore = create((set) => ({
  urls: [],
  loadingUrls: false,

  getUrls: async () => {
    set({ loadingUrls: true });
    try {
      const res = await axios.get("user/dashboard/urls");
      set({ urls: res.data, loadingUrls: false });
    } catch (e) {
      set({ loadingUrls: false });
    }
  },
}));
