import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonCardContent, IonCard, IonIcon, IonHeader, IonToolbar,IonContent ],
})
export class HomePage {
  constructor() {
addIcons({ 'person-circle-outline': personCircleOutline });
  }
}
