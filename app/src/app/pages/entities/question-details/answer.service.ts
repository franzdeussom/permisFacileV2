import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  idReponse: number[];
  idQuestion: number;
  constructor() { this.idReponse = [] }
}
