import { BaseEntity } from 'src/model/base-entity';
import { Reponse } from '../reponse/reponse.model';

export class Question implements BaseEntity {
    constructor(
        public id?: number,
        public intitule?: string,
        public image?: string,
        public dateCreation?: any,
        public lastUpdate?: any,
        public favourite?: boolean,
        public rep1?: string,
        public rep2?: string,
        public rep3?: string,
        public reponses?: Reponse[],
    ) {
    }
}
