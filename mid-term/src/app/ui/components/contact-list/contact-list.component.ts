import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GeneralService} from 'src/app/services/general.service';
import {User} from 'src/app/models/user'
@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
     @Output() contactSelected = new EventEmitter<string>();
     @Output() logout = new EventEmitter();
    // @Input() label: string;

     users = [];

    constructor(private generalService: GeneralService) {}

    ngOnInit(): void {

        this.getUsers();
    }

    getUsers(){
        this.generalService.getUsers()
        .subscribe(users => this.users = users);
        
      }

    navigateToChat(userId: number): void {
        this.contactSelected.emit((userId.toString()));
    }

    logoutHandler() {
        this.logout.emit();
    }
}
