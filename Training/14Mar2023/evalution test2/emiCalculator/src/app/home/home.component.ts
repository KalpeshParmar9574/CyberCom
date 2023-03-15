import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {




  // initial values
  noMonths:number = 120;
  ROI: number = 8.00;
  loanAmount: number = 100000;
  tableData: [] = [];
  
  numerator: number = 0;
  denominator: number = 0;
  mroi: number = this.ROI / 12;
  monthlyPayable: number = (this.loanAmount * this.mroi * Math.pow(1 + this.mroi, this.noMonths)) / (Math.pow(1 + this.mroi, this.noMonths) - 1);
  
  totalIntrest: number = ((this.monthlyPayable * this.noMonths) - this.loanAmount) / 1000;
  
  payableAmount: number = this.loanAmount + this.totalIntrest;
  interestPercentage: number = (this.totalIntrest / this.loanAmount) * 100;


  // inp_loan_amount(event:any) {
  //   this.loanAmount = event.target.value;
  // } 
  inp_nom(event: any) {
    this.noMonths = event.target.value;
  }
  inp_roi(event: any) {
    this.ROI = event.target.value;
  }
  

 

  calculate() {
    // Calculate monthly payment based on the input properties
    const monthlyInterestRate = this.ROI / 1200; // Assumes annual interest rate and monthly payments
     // Assumes loan term in years and monthly payments
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.noMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, this.noMonths) - 1;
    this.monthlyPayable = this.loanAmount * (numerator / denominator);
    console.warn(this.monthlyPayable);


    // calculate  totalintrest 
    const monthlyPayment = this.loanAmount * (this.mroi * Math.pow(1 + this.mroi, this.noMonths) / (Math.pow(1 + this.mroi,this.noMonths) - 1));
    const totalPayment = monthlyPayment * this.noMonths;
   this.totalIntrest = (totalPayment - this.loanAmount)/1000;
    console.warn(this.totalIntrest);
    
    // calculate payable amount
    this.payableAmount = this.loanAmount + this.totalIntrest;
    // calculate intrest precentage
    this.interestPercentage = (this.totalIntrest / this.loanAmount) * 100;
 

  }
  
  

}
