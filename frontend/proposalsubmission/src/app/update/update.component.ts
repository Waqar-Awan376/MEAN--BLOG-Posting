import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  fetchedProposal:any;
  isProposalFetched:boolean=false;

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/proposal/getProposalById/'+this.route.snapshot.queryParams['proposalId'],{
      responseType:'json'
    }).subscribe((proposal)=>{
      this.fetchedProposal=proposal;
      this.isProposalFetched=true;
    })
  }

  updateProposal(formData: NgForm) {
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
    this.http.post('http://localhost:3000/proposal/updateProposal/'+this.route.snapshot.queryParams['proposalId'],JSON.stringify(body),{
      headers:{
        'Content-Type':'application/json'
      }
    }).subscribe((proposal)=>{

      this.router.navigate(['/all']);
    })
  }
}
