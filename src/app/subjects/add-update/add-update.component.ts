// import { Component, OnInit, Input } from '@angular/core';
// import {ServicesService} from 'src/app/services.service';

// @Component({
//   selector: 'app-add-update',
//   templateUrl: './add-update.component.html',
//   styleUrls: ['./add-update.component.css']
// })
// export class AddUpdateComponent implements OnInit {

//   constructor(private service:ServicesService) { }

//   @Input() subject:any;
//   SubjectId:string;
//   SubjectName:string;

//   ngOnInit(): void {
//     this.SubjectId=this.subject.SubjectId;
//     this.SubjectName=this.subject.SubjectName;
//   }

//   addSubject(){
//     var val = {SubjectId:this.SubjectId,
//                 SubjectName:this.SubjectName};
//     this.service.addSubject(val).subscribe(res=>{
//       alert(res.toString());
//     });
//   }

//   updateSubject(){
//     var val = {SubjectId:this.SubjectId,
//       SubjectName:this.SubjectName};
//     this.service.updateSubject(val).subscribe(res=>{
//     alert(res.toString());
//     });
//   }
// }
