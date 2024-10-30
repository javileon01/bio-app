import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsRecomanatsPage } from './webs-recomanats.page';

describe('WebsRecomanatsPage', () => {
  let component: WebsRecomanatsPage;
  let fixture: ComponentFixture<WebsRecomanatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsRecomanatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
