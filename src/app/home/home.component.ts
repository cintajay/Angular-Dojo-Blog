import { Component, OnInit } from '@angular/core';
import { Blogitem } from '../blogitem';
import { BlogserviceService } from '../blogservice.service';
// import { BLOGITEMSARR } from '../mock-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Blogitem[]= new Array<Blogitem>();

  constructor(private detailsservice:BlogserviceService) { }

  ngOnInit(): void {
    this.items=this.detailsservice.getAll()
  }


}
