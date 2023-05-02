import { Component, OnInit } from '@angular/core';
import { Reponse } from './reponse.model';
import { ReponseService } from './reponse.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'page-reponse-detail',
    templateUrl: 'reponse-detail.html'
})
export class ReponseDetailPage implements OnInit {
    reponse: Reponse = {};

    constructor(
        private navController: NavController,
        private reponseService: ReponseService,
        private activatedRoute: ActivatedRoute,
        private alertController: AlertController
    ) { }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.reponse = response.data;
        });
    }

    open(item: Reponse) {
        this.navController.navigateForward('/tabs/entities/reponse/' + item.id + '/edit');
    }

    async deleteModal(item: Reponse) {
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
                        this.reponseService.delete(item.id).subscribe(() => {
                            this.navController.navigateForward('/tabs/entities/reponse');
                        });
                    }
                }
            ]
        });
        await alert.present();
    }


}
