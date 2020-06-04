import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-saved-payment-details',
  templateUrl: './saved-payment-details.component.html',
  styleUrls: ['./saved-payment-details.component.scss']
})
export class SavedPaymentDetailsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

}
