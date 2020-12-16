import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { GenericService } from './generic.service';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends GenericService<Video, number>{

  constructor(http: HttpClient) {
    super(http, "");
  }
}
