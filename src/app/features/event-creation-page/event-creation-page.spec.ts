import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationPage } from './event-creation-page';

describe('EventCreationPage', () => {
  let component: EventCreationPage;
  let fixture: ComponentFixture<EventCreationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCreationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
