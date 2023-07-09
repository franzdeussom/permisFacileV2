"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_user-device_user-device_module_ts"],{

/***/ 7221:
/*!*****************************************************!*\
  !*** ./src/app/pages/entities/user-device/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDevice": () => (/* reexport safe */ _user_device_model__WEBPACK_IMPORTED_MODULE_0__.UserDevice),
/* harmony export */   "UserDeviceDetailPage": () => (/* reexport safe */ _user_device_detail__WEBPACK_IMPORTED_MODULE_2__.UserDeviceDetailPage),
/* harmony export */   "UserDevicePage": () => (/* reexport safe */ _user_device__WEBPACK_IMPORTED_MODULE_3__.UserDevicePage),
/* harmony export */   "UserDeviceService": () => (/* reexport safe */ _user_device_service__WEBPACK_IMPORTED_MODULE_1__.UserDeviceService)
/* harmony export */ });
/* harmony import */ var _user_device_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-device.model */ 3156);
/* harmony import */ var _user_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-device.service */ 2691);
/* harmony import */ var _user_device_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-device-detail */ 9472);
/* harmony import */ var _user_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-device */ 4190);






/***/ }),

/***/ 9472:
/*!******************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device-detail.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeviceDetailPage": () => (/* binding */ UserDeviceDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_device_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-device-detail.html?ngResource */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-device.service */ 2691);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let UserDeviceDetailPage = class UserDeviceDetailPage {
    constructor(navController, userDeviceService, activatedRoute, alertController) {
        this.navController = navController;
        this.userDeviceService = userDeviceService;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.userDevice = {};
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.userDevice = response.data;
        });
    }
    open(item) {
        this.navController.navigateForward('/tabs/entities/user-device/' + item.id + '/edit');
    }
    deleteModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
};
UserDeviceDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _user_device_service__WEBPACK_IMPORTED_MODULE_1__.UserDeviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
UserDeviceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'page-user-device-detail',
        template: _user_device_detail_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], UserDeviceDetailPage);



/***/ }),

/***/ 2681:
/*!******************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device-update.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeviceUpdatePage": () => (/* binding */ UserDeviceUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_device_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-device-update.html?ngResource */ 600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_device_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-device.model */ 3156);
/* harmony import */ var _user_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-device.service */ 2691);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ 9709);









let UserDeviceUpdatePage = class UserDeviceUpdatePage {
    constructor(activatedRoute, navController, formBuilder, platform, toastCtrl, userService, userDeviceService) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.userDeviceService = userDeviceService;
        this.isSaving = false;
        this.isNew = true;
        this.form = this.formBuilder.group({
            id: [null, []],
            deviceId: [null, []],
            dateRegistration: [null, []],
            lastUpdate: [null, []],
            userAccount: [null, []],
        });
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
    updateForm(userDevice) {
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
        }
        else {
            this.subscribeToSaveResponse(this.userDeviceService.create(userDevice));
        }
    }
    subscribeToSaveResponse(result) {
        result.subscribe((res) => this.onSaveSuccess(res), (res) => this.onError(res.error));
    }
    onSaveSuccess(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let action = 'updated';
            if (response.status === 201) {
                action = 'created';
            }
            this.isSaving = false;
            const toast = yield this.toastCtrl.create({ message: `UserDevice ${action} successfully.`, duration: 2000, position: 'middle' });
            yield toast.present();
            yield this.navController.navigateBack('/tabs/entities/user-device');
        });
    }
    previousState() {
        window.history.back();
    }
    onError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isSaving = false;
            console.error(error);
            const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
            yield toast.present();
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _user_device_model__WEBPACK_IMPORTED_MODULE_1__.UserDevice()), { id: this.form.get(['id']).value, deviceId: this.form.get(['deviceId']).value, dateRegistration: this.form.get(['dateRegistration']).value, lastUpdate: this.form.get(['lastUpdate']).value, userAccount: this.form.get(['userAccount']).value });
    }
    compareUser(first, second) {
        return first && first.id && second && second.id ? first.id === second.id : first === second;
    }
    trackUserById(index, item) {
        return item.id;
    }
};
UserDeviceUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _user_device_service__WEBPACK_IMPORTED_MODULE_2__.UserDeviceService }
];
UserDeviceUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'page-user-device-update',
        template: _user_device_update_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], UserDeviceUpdatePage);



/***/ }),

/***/ 3156:
/*!*****************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDevice": () => (/* binding */ UserDevice)
/* harmony export */ });
class UserDevice {
    constructor(id, deviceId, dateRegistration, lastUpdate, userAccount) {
        this.id = id;
        this.deviceId = deviceId;
        this.dateRegistration = dateRegistration;
        this.lastUpdate = lastUpdate;
        this.userAccount = userAccount;
    }
}


/***/ }),

/***/ 8788:
/*!******************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDevicePageModule": () => (/* binding */ UserDevicePageModule),
/* harmony export */   "UserDeviceResolve": () => (/* binding */ UserDeviceResolve)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/user-route-access.service */ 1284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _user_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-device */ 4190);
/* harmony import */ var _user_device_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-device-update */ 2681);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ 7221);













let UserDeviceResolve = class UserDeviceResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params.id ? route.params.id : null;
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((response) => response.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((userDevice) => userDevice.body));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(new ___WEBPACK_IMPORTED_MODULE_3__.UserDevice());
    }
};
UserDeviceResolve.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_3__.UserDeviceService }
];
UserDeviceResolve = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], UserDeviceResolve);

const routes = [
    {
        path: '',
        component: _user_device__WEBPACK_IMPORTED_MODULE_1__.UserDevicePage,
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: 'new',
        component: _user_device_update__WEBPACK_IMPORTED_MODULE_2__.UserDeviceUpdatePage,
        resolve: {
            data: UserDeviceResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: ___WEBPACK_IMPORTED_MODULE_3__.UserDeviceDetailPage,
        resolve: {
            data: UserDeviceResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: _user_device_update__WEBPACK_IMPORTED_MODULE_2__.UserDeviceUpdatePage,
        resolve: {
            data: UserDeviceResolve
        },
        data: {
            authorities: ['ROLE_USER']
        },
        canActivate: [_services_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService]
    }
];
let UserDevicePageModule = class UserDevicePageModule {
};
UserDevicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _user_device__WEBPACK_IMPORTED_MODULE_1__.UserDevicePage,
            _user_device_update__WEBPACK_IMPORTED_MODULE_2__.UserDeviceUpdatePage,
            ___WEBPACK_IMPORTED_MODULE_3__.UserDeviceDetailPage
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)
        ]
    })
], UserDevicePageModule);



/***/ }),

/***/ 2691:
/*!*******************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeviceService": () => (/* binding */ UserDeviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/api.service */ 5146);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ 1679);





let UserDeviceService = class UserDeviceService {
    constructor(http) {
        this.http = http;
        this.resourceUrl = _services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.API_URL + '/user-devices';
    }
    create(userDevice) {
        return this.http.post(this.resourceUrl, userDevice, { observe: 'response' });
    }
    update(userDevice) {
        return this.http.put(`${this.resourceUrl}/${userDevice.id}`, userDevice, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
};
UserDeviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserDeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], UserDeviceService);



/***/ }),

/***/ 4190:
/*!***********************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDevicePage": () => (/* binding */ UserDevicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_device_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-device.html?ngResource */ 2168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _user_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-device.service */ 2691);






let UserDevicePage = class UserDevicePage {
    // todo: add pagination
    constructor(navController, userDeviceService, toastCtrl, plt) {
        this.navController = navController;
        this.userDeviceService = userDeviceService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.userDevices = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAll();
        });
    }
    loadAll(refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.userDeviceService.query().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((res) => res.ok), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.body))
                .subscribe((response) => {
                this.userDevices = response;
                if (typeof (refresher) !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            }, (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                console.error(error);
                const toast = yield this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
                yield toast.present();
            }));
        });
    }
    trackId(index, item) {
        return item.id;
    }
    new() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/user-device/new');
        });
    }
    edit(item, userDevice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/user-device/' + userDevice.id + '/edit');
            yield item.close();
        });
    }
    delete(userDevice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.userDeviceService.delete(userDevice.id).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({ message: 'UserDevice deleted successfully.', duration: 3000, position: 'middle' });
                yield toast.present();
                yield this.loadAll();
            }), (error) => console.error(error));
        });
    }
    view(userDevice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navController.navigateForward('/tabs/entities/user-device/' + userDevice.id + '/view');
        });
    }
};
UserDevicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _user_device_service__WEBPACK_IMPORTED_MODULE_1__.UserDeviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
UserDevicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'page-user-device',
        template: _user_device_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], UserDevicePage);



/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* reexport safe */ _util_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)
/* harmony export */ });
/* harmony import */ var _util_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/request-util */ 9393);



/***/ }),

/***/ 9393:
/*!*********************************************!*\
  !*** ./src/app/shared/util/request-util.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach((key) => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ 3942:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device-detail.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"fixed\">ID</ion-label>\n      <div item-content>\n        <span id=\"id-content\">{{userDevice.id}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Device Id</ion-label>\n      <div item-content>\n        <span id=\"deviceId-content\">{{userDevice.deviceId}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Date Registration</ion-label>\n      <div item-content>\n        <span id=\"dateRegistration-content\">{{userDevice.dateRegistration | date:'mediumDate'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">Last Update</ion-label>\n      <div item-content>\n        <span id=\"lastUpdate-content\">{{userDevice.lastUpdate | date:'mediumDate'}}</span>\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label>User Account</ion-label>\n      <div item-content>{{userDevice.userAccount?.id}}</div>\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"open(userDevice)\">{{ 'EDIT_BUTTON' | translate }}</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"deleteModal(userDevice)\">{{ 'DELETE_BUTTON' | translate }}</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 600:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device-update.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Device</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!isReadyToSave\" (click)=\"save()\" color=\"primary\">\n        <span *ngIf=\"platform.is('ios')\">{{'DONE_BUTTON' | translate}}</span>\n        <ion-icon name=\"checkmark\" *ngIf=\"!platform.is('ios')\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form *ngIf=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <ion-list>\n      <!--<ion-item [hidden]=\"!form.id\">\n        <ion-label>ID</ion-label>\n        <ion-input type=\"hidden\" id=\"id\" formControlName=\"id\" readonly></ion-input>\n      </ion-item>-->\n      <ion-item>\n        <ion-label position=\"floating\">Device Id</ion-label>\n        <ion-input type=\"text\" name=\"deviceId\" formControlName=\"deviceId\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Date Registration</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"dateRegistration\" id=\"field_dateRegistration\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Last Update</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" formControlName=\"lastUpdate\" id=\"field_lastUpdate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>User Account</ion-label>\n        <ion-select id=\"field_userAccount\" formControlName=\"userAccount\" [compareWith]=\"compareUser\">\n          <ion-select-option [value]=\"null\"></ion-select-option>\n          <ion-select-option [value]=\"userOption\" *ngFor=\"let userOption of users; trackBy: trackUserById\"\n            >{{userOption.id}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 2168:
/*!************************************************************************!*\
  !*** ./src/app/pages/entities/user-device/user-device.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Devices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- todo: add elasticsearch support -->\n<ion-content class=\"ion-padding\">\n  <ion-refresher [disabled]=\"plt.is('desktop')\" slot=\"fixed\" (ionRefresh)=\"loadAll($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let userDevice of userDevices; trackBy: trackId\" #slidingItem>\n      <ion-item (click)=\"view(userDevice)\">\n        <ion-label text-wrap>\n          <p>{{userDevice.id}}</p>\n          <p>{{userDevice.deviceId}}</p>\n          <p>{{userDevice.dateRegistration | date:'mediumDate'}}</p>\n          <p>{{userDevice.lastUpdate | date:'mediumDate'}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"primary\" (click)=\"edit(slidingItem, userDevice)\"> {{ 'EDIT_BUTTON' | translate }} </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delete(userDevice)\"> {{ 'DELETE_BUTTON' | translate }} </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-item *ngIf=\"!userDevices?.length\">\n    <ion-label> No User Devices found. </ion-label>\n  </ion-item>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"new()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_user-device_user-device_module_ts.js.map