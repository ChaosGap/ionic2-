import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReplyPage } from './reply';

@NgModule({
  declarations: [
    ReplyPage,
  ],
  imports: [
    IonicPageModule.forChild(ReplyPage),
  ],
  exports: [
    ReplyPage
  ]
})
export class ReplyPageModule {}
