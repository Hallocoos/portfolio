import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  resumeDownloadLink = 'https://firebasestorage.googleapis.com/v0/b/portfolio-4577e.appspot.com/o/Henricus%20Wouter%20de%20Vos%20-%20CV.pdf?alt=media&token=dbd0d14f-15d0-42cd-9f03-971c2026075c'; // Add download link here
  githubLink = 'https://github.com/Hallocoos?tab=repositories'; // Add github link here
  linkedinLink = 'https://www.linkedin.com/in/henricus-wouter-de-vos-112257193/'; // You guessed it!! LinkedIn link here

  constructor() { }

  ngOnInit() { }

}
