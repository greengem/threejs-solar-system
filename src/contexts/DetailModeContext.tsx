import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface DetailModeContextProps {
  inDetailMode: boolean;
  setInDetailMode: Dispatch<SetStateAction<boolean>>;
}

const DetailModeContext = createContext<DetailModeContextProps>({
  inDetailMode: false,
  setInDetailMode: () => {},
});

interface DetailModeProviderProps {
  children: ReactNode;
}

export const useDetailMode = () => useContext(DetailModeContext);

export const DetailModeProvider: React.FC<DetailModeProviderProps> = ({ children }) => {
  const [inDetailMode, setInDetailMode] = useState(false);

  return (
    <DetailModeContext.Provider value={{ inDetailMode, setInDetailMode }}>
      {children}
    </DetailModeContext.Provider>
  );
};
