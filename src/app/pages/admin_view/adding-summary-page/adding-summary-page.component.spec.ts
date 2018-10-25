import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingSummaryPageComponent } from './adding-summary-page.component';

describe('AddingSummaryPageComponent', () => {
  let component: AddingSummaryPageComponent;
  let fixture: ComponentFixture<AddingSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
