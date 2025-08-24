import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return { theme, setTheme };
};
