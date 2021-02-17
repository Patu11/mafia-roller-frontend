import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/Room';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    private homePath = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    getRooms() {
        return this.http.get<Room[]>(this.homePath + '/rooms');
    }
}
