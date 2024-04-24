import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../model/cat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatAndFactService {

  private readonly API_URL = 'http://localhost:8080/list';

  constructor(private http: HttpClient) { }

  public getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.API_URL}/cats`);
  }
  public getCatById(id:number) :Observable<Cat>{
    return this.http.get<Cat>(`${this.API_URL}/cat/${id}`);
  }
}
