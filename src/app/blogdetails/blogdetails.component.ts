import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Blogitem } from '../blogitem';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  item?: Blogitem;
  itemid!:number;


  constructor(private route: ActivatedRoute, private blogservice: BlogserviceService) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem(): void {
    this.item = new Blogitem;
    this.route.params.subscribe((params:Params)=> {
      if (params['id']){
        this.item=this.blogservice.get(params['id']);
        this.itemid=params['id'];
      }

  })
  }
  Deletefunc(itemid:number){
    console.log(itemid)
    this.blogservice.delete(itemid)
  }
}
