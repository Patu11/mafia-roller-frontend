import {Component, OnInit} from '@angular/core';
import {Room} from '../models/Room';
import {RoomsService} from '../services/rooms.service';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

    rooms: Room[] = [];

    constructor(private roomsService: RoomsService) {
        this.roomsService.getRooms().subscribe(rooms => {
            this.rooms = rooms;
        });
    }

    ngOnInit(): void {
    }

}
