import { TestBed, async, inject } from '@angular/core/testing';

import { VerificaGuard } from './verifica.guard';

describe('VerificaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaGuard]
    });
  });

  it('should ...', inject([VerificaGuard], (guard: VerificaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
