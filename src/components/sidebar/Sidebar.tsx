import { useState } from "react";

import { t } from "i18next";
import { ChevronLeft, LogOut, Menu, Home, FolderOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ThemeToggle from "src/components/theme-toggle/ThemeToggle";
import { Button } from "src/components/ui/button";
import { Separator } from "src/components/ui/separator";
import { cn } from "src/lib/utils";
import { logOut } from "src/utils/authentication";
import { Path } from "src/utils/paths";

/**
 * Renders the sidebar component.
 *
 * @returns The sidebar component.
 */
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <aside
      className={cn(
        "h-screen border-r bg-background transition-all duration-300 flex flex-col",
        open ? "w-60" : "w-16",
      )}
    >
      <div
        className={cn(
          "flex items-center p-4",
          open ? "justify-between" : "justify-center",
        )}
      >
        {open && (
          <h2 className="text-xl font-semibold">{t("shared.app_name")}</h2>
        )}
        <Button variant="ghost" size="icon" onClick={toggleOpen}>
          {open ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Separator />

      <nav className="flex-1 space-y-1 p-2">
        <Button
          variant="ghost"
          className={cn("w-full justify-start", !open && "justify-center px-2")}
          onClick={() => navigate(Path.HOME)}
        >
          <Home className={cn("h-4 w-4", open && "mr-2")} />
          {open && <span>{t("shared.home")}</span>}
        </Button>

        <Button
          variant="ghost"
          className={cn("w-full justify-start", !open && "justify-center px-2")}
          onClick={() => navigate(Path.PRODUCTS)}
        >
          <FolderOpen className={cn("h-4 w-4", open && "mr-2")} />
          {open && <span>{t("shared.products")}</span>}
        </Button>
      </nav>

      <Separator />

      <div className="p-2 space-y-1">
        <div className={cn("w-full", !open && "flex justify-center")}>
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          className={cn("w-full justify-start", !open && "justify-center px-2")}
          onClick={() => logOut(navigate)}
        >
          <LogOut className={cn("h-4 w-4", open && "mr-2")} />
          {open && <span>{t("sidebar.logout")}</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
