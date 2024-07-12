import { createContext, useContext, useState } from "react";

export const CavaleirosContext = createContext();
CavaleirosContext.displayName = "Cavaleiros";

export default function CavaleirosProvider({ children }) {
    const [ cavaleiros, setCavaleiros ] = useState([]);
    const [newTitulo, setNewTitulo] = useState('')
    const [newLink, setNewLink] = useState('') 
    const [newTipo, setNewTipo] = useState('') 
    const [newImagem, setNewImagem] = useState('') 
    const [newDescricao, setNewDescricao] = useState('') 

    
    return(
        <CavaleirosContext.Provider 
            value={{
                cavaleiros, 
                setCavaleiros,
                newTitulo,
                setNewTitulo,
                newLink,
                setNewLink,
                newTipo,
                setNewTipo,
                newImagem,
                setNewImagem,
                newDescricao,
                setNewDescricao
                }}
        >
            {children}
        </CavaleirosContext.Provider>
    )
};

export function useCavaleiros() {
    const { cavaleiros, setCavaleiros, newTitulo, setNewTitulo, newLink, setNewLink, newTipo, setNewTipo, newImagem, setNewImagem, newDescricao, setNewDescricao } = useContext(CavaleirosContext);

    return {
        cavaleiros,
        setCavaleiros,
        newTitulo,
        setNewTitulo,
        newLink,
        setNewLink,
        newTipo,
        setNewTipo,
        newImagem,
        setNewImagem,
        newDescricao,
        setNewDescricao
    }
};
