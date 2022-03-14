import { TestBed } from '@angular/core/testing';

import { Web3ModalSetupService } from './web3-modal-setup.service';

describe('Web3ModalSetupService', () => {
  let service: Web3ModalSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3ModalSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
