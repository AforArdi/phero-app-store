import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import InstalledApps from "../pages/InstalledApps/InstalledApps";

export const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {path: true, Component: Home},
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installedApps',
                Component: InstalledApps
            }
        ]
    }
])