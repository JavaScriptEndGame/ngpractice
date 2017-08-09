import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export interface PhotoAlbum {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string;
}

@Injectable()
export class PhotoService {
    private _photosUrl = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private _http: Http) {  }

    getPhotos(): Observable<PhotoAlbum[]> {
        return this._http.get(this._photosUrl)
            .map((response: Response) => <PhotoAlbum[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPhoto(id: number): Observable<PhotoAlbum> {
        return this.getPhotos()
            .map((photos: PhotoAlbum[]) => photos.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
