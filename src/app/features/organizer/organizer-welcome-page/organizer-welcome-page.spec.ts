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

    it('should have initial data', () => {
        expect(component.data.length).toBeGreaterThan(0);
        expect(component.items.length).toBeGreaterThan(0);
    });

    it('should build items correctly', () => {
        const items = component.buildItems();
        expect(items.length).toBe(2);
        expect(items[0].label).toBe('Delete');
        expect(items[1].label).toBe('Publish');
    });

    it('should build data correctly', () => {
        const data = component.buildData();
        expect(data.length).toBe(3);
        expect(data[0].title).toBe('Create your first event');
        expect(data[1].status).toBe('Not set up');
        expect(data[2].link).toBe('/organizer/settings/bank');
    });


});

