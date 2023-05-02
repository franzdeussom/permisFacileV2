import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api/api.service';
import { createRequestOption } from '../../../shared';
import { UserDevice } from './user-device.model';

@Injectable({ providedIn: 'root'})
export class UserDeviceService {
    private resourceUrl = ApiService.API_URL + '/user-devices';

    constructor(protected http: HttpClient) { }

    create(userDevice: UserDevice): Observable<HttpResponse<UserDevice>> {
        return this.http.post<UserDevice>(this.resourceUrl, userDevice, { observe: 'response'});
    }

    update(userDevice: UserDevice): Observable<HttpResponse<UserDevice>> {
        return this.http.put(`${this.resourceUrl}/${userDevice.id}`, userDevice, { observe: 'response'});
    }

    find(id: number): Observable<HttpResponse<UserDevice>> {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    query(req?: any): Observable<HttpResponse<UserDevice[]>> {
        const options = createRequestOption(req);
        return this.http.get<UserDevice[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }
}
