import { APP_ROUTES } from "@/constants/app-routes";

/**
 * Check if the route is public
 * @param asPath string
 * @returns boolean
 */

export const checkIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public);
    return appPublicRoutes.includes(asPath);
};