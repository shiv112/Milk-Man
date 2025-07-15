import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.page.html',
  styleUrls: ['./loading-page.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class LoadingPagePage implements OnInit {

 constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('/tabs/home' ,{replaceUrl:true});
    }, 10000);
  }

}
