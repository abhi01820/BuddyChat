import {create } from "zustand";

export const useThemeStore=create((set)=>({
  theme:localStorage.getItem("buddy-theme") || "dark",
  setTheme:(theme) =>{
    localStorage.setItem("buddy-theme",theme);
    set({theme});
  },
}));