import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactePage } from './contacte.page';

describe('ContactePage', () => {
  let component: ContactePage;
  let fixture: ComponentFixture<ContactePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
