import { I } from '@angular/cdk/keycodes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory, IHashtag, IHashtagSearch } from '@rly.gd/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  private apiUrl = 'hashtag';
  private categoryApiUrl = 'category';

  constructor(private httpClient: HttpClient) { }

  getHashtags(search: IHashtagSearch = {}): Observable<IHashtag[]> {
    const params = {};
    for (const key in search) {
      params[key] = search[key].toString();
    }

    return this.httpClient.get<IHashtag[]>(this.apiUrl, {params});
  }

  addHashtag(tag: IHashtag): Observable<IHashtag> {
    return this.httpClient.post<IHashtag>(this.apiUrl, tag);
  }

  getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.categoryApiUrl);
  }

  addCategory(category: ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.categoryApiUrl, category);
  }

  getCategoryCount(): Observable<number> {
    return this.httpClient.get<number>(this.categoryApiUrl + '/count');
  }
}
