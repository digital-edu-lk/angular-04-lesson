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

  primaryVersion!: any;
  next!: Version;
  currentMajor: number = this.versions[this.versions.length-1].data.currentMajor;
  currentMinor: number = this.versions[this.versions.length-1].data.currentMinor;
  
  constructor() {}

  ngOnInit(): void {
    this.setPrimaryVersion();
  }

  ngDoCheck() {
    this.currentMajor = this.versions[this.versions.length-1].data.currentMajor;
    this.currentMinor = this.versions[this.versions.length-1].data.currentMinor;
  }

  setPrimaryVersion(): void {
    for (let version of this.versions) {
      if (version.type == 'primary') {
        this.primaryVersion = {
          primaryMinor: version.data.currentMinor,
          primaryMajor: version.data.currentMajor
        }
      } else {
        this.primaryVersion = {
          primaryMinor: 0,
          primaryMajor: 0
        }
      }
    }
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
    console.log(this.versions)
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