"use client";
import { Alert } from "@/components";
import { AlertVariant } from "@/utils";
import React, { ReactNode, createContext, useEffect, useState } from "react";

type Alert = {
  variant: AlertVariant;
  message: string;
};

type AlertContext = {
  showAlert: (valiant: AlertVariant, message: string) => void;
};

type AlertContextProvider = {
  children: ReactNode;
};

// Create a new context for the Alert
export const AlertContext = createContext<AlertContext>({
  showAlert: () => {},
});

export const AlertProvider: React.FC<AlertContextProvider> = ({ children }) => {
  const [alertMessages, setAlertMessages] = useState<Alert[]>([]);

  // Function to hide an alert based on its index
  const hideAlert = (index: number) => {
    setAlertMessages((prev) => prev.filter((_, i) => i !== index));
  };

  // UseEffect hook to remove the first alert message after 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAlertMessages((prevItems) => {
        if (prevItems.length > 0) {
          return prevItems.slice(1); // Remove the first alert
        }
        clearInterval(interval);
        return prevItems;
      });
    }, 8 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Context value containing the showAlert function
  const contextValue: AlertContext = {
    showAlert: (variant, message) => {
      const alertMessage: Alert = {
        variant,
        message,
      };
      setAlertMessages((prev) => [...prev, alertMessage]);
    },
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {alertMessages.map((alert, index) => (
        <Alert
          message={alert.message}
          variant={alert.variant}
          key={index}
          onClose={() => hideAlert(index)}
        />
      ))}
      {children}
    </AlertContext.Provider>
  );
};
