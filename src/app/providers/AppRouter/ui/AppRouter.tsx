import { FunctionComponent } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "../routes"
import NotFoundPage from "@/pages/NotFound/ui/NotFoundPage.tsx";

const AppRouter: FunctionComponent = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.component />}
                    key={route.path}
                />
            ))}
            <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter