import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Blogitem } from '../blogitem';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  item!: Blogitem;
  itemid!: number;
  items: Blogitem[]= new Array<Blogitem>();

  constructor(private route:ActivatedRoute, private detailsservice:BlogserviceService) { }

  ngOnInit(): void {
    this.items=this.detailsservice.getAll();
    this.item = new Blogitem;
    this.route.params.subscribe((params:Params)=> {
      if (params['id']){
        this.item=this.detailsservice.get(params['id']);
        this.itemid=params['id'];

      }
    })
  }
  Editfunc(form:NgForm){
    this.detailsservice.update(form.value, this.itemid)

  }

}
