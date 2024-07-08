import { createContext, useContext, useState } from "react";

export const CavaleirosContext = createContext();
CavaleirosContext.displayName = "Cavaleiros";

export default function CavaleirosProvider({ children }) {
    const [ cavaleiros, setCavaleiros ] = useState([]);    
    
    return(
        <CavaleirosContext.Provider 
            value={{
                cavaleiros, 
                setCavaleiros,
                }}
        >
            {children}
        </CavaleirosContext.Provider>
    )
};

export function useCavaleiros() {
    const { cavaleiros, setCavaleiros } = useContext(CavaleirosContext);

    return {
        cavaleiros,
        setCavaleiros
    }
};