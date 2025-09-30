import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "src/components/ui/button";
import { useThemeStore } from "src/stores/theme";

/**
 * A component that renders a theme toggle button.
 * Cycles through light -> dark -> system themes.
 *
 * @returns The rendered theme toggle component.
 */
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") {
      return <Sun className="h-5 w-5" />;
    } else if (theme === "dark") {
      return <Moon className="h-5 w-5" />;
    } else {
      return <Monitor className="h-5 w-5" />;
    }
  };

  const getTitle = () => {
    if (theme === "light") {
      return "Switch to dark mode";
    } else if (theme === "dark") {
      return "Switch to system theme";
    } else {
      return "Switch to light mode";
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={cycleTheme} title={getTitle()}>
      {getIcon()}
    </Button>
  );
};

export default ThemeToggle;
