import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccess } from './recover-access';

describe('RecoverAccess', () => {
  let component: RecoverAccess;
  let fixture: ComponentFixture<RecoverAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
