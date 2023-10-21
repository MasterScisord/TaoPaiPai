import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'; // Importa la interfaz User

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza esto con la URL donde se ejecute JSON Server

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?username=${username}&password=${password}`);
  }
}
