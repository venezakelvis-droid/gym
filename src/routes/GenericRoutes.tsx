import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NavBar from '../shared/navbar/NavBar'
import Loading from '../shared/loading/Loading'



function GenericRoutes() {
    // lazy loading
    const Home = lazy(() => import('../features/home/Home')
    )

    return (
        <>
            <NavBar
                brand='GYM'
                links={[
                    { label: "INICIO", href: "/" },
                    { label: "CREATINA", href: "/creatinas" },
                    { label: "WHEY PROTEIN", href: "/whey" },
                    { label: "COMBOS", href: "/combos" },
                    { label: "ÁREA CLIENTE", href: "/client" },
                ]}
            />
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default GenericRoutes