import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  p: number = 1;
  collection!: any[];
  constructor() {}

  ngOnInit(): void {}
}
