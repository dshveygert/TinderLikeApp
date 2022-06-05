import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IPerson, IStatus } from '../../../api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonItemComponent {
  @Input() person: IPerson;
  @Input() isMatchedNotification: boolean;
  @Input() counter: Observable<number>;
  @Input() loading: Observable<boolean>;
  @Output() like = new EventEmitter();
  @Output() disLike = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() back = new EventEmitter();

  private _like = 'LIKE';
  private _dislike = 'DISLIKE';
  private _next = 'Okay';

  get bgImage(): object {
    return { 'background-image': `url("${this.person?.photo}")` };
  }

  get status(): IStatus | null {
    return this.person?.status ?? null;
  }

  get dislikeButtonText(): string {
    return this.isDisliked ? this._next : this._dislike;
  }

  get likeButtonText(): string {
    return this.status?.liked ? this._next : this._like;
  }

  get isMatched(): boolean {
    return (this.status?.matched && this.status?.liked) || false;
  }

  get isDisliked(): boolean {
    return !!this.status?.disliked;
  }

  get isDisabled(): Observable<boolean> {
    return this.loading;
  }

  public likeHandler(): void {
    this.status?.liked ? this.next.emit() : this.like.emit();
  }

  public dislikeHandler(): void {
    this.status?.disliked ? this.next.emit() : this.disLike.emit();
  }

  public backHandler(): void {
    this.back.emit();
  }

  constructor() {}
}
