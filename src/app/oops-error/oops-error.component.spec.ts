import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsErrorComponent } from './oops-error.component';

describe('OopsErrorComponent', () => {
  let component: OopsErrorComponent;
  let fixture: ComponentFixture<OopsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
