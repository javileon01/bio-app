import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacioPage } from './informacio.page';

describe('InformacioPage', () => {
  let component: InformacioPage;
  let fixture: ComponentFixture<InformacioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
