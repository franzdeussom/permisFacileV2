import { Component, OnInit } from '@angular/core';
import { UserDevice } from './user-device.model';
import { UserDeviceService } from './user-device.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'page-user-device-detail',
    templateUrl: 'user-device-detail.html'
})
export class UserDeviceDetailPage implements OnInit {
    userDevice: UserDevice = {};

    constructor(
        private navController: NavController,
        private userDeviceService: UserDeviceService,
        private activatedRoute: ActivatedRoute,
        private alertController: AlertController
    ) { }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.userDevice = response.data;
        });
    }

    open(item: UserDevice) {
        this.navController.navigateForward('/tabs/entities/user-device/' + item.id + '/edit');
    }

    async deleteModal(item: UserDevice) {
        const alert = await this.alertController.create({
            header: 'Confirm the deletion?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.userDeviceService.delete(item.id).subscribe(() => {
                            this.navController.navigateForward('/tabs/entities/user-device');
                        });
                    }
                }
            ]
        });
        await alert.present();
    }


}
