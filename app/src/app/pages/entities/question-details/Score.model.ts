export class Score{

    constructor(
        public indexQuestion,
        public nbrTrouve,
        public nbrRate,
        public nbrFoisJoue, 
        public nbrFoisIgnore
    ){
        this.nbrFoisJoue = 0;
    }

}