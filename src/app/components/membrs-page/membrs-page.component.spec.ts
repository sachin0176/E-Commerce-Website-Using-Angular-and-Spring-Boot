import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrsPageComponent } from './membrs-page.component';

describe('MembrsPageComponent', () => {
  let component: MembrsPageComponent;
  let fixture: ComponentFixture<MembrsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembrsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
