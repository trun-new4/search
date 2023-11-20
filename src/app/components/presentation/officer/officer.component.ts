import { Component, Input } from '@angular/core';

export interface OfficerComponentConfig {
  name: string;
  appointed: string;
  role: string;
  address: string;
}

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrl: './officer.component.scss'
})
export class OfficerComponent {
  @Input() config: OfficerComponentConfig;
}
     