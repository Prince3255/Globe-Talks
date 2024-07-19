import React, { useState } from "react";
import languageContext from "./Context";

function LanguageContextProvider({children}) {

    const [language, setLanguage] = useState('en-US');

  return (
    <languageContext.Provider value={{language, setLanguage}}>
        {children}
    </languageContext.Provider>
  )
}

export default LanguageContextProvider