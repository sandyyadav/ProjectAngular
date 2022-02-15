import { Component, OnInit } from '@angular/core';
//import { DetectService } from '../service/detect.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.scss']
})
export class DetectComponent implements OnInit {

  leafApicesValue:any={}
  postdata:any=[]
  datalist:any
  key:any
  constructor(private httpClient:HttpClientService) { 
    
  }

  ngOnInit(): void {
  }

   display(name:string,value:any) {
     this.leafApicesValue=value;
     console.log(this.leafApicesValue);
     this.submit()
   }
   submit()
   {
       if(this.leafApicesValue)
       {
         this.postdata.push({'leaf_apices':this.leafApicesValue})
       }
       this.httpClient.getfilename(this.postdata).subscribe(
         res=>{
           //console.log(res)
           this.datalist=res;
           this.key=Object.keys(this.datalist);
           console.log(this.key)
           console.log("after key")
         }
       )
   }
    
  }

