import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NavBar from '../shared/navbar/NavBar'
import Loading from '../shared/loading/Loading'
import Footer from '../shared/footer/Footer';



function GenericRoutes() {
    // lazy loading
    const Home = lazy(() => import('../features/home/Home'));

    const Creatina = lazy(() => import('../features/creatina/Creatina'));

    const Whey = lazy(() => import('../features/whey/Whey'));

    const Combos = lazy(() => import('../features/combos/Combos'));

    const Objectives = lazy(() => import('../features/objectives/Objectives'));

    return (
        <>
            <NavBar
                brand='GYM'
                links={[
                    { label: "INICIO", href: "/" },
                    { label: "CREATINA", href: "/creatinas" },
                    { label: "WHEY PROTEIN", href: "/whey" },
                    { label: "COMBOS", href: "/combos" },
                    { label: "OBJETIVOS", href: "/objetivos" },
                ]}
            />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/creatinas' element={<Creatina />} />
                    <Route path='/whey' element={<Whey />} />
                    <Route path='/combos' element={<Combos />} />
                    <Route path='/objetivos' element={<Objectives />} />

                </Routes>
            </Suspense>
            
            <Footer/>
        </>
    )
}
export default GenericRoutes