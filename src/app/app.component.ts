import { Component } from '@angular/core';
 import { Router } from '@angular/router';
 import { AppRoutingModule } from './app-routing.module';
 import { NoteFormComponent } from './note-form/note-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, ) {} 
  title = 'webProject';
   login() { 
      
    this.router.navigateByUrl('home');
  
   }
}
