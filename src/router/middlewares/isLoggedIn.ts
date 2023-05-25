import {useAuthStore} from "@/stores/auth";
import type { NavigationGuard } from 'vue-router';

export const isLoggedIn: NavigationGuard = (to, from, next) => {
    const auth = useAuthStore();

    if (!auth.isAuthorized) {
        return next({ path: '/' });
    }

    return next();
}
