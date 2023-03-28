import { createContext, FC, ReactNode, useContext, useState } from "react";
import type { PageConfigType } from "types";
import { pageConfigMock } from "utils/mocks";

type PageConfigContextType = undefined | PageConfigType;

const PageConfigContext = createContext<PageConfigContextType>(undefined);

export const PageConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<PageConfigContextType>(undefined);

  return (
    <PageConfigContext.Provider value={pageConfigMock}>
      {children}
    </PageConfigContext.Provider>
  );
};

export const usePageConfig = () => {
  const context = useContext(PageConfigContext);

  if (context === undefined) {
    throw new Error(`usePageConfig must be used within a PageConfigProvider`);
  }

  return context;
};
