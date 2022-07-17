import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceRecordComponent } from './police-record.component';

describe('PoliceRecordComponent', () => {
  let component: PoliceRecordComponent;
  let fixture: ComponentFixture<PoliceRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
