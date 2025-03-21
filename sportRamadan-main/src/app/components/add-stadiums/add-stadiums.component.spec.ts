import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStadiumsComponent } from './add-stadiums.component';

describe('AddStadiumsComponent', () => {
  let component: AddStadiumsComponent;
  let fixture: ComponentFixture<AddStadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStadiumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
