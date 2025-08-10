import { Event } from '@/shared/models/event';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

// This component is used to display an individual event item.
// It takes an `Event` object as input and renders its details.
@Component({
  selector: 'ptw-event-item',
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent {
    private readonly router = inject(Router);
    event = input.required<Event>();

    get imagePlaceholder(): string {
        const path = '/layout/images/event-item-horizontal-placeholder.png';
        return path;
    }

    // Navigate to the event details page when the item is clicked.
    onClick(): void {
        this.router.navigate(['/events', this.event().id]);
    }
}

