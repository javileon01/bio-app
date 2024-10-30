import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BioQuestionariPage } from './bio-questionari.page';

describe('BioQuestionariPage', () => {
  let component: BioQuestionariPage;
  let fixture: ComponentFixture<BioQuestionariPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BioQuestionariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
