import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface storeContextTypeContext {
  hasUploadedCsv: boolean;
  setHasUploadedCsv: Dispatch<SetStateAction<boolean>>;
}

export const storeContext = createContext<storeContextTypeContext>({
  hasUploadedCsv: false,
  setHasUploadedCsv: () => {},
});

export const DataProvider = (props: { children: ReactNode }) => {
  const [hasUploadedCsv, setHasUploadedCsv] = useState(false);

  return (
    <storeContext.Provider
      value={{
        hasUploadedCsv,
        setHasUploadedCsv,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};
