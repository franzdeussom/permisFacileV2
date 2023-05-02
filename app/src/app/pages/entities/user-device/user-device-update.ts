import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDevice } from './user-device.model';
import { UserDeviceService } from './user-device.service';
import { User } from '../../../services/user/user.model';
import { UserService } from '../../../services/user/user.service';

@Component({
    selector: 'page-user-device-update',
    templateUrl: 'user-device-update.html'
})
export class UserDeviceUpdatePage implements OnInit {

    userDevice: UserDevice;
    users: User[];
    dateRegistrationDp: any;
    lastUpdateDp: any;
    isSaving = false;
    isNew = true;
    isReadyToSave: boolean;

    form = this.formBuilder.group({
        id: [null, []],
        deviceId: [null, []],
        dateRegistration: [null, []],
        lastUpdate: [null, []],
        userAccount: [null, []],
    });

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected navController: NavController,
        protected formBuilder: FormBuilder,
        public platform: Platform,
        protected toastCtrl: ToastController,
        private userService: UserService,
        private userDeviceService: UserDeviceService
    ) {

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

    }

    ngOnInit() {
        this.userService.findAll().subscribe(data => this.users = data, (error) => this.onError(error));
        this.activatedRoute.data.subscribe((response) => {
            this.userDevice = response.data;
            this.isNew = this.userDevice.id === null || this.userDevice.id === undefined;
            this.updateForm(this.userDevice);
        });
    }

    updateForm(userDevice: UserDevice) {
        this.form.patchValue({
            id: userDevice.id,
            deviceId: userDevice.deviceId,
            dateRegistration: this.isNew ? new Date().toISOString().split('T')[0] : userDevice.dateRegistration,
            lastUpdate: this.isNew ? new Date().toISOString().split('T')[0] : userDevice.lastUpdate,
            userAccount: userDevice.userAccount,
        });
    }

    save() {
        this.isSaving = true;
        const userDevice = this.createFromForm();
        userDevice.dateRegistration = new Date(userDevice.dateRegistration).toISOString().split('T')[0];
        userDevice.lastUpdate = new Date(userDevice.lastUpdate).toISOString().split('T')[0];
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.userDeviceService.update(userDevice));
        } else {
            this.subscribeToSaveResponse(this.userDeviceService.create(userDevice));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<UserDevice>>) {
        result.subscribe((res: HttpResponse<UserDevice>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onError(res.error));
    }

    async onSaveSuccess(response) {
        let action = 'updated';
        if (response.status === 201) {
          action = 'created';
        }
        this.isSaving = false;
        const toast = await this.toastCtrl.create({message: `UserDevice ${action} successfully.`, duration: 2000, position: 'middle'});
        await toast.present();
        await this.navController.navigateBack('/tabs/entities/user-device');
    }

    previousState() {
        window.history.back();
    }

    async onError(error) {
        this.isSaving = false;
        console.error(error);
        const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        await toast.present();
    }

    private createFromForm(): UserDevice {
        return {
            ...new UserDevice(),
            id: this.form.get(['id']).value,
            deviceId: this.form.get(['deviceId']).value,
            dateRegistration: this.form.get(['dateRegistration']).value,
            lastUpdate: this.form.get(['lastUpdate']).value,
            userAccount: this.form.get(['userAccount']).value,
        };
    }

    compareUser(first: User, second: User): boolean {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }

    trackUserById(index: number, item: User) {
        return item.id;
    }
}
