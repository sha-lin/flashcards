// import { Component, OnInit } from '@angular/core';
// import {ServicesService} from 'src/app/services.service';

// @Component({
//   selector: 'app-show',
//   templateUrl: './show.component.html',
//   styleUrls: ['./show.component.css']
// })
// export class ShowComponent implements OnInit {

//   constructor(private service:ServicesService) { }
//   SubjectList:any=[];

//   // ModalTitle:string;
//   // ActivateAddUpdateSubjectComp:boolean=false;
//   // subject:any;

//   // SubjectIdFilter:string="";
//   // SubjectNameFilter:string="";
//   // SubjectListWithoutFilter:any=[];

//   // ngOnInit(): void {
//   //   this.refreshSubjectList();
//   // }
//   // addClick(){
//   //   this.subject={
//   //     SubjectId:0,
//   //     SubjectName:""
//   //   }
//   //   this.ModalTitle="Add Subject";
//   //   this.ActivateAddUpdateSubjectComp=true;

//   // }
//   // editClick(item){
//   //   this.subject=item;
//   //   this.ModalTitle="Edit Subject";
//   //   this.ActivateAddUpdateSubjectComp=true;
//   // }

//   // deleteClick(item){
//   //   if(confirm('Are you sure??')){
//   //     this.service.deleteSubject(item.DepartmentId).subscribe(data=>{
//   //       alert(data.toString());
//   //       this.refreshSubjectList();
//   //     })
//   //   }
//   // }

//   // closeClick(){
//   //   this.ActivateAddUpdateSubjectComp=false;
//   //   this.refreshSubjectList();
//   // }


//   // refreshSubjectList(){
//   //   this.service.getSubjectList().subscribe(data=>{
//   //     this.SubjectList=data;
//   //     this.SubjectListWithoutFilter=data;
//   //   });
//   // }
//   // FilterFn(){
//   //   var SubjectIdFilter = this.SubjectIdFilter;
//   //   var SubjectNameFilter = this.SubjectNameFilter;

//   //   this.SubjectList = this.SubjectListWithoutFilter.filter(function (el){
//   //       return el.SubjectId.toString().toLowerCase().includes(
//   //         SubjectIdFilter.toString().trim().toLowerCase()
//   //       )&&
//   //       el.SubjectName.toString().toLowerCase().includes(
//   //         SubjectNameFilter.toString().trim().toLowerCase()
//   //       )
//   //   });
//   // }

//   // sortResult(prop,asc){
//   //   this.SubjectList = this.SubjectListWithoutFilter.sort(function(a,b){
//   //     if(asc){
//   //         return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
//   //     }else{
//   //       return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
//   //     }
//   //   })
//   // }

// }
