import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({children}) => {
    
    const [color, setColor] = useState("#CE4F4B");

    const toggleColor = () => {
        setColor(color === "#CE4F4B" ? "#000" : "#CE4F4B")
    }


    return (
        <ColorContext.Provider value={{color, toggleColor}}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColor = () => {
    return useContext(ColorContext);
}