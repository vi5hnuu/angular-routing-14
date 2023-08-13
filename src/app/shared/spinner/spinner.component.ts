import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vi-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input()
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
