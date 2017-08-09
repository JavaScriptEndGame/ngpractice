import { Component, OnInit } from '@angular/core';
import { PhotoService, PhotoAlbum } from 'app/photos/photo.service';


@Component({
    templateUrl: 'photo-list.component.html',
    styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

    pageTitle = 'app for product';
    photos: PhotoAlbum[];
    errorMessage: string;

    constructor(private _photoService: PhotoService) {

    }

    ngOnInit(): void {
        this._photoService.getPhotos()
                .subscribe(photos123 => this.photos = photos123,
                           error => this.errorMessage = <any>error);
    }
}
