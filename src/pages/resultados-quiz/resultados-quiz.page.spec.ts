import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadosQuizPage } from './resultados-quiz.page';

describe('ResultadosQuizPage', () => {
  let component: ResultadosQuizPage;
  let fixture: ComponentFixture<ResultadosQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
