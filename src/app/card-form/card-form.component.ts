import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm: FormGroup;

  constructor() {
    this.cardForm = new FormGroup({
      name: new FormControl('Babak Jahanbani'),
    });
  }

  ngOnInit(): void {}
}
