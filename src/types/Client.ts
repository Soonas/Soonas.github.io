import { Bank } from './Bank';

export interface Client {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: Bank;
}