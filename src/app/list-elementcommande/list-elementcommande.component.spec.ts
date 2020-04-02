import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementcommandeComponent } from './list-elementcommande.component';

describe('ListElementcommandeComponent', () => {
  let component: ListElementcommandeComponent;
  let fixture: ComponentFixture<ListElementcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElementcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElementcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
