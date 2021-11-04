import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-all-proposals',
  templateUrl: './all-proposals.component.html',
  styleUrls: ['./all-proposals.component.css']
})
export class AllProposalsComponent implements OnInit {
  allProposals:any;
  areProposalsFetched:boolean=false

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/proposal/getProposals',{
      responseType:'json'
    }).subscribe((proposals)=>{
      this.allProposals=proposals;
      this.areProposalsFetched=true;
    })
  }

  deleteProposal(formData: NgForm) {
    this.http.post('http://localhost:3000/proposal/deleteProposal',JSON.stringify({
      proposalId: formData.value['proposal-id']
    }),{
      headers:{
        'Content-Type':'application/json'
      }
    }).subscribe((responseData)=>{
      this.ngOnInit();
      console.log(responseData);
    },error=>{
      console.log(error)
    })
  }

  updateProposal(formData: NgForm) {

  }
}
