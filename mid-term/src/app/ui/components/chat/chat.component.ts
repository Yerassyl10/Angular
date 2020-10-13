import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GeneralService} from'src/app/services/general.service';
import {Album} from 'src/app/models/album'
import { Photo } from 'src/app/models/photo';
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

    @Input() isLoading = true;
    @Input() contact: string;
    @Input() albums: Album[];
    photos:Photo[];
    users=[];
    public userId: number;
    isPhotos=false;


    constructor(private route: ActivatedRoute,
        public generalService:GeneralService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap)=>{
            this.contact = paramMap.get('contact');
        })
        
            this.showAlbums();
         }
  showAlbums(){
    const id = +this.route.snapshot.paramMap.get('contact');

    this.albums=[];
    this.generalService.getAlbumsofU()
      .subscribe(albums => this.albums = albums.filter(album=>album.userId.toString()==id.toString()));
      this.showPhotos()
   

  }
  showPhotos(){
    this.generalService.getPhotos().subscribe(photos=>this.photos=photos);
    this.isPhotos=true;
  }
}
    


