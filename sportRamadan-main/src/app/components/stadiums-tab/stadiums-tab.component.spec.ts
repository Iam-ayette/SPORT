import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsTabComponent } from './stadiums-tab.component';

describe('StadiumsTabComponent', () => {
  let component: StadiumsTabComponent;
  let fixture: ComponentFixture<StadiumsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadiumsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
