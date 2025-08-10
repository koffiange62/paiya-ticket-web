import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerWelcomePage } from './organizer-welcome-page';

describe('OrganizerWelcomePage', () => {
  let component: OrganizerWelcomePage;
  let fixture: ComponentFixture<OrganizerWelcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerWelcomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
