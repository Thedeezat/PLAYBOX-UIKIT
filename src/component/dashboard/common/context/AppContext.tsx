import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

interface ContextValue {
  codeArray: any[];
  setCodeArray: Dispatch<React.SetStateAction<any[]>>;
}
const ValueContext = createContext<ContextValue | undefined>(undefined);

export const useItemContext = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useItemContext must be used within an AppContextProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}
export default function AppContext({ children }: Props) {
  const [codeArray, setCodeArray] = useState<any[]>([]);

  const contextValue = {
    codeArray,
    setCodeArray,
  };

  return (
    <ValueContext.Provider value={contextValue}>
      {children}
    </ValueContext.Provider>
  );
}
