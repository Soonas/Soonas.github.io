import { RateTable } from './RateTable';
import { Client } from './Client';
import { Solicitation } from './Solicitation';

export interface ApiResponse {
    rateTable: RateTable[];
    client: Client[];
    solicitation: Solicitation[];
}