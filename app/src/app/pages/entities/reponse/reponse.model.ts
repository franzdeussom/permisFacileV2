import { BaseEntity } from 'src/model/base-entity';
import { Question } from '../question/question.model';

export class Reponse implements BaseEntity {
    constructor(
        public id?: number,
        public intitule?: string,
        public reponseUnique?: boolean,
        public bonneReponse?: boolean,
        public isChecked?: boolean,
        public question?: Question,
    ) {
      
        this.isChecked = false;
        this.reponseUnique = false;
        this.bonneReponse = false;
    }
}
