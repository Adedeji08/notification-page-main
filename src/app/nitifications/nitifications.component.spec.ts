import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitificationsComponent } from './nitifications.component';

describe('NitificationsComponent', () => {
  let component: NitificationsComponent;
  let fixture: ComponentFixture<NitificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NitificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
