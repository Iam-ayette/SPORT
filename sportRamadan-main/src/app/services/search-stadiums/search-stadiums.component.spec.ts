import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStadiumsComponent } from './search-stadiums.component';

describe('SearchStadiumsComponent', () => {
  let component: SearchStadiumsComponent;
  let fixture: ComponentFixture<SearchStadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStadiumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchStadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
