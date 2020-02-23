import { Component, OnInit } from '@angular/core';
import { PostCategory } from 'src/app/shared/blog/shared/model/post-category';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BlogState } from 'src/app/shared/blog/reducers/blog.state';
import { BlogActionTypes } from 'src/app/shared/blog/reducers/blog.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public readonly POST_CATEGORIES = Object.keys(PostCategory);
  form : FormGroup;

  constructor(private store: Store<{ blog: BlogState }>) {
    this.form = new FormGroup({
      state: new FormControl(this.POST_CATEGORIES[1]),
    });
   }
  ngOnInit() {
    this.form.get('state').valueChanges.subscribe(val => {
      this.store.dispatch({type: BlogActionTypes.ChangeAppCategory, payload : val})
    });
  }
}
