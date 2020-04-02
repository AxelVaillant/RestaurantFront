import { TestBed } from '@angular/core/testing';

import { ElementcommandeService } from './elementcommande.service';

describe('ElementcommandeService', () => {
  let service: ElementcommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementcommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
