import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // apply theme to <html>
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-primary text-primary-foreground"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
