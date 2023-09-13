import { getCookies, setCookies } from '@/utils/Cookies';
import { defineStore } from 'pinia';

interface UserPreference {
  THEME: 'light' | 'dark';
}
export const useUserPrference = defineStore('useUserPrference', {
  state: (): UserPreference => ({
    THEME: getCookies('THEME'),
  }),
  getters: {},
  actions: {
    setTheme(theme: 'light' | 'dark'): void {
      setCookies('THEME', theme, Infinity);
      this.installTheme(theme);
    },
    installTheme(theme: 'light' | 'dark'): void {
      this.THEME = theme;
      const html = document.querySelector('html');
      html?.setAttribute('data-bs-theme', theme);
      document.querySelector('#app')?.classList.add(`is-${theme}`);
    },
  },
});
