import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAuthenticated } from "@/functions/check-user-authenticated";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PublicRouteProps = {
    children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
    const { push } = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        setIsClient(true);
        const authenticated = checkUserAuthenticated();
        setIsUserAuthenticated(authenticated);

        if (authenticated) {
            push(APP_ROUTES.private.dashboard.name);
        }
    }, [push]);

    if (!isClient || isUserAuthenticated === null) {
        return null;
    }

    return <>{!isUserAuthenticated ? children : null}</>;
};

export default PublicRoute;