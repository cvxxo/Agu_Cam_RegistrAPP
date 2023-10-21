import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const authservice: AuthService = inject(AuthService)
  const router: Router = inject(Router)
  if(!authservice.isLoggedIn()){
    alert("Debe iniciar sesión")
    router.navigateByUrl("/login-d")
    return false;
  }
  return true;
};
