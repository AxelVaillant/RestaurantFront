import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationComComponent } from './validation-com.component';

describe('ValidationComComponent', () => {
  let component: ValidationComComponent;
  let fixture: ComponentFixture<ValidationComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
