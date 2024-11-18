import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

  navigate(): void {
    this.dialog.open(PopUpComponent);
  }
}

/*

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

*/
