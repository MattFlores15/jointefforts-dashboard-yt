// badge.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private flowerCountSubject = new BehaviorSubject<number>(0);
  flowerCount$ = this.flowerCountSubject.asObservable();

  updateFlowerCount(count: number): void {
    this.flowerCountSubject.next(count);
  }
}
