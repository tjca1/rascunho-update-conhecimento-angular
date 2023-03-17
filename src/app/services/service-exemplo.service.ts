import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceAnimal } from '../interfaces/Animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceExemploService {
  private apiUrl = 'http://localhost:3000/animals/'

  constructor(private http:HttpClient) { }

  removeAnimal(array:InterfaceAnimal[], i:InterfaceAnimal) : InterfaceAnimal[] {
    console.log('--->remove animal FirstComponentComponent.removeAnimal'+ i.name)
   return array.filter((an) => i.name !== an.name)
  }

  removeAnimalArray(array:string[] ,a:string): string[] {
    console.log('--->remove animal FirstComponentComponent.removeAnimalArray'+ a)
    return array.filter((an) => a !== an)

  }

  removeAnimalVazio(array:InterfaceAnimal[], i:InterfaceAnimal) : InterfaceAnimal[] {
    console.log('--->remove animal FirstComponentComponent.removeAnimal'+ i.name)
   return array.filter((an) => i.name !== an.name)
  }

  getAll(): Observable<InterfaceAnimal[]> {
    //HttpClient
    //HttpHandler
    //Observable
    return this.http.get<InterfaceAnimal[]>(this.apiUrl)
  }

  getAnimal(n:number): Observable<InterfaceAnimal> {
    //HttpClient
    //HttpHandler
    //Observable
    return this.http.get<InterfaceAnimal>(this.apiUrl+n)
  }
}
