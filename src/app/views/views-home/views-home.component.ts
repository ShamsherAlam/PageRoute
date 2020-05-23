import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats =[
    {value:22,label:'# of Users'},
    {value:900,label:'Revenue'},
    {value:50,label:'Reviews'}
  ];

  items =[
    {image: '/assets/images/1.jpeg',title:'Actress',description:'Many Followers'},
    {image: '/assets/images/2.jpeg',title:'Actress',description:'Many Followers'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
