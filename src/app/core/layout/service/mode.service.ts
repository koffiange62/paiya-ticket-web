import { Injectable, signal } from '@angular/core';
import { ModeEnum } from '@/shared/enums/mode.enum';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

    mode = signal(ModeEnum.ATTENDEE);

    constructor() { }
}
