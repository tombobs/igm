import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../common/auth/auth.service';
import { IgmSnackBar } from '../common/snack-bar/snack-bar.service';
import { login, loginError, loginSuccess, logout, registerUser } from './auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    mergeMap(({ user }) => this.authService.login(user).pipe(
      map((loggedInUser) => loginSuccess({ user: loggedInUser })),
      catchError(e => {
        console.log('1');
        return of(loginError(e));
      })
    )),

  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerUser),
    mergeMap(({ user }) => this.authService.register(user).pipe(
      tap(() => this.toastr.success('Account created')),
      map((loggedInUser) => loginSuccess({ user: loggedInUser })),
      catchError(e => this.toastr.error$(e))
    ))
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap(() => this.router.navigateByUrl('/instagram/hashtag')),
    filter(({accessToken}) => !!accessToken),
    tap(({ accessToken }) => this.authService.accessToken = accessToken),
  ), {dispatch: false});

  loginError$ = createEffect(() => this.actions$.pipe(
    ofType(loginError),
    tap(({message}) => this.toastr.error(message))
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => this.authService.logout()),
    tap(() => this.router.navigateByUrl('/welcome'))
  ), {dispatch: false})

  constructor(private actions$: Actions,
              private toastr: IgmSnackBar,
              private router: Router,
              private authService: AuthService) {
  }

}
