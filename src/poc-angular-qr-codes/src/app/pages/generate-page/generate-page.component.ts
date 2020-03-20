import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-page',
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.scss']
})
export class GeneratePageComponent implements OnInit {

  inputText = "Text";

  size = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
