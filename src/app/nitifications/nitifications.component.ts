/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 08/11/2022 - 14:56:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/11/2022
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { AvatarService, Notifications } from './service/service';

@Component({
  selector: 'app-nitifications',
  templateUrl: './nitifications.component.html',
  styleUrls: ['./nitifications.component.css']
})
export class NitificationsComponent implements OnInit {
  notificationNum: number = 0;
  cards: Notifications[] = [];
  $onDestroy: Subject<void> = new Subject<void>();

  constructor(public avatarService: AvatarService) { }

  ngOnInit(): void {
    this.avatarService
      .notificationsObserver()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((avatars) => {
        this.cards = avatars;
        avatars.forEach((element) => {
          if (!element.status) {
            this.notificationNum++;
          }
        });
      });
  }

  
  read() {
    this.avatarService
      .notificationsObserver()
      .pipe(
        map((notify) =>
          notify.map((note) => {
            if (!note.status) {
              note.status = true;
            }
          })
        )
      )
      .subscribe({
        next: (val) => {
          this.notificationNum = 0;
        },
        error: (err) => console.log(err),
      });
  }

  ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }
}
