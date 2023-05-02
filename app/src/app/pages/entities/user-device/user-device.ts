import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { UserDevice } from './user-device.model';
import { UserDeviceService } from './user-device.service';

@Component({
    selector: 'page-user-device',
    templateUrl: 'user-device.html'
})
export class UserDevicePage {
    userDevices: UserDevice[];

    // todo: add pagination

    constructor(
        private navController: NavController,
        private userDeviceService: UserDeviceService,
        private toastCtrl: ToastController,
        public plt: Platform
    ) {
        this.userDevices = [];
    }

    async ionViewWillEnter() {
        await this.loadAll();
    }

    async loadAll(refresher?) {
        this.userDeviceService.query().pipe(
            filter((res: HttpResponse<UserDevice[]>) => res.ok),
            map((res: HttpResponse<UserDevice[]>) => res.body)
        )
        .subscribe(
            (response: UserDevice[]) => {
                this.userDevices = response;
                if (typeof(refresher) !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            },
            async (error) => {
                console.error(error);
                const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                await toast.present();
            });
    }

    trackId(index: number, item: UserDevice) {
        return item.id;
    }

    async new() {
        await this.navController.navigateForward('/tabs/entities/user-device/new');
    }

    async edit(item: IonItemSliding, userDevice: UserDevice) {
        await this.navController.navigateForward('/tabs/entities/user-device/' + userDevice.id + '/edit');
        await item.close();
    }

    async delete(userDevice) {
        this.userDeviceService.delete(userDevice.id).subscribe(async () => {
            const toast = await this.toastCtrl.create(
                {message: 'UserDevice deleted successfully.', duration: 3000, position: 'middle'});
            await toast.present();
            await this.loadAll();
        }, (error) => console.error(error));
    }

    async view(userDevice: UserDevice) {
        await this.navController.navigateForward('/tabs/entities/user-device/' + userDevice.id + '/view');
    }
}
