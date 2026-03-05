import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeachers } from './search-teachers';

describe('SearchTeachers', () => {
  let component: SearchTeachers;
  let fixture: ComponentFixture<SearchTeachers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTeachers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTeachers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
