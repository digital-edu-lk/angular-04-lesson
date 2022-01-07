import { Component, OnInit } from '@angular/core';
import { Version } from '../../version';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  versions: Version[] = [
    {
      id: 1,
      type: 'primary',
      data: {
        previousMinor: NaN,
        previousMajor: NaN,
        currentMinor: 23,
        currentMajor: 1
      }
    }
  ]

  next!: Version;
  currentMajor: number = this.versions[this.versions.length-1].data.currentMajor;
  currentMinor: number = this.versions[this.versions.length-1].data.currentMinor;
  
  constructor() {}

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.currentMajor = this.versions[this.versions.length-1].data.currentMajor;
    this.currentMinor = this.versions[this.versions.length-1].data.currentMinor;
  }

  minorChanged(): void {
    let nextVersionId: number = 1 + this.getlastVersionId();
    let nextVersionType: Version["type"] = 'nextMinor';
    let lastVersionCurrentMinor: number = this.getlastVersionCurrentMinor();
    let nextVersionCurrentMinor: number = 1 + this.getlastVersionCurrentMinor();
    let lastVersionCurrentMajor: number = this.getlastVersionCurrentMajor();
    let nextVersionCurrentMajor: number = this.getlastVersionCurrentMajor();

    let nextMinor: Version = {
      id: nextVersionId,
      type: nextVersionType,
      data: {
        previousMinor: lastVersionCurrentMinor,
        previousMajor: lastVersionCurrentMajor,
        currentMinor: nextVersionCurrentMinor,
        currentMajor: nextVersionCurrentMajor
      }
    }
    this.versions.push(nextMinor);
  }

 majorChanged(): void {
    let nextVersionId: number = 1 + this.getlastVersionId();
    let nextVersionType: Version["type"] = 'nextMajor';
    let lastVersionCurrentMinor: number = this.getlastVersionCurrentMinor();
    let nextVersionCurrentMinor: number = 0;
    let lastVersionCurrentMajor: number = this.getlastVersionCurrentMajor();
    let nextVersionCurrentMajor: number = 1 + this.getlastVersionCurrentMajor();

    let nextMajor: Version = {
      id: nextVersionId,
      type: nextVersionType,
      data: {
        previousMinor: lastVersionCurrentMinor,
        previousMajor: lastVersionCurrentMajor,
        currentMinor: nextVersionCurrentMinor,
        currentMajor: nextVersionCurrentMajor
      }
    }
    this.versions.push(nextMajor);
  }

  getlastVersionId(this: any): number {
    return this.versions[this.versions.length-1].id;
  }
  
  getlastVersionCurrentMinor(this: any): number {
    return this.versions[this.versions.length-1].data.currentMinor;
  }

  getlastVersionCurrentMajor(this: any): number {
    return this.versions[this.versions.length-1].data.currentMajor;
  }  
}