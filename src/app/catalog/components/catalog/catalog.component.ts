import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {PersonListService} from "../../services/person-list.service";
import {IPerson} from "../../../api/models";
import {PersonActionsService} from "../../services/person-actions.service";
import {finalize, first, map, Observable, SubscriptionLike, tap} from "rxjs";
import {fullUnsubscribe} from "../../../../utils";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit, OnDestroy {
  public item: IPerson;
  private dataSub: SubscriptionLike[] = [];
  private _isMatched = false;

  get emptyTitle(): string {
    return this.list.currentIndex > 0 ? 'List is empty' : 'Nothing was found';
  }

  get currentIndex(): Observable<number> {
    return this.list.currentIndex$;
  }

  get counter$(): Observable<number> {
    return this.list.data$.pipe(map(list => list?.length));
  }

  get isMatched(): boolean {
    return this._isMatched;
  }

  public nextAction(): void {
    this._isMatched = false;
    this.list.nextPerson();
  }

  public backAction(): void {
    this.list.prevPerson();
  }

  public likeAction(person: IPerson): void {
    this.action('like', person.id);
  }

  public disLikeAction(person: IPerson): void {
    this._isMatched = false;
    this.action('dislike', person.id);
  }

  public resetCounter(): void {
    this.list.resetCounter();
  }

  private action(type: 'like' | 'dislike', id: number): void {
    this.list.loading = true;
    this.dataSub.push(this.actions.personFeedback(type, id).pipe(first(), tap(status => {
      this.list.updateMatches(id, status);
      if (status?.matched === true) {
        this._isMatched = true;
      }
    }), finalize(() => this.list.loading = false)).subscribe());
  }

  ngOnInit(): void {
    this.list.init();
  }

  ngOnDestroy(): void {
    this.list.destroy();
    this._isMatched = false;
    fullUnsubscribe(this.dataSub);
  }

  constructor(public list: PersonListService, private actions: PersonActionsService) { }

}
