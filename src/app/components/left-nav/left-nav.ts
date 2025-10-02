import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  imports: [],
  templateUrl: './left-nav.html',
  styleUrl: './left-nav.scss'
})
export class LeftNav {
@Input() name: string = '';
@Input() mail: string = '';
}
