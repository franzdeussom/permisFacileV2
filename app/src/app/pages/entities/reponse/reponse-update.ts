import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reponse } from './reponse.model';
import { ReponseService } from './reponse.service';
import { Question, QuestionService } from '../question';

@Component({
    selector: 'page-reponse-update',
    templateUrl: 'reponse-update.html'
})
export class ReponseUpdatePage implements OnInit {

    reponse: Reponse;
    questions: Question[];
    isSaving = false;
    isNew = true;
    isReadyToSave: boolean;

    form = this.formBuilder.group({
        id: [null, []],
        intitule: [null, [Validators.required]],
        reponseUnique: ['false', [Validators.required]],
        bonneReponse: ['false', []],
        question: [null, []],
    });

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected navController: NavController,
        protected formBuilder: FormBuilder,
        public platform: Platform,
        protected toastCtrl: ToastController,
        private questionService: QuestionService,
        private reponseService: ReponseService
    ) {

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

    }

    ngOnInit() {
        this.questionService.query()
            .subscribe(data => { this.questions = data.body; }, (error) => this.onError(error));
        this.activatedRoute.data.subscribe((response) => {
            this.reponse = response.data;
            this.isNew = this.reponse.id === null || this.reponse.id === undefined;
            this.updateForm(this.reponse);
        });
    }

    updateForm(reponse: Reponse) {
        this.form.patchValue({
            id: reponse.id,
            intitule: reponse.intitule,
            reponseUnique: reponse.reponseUnique,
            bonneReponse: reponse.bonneReponse,
            question: reponse.question,
        });
    }

    save() {
        this.isSaving = true;
        const reponse = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.reponseService.update(reponse));
        } else {
            this.subscribeToSaveResponse(this.reponseService.create(reponse));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<Reponse>>) {
        result.subscribe((res: HttpResponse<Reponse>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onError(res.error));
    }

    async onSaveSuccess(response) {
        let action = 'updated';
        if (response.status === 201) {
          action = 'created';
        }
        this.isSaving = false;
        const toast = await this.toastCtrl.create({message: `Reponse ${action} successfully.`, duration: 2000, position: 'middle'});
        await toast.present();
        await this.navController.navigateBack('/tabs/entities/reponse');
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

    private createFromForm(): Reponse {
        return {
            ...new Reponse(),
            id: this.form.get(['id']).value,
            intitule: this.form.get(['intitule']).value,
            reponseUnique: this.form.get(['reponseUnique']).value,
            bonneReponse: this.form.get(['bonneReponse']).value,
            question: this.form.get(['question']).value,
        };
    }

    compareQuestion(first: Question, second: Question): boolean {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }

    trackQuestionById(index: number, item: Question) {
        return item.id;
    }
}
