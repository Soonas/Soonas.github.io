import { Installment } from './Installment';
 
export interface RateTable {
    id: number;
    name: string;
    installments: Installment[];
}