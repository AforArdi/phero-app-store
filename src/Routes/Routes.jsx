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
            {index: true, Component: Home},
            {
                path: 'apps',
                Component: Apps
            },
            {
                path: 'installed-apps',
                Component: InstalledApps
            }
        ]
    }
])