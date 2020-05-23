import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {


  data = [{ name:'Shamsher', age:25, job: 'Developer', employee:true },
  { name:'Shamsher', age:25, job: 'Developer',employee:true  },
  { name:'Shamsher', age:25, job: 'Developer',employee:false  },
];

headers = [{key:'name', label: 'Name'},
{key:'age', label: 'Age'},
{key:'job', label: 'Job'},
{key:'employee', label: 'Has a Job ?'},

];
  constructor() { }

  ngOnInit(): void {
  }

}
