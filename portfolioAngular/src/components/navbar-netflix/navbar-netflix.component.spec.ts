import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNetflixComponent } from './navbar-netflix.component';

describe('NavbarNetflixComponent', () => {
  let component: NavbarNetflixComponent;
  let fixture: ComponentFixture<NavbarNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarNetflixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
