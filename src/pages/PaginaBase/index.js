
import CavaleirosProvider from 'contexto/CavaleirosContext'
import { Outlet } from 'react-router-dom'

function PaginaBase() {

    return (
        <main>
            <CavaleirosProvider>
                <Outlet />

            </CavaleirosProvider>           
        </main>
    )
}

export default PaginaBase
