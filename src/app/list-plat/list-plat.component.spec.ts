import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatComponent } from './list-plat.component';

describe('ListPlatComponent', () => {
  let component: ListPlatComponent;
  let fixture: ComponentFixture<ListPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
