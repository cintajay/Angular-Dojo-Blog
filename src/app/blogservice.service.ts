import { Injectable } from '@angular/core';
import { Blogitem } from './blogitem';
// import { BLOGITEMSARR } from './mock-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  // items=BLOGITEMSARR;
  items: Blogitem[]= new Array<Blogitem>();

  constructor() { }
  getHeroes1(): Blogitem[] {
    return this.items;
    //to display at home(not needed, just directly import array at home)
  }
  getItem1(id: number): Observable<Blogitem> {
    console.log(this.items)
    console.log(id);
    const hero = this.items.find(h => h.id == id)!;
    console.log(hero);
    return of(hero);
    //to display details of 1 item
  }
  get(id:number){
    console.log(this.items[id] + 'a'); //id not stored in array for this code
    return this.items[id];
  }
  getAll(){
    return this.items;
  }
  add(item:Blogitem){
    this.items.push(item)
  }
  // update(title:string,author:string,body:string){

  // }
  update(item:Blogitem,itemid:number){
    this.items[itemid].title=item.title;
    this.items[itemid].author=item.author;
    this.items[itemid].body=item.body;

  }
  delete(id:number){
    this.items.splice(id,1)

  }
}
