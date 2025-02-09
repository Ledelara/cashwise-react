import { APP_ROUTES } from "@/constants/app-routes";
import { ThemeProviderComponent } from "@/contexts/Theme/ThemeContext";
import { checkUserAuthenticated } from "@/functions/check-user-authenticated";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { push } = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        setIsClient(true);
        const authenticated = checkUserAuthenticated();
        setIsUserAuthenticated(authenticated);

        if (!authenticated) {
            push(APP_ROUTES.public.login);
        }
    }, [push]);

    if (!isClient || isUserAuthenticated === null) {
        return null;
    }

    return (
        <ThemeProviderComponent>
            {isUserAuthenticated ? children : null}
        </ThemeProviderComponent>
    );
};

export default PrivateRoute;
