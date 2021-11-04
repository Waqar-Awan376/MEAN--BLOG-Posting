import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css']
})
export class AddProposalComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addProposal(formData: NgForm) {
    let body={
      name:formData.value['name'],
      jobTitle:formData.value['jobTitle'],
      email:formData.value['email'],
      phoneNumber:formData.value['phoneNumber'],
      organizationName:formData.value['organizationName'],
      organizationAddress:formData.value['organizationAddress'],
      organizationWebsite:formData.value['organizationWebsite'],
      projectTitle:formData.value['projectTitle'],
      projectDescription:formData.value['projectDescription'],
      technicalRequirements:formData.value['technicalRequirements'],
      studentDuties:formData.value['studentDuties'],
      studentBenefits:formData.value['studentBenefits'],
      provision:formData.value['provision']
    }
    this.http.post('http://localhost:3000/proposal/postProposal',JSON.stringify(body),{
      headers:{
        'Content-Type':'application/json'
      }
    }).subscribe((responseData)=>{
      console.log(responseData);
      formData.reset();
    },error=>{
      console.log(error)
    })
  }
}
