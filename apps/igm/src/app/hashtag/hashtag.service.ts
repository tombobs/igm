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

  getHashtags(ids?: number[]): Observable<IHashtag[]> {
    const params = this.makeParams({ids})
    return this.httpClient.get<IHashtag[]>(this.apiUrl + '/with-categories', {params});
  }

  generateHashtags(search: IHashtagSearch = {}): Observable<IHashtag[]> {
    const params = this.makeParams(search);
    return this.httpClient.get<IHashtag[]>(this.apiUrl + '/generate', {params});
  }

  addHashtag(hashtag: IHashtag): Observable<IHashtag> {
    return this.httpClient.post<IHashtag>(this.apiUrl, hashtag);
  }

  updateHashtag(hashtag: IHashtag): Observable<IHashtag> {
    return this.httpClient.put<IHashtag>(this.apiUrl + '/' + hashtag.id, hashtag);
  }

  deleteHashtag(hashtag: IHashtag): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + hashtag.id);
  }

  getCategories(ids?: number[]): Observable<ICategory[]> {
    const params = this.makeParams({ids})
    return this.httpClient.get<ICategory[]>(this.categoryApiUrl, {params});
  }

  addCategory(category: ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.categoryApiUrl, category);
  }

  updateCategory(category: ICategory): Observable<ICategory> {
    return this.httpClient.put<ICategory>(this.categoryApiUrl, category);
  }

  deleteCategory(category: ICategory): Observable<void> {
    return this.httpClient.delete<void>(this.categoryApiUrl + '/' + category.id);
  }

  getCategoryCount(): Observable<number> {
    return this.httpClient.get<number>(this.categoryApiUrl + '/count');
  }

  private makeParams(paramObject: Object): {[key: string]: string} {
    const params = {};
    for (const key in paramObject) {
      const value = paramObject[key];
      if (!value) {
        continue;
      }
      if (Array.isArray(value)) {
        params[key] = value.join(',');
      } else {
        params[key] = value.toString();
      }
    }
    return params;
  }
}
