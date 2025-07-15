import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonTabs,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, listOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({homeOutline,listOutline,personOutline,
      'home-outline':homeOutline,
      'list-outline':listOutline,
      'person-outline':personOutline,});
  }

  ngOnInit() { }
}
