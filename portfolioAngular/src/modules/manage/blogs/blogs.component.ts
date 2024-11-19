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
  ];

  constructor(public dialog: MatDialog) {}
  currentValue: number = 0;

  ngOnInit() {
    const storedValue = localStorage.getItem('currentValue');
    this.currentValue = storedValue ? parseInt(storedValue, 10) : 0;
  }
  incrementValue() {
    this.currentValue += 1;
    localStorage.setItem('currentValue', this.currentValue.toString());
  }

  delete() {
    this.currentValue = 0;
    localStorage.removeItem('currentValue');
  }

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
