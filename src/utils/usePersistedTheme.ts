import { useState, useEffect } from "react";

const usePersistesTheme = (key: string, initialTheme: object) => {
  const [persistedTheme, setPersistedTheme] = useState();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedTheme));
  }, [key, persistedTheme]);

  return [persistedTheme, setPersistedTheme];
};

export default usePersistesTheme;
