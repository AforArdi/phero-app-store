import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";
import AppDetails from "../pages/AppDetails/AppDeails";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {index: true, Component: Home},
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/apps/:id',
                Component: AppDetails
            },
            {
                path: '/installed-apps',
                Component: InstalledApps
            }
        ],
        errorElement: <NotFoundPage></NotFoundPage>
    }
])