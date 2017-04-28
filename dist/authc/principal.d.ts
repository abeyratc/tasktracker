import { Role } from './role';
export declare class Principal {
    domain: string;
    sessionId: string;
    userId: string;
    passPharase: string;
    authToken: string;
    roles: Role[];
    ttl: number;
}
