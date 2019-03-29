import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  public id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;

  constructor() { }

}