import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {




  dataSource: any[] =GLOBAL._DB.members ;
    
  


  
  displayedColumns: string[] = ['1','2','3','4','5','6','7'] ;


}
