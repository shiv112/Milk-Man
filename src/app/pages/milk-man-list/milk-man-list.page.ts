import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-milk-man-list',
  templateUrl: './milk-man-list.page.html',
  styleUrls: ['./milk-man-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilkManListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
