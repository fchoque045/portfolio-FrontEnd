import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../interfaces/skills.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private portfolioService:PortfolioService) {  }

  ngOnInit(): void {
    this.portfolioService.getSkills()
      .subscribe( resp => {
        this.skills = resp;
      });
  }

}
