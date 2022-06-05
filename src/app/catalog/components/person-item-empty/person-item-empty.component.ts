import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-item-empty',
  templateUrl: './person-item-empty.component.html',
  styleUrls: ['./person-item-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonItemEmptyComponent implements OnDestroy {
  @Input() title: string;
  @Input() counter: Observable<number>;
  @Output() start = new EventEmitter();

  public startHandler(): void {
    this.start.emit();
  }

  public toProfileHandler(): void {
    this.router.navigate(['/profile']).then();
  }

  ngOnDestroy(): void {
    this.startHandler();
  }

  constructor(private router: Router) { }

}
