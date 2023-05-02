import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Reponse } from './reponse.model';
import { ReponseService } from './reponse.service';

@Component({
    selector: 'page-reponse',
    templateUrl: 'reponse.html'
})
export class ReponsePage {
    reponses: Reponse[];

    // todo: add pagination

    constructor(
        private navController: NavController,
        private reponseService: ReponseService,
        private toastCtrl: ToastController,
        public plt: Platform
    ) {
        this.reponses = [];
    }

    async ionViewWillEnter() {
        await this.loadAll();
    }

    async loadAll(refresher?) {
        this.reponseService.query().pipe(
            filter((res: HttpResponse<Reponse[]>) => res.ok),
            map((res: HttpResponse<Reponse[]>) => res.body)
        )
        .subscribe(
            (response: Reponse[]) => {
                this.reponses = response;
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

    trackId(index: number, item: Reponse) {
        return item.id;
    }

    async new() {
        await this.navController.navigateForward('/tabs/entities/reponse/new');
    }

    async edit(item: IonItemSliding, reponse: Reponse) {
        await this.navController.navigateForward('/tabs/entities/reponse/' + reponse.id + '/edit');
        await item.close();
    }

    async delete(reponse) {
        this.reponseService.delete(reponse.id).subscribe(async () => {
            const toast = await this.toastCtrl.create(
                {message: 'Reponse deleted successfully.', duration: 3000, position: 'middle'});
            await toast.present();
            await this.loadAll();
        }, (error) => console.error(error));
    }

    async view(reponse: Reponse) {
        await this.navController.navigateForward('/tabs/entities/reponse/' + reponse.id + '/view');
    }
}
