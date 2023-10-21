import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
    if (localStorage.getItem('isLoggedIn'))
        return true
    else
        return false
};
