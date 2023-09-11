import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

interface ContextValue {
  codeArray: any[];
  setCodeArray: Dispatch<React.SetStateAction<any[]>>;
  fileName: string;
  setFileName: (fileName: string) => void;
  newFileName: string;
  setNewFileName: (NewFileName: string) => void;
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
  const [fileName, setFileName] = useState("ar7fght89mx0hji");
  const [codeArray, setCodeArray] = useState<any[]>([]);
  const [newFileName, setNewFileName] = useState("");

  const contextValue = {
    codeArray,
    setCodeArray,
    fileName,
    setFileName,
    newFileName,
    setNewFileName,
  };

  return (
    <ValueContext.Provider value={contextValue}>
      {children}
    </ValueContext.Provider>
  );
}
