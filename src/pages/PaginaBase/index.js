
import CavaleirosProvider from 'contexto/CavaleirosContext'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    // mockar api no json server:
    // $ npx json-server src/database/cavaleirosDb.json --port 8080

    return (
        <main>
            <CavaleirosProvider>
                <Outlet />

            </CavaleirosProvider>           
        </main>
    )
}

export default PaginaBase