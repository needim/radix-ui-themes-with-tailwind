import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { useTheme } from "./useTheme";
import { MoonIcon, SunIcon, LaptopIcon } from "@radix-ui/react-icons";
import { cn } from "./utils";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="soft" className="relative">
          <SunIcon
            className={cn(
              "h-3 w-3 rotate-0 scale-100 delay-200 transition-all dark:-rotate-90 dark:scale-0",
              theme === "system" && "opacity-0"
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-3 w-3 rotate-90 delay-200 scale-0 transition-all dark:rotate-0 dark:scale-100",
              theme === "system" && "opacity-0"
            )}
          />
          <LaptopIcon
            className={cn(
              "h-3 w-3 opacity-0 absolute delay-200 transition-all",
              theme === "system" && "opacity-100"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
