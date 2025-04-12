import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { environment } from '../../environment';
import { catchError, combineLatest, map, Observable, of, repeat, retry, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthcheckService implements OnDestroy {
  baseURL = environment.baseURL
  http = inject(HttpClient)

  backendHealthCheck$ = this.http.get<Observable<boolean>>(this.baseURL+'/chat').pipe( 
    repeat({delay: 30000}),
    catchError(()=> of(false)),
    retry()
  );
  chatSystemHeathCheck$ = this.http.get<Observable<boolean>>(this.baseURL+'/connected').pipe( 
    repeat({delay: 3000}),
    catchError(()=> of(false)),
    retry()
  );

  isOnline$ = combineLatest([this.backendHealthCheck$, this.chatSystemHeathCheck$]).pipe(
    tap(responses => {
      if(responses[0] && responses[1]){
        this.isOnline.update( _ => true)
      }else {
        this.isOnline.update( _ => false)
      }
    }),
    catchError(()=> of(false)),
    retry()
  ).subscribe()

  isOnline = signal<boolean>(false) 


  ngOnDestroy(): void {
      this.isOnline$.unsubscribe()
  }
}
