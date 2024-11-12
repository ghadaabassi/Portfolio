import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule, Routes } from '@angular/router';

const manageRoutes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'popups', component: PopUpComponent },
];
@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, MatDialogModule, RouterModule.forChild(manageRoutes)],
})
export class ManageModule {}
