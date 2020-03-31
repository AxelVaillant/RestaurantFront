import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFactureComponent } from './create-facture.component';

describe('CreateFactureComponent', () => {
  let component: CreateFactureComponent;
  let fixture: ComponentFixture<CreateFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
