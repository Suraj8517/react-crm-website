import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [openDemoForm, setOpenDemoForm] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);

  return (
    <FormContext.Provider value={{
      openDemoForm,
      setOpenDemoForm,
      openContactForm,
      setOpenContactForm
    }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}