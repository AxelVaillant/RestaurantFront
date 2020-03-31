import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlatComponent } from './create-plat.component';

describe('CreatePlatComponent', () => {
  let component: CreatePlatComponent;
  let fixture: ComponentFixture<CreatePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
