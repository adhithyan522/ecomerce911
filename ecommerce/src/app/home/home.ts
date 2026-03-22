import { Component } from '@angular/core';
import { Corousel } from "../carousel/carousel";
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-home',
  imports: [Corousel, Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
