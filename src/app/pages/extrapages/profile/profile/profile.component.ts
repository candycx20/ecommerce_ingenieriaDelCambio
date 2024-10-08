import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TokenStorageService } from '../../../../core/services/token-storage.service';

import { projectList, document } from './data';
import { projectListModel, documentModel } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {

  projectList!: projectListModel[];
  document!: documentModel[];
  userData:any;

  constructor(private TokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.userData =  this.TokenStorageService.getUser();  
    /**
     * Fetches the data
     */
     this.fetchData();
  }

  /**
   * Fetches the data
   */
   private fetchData() {
    this.projectList = projectList;
    this.document = document;
   }
  
  /**
   * Swiper setting
   */
  config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };


}
