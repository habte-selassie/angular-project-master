import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCandidateComponent } from './read-candidate.component';

describe('ReadCandidateComponent', () => {
  let component: ReadCandidateComponent;
  let fixture: ComponentFixture<ReadCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCandidateComponent]
    });
    fixture = TestBed.createComponent(ReadCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
