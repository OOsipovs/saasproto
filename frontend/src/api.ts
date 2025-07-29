import {Note} from '@common/types/Note';
import { ReportData } from '@common/types/ReportData';
import { TenantUser } from '@common/types/TenantUser';

const apiUrl: string = `https://api.${import.meta.env.VITE_DOMAIN_NAME}`;


async function get<T>(path: string) {
    const response = await fetch(`${apiUrl}${path}`, {
        method: 'GET'
    });

    if(!response.ok){
        throw new Error(`Failed to GET from ${path}`);
    } 

    return await response.json() as T;  
}

async function send<T>(path: string, body: T, method: 'PUT' | 'POST' = 'POST') {
    const response = await fetch(`${apiUrl}${path}`, {
        method: method,
        body: JSON.stringify(body)
    });

    if(!response.ok){
        throw new Error(`Failed to ${method} to ${path}`);
    } 
}

export function fetchUsersInTenant(){
    return get<TenantUser[]>('/users');
}

export function fetchAllNotes(){
    return get<Note[]>('/notes');
}

export function fetchReportData() {
    return get<ReportData[]>('/reports');
}

export function upsertNote(note: Note){
    return send<Note>(`/notes/${note.id}`,note, 'PUT');
}

export function createTenantUser(user: TenantUser){
    return send<TenantUser>(`/users`,user, 'POST');
}