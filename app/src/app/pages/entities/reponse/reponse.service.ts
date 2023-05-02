import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api/api.service';
import { createRequestOption } from '../../../shared';
import { Reponse } from './reponse.model';

@Injectable({ providedIn: 'root'})
export class ReponseService {
    private resourceUrl = ApiService.API_URL + '/reponses';

    constructor(protected http: HttpClient) { }

    create(reponse: Reponse): Observable<HttpResponse<Reponse>> {
        return this.http.post<Reponse>(this.resourceUrl, reponse, { observe: 'response'});
    }

    update(reponse: Reponse): Observable<HttpResponse<Reponse>> {
        return this.http.put(`${this.resourceUrl}/${reponse.id}`, reponse, { observe: 'response'});
    }

    find(id: number): Observable<HttpResponse<Reponse>> {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    query(req?: any): Observable<HttpResponse<Reponse[]>> {
        const options = createRequestOption(req);
        return this.http.get<Reponse[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }
}
