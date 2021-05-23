import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  resumeDownloadLink = 'https://firebasestorage.googleapis.com/v0/b/portfolio-4577e.appspot.com/o/CV.pdf?alt=media&token=8c4c2e7c-8b76-4f43-9e15-d7c582782082'; // Add download link here
  githubLink = 'https://github.com/Hallocoos?tab=repositories'; // Add github link here
  linkedinLink = 'https://www.linkedin.com/in/henricus-wouter-de-vos-112257193/'; // You guessed it!! LinkedIn link here

  messagesCount$: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.messagesCount$ = this.dataService.getMessagesCount();
  }

  public logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/'], { relativeTo: this.route }))
      .catch(err => {
        console.log('Error logging out: ', err.message);
        this.router.navigate(['/'], { relativeTo: this.route });
      });
  }

}
