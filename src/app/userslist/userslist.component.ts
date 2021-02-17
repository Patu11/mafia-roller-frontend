import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';

@Component({
    selector: 'app-userslist',
    templateUrl: './userslist.component.html',
    styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

    @Input() users: User[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
