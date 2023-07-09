"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_entities_favourite-list_favourite-list_module_ts"],{

/***/ 1294:
/*!********************************************************************************!*\
  !*** ./src/app/pages/entities/favourite-list/favourite-list-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteListPageRoutingModule": () => (/* binding */ FavouriteListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _favourite_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-list.page */ 500);




const routes = [
    {
        path: '',
        component: _favourite_list_page__WEBPACK_IMPORTED_MODULE_0__.FavouriteListPage
    }
];
let FavouriteListPageRoutingModule = class FavouriteListPageRoutingModule {
};
FavouriteListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouriteListPageRoutingModule);



/***/ }),

/***/ 7063:
/*!************************************************************************!*\
  !*** ./src/app/pages/entities/favourite-list/favourite-list.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteListPageModule": () => (/* binding */ FavouriteListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _favourite_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourite-list-routing.module */ 1294);
/* harmony import */ var _favourite_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourite-list.page */ 500);







let FavouriteListPageModule = class FavouriteListPageModule {
};
FavouriteListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favourite_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouriteListPageRoutingModule
        ],
        declarations: [_favourite_list_page__WEBPACK_IMPORTED_MODULE_1__.FavouriteListPage]
    })
], FavouriteListPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_entities_favourite-list_favourite-list_module_ts.js.map