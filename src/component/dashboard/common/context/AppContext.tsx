import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  Dispatch,
} from "react";

interface ContextValue {
  name: string;
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

  const name = "hadiza";

  const contextValue = {
    name,
    codeArray,
    setCodeArray,
  };

  console.log(codeArray);

  return (
    <ValueContext.Provider value={contextValue}>
      {children}
    </ValueContext.Provider>
  );
}
