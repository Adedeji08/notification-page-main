/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/11/2022 - 16:16:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/11/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit, Input } from '@angular/core';
import { Notifications } from '../nitifications/service/service';

@Component({
  selector: 'app-notification-cards',
  templateUrl: './notification-cards.component.html',
  styleUrls: ['./notification-cards.component.css']
})
export class NotificationCardsComponent implements OnInit {
@Input() card?: Notifications;
// @Input() card: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
