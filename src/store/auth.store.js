import { create } from "zustand";
import axios from "axios";

// axios.defaults.baseURL = "https://urlkit-production.up.railway.app/api";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  currentUser: null,
  loading: true,

  fetchCurrentUser: async () => {
    try {
      const res = await axios.get("/user/dashboard/me");
      console.log(res);
      set({
        isAuthenticated: true,
        currentUser: res.data.user,
        loading: false,
      });
      console.log(useAuthStore.getState().currentUser);
      console.log(useAuthStore.getState().isAuthenticated);
    } catch {
      set({ isAuthenticated: false, currentUser: null, loading: false });
    }
  },

  logout : async ()=>{
    await axios.post("/auth/logout")
    set({isAuthenticated:false,currentUser:null})
  }
}));

export default useAuthStore;
