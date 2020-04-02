import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElementcommandeComponent } from './create-elementcommande.component';

describe('CreateElementcommandeComponent', () => {
  let component: CreateElementcommandeComponent;
  let fixture: ComponentFixture<CreateElementcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateElementcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElementcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
