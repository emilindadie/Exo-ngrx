import { Component, OnInit } from '@angular/core';
import { PostCategory } from 'src/app/shared/blog/shared/model/post-category';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { BlogState } from 'src/app/shared/blog/reducers/blog.state';
import { BlogActionTypes } from 'src/app/shared/blog/reducers/blog.action';
import { getAppCategory } from 'src/app/shared/blog/reducers/blog.selector';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public readonly POST_CATEGORIES = Object.keys(PostCategory);
  public form: FormGroup;

  constructor(private store: Store<{ blog: BlogState }>) {
   }
  ngOnInit() {
    this.store.pipe(
      select(getAppCategory),
      take(1),
    ).subscribe((currentCategory) => {
      this.form = new FormGroup({
        state: new FormControl(currentCategory),
      });
      this.form.get('state').valueChanges.subscribe(val => {
        this.store.dispatch({type: BlogActionTypes.ChangeAppCategory, payload : val});
      });
    });
  }
}
