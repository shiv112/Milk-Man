import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-milk-man-details',
  templateUrl: './milk-man-details.page.html',
  styleUrls: ['./milk-man-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MilkManDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
