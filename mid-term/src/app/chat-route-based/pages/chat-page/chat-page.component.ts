import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import {GeneralService} from'src/app/services/general.service';

@Component({
    selector: 'app-chat-page',
    templateUrl: './chat-page.component.html',
    styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
    messages=[];
    contact: string;
    users=[];
    userId;
    albums=[];
    constructor(
        public chatService: ChatService,
        private route: ActivatedRoute,
        public generalService:GeneralService
    ) {}

    ngOnInit() {
        // this.route.data.subscribe((data) => {
        //     console.log('data changed', data);
        //     this.contact = data.contact;
        //     this.messages = data.messages;
        // });
        // this.route.paramMap.subscribe(async (paramMap) => {
        //     this.contact = paramMap.get('contact');
        //     this.messages = await this.chatService.getMessages(this.contact);
        // });
        
    }
}
