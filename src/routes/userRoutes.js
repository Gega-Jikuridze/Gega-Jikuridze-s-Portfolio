import { Outlet } from "react-router-dom"
import Header from "../components/header"
import MainPage from "../pages/mainpage"
import Footer from "../components/footer"
import AboutMePage from "../pages/aboutmepage"
import ProjectsPage from "../pages/projectspage"




const userRoutes = [
    {
        element: (
            <div className="App">
                <Header />
                <Outlet />
                <Footer />
            </div>
        ),
        path:'/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <AboutMePage />,
                path: 'about-me'
            },
            {
                element: <ProjectsPage />,
                path: 'projects'
            }
        ]
    }
]


export default userRoutes