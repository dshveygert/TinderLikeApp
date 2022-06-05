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

  get emptyTitle(): string {
    return this.list.currentIndex > 0 ? 'List is empty' : 'Nothing was found';
  }

  get currentIndex(): Observable<number> {
    return this.list.currentIndex$;
  }

  get counter$(): Observable<number> {
    return this.list.data$.pipe(map(list => list?.length));
  }

  public nextAction(): void {
    this.list.nextPerson();
  }

  public backAction(): void {
    this.list.prevPerson();
  }

  public likeAction(person: IPerson): void {
    this.action('like', person.id);
  }

  public disLikeAction(person: IPerson): void {
    this.action('dislike', person.id);
  }

  public resetCounter(): void {
    this.list.resetCounter();
  }

  private action(type: 'like' | 'dislike', id: number): void {
    this.list.loading = true;
    this.dataSub.push(this.actions.personFeedback(type, id).pipe(first(), tap(status => {
      this.list.updateMatches(id, status);
    }), finalize(() => this.list.loading = false)).subscribe());
  }

  ngOnInit(): void {
    this.list.init();
  }

  ngOnDestroy(): void {
    this.list.destroy();
    fullUnsubscribe(this.dataSub);
  }

  constructor(public list: PersonListService, private actions: PersonActionsService) { }

}
