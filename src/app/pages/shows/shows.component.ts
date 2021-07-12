import { Component, OnInit, Output, PipeTransform } from '@angular/core';
import { ShowService } from 'src/app/shared/services/show.service';
import { ShowModel } from './../../../../../backend/src/models/show.model';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [DecimalPipe],
})
export class ShowsComponent implements OnInit {
  @Output() newTitle = 'Nos spectacles';
  public showList: ShowModel[] = [];
  shows$: Observable<ShowModel[]>;
  filter = new FormControl('');
  constructor(private showService$: ShowService, pipe: DecimalPipe) {
    this.shows$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.getShowList();
  }
  getShowList() {
    this.showService$.findAllShows().subscribe((shows: ShowModel[]) => {
      this.showList = shows;
    });
    return this.showList;
  }
  search(text: string, pipe: PipeTransform): any {
    return this.showList.filter((show) => {
      const term = text.toLocaleLowerCase();
      return (
        show.title.toLocaleLowerCase().includes(term) ||
        pipe.transform(show.description).includes(term) ||
        pipe.transform(show.price).includes(term) ||
        pipe.transform(show.locations['description']).includes(term) ||
        pipe.transform(show.location_id).includes(term) ||
        pipe.transform(show.locations['address']).includes(term) ||
        pipe.transform(show.representations['when']).includes(term) ||
        pipe.transform(show.representations['location_id']).includes(term)
      );
    });
  }
}
