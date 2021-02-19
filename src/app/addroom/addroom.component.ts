import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {RoomsService} from '../services/rooms.service';

@Component({
    selector: 'app-addroom',
    templateUrl: './addroom.component.html',
    styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
    public modalRef: BsModalRef;
    roomName: string;

    constructor(private modalService: BsModalService, private roomService: RoomsService) {
    }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    onSubmit() {
        if (this.roomName) {
            this.roomService.addRoom(this.roomName).subscribe();
        }
        this.modalRef.hide();
    }

    ngOnInit(): void {
    }

}
