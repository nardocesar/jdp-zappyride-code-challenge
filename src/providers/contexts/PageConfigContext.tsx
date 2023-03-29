import { createContext, ReactNode, useContext } from "react";
import type { PageConfigType } from "types";

type PageConfigContextType = PageConfigType | null;
type PageConfigProviderProps = {
  children: ReactNode;
  config: PageConfigType | null;
};

const PageConfigContext = createContext<PageConfigContextType>(null);

export const PageConfigProvider = ({
  children,
  config,
}: PageConfigProviderProps) => {
  return (
    <PageConfigContext.Provider value={config}>
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
