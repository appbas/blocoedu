import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSchool } from './select-school';

describe('SelectSchool', () => {
  let component: SelectSchool;
  let fixture: ComponentFixture<SelectSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSchool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
