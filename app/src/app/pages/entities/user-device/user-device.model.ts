import { BaseEntity } from 'src/model/base-entity';
import { User } from '../../../services/user/user.model';

export class UserDevice implements BaseEntity {
    constructor(
        public id?: number,
        public deviceId?: string,
        public dateRegistration?: any,
        public lastUpdate?: any,
        public userAccount?: User,
    ) {
    }
}
