import {useAuthStore} from "@/stores/auth";
import type { NavigationGuard } from 'vue-router';

export const isNotLoggedIn: NavigationGuard = (to, from, next) => {
    const auth = useAuthStore();

    if (auth.isAuthorized) {
        return next({ path: '/game' });
    }

    return next();
}
