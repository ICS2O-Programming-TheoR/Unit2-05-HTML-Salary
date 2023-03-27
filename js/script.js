// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let hoursWorked = parseFloat(document.getElementById("hours-worked").value);
  let hourlyRate = parseFloat(document.getElementById("hourly-rate").value);

  //This is the math for you Salary
  let grossPay = hoursWorked * hourlyRate
  let grossPayRounded = grossPay.toFixed(2)

  //This is the math for the Tax
  let tax = (hoursWorked * hourlyRate) * 0.2005
  let taxRounded = tax.toFixed(2)

  let netPay = grossPayRounded - taxRounded
  let netPayRounded = netPay.toFixed(2)
  
  //The result
   document.getElementById('Salary-gross-info').innerHTML = "Your gross pay is $" + (grossPayRounded) + ".";
  document.getElementById('Salary-net-info').innerHTML = "Your net pay is $" + (netPayRounded) + ".";
  document.getElementById('Tax-info').innerHTML = "The Government takes $" + (taxRounded) + ".";

}