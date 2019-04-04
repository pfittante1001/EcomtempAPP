import { CustAddress } from './CustAddress';

export interface Customer {
        id: number;
        username: string;
        created: Date;
        firstname: string;
        lastname: string;
        phone: string;
        email: string;
        gender: CharacterData;
        neck: number;
        waist: number;
        height: number;
        chest: number;
        hip: number;
        sleeve: number;
        shoulders: number;
        CustAddress: CustAddress[];
}
