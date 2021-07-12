import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShowModel } from 'src/app/models/show';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private baseUrl = `${environment.apiUrl}/shows`;
  public showList: BehaviorSubject<ShowModel[]> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}
  findAllShows(): any {
    return this.http.get<ShowModel[]>(this.baseUrl).pipe(
      tap((shows: ShowModel[]) => {
        this.showList.next(shows);
        console.log(shows);
      })
    );
  }
}
