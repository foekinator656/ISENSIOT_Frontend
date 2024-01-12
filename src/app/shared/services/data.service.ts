import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from "../models/location.model";
import { Frituur } from "../models/frituur.model";
import { Batch } from "../../shared/models/batch.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  public getLocationsByCurrentUser(): Observable<Location[]> {
    return this.http.get<Location[]>('/api/v1/location');
  }

  public getBatchesByCurrentFrituur(id: string) {
    return this.http.get<Batch[]>(`/api/v1/batch/${id}`);
  }

  public getFrituursByCurrentLocation(id: number): Observable<Frituur[]> {
    return this.http.get<Frituur[]>(`/api/v1/frituur/${id}`);
  }
}