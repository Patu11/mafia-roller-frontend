import {Component, OnInit} from '@angular/core';
import {RoomsService} from '../services/rooms.service';
import {Room} from '../models/Room';
import {User} from '../models/User';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    room: Room;
    roomUsers: User[];

    constructor(private roomsService: RoomsService) {
        this.roomsService.getRoomByCode('abc123').subscribe(room => {
            this.room = room;
            this.roomUsers = room.users;
        });
    }

    ngOnInit(): void {
    }
}
