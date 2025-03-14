import { createContext, useContext, useState } from "react";

// Create a context
const PageContext = createContext();

// Context provider component
export function PageProvider({ children }) {
  const [steps, setCurrentPage] = useState([
    { id: 1, label: "Connect ads account", path: "/settings/ads", status: "inProgress" },
    { id: 2, label: "Microsoft Ads Billing Status", path: "/settings/billing", status: "notComplete" },
    { id: 3, label: "Store information", path: "/settings/store", status: "notComplete" },
  ]);

  return (
    <PageContext.Provider value={{ steps, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

// Custom hook for using the context
export function usePage() {
  return useContext(PageContext);
}
