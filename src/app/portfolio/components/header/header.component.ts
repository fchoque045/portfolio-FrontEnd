import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    
  }

}
