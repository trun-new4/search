import { TestBed } from '@angular/core/testing';
import { Library3rdPartiesModule } from './libraries3rdParty.module';

describe('Library3rdPartiesModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Library3rdPartiesModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(Library3rdPartiesModule);
    expect(module).toBeTruthy();
  });
});