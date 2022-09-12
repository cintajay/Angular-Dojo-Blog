import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

import { Blogitem } from '../blogitem';
import { BlogserviceService } from '../blogservice.service';

// import { BLOGITEMSARR  } from '../mock-items'

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {
  item!: Blogitem;
  itemid?: number;
  // blogitemsarr= BLOGITEMSARR;

  constructor(private detailsservice:BlogserviceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.item = new Blogitem;
    this.route.params.subscribe((params:Params)=> {
      if (params['id']){
        this.item=this.detailsservice.get(params['id']);
        this.itemid=params['id'];

      }
    })
   }

  Submitfunc(form:NgForm){
    console.log(form.value)
    // this.blogitemsarr.push(form.value)
    this.detailsservice.add(form.value)
  }
}
