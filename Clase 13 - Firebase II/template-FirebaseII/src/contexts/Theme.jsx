import { createContext, useState } from "react";

export const Theme = createContext({});

const ThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState("light");

    return (<Theme.Provider value={{themeColor, setThemeColor}}>
                {children}
            </Theme.Provider>);
};

export default ThemeProvider;
