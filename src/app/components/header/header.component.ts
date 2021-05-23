import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  resumeDownloadLink = 'https://firebasestorage.googleapis.com/v0/b/portfolio-4577e.appspot.com/o/CV.pdf?alt=media&token=8c4c2e7c-8b76-4f43-9e15-d7c582782082'; // Add download link here
  githubLink = 'https://github.com/Hallocoos?tab=repositories'; // Add github link here
  linkedinLink = 'https://www.linkedin.com/in/henricus-wouter-de-vos-112257193/'; // You guessed it!! LinkedIn link here

  constructor() { }

  ngOnInit() { }

}
