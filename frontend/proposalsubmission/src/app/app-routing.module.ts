import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProposalComponent} from "./add-proposal/add-proposal.component";
import {AllProposalsComponent} from "./all-proposals/all-proposals.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {path:'',component:AddProposalComponent },
  {path:'all',component:AllProposalsComponent},
  {path:'update',component:UpdateComponent},
  {path:'**',component:AddProposalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
