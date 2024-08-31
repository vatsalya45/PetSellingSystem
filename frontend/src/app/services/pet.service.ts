import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = '/api/pets';

  constructor(private http: HttpClient) {}

  getPets() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
