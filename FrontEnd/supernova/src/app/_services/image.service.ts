import {Injectable} from "@angular/core";


@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id === id);
  }
}


const IMAGES = [
  {"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/pictures/boat_01.jpg"},
  {"id": 2, "category": "boats", "caption": "Sailing the coast", "url": "assets/pictures/boats_02.jpg"},
  {"id": 3, "category": "boats", "caption": "Sunset Pier", "url": "assets/pictures/boats_03.jpg"},
  {"id": 4, "category": "boats", "caption": "Sunday Afternoon", "url": "assets//pictures/boats_04.jpg"},
  {"id": 5, "category": "boats", "caption": "Sunset at the docks", "url": "assets/pictures/boats_05.jpg"},
  {"id": 6, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_01.jpg"},
  {"id": 7, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_02.jpg"},
  {"id": 8, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_03.jpg"},
  {"id": 9, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_04.jpg"},
  {"id": 10, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_05.jpg"},
  {"id": 11, "category": "camping", "caption": "Camping", "url": "assets/pictures/camping_06.jpg"},
  {"id": 12, "category": "library", "caption": "Library1", "url": "assets/pictures/library_01.jpg"},
  {"id": 13, "category": "library", "caption": "Library2", "url": "assets/pictures/library_02.jpg"},
  {"id": 14, "category": "library", "caption": "Library3", "url": "assets/pictures/library_03.jpg"}
]
