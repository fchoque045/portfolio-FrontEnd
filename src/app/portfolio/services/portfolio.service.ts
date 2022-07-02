import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../interfaces/skills.interface';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getSkills(){
    return this.http.get<Skill[]>(`${this.baseUrl}/skills`);
  }
}
