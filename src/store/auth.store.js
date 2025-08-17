import { create } from "zustand";
import axios from "axios";

//axios.defaults.baseURL = "https://urlkit-production.up.railway.app/api";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  currentUser: null,
  loading: true,

  fetchCurrentUser: async () => {
    set({ isAuthenticated: false, currentUser: null, loading: true });

    try {
      const res = await axios.get("/user/dashboard/me");
      console.log("[store] response:", res.data);
      if (res.data.success === true) {
        set({
          isAuthenticated: true,
          currentUser: res.data.user,
          loading: false,
        });
        console.log("[store] user set:", res.data.user);
      } else {
        set({ isAuthenticated: false, currentUser: null, loading: false });
        console.log("[store] backend said no user");
      }
    } catch (err) {
      console.log("[store] fetch failed:", err);
      set({ isAuthenticated: false, currentUser: null, loading: false });
    }
  },

  logout: async () => {
    console.log("logout called");
    await axios.post("/auth/logout");
    set({ isAuthenticated: false, currentUser: null });
    console.log("after set:", useAuthStore.getState());
  },
}));

export default useAuthStore;
