import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  imports: [RouterModule]
})
export class ItemCardComponent {
  @Input() vinyl: any;
}

