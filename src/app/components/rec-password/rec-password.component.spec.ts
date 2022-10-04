import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPasswordComponent } from './rec-password.component';

describe('RecPasswordComponent', () => {
  let component: RecPasswordComponent;
  let fixture: ComponentFixture<RecPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
