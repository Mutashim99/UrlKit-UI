import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = "https://urlkitapp-dqezfjcrahh0dyhu.southeastasia-01.azurewebsites.net/api";
//axios.defaults.baseURL = "http://localhost:8080/api";
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
  accountDelete : async ()=>{
    try {
      const res = await axios.delete("/user/dashboard/me/");
      console.log(res);
      set({ isAuthenticated: false, currentUser: null});
    } catch (e) {
      console.log(e);
    }
  }
}));

export default useAuthStore;
