import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from '../create-user/shared/services/users/users.service';

import { ListUsersComponent } from './list-users.component';

describe('HomeComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers:[ UsersService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
