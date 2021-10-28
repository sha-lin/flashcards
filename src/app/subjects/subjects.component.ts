import { Component, OnInit } from '@angular/core';
import { ServicesService} from 'src/app/services.service';
// import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private service:ServicesService) { }

  SubjectList:any=[];

  ModalTitle:any;
  ActivateAddEditSubjectComp:any='false';
  subject:any;

  ngOnInit(): void {

    this.refreshSubjectList();
  }

  addClick(){
    this.subject={
    SubjectId:0,
    SubjectName:"",
    SubjectFileName:""
    }

    this.ModalTitle="Add Subject";
    this.ActivateAddEditSubjectComp=true;
  }

  // // editclick
  // editClick(item){
  //   this.subject = item;
  //   this.ModalTitle='Edit Subject';
  //   this.ActivateAddEditSubjectComp=true;
  // }

  // // delete
  // deleteClick(item){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteSubject(item.SubjectId).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshSubjectList();
  //     })
  //   }
  // }

  // close click
  closeClick(){
    this.ActivateAddEditSubjectComp=false;
    this.refreshSubjectList();
  }

  refreshSubjectList(){
    this.service.getSubjectList().subscribe(data=>{
      this.SubjectList=data;
    });
  }
}