import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  
  @HostListener('window:scroll')
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // scroller: any;

  constructor(private breakpointObserver: BreakpointObserver) {

    // window.addEventListener('scroll', this.scroll, true);
  }


 

  ngOnInit(): void {

  }


  // scroll = ($event: any): void => {

  //   this.scroller = document.querySelector("#divgeral");
  //   // this.output = document.querySelector("#output");


  //   // console.log(`scrollTop: ${this.scroller.scrollTop}`);

  // };

  Logout() {

    localStorage.removeItem('token');
  }

}
