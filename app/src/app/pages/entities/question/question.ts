import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { Network } from '@capacitor/network';
import { Storage } from '@capacitor/storage';
import { GlobalService } from './globalService';

@Component({
    selector: 'page-question',
    templateUrl: 'question.html'
})
export class QuestionPage {
    questions: Question[];

    // todo: add pagination

    constructor(
        private navController: NavController,
        private questionService: QuestionService,
        private toastCtrl: ToastController,
        private globalService: GlobalService,
        public plt: Platform,
    
    ) {
        this.questions = [];
    }

    async ionViewWillEnter() {
        //await this.loadAll();
        await this.init()
    }

    async init() {
        const status = await Network.getStatus();
        console.log('Network status:', status);
        const { value } = await Storage.get({ key: 'questions' });
        if(!status.connected) {
            if(!value || value.length === 0 || value === "[]") {
                // no question and no connection
                const toast = await this.toastCtrl.create({message: 'Besoin d internet pour le chargement!', duration: 2000, position: 'middle'});
                await toast.present();
            }else {
                this.questions = JSON.parse(value);
                this.globalService.globalQuestion = this.questions;
            }
        }
        if(status.connected){
            if(!value || value.length === 0 || value === "[]") {
                this.questionService.query().pipe(
                    filter((res: HttpResponse<Question[]>) => res.ok),
                    map((res: HttpResponse<Question[]>) => res.body)
                )
                .subscribe(
                    (response: Question[]) => {
                        this.questions = response;
                        this.globalService.globalQuestion = this.questions;
                        Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });                     
                    });       
            }else{
                this.questions = JSON.parse(value);

                this.questionService.queryFromIndex(this.questions.length).pipe(
                    filter((res: HttpResponse<Question[]>) => res.ok),
                    map((res: HttpResponse<Question[]>) => res.body)
                )
                .subscribe(
                    (response: Question[]) => {
                        this.questions.concat(response);
                        //set singleton and save
                        this.globalService.globalQuestion = this.questions;
                        Storage.set({
                            key: 'questions',
                            value: JSON.stringify(this.questions)
                        });
                    },
                );   
            }
        }
        

    }

    async loadAll(refresher?) {
        this.questionService.query().pipe(
            filter((res: HttpResponse<Question[]>) => res.ok),
            map((res: HttpResponse<Question[]>) => res.body)
        )
        .subscribe(
            (response: Question[]) => {
                this.questions = response;
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





    

    trackId(index: number, item: Question) {
        return item.id;
    }

    async new() {
        await this.navController.navigateForward('/tabs/entities/question/new');
    }

    async edit(item: IonItemSliding, question: Question) {
        await this.navController.navigateForward('/tabs/entities/question/' + question.id + '/edit');
        await item.close();
    }

    async delete(question) {
        this.questionService.delete(question.id).subscribe(async () => {
            const toast = await this.toastCtrl.create(
                {message: 'Question deleted successfully.', duration: 3000, position: 'middle'});
            await toast.present();
            await this.loadAll();
        }, (error) => console.error(error));
    }

    async view(question: Question) {
        await this.navController.navigateForward('/tabs/entities/question/' + question.id + '/view');
    }
}
