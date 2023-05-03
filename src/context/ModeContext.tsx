import { createContext, useState, ReactNode } from "react";

interface ModeContextType {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModeContext = createContext<ModeContextType | null>(null);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
