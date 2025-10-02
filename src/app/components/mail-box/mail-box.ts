import { Component } from '@angular/core';
import { LeftNav } from '../left-nav/left-nav';

@Component({
  selector: 'app-mail-box',
  imports: [LeftNav],
  templateUrl: './mail-box.html',
  styleUrl: './mail-box.scss'
})
export class MailBox {
 name:string = 'Mike Manson';
 mail: string = 'iamkiran@gmail.com'
}
