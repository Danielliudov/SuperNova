import { Component, OnInit } from '@angular/core';
import {ImageService} from "../_services/image.service";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

}
