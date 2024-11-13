import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionariPage } from './questionari.page';

describe('QuestionariPage', () => {
  let component: QuestionariPage;
  let fixture: ComponentFixture<QuestionariPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
