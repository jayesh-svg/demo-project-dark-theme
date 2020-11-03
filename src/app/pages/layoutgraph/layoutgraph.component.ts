import { Component, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http';
@Component({
  selector: "app-user",
  templateUrl: "layoutgraph.component.html"
})
export class LayoutGraphComponent implements OnInit {
  constructor(private http : HttpClient) {}

  ngOnInit() {}
  private map = new Map<string, string[]>([
    ['UAE', ['Sarjah', 'Abu Dhabi']],
    ['OMAN', ['Muscat', 'Salalah']],
    ['KUWAIT', ['Ḩawallī', 'Al Ahmadi']],
    ['SAUDI AREBIA', ['Riyadh', 'Jeddah']],
    ['BEHRAIN', ['Manama', 'Muharraq']],
    ['QATAR', ['Doha', 'Al Wakrah']],
  ])
  
  country: string;
  city: string;
  area: string;
  path:string;
  public show:boolean = false;
  public buttonName:any = 'Show';
  get countries(): string[] {
    return Array.from(this.map.keys());
  }

  get cities(): string[] | undefined {
    return this.map.get(this.country);
  }
  // get areas(): string[] | undefined {
  //   return this.map1.get(this.city);
  // }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
  }

}
