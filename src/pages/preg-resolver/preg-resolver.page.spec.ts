import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PregResolverPage } from './preg-resolver.page';

describe('PregResolverPage', () => {
  let component: PregResolverPage;
  let fixture: ComponentFixture<PregResolverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PregResolverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
