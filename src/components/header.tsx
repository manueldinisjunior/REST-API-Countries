import { Moon, Sun } from 'lucide-react';
import { Container } from './container';
import { useTheme } from '@/hooks/theme';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-primary drop-shadow">
      <Container className="xs:flex-row xs:justify-between flex flex-col items-center justify-center gap-4 py-10 sm:py-5">
        <Link to="/rest-countries">
          <h1 className="shrink-0 text-xl font-extrabold">
            Where in the world?
          </h1>
        </Link>
        <button
          className="flex items-center gap-x-2"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span className="min-w-[83px] font-semibold">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </Container>
    </header>
  );
};
