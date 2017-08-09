import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from 'app/photos/PhotoList/photo-list.component';
import { PhotoService } from 'app/photos/photo.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PhotoListComponent }
    ])
  ],
  declarations: [
    PhotoListComponent
  ],
  providers: [PhotoService]
})
export class PhotoModule {}
