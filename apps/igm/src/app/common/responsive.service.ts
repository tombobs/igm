import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  get isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(() => changeDetectorRef.detectChanges());
  }
}
