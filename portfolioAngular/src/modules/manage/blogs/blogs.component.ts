import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  blogs = [
    {
      imageUrl: 'art.png',
      link: '#',
      title: 'Blog 1',
      content: 'Blog Content 1',
    },
    {
      imageUrl: 'art.png',
      link: '#',
      title: 'Blog 2',
      content: 'Blog Content 2',
    },
  ];

  constructor(public dialog: MatDialog) {}

  confirmDelete(blog: any): void {
    const dialogRef = this.dialog.open(PopUpComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('delted');
      } else {
        console.log('Not Deleted');
      }
    });
  }
}
