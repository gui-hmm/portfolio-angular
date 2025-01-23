import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  baixarPDF() {
    const link = document.createElement('a');
    link.href = '/others/CV_Guilherme_dev_front.pdf';
    link.download = 'CV Guilherme Henrique dev_front.pdf'; 
    link.click(); 
  }
}
