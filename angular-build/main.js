(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alwin\OneDrive\Jobs\ComputerScience\Projects\Vacation_Planner\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "66Rd":
/*!********************************************************************************!*\
  !*** ./src/app/destination/destination-mobile/destination-mobile.component.ts ***!
  \********************************************************************************/
/*! exports provided: DestinationMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationMobileComponent", function() { return DestinationMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");














function DestinationMobileComponent_mat_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example: 1/20-1/25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_mat_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schedule your days off!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_see");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start your Vacation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_h3_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_see");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Start your Vacation from ", ctx_r4.departure_point, " to ", ctx_r4.destination, "!");
} }
function DestinationMobileComponent_mat_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Depart from...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_mat_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Depart from ", ctx_r6.departure_point, " ");
} }
function DestinationMobileComponent_mat_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Arrive at...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_mat_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Arrive at ", ctx_r8.destination, " ");
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DestinationMobileComponent_mat_expansion_panel_41_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value) === "At-Risk" || (_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value) === "Sick" ? "red" : "green"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value, " ");
} }
function DestinationMobileComponent_mat_expansion_panel_41_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationMobileComponent_mat_expansion_panel_41_mat_list_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacation_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vacation_r15.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vacation_r15.viewValue, " ");
} }
function DestinationMobileComponent_mat_expansion_panel_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DestinationMobileComponent_mat_expansion_panel_41_p_8_Template, 2, 4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-selection-list", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DestinationMobileComponent_mat_expansion_panel_41_p_11_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DestinationMobileComponent_mat_expansion_panel_41_mat_list_option_12_Template, 2, 2, "mat-list-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10.vacation);
} }
class DestinationMobileComponent {
    constructor() {
        this.vacationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.vacationGroups = [
            {
                name: 'Covid-19 Personal Status',
                disabled: false,
                vacation: [
                    { value: 'vaccinated', viewValue: 'Vaccinated', viewColor: 'green' },
                    { value: 'at-risk', viewValue: 'At-Risk' },
                    { value: 'sick', viewValue: 'Sick' }
                ]
            },
            {
                name: 'Purpose',
                vacation: [
                    { value: 'travel_blog', viewValue: 'Travel Blog' },
                    { value: 'business', viewValue: 'Business' },
                    { value: 'tourist', viewValue: 'Tourist' },
                ]
            },
            {
                name: 'Previously Visited...',
                vacation: [
                    { value: 'very-often', viewValue: '5-10+ times' },
                    { value: 'often', viewValue: '3-4 times' },
                    { value: 'rarely', viewValue: '1-2 times' },
                    { value: 'newcomer', viewValue: 'Never visited before.' }
                ]
            },
            {
                name: 'Interests',
                vacation: [
                    { value: 'exploration', viewValue: 'Exploration' },
                    { value: 'culture', viewValue: 'Culture' },
                    { value: 'dining', viewValue: 'Dining' },
                    { value: 'shopping', viewValue: 'Shopping' },
                    { value: 'late-night', viewValue: 'Late-Night' },
                    { value: 'indoors', viewValue: 'Indoors' },
                    { value: 'outdoors', viewValue: 'Outdoors' },
                ]
            },
            {
                name: 'Adventure',
                vacation: [
                    { value: "Hero's Journey", viewValue: "Hero's Journey" },
                    { value: 'adventurous', viewValue: 'Adventurous' },
                    { value: 'cautious', viewValue: 'Curious' },
                    { value: 'relaxed', viewValue: 'Relaxed' }
                ]
            },
            {
                name: 'Seasons',
                vacation: [
                    { value: 'winter', viewValue: 'Winter' },
                    { value: 'spring', viewValue: 'Spring' },
                    { value: 'summer', viewValue: 'Summer' },
                    { value: 'autumn', viewValue: 'Autumn' }
                ]
            }
        ];
        this.startDateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.endDateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.departurePointChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.destinationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.start_date = null;
        this.end_date = null;
        this.departure_point = "";
        this.destination = "";
        this.return_via = "";
        this.return_point = "";
    }
    ngOnInit() {
        this.startDateChangeSubscription = this.startDateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(startDate => {
            this.start_date = startDate;
        });
        this.endDateChangeSubscription = this.endDateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(endDate => {
            this.end_date = endDate;
        });
        this.departurePointChangeSubscription = this.departurePointChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(departurePoint => {
            this.departure_point = departurePoint;
        });
        this.destinationChangeSubscription = this.destinationChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(destination => {
            this.destination = destination;
        });
    }
    ngOnDestroy() {
        this.startDateChangeSubscription.unsubscribe();
        this.endDateChangeSubscription.unsubscribe();
        this.departurePointChangeSubscription.unsubscribe();
    }
}
DestinationMobileComponent.ɵfac = function DestinationMobileComponent_Factory(t) { return new (t || DestinationMobileComponent)(); };
DestinationMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DestinationMobileComponent, selectors: [["app-destination-mobile"]], viewQuery: function DestinationMobileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 42, vars: 15, consts: [["id", "mobile-only-destination-component", 1, "datepicker-and-select-form"], [1, "schedule-your-retreat"], [1, "vacation-heading"], [1, "material-icons"], ["appearance", "fill"], [4, "ngIf"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "name", "start_date", 3, "ngModel", "ngModelChange"], ["matEndDate", "", "placeholder", "End date", "name", "end_date", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "start-your-vacation"], ["class", "vacation-heading", 4, "ngIf"], ["appearance", "standard", 1, "choose-your-vacation-location"], ["for", "departure", 4, "ngIf"], ["type", "text", "required", "", "matInput", "", "name", "departure_point", 3, "ngModel", "ngModelChange"], [1, "choose-your-vacation-location"], ["for", "arrival", 4, "ngIf"], ["type", "text", "required", "", "matInput", "", "name", "destination", 3, "ngModel", "ngModelChange"], [1, "datepicker"], [1, "example-action-buttons"], [3, "click"], ["multi", "", 1, "example-headers-align"], [4, "ngFor", "ngForOf"], ["for", "departure"], ["for", "arrival"], [3, "ngStyle", 4, "ngIf"], [3, "multiple"], ["vacations", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "value"]], template: function DestinationMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "departure_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule your Retreat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DestinationMobileComponent_mat_label_8_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DestinationMobileComponent_mat_label_9_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-date-range-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationMobileComponent_Template_input_ngModelChange_11_listener($event) { return ctx.startDateChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationMobileComponent_Template_input_ngModelChange_12_listener($event) { return ctx.endDateChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-date-range-picker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DestinationMobileComponent_h3_18_Template, 5, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DestinationMobileComponent_h3_19_Template, 5, 2, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DestinationMobileComponent_mat_label_21_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DestinationMobileComponent_mat_label_22_Template, 2, 1, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationMobileComponent_Template_input_ngModelChange_23_listener($event) { return ctx.departurePointChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DestinationMobileComponent_mat_label_25_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DestinationMobileComponent_mat_label_26_Template, 2, 1, "mat-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationMobileComponent_Template_input_ngModelChange_27_listener($event) { return ctx.destinationChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Customize your Retreat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationMobileComponent_Template_button_click_36_listener() { return ctx.accordion.openAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Expand All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationMobileComponent_Template_button_click_38_listener() { return ctx.accordion.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Collapse All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-accordion", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DestinationMobileComponent_mat_expansion_panel_41_Template, 13, 5, "mat-expansion-panel", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.end_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.departure_point && !ctx.destination || (ctx.departure_point && !ctx.destination || !ctx.departure_point && ctx.destination));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departure_point && ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vacationGroups);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangePicker"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListOption"]], styles: [".datepicker-and-select-form[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n  .datepicker[_ngcontent-%COMP%] {\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  .vacation-heading[_ngcontent-%COMP%] {\r\n    color: purple;\r\n    \r\n\r\n    position: relative;\r\n    \r\n  }\r\n  \r\n  .vacation-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\r\n    padding-right: 7px;\r\n  }\r\n  .choose-your-vacation-location[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n  }\r\n  \r\n  \r\n  form[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    \r\n    margin: 40px 35px 0 35px;\r\n  }\r\n  \r\n  mat-form-field[_ngcontent-%COMP%] {\r\n    color: blue;\r\n  }\r\n  mat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\r\n    color: blue;\r\n    \r\n  }\r\n  \r\n  mat-datepicker-toggle[_ngcontent-%COMP%] {\r\n    color: purple;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc3RpbmF0aW9uLW1vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLHFCQUFxQjtFQUNyQjtJQUNFLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBR0Esd0NBQXdDO0VBQ3hDO0lBQ0UsYUFBYTtJQUNiLHNDQUFzQzs7SUFFdEMsa0JBQWtCO0lBQ2xCLDJHQUEyRztFQUM3RztFQUlBLGtDQUFrQztFQUNsQztJQUNFLGtCQUFrQjtFQUNwQjtFQUdBO0lBQ0UsZUFBZTtFQUNqQjtFQUdBLGlJQUFpSTtFQUNqSTs7Ozs7Ozs7S0FRRztFQUVIO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix3QkFBd0I7RUFDMUI7RUFJQSxvQ0FBb0M7RUFDcEM7SUFDRSxXQUFXO0VBQ2I7RUFFQTtJQUNFLFdBQVc7SUFDWCxpREFBaUQ7RUFDbkQ7RUFFQTs7S0FFRztFQUVIO0lBQ0UsYUFBYTtFQUNmO0VBRUE7O0tBRUciLCJmaWxlIjoiZGVzdGluYXRpb24tbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qIE1vYmlsZSBDb21wb25lbnQgKi9cclxuICAuZGF0ZXBpY2tlci1hbmQtc2VsZWN0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZGF0ZXBpY2tlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBDb2xvcnMgKyBGb250cyArIFBvc2l0aW9uICsgUGFkZGluZyAqL1xyXG4gIC52YWNhdGlvbi1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTsgKi9cclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyogR2l2ZSBJY29uIHNvbWUgcGFkZGluZy1yaWdodC4gKi9cclxuICAudmFjYXRpb24taGVhZGluZyBzcGFuOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5jaG9vc2UteW91ci12YWNhdGlvbi1sb2NhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogQm9yZGVyIG9ubHkgdW5kZXIgdGV4dCA9IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2Mzk5MjMyL3Jlc3RyaWN0LWJvcmRlci13aWR0aC10by10ZXh0LXdpZHRoLWluLWEtYmxvY2stZWxlbWVudCAqL1xyXG4gIC8qIC52YWNhdGlvbi1oZWFkaW5nIHNwYW46OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9ICovXHJcblxyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICAgIG1hcmdpbjogNDBweCAzNXB4IDAgMzVweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyogQW5ndWxhciBNYXRlcmlhbCBDb2xvcnMgKyBGb250cyAqL1xyXG4gIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgKi9cclxuICB9XHJcblxyXG4gIC8qIG1hdC1kYXRlLXJhbmdlLWlucHV0IGlucHV0IHtcclxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcclxuICB9ICovXHJcblxyXG4gIG1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gIH1cclxuXHJcbiAgLyogbWF0LWRhdGUtcmFuZ2UtcGlja2VyIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-destination-mobile',
                templateUrl: './destination-mobile.component.html',
                styleUrls: ['./destination-mobile.component.css']
            }]
    }], function () { return []; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"]]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _home_landing_page_home_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-landing-page/home-landing-page.component */ "Bf91");
/* harmony import */ var _home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-cards/home-cards.component */ "t2wk");
/* harmony import */ var _home_testimonial_home_testimonial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-testimonial/home-testimonial.component */ "aPWz");
/* harmony import */ var _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-footer/home-footer.component */ "B+5u");







class HomeComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isLinear = false;
        this.imgPath = "assets/images";
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-landing-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-testimonial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-footer");
    } }, directives: [_home_landing_page_home_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["HomeLandingPageComponent"], _home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_3__["HomeCardsComponent"], _home_testimonial_home_testimonial_component__WEBPACK_IMPORTED_MODULE_4__["HomeTestimonialComponent"], _home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_5__["HomeFooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  \r\n}\r\n\r\n \r\n\r\n\r\n \r\nmat-horizontal-stepper[_ngcontent-%COMP%], mat-vertical-stepper[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\r\n\r\n \r\nmat-step[_ngcontent-%COMP%] {\r\n  color: blue;\r\n}\r\n\r\n \r\n.matStepLabel[_ngcontent-%COMP%], .matStepperPrevious[_ngcontent-%COMP%], .matStepperNext[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCOztFQUV0Qix3RUFBd0U7RUFDeEUsd0JBQXdCO0FBQzFCOzs7QUFHQSxxQkFBcUI7OztBQUNyQjtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC8qIFRoZSBvdmVyZmxvdy14OiBoaWRkZW47IGNvZGUgbWVzc2VzIHVwIHRoZSBkZXBpY3Rpb24gb2YgdGhlIHF1b3RlcyEgKi9cclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbn1cclxuXHJcbiBcclxuLyogU3RlcHBlciBDU1MgQ29kZSAqL1xyXG5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLCBtYXQtdmVydGljYWwtc3RlcHBlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5tYXQtc3RlcCB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5tYXRTdGVwTGFiZWwsIC5tYXRTdGVwcGVyUHJldmlvdXMsIC5tYXRTdGVwcGVyTmV4dCB7XHJcbiAgY29sb3I6IHB1cnBsZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B+5u":
/*!***********************************************************!*\
  !*** ./src/app/home/home-footer/home-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFooterComponent", function() { return HomeFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeFooterComponent {
    constructor() {
        this.imgPath = "assets/images";
    }
    ngOnInit() {
    }
}
HomeFooterComponent.ɵfac = function HomeFooterComponent_Factory(t) { return new (t || HomeFooterComponent)(); };
HomeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeFooterComponent, selectors: [["app-home-footer"]], decls: 55, vars: 0, consts: [[1, "footer__first-row"], [1, "footer__second-row__first-section"], [1, "footer__second-row__second-section"], [1, "footer__second-row__third-section"], [1, "footer__second-row__fourth-section"], [1, "footer__second-row__fifth-section"], [1, "footer__last-row"]], template: function HomeFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logos in a display: flex;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mission Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Book a Flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "More...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "More...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Track your Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "More...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "CFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Copyright current year. This is not a real website. This is a project made for a portfolio. Enjoy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: auto;\r\n\r\n  grid-template-areas:\r\n    \"a a a a a\"\r\n    \"b c d e f\"\r\n    \"g g g g g\";\r\n}\r\n\r\n\r\n\r\n.footer__first-row[_ngcontent-%COMP%] {\r\n  grid-area: a\r\n}\r\n\r\n\r\n\r\n.footer__second-row__first-section[_ngcontent-%COMP%] {\r\n  grid-area: b\r\n}\r\n\r\n\r\n\r\n.footer__second-row__second-section[_ngcontent-%COMP%] {\r\n  grid-area: c\r\n}\r\n\r\n\r\n\r\n.footer__second-row__third-section[_ngcontent-%COMP%] {\r\n  grid-area: d\r\n}\r\n\r\n\r\n\r\n.footer__second-row__fourth-section[_ngcontent-%COMP%] {\r\n  grid-area: e\r\n}\r\n\r\n\r\n\r\n.footer__second-row__fifth-section[_ngcontent-%COMP%] {\r\n  grid-area: f\r\n}\r\n\r\n\r\n\r\n.footer__last-row[_ngcontent-%COMP%] {\r\n  grid-area: g\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjs7RUFFdEIsd0VBQXdFO0VBQ3hFLHdCQUF3QjtBQUMxQjs7OztBQUlBLGdCQUFnQjs7OztBQUVoQjtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsd0JBQXdCOztFQUV4Qjs7O2VBR2E7QUFDZjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUVBO0VBQ0U7QUFDRjs7OztBQUdBLDZCQUE2Qjs7OztBQUM3QjtFQUNFLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJob21lLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLyogVGhlIG92ZXJmbG93LXg6IGhpZGRlbjsgY29kZSBtZXNzZXMgdXAgdGhlIGRlcGljdGlvbiBvZiB0aGUgcXVvdGVzISAqL1xyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuXHJcblxyXG4vKiBGb290ZXIgR3JpZCAqL1xyXG5cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcblxyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImEgYSBhIGEgYVwiXHJcbiAgICBcImIgYyBkIGUgZlwiXHJcbiAgICBcImcgZyBnIGcgZ1wiO1xyXG59XHJcblxyXG4uZm9vdGVyX19maXJzdC1yb3cge1xyXG4gIGdyaWQtYXJlYTogYVxyXG59XHJcblxyXG4uZm9vdGVyX19zZWNvbmQtcm93X19maXJzdC1zZWN0aW9uIHtcclxuICBncmlkLWFyZWE6IGJcclxufVxyXG5cclxuLmZvb3Rlcl9fc2Vjb25kLXJvd19fc2Vjb25kLXNlY3Rpb24ge1xyXG4gIGdyaWQtYXJlYTogY1xyXG59XHJcblxyXG4uZm9vdGVyX19zZWNvbmQtcm93X190aGlyZC1zZWN0aW9uIHtcclxuICBncmlkLWFyZWE6IGRcclxufVxyXG5cclxuLmZvb3Rlcl9fc2Vjb25kLXJvd19fZm91cnRoLXNlY3Rpb24ge1xyXG4gIGdyaWQtYXJlYTogZVxyXG59XHJcblxyXG4uZm9vdGVyX19zZWNvbmQtcm93X19maWZ0aC1zZWN0aW9uIHtcclxuICBncmlkLWFyZWE6IGZcclxufVxyXG5cclxuLmZvb3Rlcl9fbGFzdC1yb3cge1xyXG4gIGdyaWQtYXJlYTogZ1xyXG59XHJcblxyXG5cclxuLyogRm9vdGVyIE1pc2NlbGxhbmVvdXMgQ1NTICovXHJcbmZvb3RlciBkaXYge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-footer',
                templateUrl: './home-footer.component.html',
                styleUrls: ['./home-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Bf91":
/*!***********************************************************************!*\
  !*** ./src/app/home/home-landing-page/home-landing-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: HomeLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingPageComponent", function() { return HomeLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeLandingPageComponent {
    constructor() {
        this.imgPath = "assets/images";
    }
    ngOnInit() {
    }
}
HomeLandingPageComponent.ɵfac = function HomeLandingPageComponent_Factory(t) { return new (t || HomeLandingPageComponent)(); };
HomeLandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLandingPageComponent, selectors: [["app-home-landing-page"]], decls: 5, vars: 1, consts: [[1, "cabana-hero-image"], ["alt", "Cabana picture.", 3, "src"]], template: function HomeLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enjoy your dream vacation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.imgPath, "/cabana.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cabana-hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  \r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 400px;\r\n  display: block;\r\n}\r\n\r\n\r\n.cabana-hero-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n  \r\n  top: 200px;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n\r\n  \r\n  font-size: 50px;\r\n  color: white;\r\n  \r\n}\r\n\r\n\r\n.cabana-hero-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 7px 5px;\r\n}\r\n\r\n\r\nfigcaption[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjs7RUFFdEIsNEVBQTRFO0VBQzVFLHdCQUF3QjtBQUMxQjs7O0FBR0EsdUJBQXVCOzs7QUFDdkI7RUFDRSwyRkFBMkY7RUFDM0YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsU0FBUztFQUNULGdDQUFnQzs7RUFFaEMsbUJBQW1CO0VBQ25CLGFBQWE7O0VBRWIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImhvbWUtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAvKiBUaGUgb3ZlcmZsb3cteDogaGlkZGVuOyBjb2RlIG1lc3NlcyB1cCB0aGUgZGVwaWN0aW9uIG9mIHRoZSBmaWdjYXB0aW9uISAqL1xyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuXHJcbi8qIEhlcm8gU2VjdGlvbiBJbWFnZSAqL1xyXG4uY2FiYW5hLWhlcm8taW1hZ2UgaW1nIHtcclxuICAvKiBjb3ZlciA9IEdvb2QgZm9yIGZpbGxpbmcgdGhlIHdob2xlIGhvcml6b250YWwgZGlzdGFuY2UuIFVzZSBcImNvbnRhaW5cIiBmb3IgY2FyZCBpbWFnZXMuICovXHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhYmFuYS1oZXJvLWltYWdlIGZpZ2NhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgLyogSGFsZiB0aGUgaW1hZ2UncyBoZWlnaHQuICovXHJcbiAgdG9wOiAyMDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMjgsIDApOyAqL1xyXG59XHJcblxyXG4uY2FiYW5hLWhlcm8taW1hZ2UgZmlnY2FwdGlvbiBwLCBmaWdjYXB0aW9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA3cHggNXB4O1xyXG59XHJcblxyXG5maWdjYXB0aW9uIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-landing-page',
                templateUrl: './home-landing-page.component.html',
                styleUrls: ['./home-landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OHmi":
/*!**********************************************************************************!*\
  !*** ./src/app/destination/destination-desktop/destination-desktop.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DestinationDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationDesktopComponent", function() { return DestinationDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");














function DestinationDesktopComponent_mat_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example: 1/20-1/25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_mat_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schedule your days off!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_see");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start your Vacation!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_h3_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_see");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Start your Vacation from ", ctx_r4.departure_point, " to ", ctx_r4.destination, "!");
} }
function DestinationDesktopComponent_mat_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Depart from...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_mat_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Depart from ", ctx_r6.departure_point, " ");
} }
function DestinationDesktopComponent_mat_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Arrive at...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_mat_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Arrive at ", ctx_r8.destination, " ");
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DestinationDesktopComponent_mat_expansion_panel_40_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value) === "At-Risk" || (_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value) === "Sick" ? "red" : "green"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value, " ");
} }
function DestinationDesktopComponent_mat_expansion_panel_40_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DestinationDesktopComponent_mat_expansion_panel_40_mat_list_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacation_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vacation_r15.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vacation_r15.viewValue, " ");
} }
function DestinationDesktopComponent_mat_expansion_panel_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DestinationDesktopComponent_mat_expansion_panel_40_p_8_Template, 2, 4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-selection-list", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DestinationDesktopComponent_mat_expansion_panel_40_p_11_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DestinationDesktopComponent_mat_expansion_panel_40_mat_list_option_12_Template, 2, 2, "mat-list-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(_r12.selectedOptions.selected[0] == null ? null : _r12.selectedOptions.selected[0].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10.vacation);
} }
class DestinationDesktopComponent {
    constructor() {
        this.vacationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.vacationGroups = [
            {
                name: 'Covid-19 Personal Status',
                disabled: false,
                vacation: [
                    { value: 'vaccinated', viewValue: 'Vaccinated', viewColor: 'green' },
                    { value: 'at-risk', viewValue: 'At-Risk' },
                    { value: 'sick', viewValue: 'Sick' }
                ]
            },
            {
                name: 'Purpose',
                vacation: [
                    { value: 'travel_blog', viewValue: 'Travel Blog' },
                    { value: 'business', viewValue: 'Business' },
                    { value: 'tourist', viewValue: 'Tourist' },
                ]
            },
            {
                name: 'Previously Visited...',
                vacation: [
                    { value: 'very-often', viewValue: '5-10+ times' },
                    { value: 'often', viewValue: '3-4 times' },
                    { value: 'rarely', viewValue: '1-2 times' },
                    { value: 'newcomer', viewValue: 'Never visited before.' }
                ]
            },
            {
                name: 'Interests',
                vacation: [
                    { value: 'exploration', viewValue: 'Exploration' },
                    { value: 'culture', viewValue: 'Culture' },
                    { value: 'dining', viewValue: 'Dining' },
                    { value: 'shopping', viewValue: 'Shopping' },
                    { value: 'late-night', viewValue: 'Late-Night' },
                    { value: 'indoors', viewValue: 'Indoors' },
                    { value: 'outdoors', viewValue: 'Outdoors' },
                ]
            },
            {
                name: 'Adventure',
                vacation: [
                    { value: "Hero's Journey", viewValue: "Hero's Journey" },
                    { value: 'adventurous', viewValue: 'Adventurous' },
                    { value: 'cautious', viewValue: 'Curious' },
                    { value: 'relaxed', viewValue: 'Relaxed' }
                ]
            },
            {
                name: 'Seasons',
                vacation: [
                    { value: 'winter', viewValue: 'Winter' },
                    { value: 'spring', viewValue: 'Spring' },
                    { value: 'summer', viewValue: 'Summer' },
                    { value: 'autumn', viewValue: 'Autumn' }
                ]
            }
        ];
        this.startDateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.endDateChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.departurePointChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.destinationChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.start_date = null;
        this.end_date = null;
        this.departure_point = "";
        this.destination = "";
        this.return_via = "";
        this.return_point = "";
    }
    ngOnInit() {
        this.startDateChangeSubscription = this.startDateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(startDate => {
            this.start_date = startDate;
        });
        this.endDateChangeSubscription = this.endDateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(endDate => {
            this.end_date = endDate;
        });
        this.departurePointChangeSubscription = this.departurePointChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(departurePoint => {
            this.departure_point = departurePoint;
        });
        this.destinationChangeSubscription = this.destinationChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000))
            .subscribe(destination => {
            this.destination = destination;
        });
    }
    ngOnDestroy() {
        this.startDateChangeSubscription.unsubscribe();
        this.endDateChangeSubscription.unsubscribe();
        this.departurePointChangeSubscription.unsubscribe();
    }
}
DestinationDesktopComponent.ɵfac = function DestinationDesktopComponent_Factory(t) { return new (t || DestinationDesktopComponent)(); };
DestinationDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DestinationDesktopComponent, selectors: [["app-destination-desktop"]], viewQuery: function DestinationDesktopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 41, vars: 15, consts: [["id", "desktop-only-destination-component"], [1, "schedule-your-retreat"], [1, "vacation-heading"], [1, "material-icons"], ["appearance", "fill"], [4, "ngIf"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "name", "start_date", 3, "ngModel", "ngModelChange"], ["matEndDate", "", "placeholder", "End date", "name", "end_date", 3, "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "start-your-vacation"], ["class", "vacation-heading", 4, "ngIf"], ["appearance", "standard", 1, "choose-your-vacation-location"], ["for", "departure", 4, "ngIf"], ["type", "text", "required", "", "matInput", "", "name", "departure_point", 3, "ngModel", "ngModelChange"], [1, "choose-your-vacation-location"], ["for", "arrival", 4, "ngIf"], ["type", "text", "required", "", "matInput", "", "name", "destination", 3, "ngModel", "ngModelChange"], [1, "datepicker"], [1, "example-action-buttons"], [3, "click"], ["multi", "", 1, "example-headers-align"], [4, "ngFor", "ngForOf"], ["for", "departure"], ["for", "arrival"], [3, "ngStyle", 4, "ngIf"], [3, "multiple"], ["vacations", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngStyle"], [3, "value"]], template: function DestinationDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "departure_board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Schedule your Retreat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DestinationDesktopComponent_mat_label_8_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DestinationDesktopComponent_mat_label_9_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-date-range-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationDesktopComponent_Template_input_ngModelChange_11_listener($event) { return ctx.startDateChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationDesktopComponent_Template_input_ngModelChange_12_listener($event) { return ctx.endDateChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-date-range-picker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DestinationDesktopComponent_h3_18_Template, 5, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DestinationDesktopComponent_h3_19_Template, 5, 2, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DestinationDesktopComponent_mat_label_21_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DestinationDesktopComponent_mat_label_22_Template, 2, 1, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationDesktopComponent_Template_input_ngModelChange_23_listener($event) { return ctx.departurePointChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DestinationDesktopComponent_mat_label_25_Template, 2, 0, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DestinationDesktopComponent_mat_label_26_Template, 2, 1, "mat-label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DestinationDesktopComponent_Template_input_ngModelChange_27_listener($event) { return ctx.destinationChanged.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Customize your Retreat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationDesktopComponent_Template_button_click_35_listener() { return ctx.accordion.openAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Expand All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationDesktopComponent_Template_button_click_37_listener() { return ctx.accordion.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Collapse All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-accordion", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DestinationDesktopComponent_mat_expansion_panel_40_Template, 13, 5, "mat-expansion-panel", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.end_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.departure_point && !ctx.destination || (ctx.departure_point && !ctx.destination || !ctx.departure_point && ctx.destination));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departure_point && ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.departure_point);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vacationGroups);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDateRangePicker"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListOption"]], styles: ["#desktop-only-destination-component[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.datepicker[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.vacation-heading[_ngcontent-%COMP%] {\r\n  color: purple;\r\n  \r\n\r\n  position: relative;\r\n  \r\n}\r\n\r\n.vacation-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\r\n  padding-right: 7px;\r\n}\r\n.choose-your-vacation-location[_ngcontent-%COMP%] {\r\n  padding: 0 10px;\r\n}\r\n\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n  \r\n  margin: 40px 35px 0 35px;\r\n  background-color: white;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  color: blue;\r\n}\r\nmat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  \r\n}\r\n\r\nmat-datepicker-toggle[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc3RpbmF0aW9uLWRlc2t0b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtDQUErQztBQUMvQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUdBLG9CQUFvQjtBQUNwQjtFQUNFLG9CQUFvQjtBQUN0QjtBQUdBLHdDQUF3QztBQUN4QztFQUNFLGFBQWE7RUFDYixzQ0FBc0M7O0VBRXRDLGtCQUFrQjtFQUNsQiwyR0FBMkc7QUFDN0c7QUFJQSxrQ0FBa0M7QUFDbEM7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtFQUNFLGVBQWU7QUFDakI7QUFHQSxpSUFBaUk7QUFDakk7Ozs7Ozs7O0dBUUc7QUFHSCwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7QUFHQSxvQ0FBb0M7QUFDcEM7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxpREFBaUQ7QUFDbkQ7QUFFQTs7R0FFRztBQUVIO0VBQ0UsYUFBYTtBQUNmO0FBRUE7O0dBRUciLCJmaWxlIjoiZGVzdGluYXRpb24tZGVza3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBDZW50ZXIgdGhlIERlc2t0b3AtT25seSBIb3Jpem9udGFsIFN0ZXBwZXIgKi9cclxuI2Rlc2t0b3Atb25seS1kZXN0aW5hdGlvbi1jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBEYXRlcGlja2VyIEZvcm0gKi9cclxuLmRhdGVwaWNrZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyogQ29sb3JzICsgRm9udHMgKyBQb3NpdGlvbiArIFBhZGRpbmcgKi9cclxuLnZhY2F0aW9uLWhlYWRpbmcge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7ICovXHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjsgKi9cclxufVxyXG5cclxuXHJcblxyXG4vKiBHaXZlIEljb24gc29tZSBwYWRkaW5nLXJpZ2h0LiAqL1xyXG4udmFjYXRpb24taGVhZGluZyBzcGFuOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxufVxyXG5cclxuXHJcbi5jaG9vc2UteW91ci12YWNhdGlvbi1sb2NhdGlvbiB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogQm9yZGVyIG9ubHkgdW5kZXIgdGV4dCA9IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2Mzk5MjMyL3Jlc3RyaWN0LWJvcmRlci13aWR0aC10by10ZXh0LXdpZHRoLWluLWEtYmxvY2stZWxlbWVudCAqL1xyXG4vKiAudmFjYXRpb24taGVhZGluZyBzcGFuOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59ICovXHJcblxyXG5cclxuLyogV2hpdGUgQmFja2dyb3VuZC1Db2xvciAqL1xyXG5mb3JtIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLyogbWFyZ2luLXRvcDogNDBweDsgKi9cclxuICBtYXJnaW46IDQwcHggMzVweCAwIDM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBBbmd1bGFyIE1hdGVyaWFsIENvbG9ycyArIEZvbnRzICovXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQgbWF0LWxhYmVsIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICAvKiBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyAqL1xyXG59XHJcblxyXG4vKiBtYXQtZGF0ZS1yYW5nZS1pbnB1dCBpbnB1dCB7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59ICovXHJcblxyXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi8qIG1hdC1kYXRlLXJhbmdlLXBpY2tlciB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationDesktopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-destination-desktop',
                templateUrl: './destination-desktop.component.html',
                styleUrls: ['./destination-desktop.component.css']
            }]
    }], function () { return []; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"]]
        }] }); })();


/***/ }),

/***/ "S1NW":
/*!**************************************************************************!*\
  !*** ./src/app/checklist/checklist-mobile/checklist-mobile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChecklistMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistMobileComponent", function() { return ChecklistMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");








function ChecklistMobileComponent_mat_expansion_panel_7_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subcategory_r3);
} }
function ChecklistMobileComponent_mat_expansion_panel_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChecklistMobileComponent_mat_expansion_panel_7_li_10_Template, 3, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.iconName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.subcategories);
} }
const _c0 = function (a0) { return { "desktop-centered-checklist-form": a0 }; };
class ChecklistMobileComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.updated = true;
        this.failed = false;
        this.items = [
            { name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
            { name: "Airport", iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
            { name: "Clothes", iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater'] },
            { name: "Electronics", iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop'] },
            { name: "Health", iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste'] }
        ];
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
    }
}
ChecklistMobileComponent.ɵfac = function ChecklistMobileComponent_Factory(t) { return new (t || ChecklistMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
ChecklistMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChecklistMobileComponent, selectors: [["app-checklist-mobile"]], viewQuery: function ChecklistMobileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 8, vars: 4, consts: [[3, "ngClass"], [1, "accordion-buttons"], [3, "click"], ["multi", ""], [4, "ngFor", "ngForOf"], [1, "material-icons"], [1, "subcategory-checkbox"]], template: function ChecklistMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklistMobileComponent_Template_button_click_2_listener() { return ctx.accordion.openAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Expand All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChecklistMobileComponent_Template_button_click_4_listener() { return ctx.accordion.closeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Collapse All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChecklistMobileComponent_mat_expansion_panel_7_Template, 11, 3, "mat-expansion-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.mobileSize === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], styles: ["button[_ngcontent-%COMP%] {\r\n    color: green;\r\n    border: 2px solid green;\r\n    padding: 4px;\r\n    margin: 5px 5px 5px 0;\r\n}\r\n\r\n  \r\n\r\n  .desktop-centered-checklist-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n    \r\n    min-height: 100vh;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    color: purple;\r\n    padding-top: 20px;\r\n    padding-left: 20px;\r\n\r\n    \r\n    min-height: 100vh;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n  ng-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n  mat-tab-group[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n\r\n  .mat-tab-category-name[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 3px;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n  }\r\n\r\n  mat-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 22px;\r\n    right: 67px;\r\n  }\r\n\r\n  \r\n\r\n  mat-tab-group[_ngcontent-%COMP%]:nth-child(odd), mat-tab-group[_ngcontent-%COMP%]:nth-child(odd)   section[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n  }\r\n\r\n  mat-tab-group[_ngcontent-%COMP%]:nth-child(even), mat-tab-group[_ngcontent-%COMP%]:nth-child(even)   section[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n  }\r\n\r\n  \r\n\r\n  mat-expansion-panel[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], mat-panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-panel-description[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n\r\n  \r\n\r\n  ng-template[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%], mat-tab[_ngcontent-%COMP%]   section[_ngcontent-%COMP%], mat-tab-header[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n\r\n  mat-tab-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 100px;\r\n    max-height: 200px;\r\n\r\n    padding: 0 10px;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%] {\r\n    color: blue;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  #desktop-tabs-only[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n\r\n  mat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n  }\r\n\r\n  mat-panel-title[_ngcontent-%COMP%] {\r\n    color: purple;\r\n  }\r\n\r\n  \r\n\r\n  .checkbox-category-name[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n    font-size: 120%;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n    color: green;\r\n  }\r\n\r\n  \r\n\r\n  .subcategory-checkbox[_ngcontent-%COMP%] {\r\n    color: purple;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC1tb2JpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7RUFFRTs7O0tBR0c7O0VBR0g7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjs7RUFHQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztFQUdBLCtGQUErRjs7RUFFL0YsOEJBQThCOztFQUM5QjtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUEsOEJBQThCOztFQUM5QixvRkFBb0Y7O0VBQ3BGLCtHQUErRzs7RUFDL0c7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUdBLCtFQUErRTs7RUFDL0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBSUEsa0RBQWtEOztFQUNsRDtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQSx3Q0FBd0M7O0VBQ3hDO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7O0lBRWpCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSxrREFBa0Q7O0VBQ2xEOzs7Ozs7S0FNRzs7RUFLSCxvQkFBb0I7O0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUdBLHFFQUFxRTs7RUFDckU7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFHQSw2Q0FBNkM7O0VBQzdDO0lBQ0UsYUFBYTtFQUNmOztFQUVBOzs7O0dBSUMiLCJmaWxlIjoiY2hlY2tsaXN0LW1vYmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG59XHJcblxyXG4gIC8qIC5hY2NvcmRpb24tYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICB9ICovXHJcblxyXG5cclxuICAuZGVza3RvcC1jZW50ZXJlZC1jaGVja2xpc3QtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcblxyXG4gIGZvcm0ge1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG5cclxuICAvKiBNYWtlIHN1cmUgbWF0LWFjY29yZGlvbiBoYXMgTk8gYmFja2dyb3VuZC4gRXZlcnl0aGluZyBlbHNlIGNhbiBiZSBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuXHJcbiAgLyogbmctdGVtcGxhdGUgaWNvbnMgc3R5bGluZyAqL1xyXG4gIG5nLXRlbXBsYXRlIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG5cclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLyogUkVBRCBUSElTIC0gRE8gTk9UIENIQU5HRSAqL1xyXG4gIC8qIFRoZSBtYXQtdGFiLWNhdGVnb3J5LW5hbWUgJiBNYXQtSWNvbiBhcmUgTk9UIHVzaW5nIEFuZ3VsYXIgTWF0ZXJpYWwgcG9zaXRpb25pbmcuKi9cclxuICAvKiBUaGUgTWF0LUljb24gaXMgcG9zaXRpb25lZCAxOXB4IGFic29sdXRlbHkgYWJvdmUgdGhlIG5hbWUuIEl0IGlzIG1vdmVkIGZyb20gdGhlIHJpZ2h0IDY3cHggdG8gXCJjZW50ZXJcIiBpdC4gKi9cclxuICAubWF0LXRhYi1jYXRlZ29yeS1uYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLyogcmlnaHQ6IDA7ICovXHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIycHg7XHJcbiAgICByaWdodDogNjdweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBFdmVyeSBvdGhlciBtYXQtdGFiLWdyb3VwICYgaXRzIGNoZWNrbGlzdCBzZWN0aW9ucyB3aWxsIGJlIHRoZSBzYW1lIGNvbG9yLiAqL1xyXG4gIG1hdC10YWItZ3JvdXA6bnRoLWNoaWxkKG9kZCksIG1hdC10YWItZ3JvdXA6bnRoLWNoaWxkKG9kZCkgc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cDpudGgtY2hpbGQoZXZlbiksIG1hdC10YWItZ3JvdXA6bnRoLWNoaWxkKGV2ZW4pIHNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qIE1hdC1FeHBhbnNpb24tUGFuZWwgd2hpdGUgYmFja2dyb3VuZCAtIE1vYmlsZSAqL1xyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLCBtYXQtcGFuZWwtdGl0bGUsIG1hdC1wYW5lbC10aXRsZSBzcGFuLCBtYXQtcGFuZWwtdGl0bGUgcCwgbWF0LXBhbmVsLWRlc2NyaXB0aW9uLCBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLyogTWF0LVRhYnMgd2hpdGUgYmFja2dyb3VuZCAtIERlc2t0b3AgKi9cclxuICBuZy10ZW1wbGF0ZSwgbWF0LXRhYi1ncm91cCwgbWF0LXRhYiBzZWN0aW9uLCBtYXQtdGFiLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIG1hdC10YWItZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24ge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAjZGVza3RvcC10YWJzLW9ubHkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLyogTWF0LUFjY29yZGlvbiBHcmlkIGlmIGRlc2t0b3AncyBzaXplID4gMTAwMHB4ICovXHJcbiAgLyogLmNoZWNrbGlzdC1mb3JtX19ncmlkLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICB9ICovXHJcblxyXG5cclxuXHJcblxyXG4gIC8qIE1hdC1QYW5lbCBUaXRsZSAqL1xyXG4gIG1hdC1wYW5lbC10aXRsZSBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgY29sb3I6IHB1cnBsZTtcclxuICB9XHJcblxyXG5cclxuICAvKiBDYXRlZ29yeSBOYW1lIChFc3NlbnRpYWxzLCBBaXJwb3J0LCBDbG90aGVzLCBFbGVjdHJvbmljLCBIZWFsdGgpICovXHJcbiAgLmNoZWNrYm94LWNhdGVnb3J5LW5hbWUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogQ2hlY2tib3hlcyB0byBjbGljayB3aXRoaW4gZWFjaCBDYXRlZ29yeSAqL1xyXG4gIC5zdWJjYXRlZ29yeS1jaGVja2JveCB7XHJcbiAgICBjb2xvcjogcHVycGxlO1xyXG4gIH1cclxuXHJcbiAgLyogZGVlcC1wdXJwbGUuYW1iZXIuY3NzIGhhcyB0aGUgZm9sbG93aW5nIGRlZmF1bHQgZm9udCBzdHlsZSBmb3IgbWF0LWNoZWNrYm94OlxyXG4gICAgLm1hdC1jaGVja2JveCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checklist-mobile',
                templateUrl: './checklist-mobile.component.html',
                styleUrls: ['./checklist-mobile.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"]]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "SzZM":
/*!******************************************************!*\
  !*** ./src/app/destination/destination.component.ts ***!
  \******************************************************/
/*! exports provided: DestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationComponent", function() { return DestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home-footer/home-footer.component */ "B+5u");
/* harmony import */ var _destination_desktop_destination_desktop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination-desktop/destination-desktop.component */ "OHmi");
/* harmony import */ var _destination_mobile_destination_mobile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination-mobile/destination-mobile.component */ "66Rd");







function DestinationComponent_app_destination_desktop_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-destination-desktop");
} }
function DestinationComponent_app_destination_mobile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-destination-mobile");
} }
const _c0 = function (a0) { return { "start-your-vacation-and-return-trip": a0 }; };
class DestinationComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
    }
}
DestinationComponent.ɵfac = function DestinationComponent_Factory(t) { return new (t || DestinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
DestinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DestinationComponent, selectors: [["app-destination"]], decls: 4, vars: 5, consts: [[3, "ngClass"], [4, "ngIf"]], template: function DestinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationComponent_app_destination_desktop_1_Template, 1, 0, "app-destination-desktop", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DestinationComponent_app_destination_mobile_2_Template, 1, 0, "app-destination-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.mobileSize === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_3__["HomeFooterComponent"], _destination_desktop_destination_desktop_component__WEBPACK_IMPORTED_MODULE_4__["DestinationDesktopComponent"], _destination_mobile_destination_mobile_component__WEBPACK_IMPORTED_MODULE_5__["DestinationMobileComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  min-height: 100vh;\r\n}\r\n\r\n.start-your-vacation-and-return-trip[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsdUZBQXVGO0VBQ3ZGLDREQUE0RDtFQUM1RCxpQkFBaUI7QUFDbkI7QUFHQSw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiZGVzdGluYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhY2tncm91bmQgSW1hZ2UgKi9cclxubWFpbiB7XHJcbiAgLyogVXNlIC4uLy4uL2Fzc2V0cy9pbWFnZXMvX19fXyA9IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2lzc3Vlcy8xMjc5NyAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZWFjaC5qcGcnKTsgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi8qIEZsZXggb25seSBpZiBEZXNrdG9wIFNpemUgKi9cclxuLnN0YXJ0LXlvdXItdmFjYXRpb24tYW5kLXJldHVybi10cmlwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-destination',
                templateUrl: './destination.component.html',
                styleUrls: ['./destination.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination/destination.component */ "SzZM");
/* harmony import */ var _costs_costs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./costs/costs.component */ "sHqL");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checklist/checklist.component */ "wrh2");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _checklist_checklist_mobile_checklist_mobile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checklist/checklist-mobile/checklist-mobile.component */ "S1NW");
/* harmony import */ var _checklist_checklist_desktop_checklist_desktop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checklist/checklist-desktop/checklist-desktop.component */ "oSKH");
/* harmony import */ var _destination_destination_desktop_destination_desktop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./destination/destination-desktop/destination-desktop.component */ "OHmi");
/* harmony import */ var _destination_destination_mobile_destination_mobile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./destination/destination-mobile/destination-mobile.component */ "66Rd");
/* harmony import */ var _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header-mobile/header-mobile.component */ "rTUA");
/* harmony import */ var _header_header_desktop_header_desktop_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header-desktop/header-desktop.component */ "pPMJ");
/* harmony import */ var _home_home_landing_page_home_landing_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home-landing-page/home-landing-page.component */ "Bf91");
/* harmony import */ var _home_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home-cards/home-cards.component */ "t2wk");
/* harmony import */ var _home_home_testimonial_home_testimonial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home-testimonial/home-testimonial.component */ "aPWz");
/* harmony import */ var _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home-footer/home-footer.component */ "B+5u");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_7__["ChecklistComponent"],
        _costs_costs_component__WEBPACK_IMPORTED_MODULE_6__["CostsComponent"],
        _destination_destination_component__WEBPACK_IMPORTED_MODULE_5__["DestinationComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _checklist_checklist_mobile_checklist_mobile_component__WEBPACK_IMPORTED_MODULE_13__["ChecklistMobileComponent"],
        _checklist_checklist_desktop_checklist_desktop_component__WEBPACK_IMPORTED_MODULE_14__["ChecklistDesktopComponent"],
        _destination_destination_desktop_destination_desktop_component__WEBPACK_IMPORTED_MODULE_15__["DestinationDesktopComponent"],
        _destination_destination_mobile_destination_mobile_component__WEBPACK_IMPORTED_MODULE_16__["DestinationMobileComponent"],
        _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_17__["HeaderMobileComponent"],
        _header_header_desktop_header_desktop_component__WEBPACK_IMPORTED_MODULE_18__["HeaderDesktopComponent"],
        _home_home_landing_page_home_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["HomeLandingPageComponent"],
        _home_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_20__["HomeCardsComponent"],
        _home_home_testimonial_home_testimonial_component__WEBPACK_IMPORTED_MODULE_21__["HomeTestimonialComponent"],
        _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_22__["HomeFooterComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_7__["ChecklistComponent"],
                    _costs_costs_component__WEBPACK_IMPORTED_MODULE_6__["CostsComponent"],
                    _destination_destination_component__WEBPACK_IMPORTED_MODULE_5__["DestinationComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _checklist_checklist_mobile_checklist_mobile_component__WEBPACK_IMPORTED_MODULE_13__["ChecklistMobileComponent"],
                    _checklist_checklist_desktop_checklist_desktop_component__WEBPACK_IMPORTED_MODULE_14__["ChecklistDesktopComponent"],
                    _destination_destination_desktop_destination_desktop_component__WEBPACK_IMPORTED_MODULE_15__["DestinationDesktopComponent"],
                    _destination_destination_mobile_destination_mobile_component__WEBPACK_IMPORTED_MODULE_16__["DestinationMobileComponent"],
                    _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_17__["HeaderMobileComponent"],
                    _header_header_desktop_header_desktop_component__WEBPACK_IMPORTED_MODULE_18__["HeaderDesktopComponent"],
                    _home_home_landing_page_home_landing_page_component__WEBPACK_IMPORTED_MODULE_19__["HomeLandingPageComponent"],
                    _home_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_20__["HomeCardsComponent"],
                    _home_home_testimonial_home_testimonial_component__WEBPACK_IMPORTED_MODULE_21__["HomeTestimonialComponent"],
                    _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_22__["HomeFooterComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aPWz":
/*!*********************************************************************!*\
  !*** ./src/app/home/home-testimonial/home-testimonial.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeTestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTestimonialComponent", function() { return HomeTestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeTestimonialComponent_mat_grid_tile_2_blockquote_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.text);
} }
function HomeTestimonialComponent_mat_grid_tile_2_figure_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tile_r1.imgSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.text);
} }
function HomeTestimonialComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeTestimonialComponent_mat_grid_tile_2_blockquote_1_Template, 6, 1, "blockquote", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeTestimonialComponent_mat_grid_tile_2_figure_2_Template, 4, 2, "figure", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", tile_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tile_r1.imgSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tile_r1.imgSource);
} }
class HomeTestimonialComponent {
    constructor() {
        this.imgPath = "assets/images";
        this.testimonialTiles = [
            { text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows: 1 },
            { text: "If I were a real person, I would give a 5-star rating for 5-star planning!", imgSource: '', cols: 2, rows: 1 },
            { text: "I am also not a real person, but this app is really good.", imgSource: '', cols: 2, rows: 1 },
            { text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows: 1 },
            { text: "Daisy Harley", imgSource: "assets/images/multi-colored-hair-testimonial.jpg", cols: 1, rows: 1 },
            { text: "I believe I'm real, and I know this app is fantastic!", imgSource: '', cols: 2, rows: 1 }
        ];
    }
    ngOnInit() {
    }
}
HomeTestimonialComponent.ɵfac = function HomeTestimonialComponent_Factory(t) { return new (t || HomeTestimonialComponent)(); };
HomeTestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeTestimonialComponent, selectors: [["app-home-testimonial"]], decls: 3, vars: 1, consts: [[1, "testimonials"], ["cols", "3", "rowHeight", "2:1"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [4, "ngIf"], [1, "large-quotation-mark"], ["alt", "Testimonial of an Apocryphal Customer.", 3, "src"]], template: function HomeTestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeTestimonialComponent_mat_grid_tile_2_Template, 3, 6, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonialTiles);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Libre+Baskerville&family=Lobster+Two&family=Merienda&family=Montserrat&family=Raleway&family=Roboto+Condensed&display=swap');\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%], mat-grid-list[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.testimonials[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.testimonials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  width: 50%;\r\n  height: 50%;\r\n}\r\n\r\n.testimonials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .testimonials[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n  max-height: 50%;\r\n\r\n  position: relative;\r\n\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n\r\n  text-align: center;\r\n}\r\n\r\n.testimonials[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.testimonials[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  \r\n}\r\n\r\n.large-quotation-mark[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-family: 'Cookie', 'cursive';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnTUFBZ007O0FBRWhNO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLHdFQUF3RTtFQUN4RSx3QkFBd0I7QUFDMUI7O0FBR0Esd0JBQXdCOztBQUN4QjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTs7RUFFZixrQkFBa0I7O0VBRWxCLFNBQVM7RUFDVCwyQkFBMkI7O0VBRTNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImhvbWUtdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9TGlicmUrQmFza2VydmlsbGUmZmFtaWx5PUxvYnN0ZXIrVHdvJmZhbWlseT1NZXJpZW5kYSZmYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9UmFsZXdheSZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC8qIFRoZSBvdmVyZmxvdy14OiBoaWRkZW47IGNvZGUgbWVzc2VzIHVwIHRoZSBkZXBpY3Rpb24gb2YgdGhlIHF1b3RlcyEgKi9cclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbn1cclxuXHJcblxyXG4vKiBUZXN0aW1vbmlhbCBzZWN0aW9uICovXHJcbnNlY3Rpb24sIG1hdC1ncmlkLWxpc3Qge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyBmaWd1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIGltZywgLnRlc3RpbW9uaWFscyBmaWdjYXB0aW9uIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzIGZpZ2NhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBUZXN0aW1vbmlhbCBRdW90ZSBTdHlsaW5nICovXHJcblxyXG4udGVzdGltb25pYWxzIGJsb2NrcXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvKiBtYXgtaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG4ubGFyZ2UtcXVvdGF0aW9uLW1hcmsge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LWZhbWlseTogJ0Nvb2tpZScsICdjdXJzaXZlJztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeTestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-testimonial',
                templateUrl: './home-testimonial.component.html',
                styleUrls: ['./home-testimonial.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-mobile/header-mobile.component */ "rTUA");
/* harmony import */ var _header_desktop_header_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-desktop/header-desktop.component */ "pPMJ");







function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destinations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checklist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_app_header_mobile_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-mobile");
} }
function HeaderComponent_app_header_desktop_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-desktop");
} }
class HeaderComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 5, consts: [[1, "original-surfer", "material-light-blue"], [4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vacation Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 2, 0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 2, 0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 2, 0, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_app_header_mobile_7_Template, 1, 0, "app-header-mobile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_app_header_desktop_8_Template, 1, 0, "app-header-desktop", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileSize);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_4__["HeaderMobileComponent"], _header_desktop_header_desktop_component__WEBPACK_IMPORTED_MODULE_5__["HeaderDesktopComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap');\n\n\nmat-toolbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n\r\n  top: 0;\r\n  left: 0;\r\n\r\n  \r\n  z-index: 96;\r\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0 15px;\r\n\r\n  border-style: solid;\r\n  border-color: white;\r\n  border-left: 0px;\r\n  border-top: 0px;\r\n  border-bottom: 0px;\r\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\r\n  position: absolute;\r\n  left: 10px;\r\n}\nmat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type, mat-toolbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n  border: 0px;\r\n}\n\n.original-surfer[_ngcontent-%COMP%] {\r\n  font-family: 'Original Surfer', cursive;\r\n  color: white;\r\n}\n.material-light-blue[_ngcontent-%COMP%] {\r\n  background-color: #2196F3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvRkFBb0Y7QUFEcEYscUNBQXFDO0FBSXJDLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjs7RUFFaEIsTUFBTTtFQUNOLE9BQU87O0VBRVAscURBQXFEO0VBQ3JELFdBQVc7QUFDYjtBQUdBLDZFQUE2RTtBQUM3RTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7O0VBRWYsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBR0EsK0JBQStCO0FBQy9CO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR29vZ2xlIEZvbnRzIGZvciBPcmlnaW5hbCBTdXJmZXIgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3JpZ2luYWwrU3VyZmVyJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbi8qIFN0aWNreSB0b29sYmFyICovXHJcbm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG5cclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgLyogTWFrZSBzdXJlIGNvbnRlbnQgY2Fubm90IGJlIHNlZW4gYmVoaW5kIHRvb2xiYXIuICovXHJcbiAgei1pbmRleDogOTY7XHJcbn1cclxuXHJcblxyXG4vKiBGbGV4IE5hdmJhciBVbCBMaTogY29kZSBmcm9tIG15IDFzdCBQcm9qZWN0IC0gRGVsdWdlIERlbGlnaHRzIFJlc3RhdXJhbnQgKi9cclxubWF0LXRvb2xiYXIge1xyXG4gIC8qIEZvcm1hdCBsaSBsaW5rcy4gKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHVsIGxpIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxuICBib3JkZXItYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHVsIGxpOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB1bCBsaTpmaXJzdC1vZi10eXBlLCBtYXQtdG9vbGJhciB1bCBsaTpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG5cclxuLyogQ29sb3JzICsgRm9udHMgZm9yIHRvb2xiYXIgKi9cclxuLm9yaWdpbmFsLXN1cmZlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcmlnaW5hbCBTdXJmZXInLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWxpZ2h0LWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "oSKH":
/*!****************************************************************************!*\
  !*** ./src/app/checklist/checklist-desktop/checklist-desktop.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChecklistDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDesktopComponent", function() { return ChecklistDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");





function ChecklistDesktopComponent_div_1_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subcategory_r3);
} }
function ChecklistDesktopComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChecklistDesktopComponent_div_1_li_8_Template, 3, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.subcategories);
} }
class ChecklistDesktopComponent {
    constructor() {
        this.updated = true;
        this.failed = false;
        this.items = [
            { name: "Essentials", iconName: "announcement", subcategories: ['Toiletries', 'Wallet', 'Phone', 'Credit Card', 'Cash'] },
            { name: "Airport", iconName: "flight_takeoff", subcategories: ['Passport', "Driver's License", 'Luggage', 'Ticket', 'Alarm'] },
            { name: "Clothes", iconName: "snowshoeing", subcategories: ['Shoes or Sandals', 'Socks', 'Pants or Shorts', 'Shirt', 'Sweater'] },
            { name: "Electronics", iconName: "add_a_photo", subcategories: ['Camera', 'Cell Phone', 'Charger', 'Power Adapter', 'Laptop'] },
            { name: "Health", iconName: "health_and_safety", subcategories: ['Medications', 'Sunblock', 'Vitamins', 'Insect Repellant', 'Toothbrush & Toothpaste'] }
        ];
    }
    ngOnInit() {
    }
}
ChecklistDesktopComponent.ɵfac = function ChecklistDesktopComponent_Factory(t) { return new (t || ChecklistDesktopComponent)(); };
ChecklistDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChecklistDesktopComponent, selectors: [["app-checklist-desktop"]], decls: 2, vars: 1, consts: [["id", "desktop-tabs-only", 1, "desktop-centered-checklist-form"], [4, "ngFor", "ngForOf"], [1, "checkbox-header"], [1, "material-icons"], [1, "mat-tab-category-name"], [1, "subcategory-checkbox"]], template: function ChecklistDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChecklistDesktopComponent_div_1_Template, 9, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"]], styles: [".desktop-centered-checklist-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  \r\n  \r\n  \r\n}\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n  color: purple;\r\n  padding-top: 20px;\r\n  padding-left: 20px;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nng-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n\r\nmat-tab-group[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n  padding-top: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mat-tab-category-name[_ngcontent-%COMP%] {\r\n  \r\n  bottom: 3px;\r\n  left: 0;\r\n  right: 0;\r\n  \r\n}\r\n\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 22px;\r\n  right: 67px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nmat-tab-group[_ngcontent-%COMP%]:nth-child(odd), mat-tab-group[_ngcontent-%COMP%]:nth-child(odd)   section[_ngcontent-%COMP%] {\r\n  background-color: blue;\r\n}\r\n\r\n\r\nmat-tab-group[_ngcontent-%COMP%]:nth-child(even), mat-tab-group[_ngcontent-%COMP%]:nth-child(even)   section[_ngcontent-%COMP%] {\r\n  background-color: green;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.checkbox-header[_ngcontent-%COMP%], div[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  padding: 0 10px;\r\n}\r\n\r\n\r\n#desktop-tabs-only[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nmat-panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\nmat-panel-title[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.checkbox-category-name[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n  font-size: 120%;\r\n}\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.subcategory-checkbox[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC1kZXNrdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7O0FBR0EsK0ZBQStGOzs7QUFFL0YsOEJBQThCOzs7QUFDOUI7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBLDhCQUE4Qjs7O0FBQzlCLG9GQUFvRjs7O0FBQ3BGLCtHQUErRzs7O0FBQy9HO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUdBLCtFQUErRTs7O0FBQy9FO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBSUEsd0NBQXdDOzs7QUFDeEM7RUFDRSx1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQSxrREFBa0Q7OztBQUNsRDs7Ozs7O0dBTUc7OztBQUtILG9CQUFvQjs7O0FBQ3BCO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0EscUVBQXFFOzs7QUFDckU7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQSw2Q0FBNkM7OztBQUM3QztFQUNFLGFBQWE7QUFDZjs7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJjaGVja2xpc3QtZGVza3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtY2VudGVyZWQtY2hlY2tsaXN0LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cclxufVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDEwMHZoOyAqL1xyXG59XHJcblxyXG5cclxuLyogTWFrZSBzdXJlIG1hdC1hY2NvcmRpb24gaGFzIE5PIGJhY2tncm91bmQuIEV2ZXJ5dGhpbmcgZWxzZSBjYW4gYmUgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcblxyXG4vKiBuZy10ZW1wbGF0ZSBpY29ucyBzdHlsaW5nICovXHJcbm5nLXRlbXBsYXRlIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi8qIFJFQUQgVEhJUyAtIERPIE5PVCBDSEFOR0UgKi9cclxuLyogVGhlIG1hdC10YWItY2F0ZWdvcnktbmFtZSAmIE1hdC1JY29uIGFyZSBOT1QgdXNpbmcgQW5ndWxhciBNYXRlcmlhbCBwb3NpdGlvbmluZy4qL1xyXG4vKiBUaGUgTWF0LUljb24gaXMgcG9zaXRpb25lZCAxOXB4IGFic29sdXRlbHkgYWJvdmUgdGhlIG5hbWUuIEl0IGlzIG1vdmVkIGZyb20gdGhlIHJpZ2h0IDY3cHggdG8gXCJjZW50ZXJcIiBpdC4gKi9cclxuLm1hdC10YWItY2F0ZWdvcnktbmFtZSB7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLyogcmlnaHQ6IDA7ICovXHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIHJpZ2h0OiA2N3B4O1xyXG59XHJcblxyXG5cclxuLyogRXZlcnkgb3RoZXIgbWF0LXRhYi1ncm91cCAmIGl0cyBjaGVja2xpc3Qgc2VjdGlvbnMgd2lsbCBiZSB0aGUgc2FtZSBjb2xvci4gKi9cclxubWF0LXRhYi1ncm91cDpudGgtY2hpbGQob2RkKSwgbWF0LXRhYi1ncm91cDpudGgtY2hpbGQob2RkKSBzZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwOm50aC1jaGlsZChldmVuKSwgbWF0LXRhYi1ncm91cDpudGgtY2hpbGQoZXZlbikgc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLyogTWF0LVRhYnMgd2hpdGUgYmFja2dyb3VuZCAtIERlc2t0b3AgKi9cclxuLmNoZWNrYm94LWhlYWRlciwgZGl2LCBzZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuI2Rlc2t0b3AtdGFicy1vbmx5IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIE1hdC1BY2NvcmRpb24gR3JpZCBpZiBkZXNrdG9wJ3Mgc2l6ZSA+IDEwMDBweCAqL1xyXG4vKiAuY2hlY2tsaXN0LWZvcm1fX2dyaWQtbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcbi8qIE1hdC1QYW5lbCBUaXRsZSAqL1xyXG5tYXQtcGFuZWwtdGl0bGUgc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxubWF0LXBhbmVsLXRpdGxlIHtcclxuICBjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG5cclxuLyogQ2F0ZWdvcnkgTmFtZSAoRXNzZW50aWFscywgQWlycG9ydCwgQ2xvdGhlcywgRWxlY3Ryb25pYywgSGVhbHRoKSAqL1xyXG4uY2hlY2tib3gtY2F0ZWdvcnktbmFtZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuLyogQ2hlY2tib3hlcyB0byBjbGljayB3aXRoaW4gZWFjaCBDYXRlZ29yeSAqL1xyXG4uc3ViY2F0ZWdvcnktY2hlY2tib3gge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi8qIGRlZXAtcHVycGxlLmFtYmVyLmNzcyBoYXMgdGhlIGZvbGxvd2luZyBkZWZhdWx0IGZvbnQgc3R5bGUgZm9yIG1hdC1jaGVja2JveDpcclxuICAubWF0LWNoZWNrYm94IHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistDesktopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checklist-desktop',
                templateUrl: './checklist-desktop.component.html',
                styleUrls: ['./checklist-desktop.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pPMJ":
/*!*******************************************************************!*\
  !*** ./src/app/header/header-desktop/header-desktop.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDesktopComponent", function() { return HeaderDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/home.component */ "9vUh");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../destination/destination.component */ "SzZM");
/* harmony import */ var _costs_costs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../costs/costs.component */ "sHqL");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../checklist/checklist.component */ "wrh2");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function HeaderDesktopComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderDesktopComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "emoji_transportation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Destinations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderDesktopComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderDesktopComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Supplies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderDesktopComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderDesktopComponent.ɵfac = function HeaderDesktopComponent_Factory(t) { return new (t || HeaderDesktopComponent)(); };
HeaderDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderDesktopComponent, selectors: [["app-header-desktop"]], decls: 13, vars: 0, consts: [["mat-tab-label", ""], ["label", "Travel Destinations", 1, "desktop-size-only"], ["label", "Travel Expenses", 1, "desktop-size-only"], ["label", "Travel Supplies", 1, "desktop-size-only"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "mat-tab-category-name"], ["aria-hidden", "false", "aria-label", "Example emoji_transportation icon"]], template: function HeaderDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderDesktopComponent_ng_template_2_Template, 5, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderDesktopComponent_ng_template_5_Template, 5, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderDesktopComponent_ng_template_8_Template, 5, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderDesktopComponent_ng_template_11_Template, 5, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLabel"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _destination_destination_component__WEBPACK_IMPORTED_MODULE_3__["DestinationComponent"], _costs_costs_component__WEBPACK_IMPORTED_MODULE_4__["CostsComponent"], _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__["ChecklistComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap');\n\n\n\n\n.mat-tab-category-name[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 25px;\r\n  left: 0;\r\n  right: 0;\r\n  \r\n}\nmat-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 22px;\r\n  right: 67px;\r\n}\n\nng-template[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\nng-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  display: flex;\r\n}\nmat-icon[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\n.mat-tab-label[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  font-weight: 600;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1kZXNrdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9GQUFvRjtBQURwRixxQ0FBcUM7QUFJckMsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtSkFBbUo7QUFDbko7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFJQSxvSkFBb0o7QUFDcEo7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFJQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaURBQWlEO0FBQ25EIiwiZmlsZSI6ImhlYWRlci1kZXNrdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgRm9udHMgZm9yIE9yaWdpbmFsIFN1cmZlciAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcmlnaW5hbCtTdXJmZXImZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuLyogUkVBRCBUSElTIC0gRE8gTk9UIENIQU5HRSAqL1xyXG4vKiBUaGUgbWF0LXRhYi1jYXRlZ29yeS1uYW1lICYgTWF0LUljb24gYXJlIE5PVCB1c2luZyBkZWZhdWx0IEFuZ3VsYXIgTWF0ZXJpYWwgcG9zaXRpb25pbmcuKi9cclxuLyogQm90aCB0aGUgbWF0LXRhYi1jYXRlZ29yeS1uYW1lIGFuZCBtYXQtaWNvbiBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJlY2F1c2UgdGhlIE1hdC1UYWJzIHdpbGwgbm90IGFsbG93IHRoZWlyIGRlZmF1bHQgaGVpZ2h0cyB0byBiZSBjaGFuZ2VkLiAqL1xyXG4ubWF0LXRhYi1jYXRlZ29yeS1uYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLyogcmlnaHQ6IDA7ICovXHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIHJpZ2h0OiA2N3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZvcm1hdCBNYXQgVGFicyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzEwMTQxICYgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTA3MjIxODMvYW5ndWxhci1tYXRlcmlhbC10YWItaGVpZ2h0ICovXHJcbm5nLXRlbXBsYXRlIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubmctdGVtcGxhdGUgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG5cclxuLyogQ29sb3JzICsgRm9udHMgZm9yIHRvb2xiYXIgKi9cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7ICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderDesktopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-desktop',
                templateUrl: './header-desktop.component.html',
                styleUrls: ['./header-desktop.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rTUA":
/*!*****************************************************************!*\
  !*** ./src/app/header/header-mobile/header-mobile.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMobileComponent", function() { return HeaderMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/home.component */ "9vUh");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../destination/destination.component */ "SzZM");
/* harmony import */ var _costs_costs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../costs/costs.component */ "sHqL");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../checklist/checklist.component */ "wrh2");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function HeaderMobileComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderMobileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "emoji_transportation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Destinations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderMobileComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderMobileComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Supplies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderMobileComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderMobileComponent.ɵfac = function HeaderMobileComponent_Factory(t) { return new (t || HeaderMobileComponent)(); };
HeaderMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderMobileComponent, selectors: [["app-header-mobile"]], decls: 13, vars: 0, consts: [["animationDuration", "0ms", 1, "centered-mat-tab"], ["mat-tab-label", ""], [1, "desktop-size-only"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "mat-tab-category-name"], ["aria-hidden", "false", "aria-label", "Example emoji_transportation icon"]], template: function HeaderMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderMobileComponent_ng_template_2_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderMobileComponent_ng_template_5_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderMobileComponent_ng_template_8_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderMobileComponent_ng_template_11_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabLabel"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _destination_destination_component__WEBPACK_IMPORTED_MODULE_3__["DestinationComponent"], _costs_costs_component__WEBPACK_IMPORTED_MODULE_4__["CostsComponent"], _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_5__["ChecklistComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap');\n\n\n\n\n.mat-tab-category-name[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 25px;\r\n  left: 0;\r\n  right: 0;\r\n  \r\n}\nmat-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 22px;\r\n  right: 67px;\r\n}\n\n.centered-mat-tab[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\n\nng-template[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\nng-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\nmat-tab-group[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  display: flex;\r\n}\nmat-icon[_ngcontent-%COMP%] {\r\n  color: purple;\r\n}\n.mat-tab-label[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  font-weight: 600;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1tb2JpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0ZBQW9GO0FBRHBGLHFDQUFxQztBQUlyQyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1KQUFtSjtBQUNuSjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUlBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUdBLG9KQUFvSjtBQUVwSjtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQU1BO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtBQUNuRCIsImZpbGUiOiJoZWFkZXItbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHb29nbGUgRm9udHMgZm9yIE9yaWdpbmFsIFN1cmZlciAqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcmlnaW5hbCtTdXJmZXImZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuLyogUkVBRCBUSElTIC0gRE8gTk9UIENIQU5HRSAqL1xyXG4vKiBUaGUgbWF0LXRhYi1jYXRlZ29yeS1uYW1lICYgTWF0LUljb24gYXJlIE5PVCB1c2luZyBkZWZhdWx0IEFuZ3VsYXIgTWF0ZXJpYWwgcG9zaXRpb25pbmcuKi9cclxuLyogQm90aCB0aGUgbWF0LXRhYi1jYXRlZ29yeS1uYW1lIGFuZCBtYXQtaWNvbiBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGJlY2F1c2UgdGhlIE1hdC1UYWJzIHdpbGwgbm90IGFsbG93IHRoZWlyIGRlZmF1bHQgaGVpZ2h0cyB0byBiZSBjaGFuZ2VkLiAqL1xyXG4ubWF0LXRhYi1jYXRlZ29yeS1uYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLyogcmlnaHQ6IDA7ICovXHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIHJpZ2h0OiA2N3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIENlbnRlcmVkIFRhYnMgKi9cclxuLmNlbnRlcmVkLW1hdC10YWIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBGb3JtYXQgTWF0IFRhYnMgLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8xMDE0MSAmIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUwNzIyMTgzL2FuZ3VsYXItbWF0ZXJpYWwtdGFiLWhlaWdodCAqL1xyXG5cclxubmctdGVtcGxhdGUge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5uZy10ZW1wbGF0ZSBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogcHVycGxlO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbCB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvKiBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmOyAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-mobile',
                templateUrl: './header-mobile.component.html',
                styleUrls: ['./header-mobile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sHqL":
/*!******************************************!*\
  !*** ./src/app/costs/costs.component.ts ***!
  \******************************************/
/*! exports provided: CostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostsComponent", function() { return CostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/home-footer/home-footer.component */ "B+5u");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");














function CostsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostsComponent_div_13_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setCostIndex(i_r5); })("ngModelChange", function CostsComponent_div_13_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.costsModelChanged.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cost_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cost_r4.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, cost_r4.value, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cost_r4.iconName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", cost_r4.value);
} }
function CostsComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costs have not been updated. Please remove your response and try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CostsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Cost = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.totalCost, "USD"), " ");
} }
const _c0 = function (a0) { return { "desktop-centered-costs-form": a0 }; };
const _c1 = function (a0) { return { "mat-card__desktop-size-only": a0 }; };
const _c2 = function (a0) { return { "max-width": a0 }; };
class CostsComponent {
    constructor(breakpointObserver, _snackBar) {
        this.breakpointObserver = breakpointObserver;
        this._snackBar = _snackBar;
        // Vacation Expenses pt 1 - https://www.listplanit.com/list-of-expenses-to-include-in-a-travel-budget/
        // Vacation Expenses pt 2 - https://www.lifehack.org/895450/how-to-pay-off-credit-card
        this.costs = [
            { name: "Food", iconName: 'fastfood', value: 0 },
            { name: "Hotel/Lodging", iconName: 'hotel', value: 0 },
            { name: "Airfare", iconName: 'flight', value: 0 },
            { name: "Transportation", iconName: 'commute', value: 0 },
            { name: "Shopping", iconName: 'shopping_cart', value: 0 },
            { name: "Entertainment", iconName: 'surfing', value: 0 },
            { name: "Emergency", iconName: 'warning', value: 0 },
            { name: "Other", iconName: 'add_task', value: 0 }
        ];
        this.costsUpdated = "";
        this.newValue = "";
        this.timeoutCounter = 0;
        this.costIndex = -1;
        this.totalCost = 0;
        this.updated = false;
        this.failed = false;
        // RxJS Debounce code - https://stackoverflow.com/questions/32051273/angular-and-debounce/36849347#36849347
        // Without debouncing, ngModel updates immediately when the user types a number, which prevents the user from typing more than 1 number in the input field.
        this.costsModelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Snackbar = https://material.angular.io/components/snack-bar/overview
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 20000,
        });
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
        this.breakpointObserver
            .observe(['(max-width: 1000px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.desktopSize = 'tablet';
            }
            else {
                this.desktopSize = 'desktop';
            }
        });
        this.costsModelChangeSubscription = this.costsModelChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000))
            .subscribe(updatedCost => {
            // If costIndex is not updated, then wait 0.5-1.5 seconds.
            while (this.costIndex === -1 && this.timeoutCounter < 4) {
                setTimeout(() => { console.log("Wait for update."); }, 500);
                this.timeoutCounter++;
            }
            // Update the correct variable in the "costs" array by using the index position retrieved from the (click) event binding.
            if (this.costIndex !== -1) {
                this.costs[this.costIndex].value = updatedCost;
                console.log(updatedCost);
                this.failed = false;
            }
            else {
                this.updated = false;
                this.failed = true;
            }
            this.costIndex = -1;
            this.timeoutCounter = 0;
        });
    }
    ngOnDestroy() {
        this.costsModelChangeSubscription.unsubscribe();
    }
    // Save index position of array in Typescript = https://stackoverflow.com/questions/49123807/angular-get-current-index-in-ngfor
    setCostIndex(newIndex) {
        this.costIndex = newIndex;
    }
    // Back to my code.
    setTotalCost() {
        this.totalCost = 0;
        for (let i = 0; i < this.costs.length; i++) {
            this.totalCost += this.costs[i].value;
        }
    }
    onSubmit() {
        this.updated = true;
        this.setTotalCost();
        if (this.updated) {
            this.openSnackBar(`Your vacation costs $${this.totalCost}`, "Okay");
            this.failed = false;
        }
        else {
            this.openSnackBar("We're sorry. Please remove your response and try again.", "Okay");
        }
    }
}
CostsComponent.ɵfac = function CostsComponent_Factory(t) { return new (t || CostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
CostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CostsComponent, selectors: [["app-costs"]], decls: 21, vars: 13, consts: [[3, "ngClass"], ["mat-card-avatar", "", 1, "material-icons"], [1, "costs-form", 3, "ngSubmit"], ["costsForm", "ngForm"], [3, "ngClass", "ngStyle"], ["class", "costs-form__grid-list__grid-tile", 4, "ngFor", "ngForOf"], [1, "info-about-costs-form"], ["mat-stroked-button", "", "type", "submit", 1, "costs-form__submit-btn"], ["class", "if-costs-failed", 4, "ngIf"], ["class", "total-cost", 4, "ngIf"], [1, "costs-form__grid-list__grid-tile"], ["appearance", "standard", 1, "costs-form__form-field"], ["for", "cost"], [1, "material-icons"], ["type", "number", "required", "", "matInput", "", "name", "cost", 3, "ngModel", "click", "ngModelChange"], [1, "if-costs-failed"], [1, "total-cost"]], template: function CostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Financial Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pay your way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CostsComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CostsComponent_div_13_Template, 10, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Calculate Total Cost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CostsComponent_span_18_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CostsComponent_div_19_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.mobileSize === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.desktopSize === "desktop"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.desktopSize === "tablet" ? "costs-form__mobile-grid-list" : "costs-form__grid-list")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.mobileSize ? "100%" : "50%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.costs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.failed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_10__["HomeFooterComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}\r\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}\r\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\r\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\r\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\r\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}\r\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}\r\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}\r\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}\r\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}\r\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}\r\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}\r\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}\r\n.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}\r\n.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}\r\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}\r\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}\r\n.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}\r\n.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}\r\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}\r\n.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}\r\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}\r\n.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}\r\n.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}\r\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}\r\n@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}\r\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\ninput.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}\r\n.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}\r\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}\r\n.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}\r\n.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\r\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}\r\n.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}\r\n.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}\r\n.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\r\n.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}\r\n.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\r\n.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}\r\n.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\r\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\r\n.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}\r\n.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\r\n.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}\r\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\r\n.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\r\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}\r\n.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}\r\n.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}\r\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}\r\n.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}\r\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}\r\n.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\r\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}\r\n.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}\r\n.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}\r\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}\r\n.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\r\n.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}\r\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}\r\n@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}\r\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}\r\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}\r\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\r\n.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}\r\n@keyframes cdk-text-field-autofill-start{}\r\n@keyframes cdk-text-field-autofill-end{}\r\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}\r\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\r\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}\r\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}\r\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}\r\n.mat-focus-indicator[_ngcontent-%COMP%]{position:relative}\r\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}\r\n.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\r\n.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\r\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\r\n.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\r\n.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#3f51b5}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ff4081}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}\r\n.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}\r\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#3f51b5}\r\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ff4081}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}\r\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}\r\n.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\r\n.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}\r\n.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}\r\n.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}\r\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\r\n.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#3f51b5}\r\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}\r\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ff4081;color:#fff}\r\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}\r\n.mat-badge[_ngcontent-%COMP%]{position:relative}\r\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}\r\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}\r\n.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\r\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}\r\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}\r\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}\r\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}\r\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}\r\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}\r\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}\r\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}\r\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}\r\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}\r\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}\r\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}\r\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}\r\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}\r\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}\r\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}\r\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}\r\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}\r\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}\r\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}\r\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}\r\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}\r\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}\r\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\r\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}\r\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\r\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}\r\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}\r\n.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}\r\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled){border-color:rgba(0,0,0,.12)}\r\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:#fff}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}\r\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\r\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\r\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}\r\n.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\r\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}\r\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}\r\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\r\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}\r\n.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\r\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}\r\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}\r\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}\r\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}\r\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:48px}\r\n.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\r\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\r\n.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}\r\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}\r\n.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}\r\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}\r\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}\r\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#3f51b5}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ff4081}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}\r\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}\r\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\r\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\r\n.mat-table[_ngcontent-%COMP%]{background:#fff}\r\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}\r\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}\r\n.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}\r\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}\r\n.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:rgba(0,0,0,.38)}\r\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-calendar-body-in-preview[_ngcontent-%COMP%]{color:rgba(0,0,0,.24)}\r\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.38)}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.18)}\r\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(63,81,181,.2)}\r\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\r\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\r\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\r\n.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}\r\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.4)}\r\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\r\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(63,81,181,.3)}\r\n.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(255,64,129,.2)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(255, 64, 129, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.4)}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\r\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(255,64,129,.3)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(244,67,54,.2)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\r\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(244,67,54,.3)}\r\n.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\r\n.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\r\n.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}\r\n.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\r\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\r\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}\r\n@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\r\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\r\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px}\r\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:64px}\r\n.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\r\n.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#3f51b5}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ff4081}\r\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-error[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\r\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\r\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\r\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}\r\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}\r\n.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\r\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}\r\n.mat-input-element[_ngcontent-%COMP%]{caret-color:#3f51b5}\r\n.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}\r\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}\r\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\r\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}\r\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ff4081}\r\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}\r\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}\r\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}\r\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}\r\n.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}\r\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}\r\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after, .mat-menu-item[disabled][_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\r\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}\r\n.mat-paginator[_ngcontent-%COMP%]{background:#fff}\r\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\r\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}\r\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\r\n.mat-paginator-container[_ngcontent-%COMP%]{min-height:56px}\r\n.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#c5cae9}\r\n.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#c5cae9}\r\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#3f51b5}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ff80ab}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ff80ab}\r\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ff4081}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}\r\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}\r\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#3f51b5}\r\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ff4081}\r\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}\r\n.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\r\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#3f51b5}\r\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ff4081}\r\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}\r\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\r\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\r\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\r\n.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}\r\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-select-panel[_ngcontent-%COMP%]{background:#fff}\r\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\r\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#3f51b5}\r\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ff4081}\r\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\r\n.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}\r\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\r\n.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}\r\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\r\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\r\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.54)}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.54)}\r\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}\r\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\r\n.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}\r\n.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\r\n.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\r\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(63,81,181,.2)}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\r\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,64,129,.2)}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\r\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.2)}\r\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\r\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\r\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\r\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\r\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\r\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}\r\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}\r\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\r\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\r\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}\r\n@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}\r\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{color:#fff}\r\n.mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-accent[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}\r\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{color:#fff}\r\n.mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header.mat-warn[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}\r\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}\r\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\r\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]{height:72px}\r\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%]{padding:24px 24px}\r\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{top:-16px;bottom:-16px}\r\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before{top:36px}\r\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]{top:36px}\r\n.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}\r\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}\r\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\r\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\r\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\r\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\r\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}\r\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\r\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\r\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\r\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#3f51b5}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ff4081}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\r\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\r\n.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#3f51b5;color:#fff}\r\n.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ff4081;color:#fff}\r\n.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}\r\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}\r\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:64px}\r\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:64px}\r\n@media(max-width: 599px){.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:56px}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:56px}}\r\n.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}\r\n.mat-tree[_ngcontent-%COMP%]{background:#fff}\r\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\r\n.mat-tree-node[_ngcontent-%COMP%]{min-height:48px}\r\n.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\r\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ff4081}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  \r\n  \r\n}\r\n\r\n.costs-form[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%], mat-card-header[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-label[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n.desktop-centered-costs-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n}\r\n.mat-card__desktop-size-only[_ngcontent-%COMP%] {\r\n  \r\n  transform: translateY(-20%);\r\n}\r\n\r\n.costs-form[_ngcontent-%COMP%] {\r\n  color: purple;\r\n  padding: 0 10px;\r\n}\r\n.costs-form__grid-list[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\r\n.costs-form__grid-list__grid-tile[_ngcontent-%COMP%] {\r\n  color: red;\r\n  \r\n  padding: 0 10px;\r\n}\r\n.costs-form___form-field[_ngcontent-%COMP%] {\r\n  color: lightblue;\r\n}\r\n\r\n.costs-form__form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\r\n  color: blue;\r\n  font-size: 140%;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n  padding-left: 7px;\r\n  font-size: 160%;\r\n}\r\n\r\n.costs-form__form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  color: purple;\r\n  font-size: 110%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.costs-form__submit-btn[_ngcontent-%COMP%] {\r\n  color: green;\r\n  padding: 7px;\r\n  background-color: white;\r\n  border-color: green;\r\n  border-radius: 2px;\r\n  border-style: round;\r\n}\r\n\r\n.costs-form__submit-btn[_ngcontent-%COMP%], .total-cost[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.if-costs-updated[_ngcontent-%COMP%] {\r\n  color: blue;\r\n}\r\n.if-costs-failed[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.total-cost[_ngcontent-%COMP%] {\r\n  color: purple;\r\n  padding: 7px;\r\n  max-width: 150px;\r\n}\r\n.costs-form[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.costs-form__grid-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  \r\n  grid-auto-rows: auto;\r\n  grid-column-gap: 0px;\r\n  grid-row-gap: 0px;\r\n  \r\n  margin-top: 20px;\r\n\r\n  \r\n  \r\n}\r\n.costs-form__mobile-grid-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-auto-rows: auto;\r\n  grid-column-gap: 0px;\r\n  grid-row-gap: 0px;\r\n  margin-top: 20px;\r\n\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvc3RzLmNvbXBvbmVudC5jc3MiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUNBNUIsbUJBQW1CLGVBQWUsQ0FBQyxjQUFjLENBQUMsZ0RBQWdEO0FBQUMsb0NBQW9DLGFBQWE7QUFBQyxvQ0FBb0MsY0FBYztBQUFDLHlDQUF5Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO0FBQUMsc0NBQXNDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyw2Q0FBNkMsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO0FBQUMsMkJBQTJCLG9FQUFvRSxDQUFDLGVBQWU7QUFBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZTtBQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCO0FBQUMsNENBQTRDLGVBQWU7QUFBQyx3QkFBd0IsdURBQXVELENBQUMscUJBQXFCO0FBQUMsOENBQThDLHlEQUF5RCxDQUFDLHNCQUFzQixDQUFDLGVBQWU7QUFBQyw4Q0FBOEMsdURBQXVELENBQUMsc0JBQXNCLENBQUMsZUFBZTtBQUFDLDhDQUE4Qyx1REFBdUQsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlO0FBQUMsOENBQThDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyw0QkFBNEIsdURBQXVELENBQUMscUJBQXFCO0FBQUMsNEdBQTRHLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMsbUJBQW1CLGdEQUFnRDtBQUFDLFVBQVUsZ0RBQWdEO0FBQUMsZ0JBQWdCLGNBQWMsQ0FBQyxlQUFlO0FBQUMsaUNBQWlDLGNBQWM7QUFBQyxxQ0FBcUMsY0FBYztBQUFDLGNBQWMsZ0RBQWdEO0FBQUMseUNBQXlDLGdCQUFnQjtBQUFDLFVBQVUsY0FBYyxDQUFDLGVBQWU7QUFBQywrRUFBK0UsY0FBYztBQUFDLFdBQVcsZ0RBQWdEO0FBQUMsaUJBQWlCLGNBQWMsQ0FBQyxlQUFlO0FBQUMsMkJBQTJCLGNBQWM7QUFBQyxjQUFjLGdEQUFnRDtBQUFDLG1CQUFtQixjQUFjO0FBQUMscURBQXFELGNBQWMsQ0FBQyxlQUFlO0FBQUMsOEJBQThCLGNBQWMsQ0FBQyxlQUFlO0FBQUMsa0JBQWtCLHVEQUF1RCxDQUFDLHFCQUFxQjtBQUFDLDRCQUE0QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLDZCQUE2Qix1REFBdUQsQ0FBQyxxQkFBcUI7QUFBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQjtBQUFDLHdCQUF3Qix3QkFBd0I7QUFBQyxrRUFBa0UsY0FBYyxDQUFDLGlCQUFpQjtBQUFDLGdGQUFnRixZQUFZLENBQUMsV0FBVztBQUFDLG9HQUFvRyxjQUFjLENBQUMsaUJBQWlCO0FBQUMsc0JBQXNCLGNBQWMsQ0FBQyxxQ0FBcUM7QUFBQyxrTEFBa0wsNENBQTRDLENBQUMscUJBQXFCO0FBQUMseUhBQXlILDRDQUE0QyxDQUFDLHFCQUFxQjtBQUFDLDhCQUE4QixjQUFjLENBQUMsb0JBQW9CO0FBQUMsc0JBQXNCLGFBQWE7QUFBQywwQkFBMEIsZ0JBQWdCO0FBQUMsa0NBQWtDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywrQkFBK0I7QUFBQywwREFBMEQscUJBQXFCO0FBQUMsd0RBQXdELGlCQUFpQjtBQUFDLG9QQUFvUCxtRkFBbUYsQ0FBQyxnREFBZ0QsQ0FBQyxxQkFBcUI7QUFBQyxpS0FBaUsscUZBQXFGLENBQUMsZ0RBQWdELENBQUMscUJBQXFCO0FBQUMsMEpBQTBKLHFGQUFxRixDQUFDLGdEQUFnRCxDQUFDLHFCQUFxQjtBQUFDLHdEQUF3RCxhQUFhO0FBQUMsNERBQTRELGFBQWE7QUFBQyxvRUFBb0Usd0JBQXdCLENBQUMsK0JBQStCO0FBQUMsYUFBYSxvUEFBb1AsNENBQTRDLENBQUMsaUtBQWlLLDRDQUE0QyxDQUFDLDBKQUEwSiwyQ0FBMkMsQ0FBQztBQUFDLHNEQUFzRCx1QkFBdUI7QUFBQyxzREFBc0QsYUFBYSxDQUFDLGlCQUFpQjtBQUFDLGdQQUFnUCw0Q0FBNEMsQ0FBQyxxQkFBcUI7QUFBQyx3SkFBd0osNENBQTRDLENBQUMscUJBQXFCO0FBQUMseURBQXlELG1CQUFtQjtBQUFDLHlEQUF5RCxhQUFhLENBQUMsa0JBQWtCO0FBQUMsc1BBQXNQLDRDQUE0QyxDQUFDLHFCQUFxQjtBQUFDLDJKQUEySiw0Q0FBNEMsQ0FBQyxxQkFBcUI7QUFBQyw0Q0FBNEMsY0FBYztBQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQjtBQUFDLDhGQUE4RixjQUFjO0FBQUMsd0JBQXdCLG9CQUFvQjtBQUFDLGVBQWUsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyw0REFBNEQsZ0RBQWdELENBQUMsY0FBYztBQUFDLGtCQUFrQixnREFBZ0Q7QUFBQyxZQUFZLGdEQUFnRDtBQUFDLG9CQUFvQixjQUFjO0FBQUMsMEJBQTBCLGdEQUFnRDtBQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLDhDQUE4QyxnREFBZ0Q7QUFBQyxnQkFBZ0IsY0FBYyxDQUFDLGVBQWU7QUFBQywwQkFBMEIsa0JBQWtCO0FBQUMsc0JBQXNCLGNBQWM7QUFBQyx5QkFBeUIsY0FBYyxDQUFDLGVBQWU7QUFBQyxlQUFlLGdEQUFnRDtBQUFDLDZCQUE2QixnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLDZHQUE2Ryx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRO0FBQUMsYUFBYSxnREFBZ0QsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQjtBQUFDLHFCQUFxQixjQUFjLENBQUMsZUFBZSxDQUFDLGtCQUFrQjtBQUFDLGVBQWUsZ0RBQWdEO0FBQUMsaUJBQWlCLGdEQUFnRDtBQUFDLDhCQUE4QixjQUFjO0FBQUMsd0NBQXdDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCO0FBQUMsdURBQXVELGNBQWM7QUFBQyxnQ0FBZ0MsY0FBYztBQUFDLDBDQUEwQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHFCQUFxQjtBQUFDLHlEQUF5RCxjQUFjO0FBQUMsOEJBQThCLGdEQUFnRCxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMscUNBQXFDLGNBQWM7QUFBQywrQ0FBK0Msa0JBQWtCLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUI7QUFBQyw4REFBOEQsY0FBYztBQUFDLHVDQUF1QyxjQUFjO0FBQUMsaURBQWlELGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCO0FBQUMsZ0VBQWdFLGNBQWM7QUFBQyxxQ0FBcUMsZ0RBQWdELENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyxZQUFZLGdEQUFnRCxDQUFDLGNBQWM7QUFBQyxvQkFBb0IsdURBQXVELENBQUMscUJBQXFCO0FBQUMscUJBQXFCLGdEQUFnRCxDQUFDLGNBQWM7QUFBQyw0QkFBNEIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLGVBQWU7QUFBQyxVQUFVLGdEQUFnRDtBQUFDLHFDQUFxQyxlQUFlLENBQUMsY0FBYztBQUFDLFlBQVksZUFBZSxDQUFDLGlCQUFpQjtBQUFDLHdCQUF3Qix1QkFBdUI7QUFBQyxpQ0FBaUMsZ0JBQWdCO0FBQUMsb0JBQW9CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLDJEQUEyRCxDQUFDLGtCQUFrQjtBQUFDLDhDQUE4QyxZQUFZO0FBQUMscUJBQXFCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0I7QUFBQyxtREFBbUQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtBQUFDLHVCQUF1QixjQUFjLENBQUMsWUFBWTtBQUFDLDZCQUE2QixZQUFZO0FBQUMsNEJBQTRCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO0FBQUMsa0JBQWtCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGVBQWU7QUFBQyxzQkFBc0IsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyx5REFBeUQsQ0FBQyxTQUFTO0FBQUMsbURBQW1ELFNBQVM7QUFBQyw4Q0FBOEMsbURBQW1ELFVBQVUsQ0FBQztBQUFDLDJCQUEyQiwwQkFBMEI7QUFBQyxpR0FBaUcsU0FBUztBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjO0FBQUMsd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCO0FBQUMseUNBQXlDLElBQUksQ0FBQztBQUFDLHVDQUF1QyxJQUFJLENBQUM7QUFBQyxvREFBb0QsOENBQThDO0FBQUMsMERBQTBELDRDQUE0QztBQUFDLCtCQUErQixXQUFXO0FBQUMseUNBQXlDLHdCQUF3QixDQUFDLGlDQUFpQyxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQjtBQUFDLGlEQUFpRCx3QkFBd0IsQ0FBQyxpQ0FBaUMsQ0FBQyxtQkFBbUI7QUFBQyxxQkFBcUIsaUJBQWlCO0FBQUMseUJBQXlCLGlCQUFpQjtBQUFDLG9CQUFvQiwrQkFBK0I7QUFBQyxZQUFZLHFCQUFxQjtBQUFDLHdGQUF3RiwwQkFBMEI7QUFBQyw2RUFBNkUsMEJBQTBCO0FBQUMsdUJBQXVCLDBCQUEwQixDQUFDLHFCQUFxQjtBQUFDLGdDQUFnQyxxQkFBcUI7QUFBQyxnRUFBZ0UsYUFBYTtBQUFDLCtEQUErRCxhQUFhO0FBQUMsNkRBQTZELGFBQWE7QUFBQyxvQkFBb0IscUJBQXFCO0FBQUMsMkNBQTJDLHFCQUFxQjtBQUFDLHFCQUFxQixxQkFBcUI7QUFBQyw0QkFBNEIsYUFBYTtBQUFDLDhCQUE4QixhQUFhO0FBQUMsMEZBQTBGLGtCQUFrQjtBQUFDLHdKQUF3SixrQkFBa0I7QUFBQyxvRkFBb0Ysa0JBQWtCO0FBQUMsMEhBQTBILGtCQUFrQjtBQUFDLG9CQUFvQix3QkFBd0IsQ0FBQyxxQkFBcUI7QUFBQyxrQkFBa0IscUhBQXFIO0FBQUMsa0JBQWtCLHNIQUFzSDtBQUFDLGtCQUFrQixzSEFBc0g7QUFBQyxrQkFBa0Isc0hBQXNIO0FBQUMsa0JBQWtCLHVIQUF1SDtBQUFDLGtCQUFrQix1SEFBdUg7QUFBQyxrQkFBa0Isd0hBQXdIO0FBQUMsa0JBQWtCLHdIQUF3SDtBQUFDLGtCQUFrQix3SEFBd0g7QUFBQyxrQkFBa0Isd0hBQXdIO0FBQUMsbUJBQW1CLHlIQUF5SDtBQUFDLG1CQUFtQix5SEFBeUg7QUFBQyxtQkFBbUIseUhBQXlIO0FBQUMsbUJBQW1CLHlIQUF5SDtBQUFDLG1CQUFtQix5SEFBeUg7QUFBQyxtQkFBbUIseUhBQXlIO0FBQUMsbUJBQW1CLDBIQUEwSDtBQUFDLG1CQUFtQiwwSEFBMEg7QUFBQyxtQkFBbUIsMEhBQTBIO0FBQUMsbUJBQW1CLDBIQUEwSDtBQUFDLG1CQUFtQiwySEFBMkg7QUFBQyxtQkFBbUIsMkhBQTJIO0FBQUMsbUJBQW1CLDJIQUEySDtBQUFDLG1CQUFtQiwySEFBMkg7QUFBQyxtQkFBbUIsMkhBQTJIO0FBQUMseUJBQXlCLFlBQVk7QUFBQyx3QkFBd0IsZUFBZSxDQUFDLHFCQUFxQjtBQUFDLHNEQUFzRCx1SEFBdUg7QUFBQyw4RUFBOEUsZUFBZTtBQUFDLHdHQUF3RyxxQkFBcUI7QUFBQyxtQkFBbUIsVUFBVSxDQUFDLGtCQUFrQjtBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxlQUFlO0FBQUMscUNBQXFDLGtCQUFrQixDQUFDLFVBQVU7QUFBQyxtQ0FBbUMsVUFBVSxDQUFDLGtCQUFrQjtBQUFDLFdBQVcsaUJBQWlCO0FBQUMscUNBQXFDLFlBQVk7QUFBQyx1Q0FBdUMsa0JBQWtCLENBQUMscUJBQXFCO0FBQUMsbUJBQW1CLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLHNDQUFzQyxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUI7QUFBQyxtRkFBbUYsZUFBZTtBQUFDLG9DQUFvQyxjQUFjO0FBQUMsb0NBQW9DLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQUMsb0RBQW9ELFFBQVE7QUFBQyxvREFBb0QsV0FBVztBQUFDLHFEQUFxRCxVQUFVO0FBQUMsK0RBQStELFNBQVMsQ0FBQyxXQUFXO0FBQUMsb0RBQW9ELFdBQVc7QUFBQyw4REFBOEQsVUFBVSxDQUFDLFVBQVU7QUFBQyx1RUFBdUUsU0FBUztBQUFDLGlGQUFpRixTQUFTLENBQUMsVUFBVTtBQUFDLHNFQUFzRSxVQUFVO0FBQUMsZ0ZBQWdGLFVBQVUsQ0FBQyxTQUFTO0FBQUMscUNBQXFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQUMscURBQXFELFNBQVM7QUFBQyxxREFBcUQsWUFBWTtBQUFDLHNEQUFzRCxVQUFVO0FBQUMsZ0VBQWdFLFNBQVMsQ0FBQyxXQUFXO0FBQUMscURBQXFELFdBQVc7QUFBQywrREFBK0QsVUFBVSxDQUFDLFVBQVU7QUFBQyx3RUFBd0UsVUFBVTtBQUFDLGtGQUFrRixTQUFTLENBQUMsV0FBVztBQUFDLHVFQUF1RSxXQUFXO0FBQUMsaUZBQWlGLFVBQVUsQ0FBQyxVQUFVO0FBQUMsb0NBQW9DLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQUMsb0RBQW9ELFNBQVM7QUFBQyxvREFBb0QsWUFBWTtBQUFDLHFEQUFxRCxVQUFVO0FBQUMsK0RBQStELFNBQVMsQ0FBQyxXQUFXO0FBQUMsb0RBQW9ELFdBQVc7QUFBQyw4REFBOEQsVUFBVSxDQUFDLFVBQVU7QUFBQyx1RUFBdUUsVUFBVTtBQUFDLGlGQUFpRixTQUFTLENBQUMsV0FBVztBQUFDLHNFQUFzRSxXQUFXO0FBQUMsZ0ZBQWdGLFVBQVUsQ0FBQyxVQUFVO0FBQUMsNEJBQTRCLDBIQUEwSCxDQUFDLGVBQWUsQ0FBQyxxQkFBcUI7QUFBQyxpREFBaUQsYUFBYSxDQUFDLHNCQUFzQjtBQUFDLHFGQUFxRixhQUFhO0FBQUMsa0ZBQWtGLGFBQWE7QUFBQyw0RUFBNEUsYUFBYTtBQUFDLGdsQkFBZ2xCLHFCQUFxQjtBQUFDLG1LQUFtSyx3QkFBd0I7QUFBQyxnS0FBZ0ssd0JBQXdCO0FBQUMsMEpBQTBKLHdCQUF3QjtBQUFDLDJMQUEyTCw0QkFBNEI7QUFBQyw2R0FBNkcsVUFBVSxDQUFDLDZCQUE2QjtBQUFDLDBCQUEwQixlQUFlO0FBQUMsOENBQThDLDRCQUE0QjtBQUFDLDJEQUEyRCxxQkFBcUIsQ0FBQyxxQkFBcUI7QUFBQywyR0FBMkcsVUFBVTtBQUFDLHVHQUF1RyxVQUFVO0FBQUMsK0ZBQStGLFVBQVU7QUFBQyw0dkJBQTR2QixxQkFBcUI7QUFBQywyR0FBMkcsd0JBQXdCO0FBQUMsdUdBQXVHLHdCQUF3QjtBQUFDLCtGQUErRix3QkFBd0I7QUFBQyw0dkJBQTR2QixnQ0FBZ0M7QUFBQywyTEFBMkwscUNBQXFDO0FBQUMsdUxBQXVMLHFDQUFxQztBQUFDLCtLQUErSyxxQ0FBcUM7QUFBQyxpR0FBaUcscUhBQXFIO0FBQUMsaURBQWlELHNIQUFzSDtBQUFDLGtGQUFrRix3SEFBd0g7QUFBQyxxRUFBcUUscUhBQXFIO0FBQUMsbUZBQW1GLHdIQUF3SDtBQUFDLHFKQUFxSix5SEFBeUg7QUFBQywySEFBMkgscUhBQXFIO0FBQUMsdURBQXVELHNIQUFzSDtBQUFDLGlIQUFpSCxlQUFlO0FBQUMsbUJBQW1CLHFCQUFxQjtBQUFDLG9EQUFvRCxnQ0FBZ0M7QUFBQyx1Q0FBdUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLHdFQUF3RSxxQkFBcUI7QUFBQyxtRkFBbUYscUNBQXFDO0FBQUMsNkZBQTZGLGdCQUFnQixDQUFDLHNDQUFzQztBQUFDLDhHQUE4RyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0M7QUFBQywyQkFBMkIsd0JBQXdCLENBQUMscUJBQXFCO0FBQUMsaUVBQWlFLHFCQUFxQjtBQUFDLDRCQUE0QixxQkFBcUIsQ0FBQyxxQkFBcUI7QUFBQyxrRUFBa0UsZUFBZTtBQUFDLHNEQUFzRCx3QkFBd0I7QUFBQyxpSEFBaUgsZ0NBQWdDO0FBQUMsd0VBQXdFLGdCQUFnQjtBQUFDLFVBQVUsZUFBZSxDQUFDLHFCQUFxQjtBQUFDLHdDQUF3QyxzSEFBc0g7QUFBQyxzREFBc0QscUhBQXFIO0FBQUMsbUJBQW1CLHFCQUFxQjtBQUFDLG9CQUFvQiw0QkFBNEI7QUFBQyx3QkFBd0IsWUFBWTtBQUFDLDZCQUE2Qix5QkFBeUI7QUFBQyx3QkFBd0Isd0JBQXdCO0FBQUMsNEhBQTRILHdCQUF3QjtBQUFDLDBIQUEwSCx3QkFBd0I7QUFBQyxzSEFBc0gsd0JBQXdCO0FBQUMsZ0pBQWdKLHdCQUF3QjtBQUFDLHNFQUFzRSxvQkFBb0I7QUFBQywyQ0FBMkMscUJBQXFCO0FBQUMsa0NBQWtDLHFCQUFxQjtBQUFDLG1LQUFtSyxrQkFBa0I7QUFBQyxpS0FBaUssa0JBQWtCO0FBQUMsNkpBQTZKLGtCQUFrQjtBQUFDLDRCQUE0Qix3QkFBd0IsQ0FBQyxxQkFBcUI7QUFBQyw2Q0FBNkMscUJBQXFCLENBQUMsVUFBVTtBQUFDLDJEQUEyRCxzSEFBc0g7QUFBQywyRUFBMkUsV0FBVztBQUFDLDhDQUE4QyxVQUFVO0FBQUMsbUNBQW1DLGVBQWU7QUFBQywwREFBMEQsd0JBQXdCLENBQUMsVUFBVTtBQUFDLDJFQUEyRSxVQUFVLENBQUMsVUFBVTtBQUFDLDhFQUE4RSxxQ0FBcUM7QUFBQyx1REFBdUQsd0JBQXdCLENBQUMsVUFBVTtBQUFDLHdFQUF3RSxVQUFVLENBQUMsVUFBVTtBQUFDLDJFQUEyRSxxQ0FBcUM7QUFBQyx5REFBeUQsd0JBQXdCLENBQUMsVUFBVTtBQUFDLDBFQUEwRSxVQUFVLENBQUMsVUFBVTtBQUFDLDZFQUE2RSxxQ0FBcUM7QUFBQyxXQUFXLGVBQWU7QUFBQyx1SkFBdUosa0JBQWtCO0FBQUMsd0ZBQXdGLG1DQUFtQztBQUFDLGlCQUFpQixxQkFBcUI7QUFBQywyQkFBMkIscUJBQXFCO0FBQUMsb0JBQW9CLGdDQUFnQztBQUFDLCtIQUErSCxxQkFBcUI7QUFBQywyQkFBMkIscUJBQXFCO0FBQUMsMENBQTBDLDBCQUEwQjtBQUFDLHlCQUF5QixxQkFBcUI7QUFBQyxnRUFBZ0UscUJBQXFCLENBQUMsd0JBQXdCO0FBQUMsMElBQTBJLHFCQUFxQjtBQUFDLHlEQUF5RCxxQkFBcUI7QUFBQyw4QkFBOEIscUJBQXFCO0FBQUMsdUdBQXVHLDRCQUE0QjtBQUFDLG1JQUFtSSw0QkFBNEI7QUFBQyxvQ0FBb0MsNkJBQTZCO0FBQUMsdUZBQXVGLDZCQUE2QjtBQUFDLDhHQUE4Ryw0RkFBNEY7QUFBQyw4R0FBOEcsMkZBQTJGO0FBQUMsNklBQTZJLGtCQUFrQjtBQUFDLHNJQUFzSSxrQkFBa0I7QUFBQyw0QkFBNEIsd0JBQXdCLENBQUMsVUFBVTtBQUFDLHdEQUF3RCxtQ0FBbUM7QUFBQyxvREFBb0QsK0JBQStCO0FBQUMsd2VBQXdlLG1DQUFtQztBQUFDLHdCQUF3Qix1SEFBdUgsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUI7QUFBQyx1RUFBdUUsOEJBQThCO0FBQUMsNkpBQTZKLDZCQUE2QjtBQUFDLG9MQUFvTCw2RkFBNkY7QUFBQyxvTEFBb0wsNEZBQTRGO0FBQUMsbU5BQW1OLGtCQUFrQjtBQUFDLDRNQUE0TSxrQkFBa0I7QUFBQywrREFBK0Qsd0JBQXdCLENBQUMsVUFBVTtBQUFDLDJGQUEyRixvQ0FBb0M7QUFBQyx1RkFBdUYsK0JBQStCO0FBQUMsaWxCQUFpbEIsb0NBQW9DO0FBQUMscUVBQXFFLDZCQUE2QjtBQUFDLHlKQUF5Siw2QkFBNkI7QUFBQyxnTEFBZ0wsNEZBQTRGO0FBQUMsZ0xBQWdMLDJGQUEyRjtBQUFDLCtNQUErTSxrQkFBa0I7QUFBQyx3TUFBd00sa0JBQWtCO0FBQUMsNkRBQTZELHdCQUF3QixDQUFDLFVBQVU7QUFBQyx5RkFBeUYsbUNBQW1DO0FBQUMscUZBQXFGLCtCQUErQjtBQUFDLDJrQkFBMmtCLG1DQUFtQztBQUFDLDhCQUE4QixxSEFBcUg7QUFBQyw4QkFBOEIsYUFBYTtBQUFDLHlDQUF5QyxhQUFhO0FBQUMsdUNBQXVDLGFBQWE7QUFBQyxzQ0FBc0MscUJBQXFCO0FBQUMsc0JBQXNCLDJIQUEySCxDQUFDLGVBQWUsQ0FBQyxxQkFBcUI7QUFBQyxhQUFhLGdDQUFnQztBQUFDLHNCQUFzQixrQ0FBa0M7QUFBQyxxQkFBcUIsZUFBZSxDQUFDLHFCQUFxQjtBQUFDLG1EQUFtRCxzSEFBc0g7QUFBQyxnQkFBZ0IsZ0NBQWdDO0FBQUMsbVNBQW1TLDBCQUEwQjtBQUFDLG9CQUFvQixvR0FBb0csZUFBZSxDQUFDO0FBQUMsa0NBQWtDLHFCQUFxQjtBQUFDLHdFQUF3RSxxQkFBcUI7QUFBQyxnREFBZ0QscUJBQXFCO0FBQUMsMEtBQTBLLGFBQWE7QUFBQyw0QkFBNEIsV0FBVztBQUFDLHlDQUF5QyxXQUFXO0FBQUMsc0JBQXNCLG9CQUFvQjtBQUFDLFVBQVUsb0JBQW9CO0FBQUMsa0RBQWtELGFBQWE7QUFBQyw2REFBNkQsYUFBYTtBQUFDLDJEQUEyRCxhQUFhO0FBQUMsNkNBQTZDLGFBQWE7QUFBQyx1QkFBdUIsZ0NBQWdDO0FBQUMsbURBQW1ELHdCQUF3QjtBQUFDLDhEQUE4RCx3QkFBd0I7QUFBQyw0REFBNEQsd0JBQXdCO0FBQUMsNkdBQTZHLGFBQWE7QUFBQyx3SEFBd0gsYUFBYTtBQUFDLHNIQUFzSCxhQUFhO0FBQUMsNkRBQTZELGFBQWE7QUFBQyxxS0FBcUssYUFBYTtBQUFDLHVJQUF1SSx3QkFBd0I7QUFBQyxXQUFXLGFBQWE7QUFBQyx3REFBd0QscUJBQXFCO0FBQUMsNENBQTRDLHFCQUFxQjtBQUFDLDREQUE0RCxnQ0FBZ0M7QUFBQyxvRkFBb0YsMkdBQTJHLENBQUMsd0JBQXdCLENBQUMsMEJBQTBCO0FBQUMsOERBQThELGdDQUFnQztBQUFDLHNGQUFzRiwyR0FBMkcsQ0FBQyx3QkFBd0IsQ0FBQywwQkFBMEI7QUFBQyxxREFBcUQsZ0NBQWdDO0FBQUMsNkVBQTZFLGdDQUFnQztBQUFDLGtFQUFrRSxnQ0FBZ0M7QUFBQyw4RUFBOEUscUJBQXFCO0FBQUMsMEZBQTBGLDRCQUE0QjtBQUFDLDJEQUEyRCxxQkFBcUI7QUFBQyxpRUFBaUUscUJBQXFCO0FBQUMsNkVBQTZFLGFBQWE7QUFBQyx3RkFBd0YsYUFBYTtBQUFDLHNGQUFzRixhQUFhO0FBQUMsK0dBQStHLGFBQWE7QUFBQyxpRkFBaUYscUJBQXFCO0FBQUMsbUZBQW1GLHFCQUFxQjtBQUFDLHNCQUFzQixhQUFhO0FBQUMscUJBQXFCLGFBQWE7QUFBQyxtQkFBbUIsYUFBYTtBQUFDLG9FQUFvRSxxQkFBcUI7QUFBQyx3SEFBd0gscUJBQXFCO0FBQUMsbUJBQW1CLG1CQUFtQjtBQUFDLGdDQUFnQyxxQkFBcUI7QUFBQyxxQ0FBcUMscUJBQXFCO0FBQUMsOENBQThDLHFCQUFxQjtBQUFDLHlDQUF5QyxxQkFBcUI7QUFBQyw4Q0FBOEMsbUJBQW1CO0FBQUMsdUZBQXVGLG1CQUFtQjtBQUFDLDJGQUEyRixhQUFhO0FBQUMsOEJBQThCLHFCQUFxQjtBQUFDLGdDQUFnQyxxQkFBcUI7QUFBQyw4QkFBOEIscUJBQXFCO0FBQUMsd0JBQXdCLHFCQUFxQjtBQUFDLGdNQUFnTSwwQkFBMEI7QUFBQywrR0FBK0csMEJBQTBCO0FBQUMsZ0JBQWdCLGVBQWU7QUFBQyw4Q0FBOEMsdUhBQXVIO0FBQUMsZUFBZSxzQkFBc0IsQ0FBQyxxQkFBcUI7QUFBQyxxR0FBcUcscUJBQXFCO0FBQUMsd0VBQXdFLHFCQUFxQjtBQUFDLHVMQUF1TCwwQkFBMEI7QUFBQyxlQUFlLGVBQWU7QUFBQyw0REFBNEQscUJBQXFCO0FBQUMsa0RBQWtELG9DQUFvQyxDQUFDLHNDQUFzQztBQUFDLHlDQUF5QyxvQ0FBb0M7QUFBQyx1TUFBdU0sNEJBQTRCO0FBQUMseUJBQXlCLGVBQWU7QUFBQyw2QkFBNkIsWUFBWTtBQUFDLHlCQUF5Qix3QkFBd0I7QUFBQyw4QkFBOEIsd0JBQXdCO0FBQUMsMERBQTBELFlBQVk7QUFBQyxzREFBc0Qsd0JBQXdCO0FBQUMsMkRBQTJELHdCQUF3QjtBQUFDLHdEQUF3RCxZQUFZO0FBQUMsb0RBQW9ELHdCQUF3QjtBQUFDLHlEQUF5RCx3QkFBd0I7QUFBQyxpREFBaUQsY0FBYztBQUFDLHVFQUF1RSxjQUFjO0FBQUMsbUVBQW1FLGNBQWM7QUFBQyx3QkFBd0IsNEJBQTRCO0FBQUMsd0VBQXdFLG9CQUFvQjtBQUFDLDJTQUEyUyx3QkFBd0I7QUFBQyx1RUFBdUUsb0JBQW9CO0FBQUMsdVNBQXVTLHdCQUF3QjtBQUFDLHFFQUFxRSxvQkFBb0I7QUFBQywrUkFBK1Isd0JBQXdCO0FBQUMsNElBQTRJLDRCQUE0QjtBQUFDLHdJQUF3SSxnQ0FBZ0M7QUFBQyw4REFBOEQscUJBQXFCO0FBQUMsc0NBQXNDLHFCQUFxQjtBQUFDLGtCQUFrQixxQkFBcUI7QUFBQyx3QkFBd0IscUJBQXFCO0FBQUMsdUNBQXVDLHFCQUFxQjtBQUFDLGtCQUFrQixxQkFBcUI7QUFBQyxrQkFBa0IsZUFBZTtBQUFDLGdEQUFnRCx1SEFBdUg7QUFBQyxxRUFBcUUsMEJBQTBCO0FBQUMsMERBQTBELGFBQWE7QUFBQyx5REFBeUQsYUFBYTtBQUFDLHVEQUF1RCxhQUFhO0FBQUMsaUVBQWlFLGFBQWE7QUFBQyxrRUFBa0UscUJBQXFCO0FBQUMsc0JBQXNCLHdCQUF3QixDQUFDLHFCQUFxQjtBQUFDLFlBQVkscUJBQXFCLENBQUMscUJBQXFCO0FBQUMsNEJBQTRCLHFCQUFxQjtBQUFDLGtDQUFrQywwSEFBMEg7QUFBQyxpQkFBaUIsc0NBQXNDO0FBQUMsZ0NBQWdDLHFDQUFxQyxDQUFDLGlCQUFpQjtBQUFDLDJCQUEyQixxQ0FBcUMsQ0FBQyxpQkFBaUI7QUFBQywwQ0FBMEMsZ0JBQWdCLENBQUMsc0NBQXNDO0FBQUMsc0NBQXNDLCtCQUErQjtBQUFDLHNEQUFzRCx3QkFBd0I7QUFBQyxvREFBb0QscUNBQXFDO0FBQUMsa0RBQWtELHdCQUF3QjtBQUFDLGtFQUFrRSx3QkFBd0I7QUFBQyxnRUFBZ0Usb0NBQW9DO0FBQUMsOERBQThELHdCQUF3QjtBQUFDLCtEQUErRCx3QkFBd0I7QUFBQyw2REFBNkQsb0NBQW9DO0FBQUMsMkRBQTJELHdCQUF3QjtBQUFDLHdEQUF3RCxxQkFBcUI7QUFBQyx3QkFBd0Isc0hBQXNILENBQUMsd0JBQXdCO0FBQUMsc0JBQXNCLGdDQUFnQztBQUFDLDZCQUE2QixnQ0FBZ0M7QUFBQyx3R0FBd0csd0JBQXdCO0FBQUMsMENBQTBDLFVBQVU7QUFBQyxvQ0FBb0MsbUNBQW1DO0FBQUMscUdBQXFHLHdCQUF3QjtBQUFDLHlDQUF5QyxVQUFVO0FBQUMsbUNBQW1DLG9DQUFvQztBQUFDLCtGQUErRix3QkFBd0I7QUFBQyx1Q0FBdUMsVUFBVTtBQUFDLGlDQUFpQyxtQ0FBbUM7QUFBQyx5RkFBeUYsZ0NBQWdDO0FBQUMscUlBQXFJLGdDQUFnQztBQUFDLHdEQUF3RCxnQ0FBZ0M7QUFBQyw2Q0FBNkMsZ0NBQWdDO0FBQUMsb0pBQW9KLGdDQUFnQztBQUFDLDRLQUE0SyxnQ0FBZ0M7QUFBQyw2RUFBNkUsNEJBQTRCLENBQUMsNEJBQTRCO0FBQUMsNEtBQTRLLDRCQUE0QjtBQUFDLG9OQUFvTiw0QkFBNEI7QUFBQyxpREFBaUQsMkJBQTJCO0FBQUMseUNBQXlDLDRIQUE0SCxDQUFDLGtJQUFrSTtBQUFDLHVDQUF1Qyw2SEFBNkg7QUFBQyxrR0FBa0csZ0NBQWdDO0FBQUMsb0JBQW9CLHVCQUF1QixlQUFlLENBQUM7QUFBQyxxRUFBcUUscUJBQXFCO0FBQUMsZ0NBQWdDLGdDQUFnQyxDQUFDLFVBQVU7QUFBQywrSEFBK0gsd0JBQXdCLENBQUMsVUFBVTtBQUFDLDJDQUEyQyxVQUFVO0FBQUMsZ0tBQWdLLHdCQUF3QixDQUFDLFVBQVU7QUFBQyx5Q0FBeUMsVUFBVTtBQUFDLDBKQUEwSix3QkFBd0IsQ0FBQyxVQUFVO0FBQUMsNENBQTRDLDRCQUE0QixDQUFDLGFBQWE7QUFBQyx1REFBdUQscUJBQXFCO0FBQUMsc0RBQXNELGFBQWE7QUFBQyw4Q0FBOEMscUJBQXFCO0FBQUMsbUNBQW1DLGlDQUFpQztBQUFDLDBHQUEwRyxnQ0FBZ0M7QUFBQywrQkFBK0IsV0FBVztBQUFDLCtGQUErRixpQkFBaUI7QUFBQyxtQ0FBbUMsU0FBUyxDQUFDLFlBQVk7QUFBQyxtSkFBbUosUUFBUTtBQUFDLGdFQUFnRSxRQUFRO0FBQUMsdUJBQXVCLGFBQWE7QUFBQyxpQ0FBaUMsdUNBQXVDO0FBQUMsK0ZBQStGLG9DQUFvQyxDQUFDLGtCQUFrQjtBQUFDLDZCQUE2QixxQkFBcUI7QUFBQywrREFBK0QscUJBQXFCO0FBQUMsbUNBQW1DLDRCQUE0QjtBQUFDLHVFQUF1RSw0QkFBNEI7QUFBQyxnR0FBZ0csa0JBQWtCLENBQUMsZUFBZTtBQUFDLGdyQkFBZ3JCLHFDQUFxQztBQUFDLGtGQUFrRix3QkFBd0I7QUFBQyxnSUFBZ0kscUJBQXFCO0FBQUMsd3FCQUF3cUIscUNBQXFDO0FBQUMsZ0ZBQWdGLHdCQUF3QjtBQUFDLDRIQUE0SCxxQkFBcUI7QUFBQyx3cEJBQXdwQixxQ0FBcUM7QUFBQyw0RUFBNEUsd0JBQXdCO0FBQUMsb0hBQW9ILHFCQUFxQjtBQUFDLHd3QkFBd3dCLHFDQUFxQztBQUFDLDhWQUE4Vix3QkFBd0I7QUFBQyxzTkFBc04sVUFBVTtBQUFDLDBSQUEwUiwwQkFBMEI7QUFBQyxvSkFBb0osaUJBQWlCO0FBQUMsNE5BQTROLGlDQUFpQztBQUFDLHNIQUFzSCxzQ0FBc0M7QUFBQyxnd0JBQWd3QixxQ0FBcUM7QUFBQyx3VkFBd1Ysd0JBQXdCO0FBQUMsa05BQWtOLFVBQVU7QUFBQyxzUkFBc1IsMEJBQTBCO0FBQUMsa0pBQWtKLGlCQUFpQjtBQUFDLDBOQUEwTixpQ0FBaUM7QUFBQyxvSEFBb0gsc0NBQXNDO0FBQUMsZ3ZCQUFndkIscUNBQXFDO0FBQUMsNFVBQTRVLHdCQUF3QjtBQUFDLDBNQUEwTSxVQUFVO0FBQUMsOFFBQThRLDBCQUEwQjtBQUFDLDhJQUE4SSxpQkFBaUI7QUFBQyxzTkFBc04saUNBQWlDO0FBQUMsZ0hBQWdILHNDQUFzQztBQUFDLGFBQWEsa0JBQWtCLENBQUMscUJBQXFCO0FBQUMseUJBQXlCLGtCQUFrQixDQUFDLFVBQVU7QUFBQyx3QkFBd0Isa0JBQWtCLENBQUMsVUFBVTtBQUFDLHNCQUFzQixrQkFBa0IsQ0FBQyxVQUFVO0FBQUMsNEhBQTRILDZCQUE2QjtBQUFDLDRNQUE0TSxhQUFhO0FBQUMsZ0NBQWdDLHdCQUF3QjtBQUFDLDJCQUEyQixlQUFlO0FBQUMseUNBQXlDLFdBQVc7QUFBQyx5QkFBeUIsMkJBQTJCLGVBQWUsQ0FBQyx5Q0FBeUMsV0FBVyxDQUFDO0FBQUMsYUFBYSw0QkFBNEI7QUFBQyxVQUFVLGVBQWU7QUFBQyxxQ0FBcUMscUJBQXFCO0FBQUMsZUFBZSxlQUFlO0FBQUMseUJBQXlCLDBCQUEwQixDQUFDLGtCQUFrQixDQUFDLHdIQUF3SDtBQUFDLDRCQUE0QixhQUFhO0FESTlpdUUsbUJBQW1CO0FBQ25CO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLDBDQUEwQztBQUM1QztBQUdBLHFCQUFxQjtBQUNyQjtFQUNFLHVGQUF1RjtFQUN2Riw0REFBNEQ7QUFDOUQ7QUFHQSxxQkFBcUI7QUFDckI7RUFDRSx1QkFBdUI7QUFDekI7QUFJQSwrSEFBK0g7QUFDL0g7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWOztnQ0FFOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0EsZUFBZTtBQUNmO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFHQSxlQUFlO0FBQ2Y7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUdBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBR0Esa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFHQSw0Q0FBNEM7QUFDNUM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7OztHQUdHO0FBRUg7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCOztFQUVoQiw2RUFBNkU7RUFDN0Usb0JBQW9CO0FBQ3RCO0FBR0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsNkVBQTZFO0VBQzdFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJjb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW5ndWxhciBNYXRlcmlhbCBDb2xvcnMgKi9cclxuQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7XHJcblxyXG5cclxuLyogR2xvYmFsIFN0eWxpbmcgKi9cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMTg5LCAxODkpOyAqL1xyXG59XHJcblxyXG5cclxuLyogQmFja2dyb3VuZC1JbWFnZSAqL1xyXG5tYWluIHtcclxuICAvKiBVc2UgLi4vLi4vYXNzZXRzL2ltYWdlcy9fX19fID0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvaXNzdWVzLzEyNzk3ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JlYWNoLmpwZycpOyAqL1xyXG59XHJcblxyXG5cclxuLyogQmFja2dyb3VuZC1Db2xvciAqL1xyXG4uY29zdHMtZm9ybSwgbWF0LWZvcm0tZmllbGQsIG1hdC1jYXJkLWhlYWRlciwgbWF0LWljb24sIG1hdC1jYXJkLXRpdGxlLCBtYXQtY2FyZC1zdWJ0aXRsZSwgbWF0LWNhcmQtY29udGVudCwgbWF0LWxhYmVsLCBtYXQtY2FyZC1hY3Rpb25zLCBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQ2VudGVyIGEgRGl2IGluIHRoZSBDZW50ZXIgb2YgdGhlIFNjcmVlbiA9IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxMjE3MjY4L2NlbnRlci1kaXYtb24tdGhlLW1pZGRsZS1vZi1zY3JlZW4gKi9cclxuLmRlc2t0b3AtY2VudGVyZWQtY29zdHMtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZF9fZGVza3RvcC1zaXplLW9ubHkge1xyXG4gIC8qIE1vdmUgZGl2IHVwIGJ5IGhhbGYgaXRzIHdpZHRoLiAqL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxufVxyXG5cclxuLyogTWF0LUNhcmQtQ29udGVudCBjb2xvcnMgKi9cclxuLmNvc3RzLWZvcm0ge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uY29zdHMtZm9ybV9fZ3JpZC1saXN0IHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5jb3N0cy1mb3JtX19ncmlkLWxpc3RfX2dyaWQtdGlsZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgKi9cclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5jb3N0cy1mb3JtX19fZm9ybS1maWVsZCB7XHJcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuXHJcbi8qIEZvcm0gTGFiZWwgKi9cclxuLmNvc3RzLWZvcm1fX2Zvcm0tZmllbGQgbWF0LWxhYmVsIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICBmb250LXNpemU6IDE0MCU7XHJcbn1cclxuXHJcblxyXG4vKiBGb3JtIEljb25zICovXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgZm9udC1zaXplOiAxNjAlO1xyXG59XHJcblxyXG5cclxuLyogRm9ybSBJbnB1dCAqL1xyXG4uY29zdHMtZm9ybV9fZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgY29sb3I6IHB1cnBsZTtcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIFN1Ym1pdCBCdXR0b24gKi9cclxuLmNvc3RzLWZvcm1fX3N1Ym1pdC1idG4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiByb3VuZDtcclxufVxyXG5cclxuXHJcbi8qIENlbnRlciBTdWJtaXQgQnV0dG9uICsgVG90YWwgQ29zdCAqbmdJZiAqL1xyXG4uY29zdHMtZm9ybV9fc3VibWl0LWJ0biwgLnRvdGFsLWNvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5pZi1jb3N0cy11cGRhdGVkIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmlmLWNvc3RzLWZhaWxlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnRvdGFsLWNvc3Qge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jb3N0cy1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLypcclxuLnRvdGFsLWNvc3QsIC5jb3N0cy1mb3JtX19zdWJtaXQtYnRuLCAuaWYtY29zdHMtZmFpbGVkLCAuaWYtY29zdHMtdXBkYXRlZCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59ICovXHJcblxyXG4uY29zdHMtZm9ybV9fZ3JpZC1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsgKi9cclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICBncmlkLXJvdy1nYXA6IDBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMjBweDsgKi9cclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAvKiBUaGlzIG1ha2VzIHN1cmUgdGhlIGdyaWQgZG9lcyBub3QgZXhwYW5kIHRvIHRoZSBmdWxsIGxlbmd0aCBvZiB0aGUgcGFnZS4gKi9cclxuICAvKiBtYXgtd2lkdGg6IDUwJTsgKi9cclxufVxyXG5cclxuXHJcbi5jb3N0cy1mb3JtX19tb2JpbGUtZ3JpZC1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgLyogVGhpcyBtYWtlcyBzdXJlIHRoZSBncmlkIGRvZXMgbm90IGV4cGFuZCB0byB0aGUgZnVsbCBsZW5ndGggb2YgdGhlIHBhZ2UuICovXHJcbiAgLyogbWF4LXdpZHRoOiA1MCU7ICovXHJcbn1cclxuIiwiLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6OXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZToyNHB4fS5tYXQtaDEsLm1hdC1oZWFkbGluZSwubWF0LXR5cG9ncmFwaHkgaDF7Zm9udDo0MDAgMjRweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMiwubWF0LXRpdGxlLC5tYXQtdHlwb2dyYXBoeSBoMntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWgzLC5tYXQtc3ViaGVhZGluZy0yLC5tYXQtdHlwb2dyYXBoeSBoM3tmb250OjQwMCAxNnB4LzI4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWg0LC5tYXQtc3ViaGVhZGluZy0xLC5tYXQtdHlwb2dyYXBoeSBoNHtmb250OjQwMCAxNXB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWg1LC5tYXQtdHlwb2dyYXBoeSBoNXtmb250OjQwMCBjYWxjKDE0cHggKiAwLjgzKS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWg2LC5tYXQtdHlwb2dyYXBoeSBoNntmb250OjQwMCBjYWxjKDE0cHggKiAwLjY3KS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWJvZHktc3Ryb25nLC5tYXQtYm9keS0ye2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1ib2R5LC5tYXQtYm9keS0xLC5tYXQtdHlwb2dyYXBoeXtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYm9keSBwLC5tYXQtYm9keS0xIHAsLm1hdC10eXBvZ3JhcGh5IHB7bWFyZ2luOjAgMCAxMnB4fS5tYXQtc21hbGwsLm1hdC1jYXB0aW9ue2ZvbnQ6NDAwIDEycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1kaXNwbGF5LTQsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00e2ZvbnQ6MzAwIDExMnB4LzExMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjA1ZW07bWFyZ2luOjAgMCA1NnB4fS5tYXQtZGlzcGxheS0zLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktM3tmb250OjQwMCA1NnB4LzU2cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDJlbTttYXJnaW46MCAwIDY0cHh9Lm1hdC1kaXNwbGF5LTIsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ye2ZvbnQ6NDAwIDQ1cHgvNDhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wMDVlbTttYXJnaW46MCAwIDY0cHh9Lm1hdC1kaXNwbGF5LTEsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe2ZvbnQ6NDAwIDM0cHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCA2NHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b24sLm1hdC1mbGF0LWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWJ1dHRvbi10b2dnbGV7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYXJke2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjIwcHh9Lm1hdC1jYXJkLXN1YnRpdGxlLC5tYXQtY2FyZC1jb250ZW50e2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2hlY2tib3h7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbHtsaW5lLWhlaWdodDoyNHB4fS5tYXQtY2hpcHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLC5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29ue2ZvbnQtc2l6ZToxOHB4fS5tYXQtdGFibGV7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1oZWFkZXItY2VsbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jZWxsLC5tYXQtZm9vdGVyLWNlbGx7Zm9udC1zaXplOjE0cHh9Lm1hdC1jYWxlbmRhcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHh9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZGlhbG9nLXRpdGxle2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1mb3JtLWZpZWxke2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjEyNTtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29ue2ZvbnQtc2l6ZToxNTAlO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b257aGVpZ2h0OjEuNWVtO3dpZHRoOjEuNWVtfS5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbntoZWlnaHQ6MS4xMjVlbTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouNWVtIDA7Ym9yZGVyLXRvcDouODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzQzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJ7dG9wOi0wLjg0Mzc1ZW07cGFkZGluZy10b3A6Ljg0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntmb250LXNpemU6NzUlO21hcmdpbi10b3A6LjY2NjY2NjY2NjdlbTt0b3A6Y2FsYygxMDAlIC0gMS43OTE2NjY2NjY3ZW0pfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi40Mzc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMnB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM1MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMjgxMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7bWFyZ2luLXRvcDouNTQxNjY2NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjY2NjY2NjY2NjdlbSl9QG1lZGlhIHByaW50ey5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSgwLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKDAuNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKDAuNzUpfX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi4yNWVtIDAgLjc1ZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4wOTM3NWVtO21hcmdpbi10b3A6LTAuNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOjFlbSAwIDFlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjg0Mzc1ZW07bWFyZ2luLXRvcDotMC4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzMzMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWdyaWQtdGlsZS1oZWFkZXIsLm1hdC1ncmlkLXRpbGUtZm9vdGVye2ZvbnQtc2l6ZToxNHB4fS5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmUsLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fWlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e21hcmdpbi10b3A6LTAuMDYyNWVtfS5tYXQtbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubWF0LXJhZGlvLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXNlbGVjdHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXNlbGVjdC10cmlnZ2Vye2hlaWdodDoxLjEyNWVtfS5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLC5tYXQtc3RlcHBlci1ob3Jpem9udGFse2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc3RlcC1sYWJlbHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvcntmb250LXdlaWdodDpub3JtYWx9Lm1hdC1zdGVwLWxhYmVsLWVycm9ye2ZvbnQtc2l6ZToxNHB4fS5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10YWItZ3JvdXB7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10b29sYmFyLC5tYXQtdG9vbGJhciBoMSwubWF0LXRvb2xiYXIgaDIsLm1hdC10b29sYmFyIGgzLC5tYXQtdG9vbGJhciBoNCwubWF0LXRvb2xiYXIgaDUsLm1hdC10b29sYmFyIGg2e2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjB9Lm1hdC10b29sdGlwe2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9Lm1hdC10b29sdGlwLWhhbmRzZXR7Zm9udC1zaXplOjE0cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWF0LWxpc3QtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZToxNnB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtb3B0aW9ue2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LXNpbXBsZS1zbmFja2Jhcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTRweH0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257bGluZS1oZWlnaHQ6MTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRyZWV7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC10cmVlLW5vZGUsLm1hdC1uZXN0ZWQtdHJlZS1ub2Rle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTRweH0ubWF0LXJpcHBsZXtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGU6bm90KDplbXB0eSl7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9Lm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWR7b3ZlcmZsb3c6dmlzaWJsZX0ubWF0LXJpcHBsZS1lbGVtZW50e3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbjpvcGFjaXR5LHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnNjYWxlKDApfS5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1yaXBwbGUtZWxlbWVudHtkaXNwbGF5Om5vbmV9LmNkay12aXN1YWxseS1oaWRkZW57Ym9yZGVyOjA7Y2xpcDpyZWN0KDAgMCAwIDApO2hlaWdodDoxcHg7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7b3V0bGluZTowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfS5jZGstb3ZlcmxheS1jb250YWluZXIsLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eXtkaXNwbGF5Om5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOm9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSl7LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNn19LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zMil9LmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MH0uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttaW4td2lkdGg6MXB4O21pbi1oZWlnaHQ6MXB4fS5jZGstZ2xvYmFsLXNjcm9sbGJsb2Nre3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7b3ZlcmZsb3cteTpzY3JvbGx9QGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydHsvKiEqL31Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZHsvKiEqL30uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGx7YW5pbWF0aW9uOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtc30uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7YW5pbWF0aW9uOmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXN9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXple3Jlc2l6ZTpub25lfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmd7cGFkZGluZzoycHggMCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudDtoZWlnaHQ6YXV0byAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50fXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveHtwYWRkaW5nOjJweCAwICFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2hlaWdodDowICFpbXBvcnRhbnR9Lm1hdC1mb2N1cy1pbmRpY2F0b3J7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9ye3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtjb2xvcjojYjBiMGIwfS5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6IzNmNTFiNX0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1hcHAtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZWxldmF0aW9uLXowe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MXtib3gtc2hhZG93OjBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NHtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejd7Ym94LXNoYWRvdzowcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo4e2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16OXtib3gtc2hhZG93OjBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEwe2JveC1zaGFkb3c6MHB4IDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejExe2JveC1zaGFkb3c6MHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEye2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEze2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE0e2JveC1zaGFkb3c6MHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE1e2JveC1zaGFkb3c6MHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE2e2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxN3tib3gtc2hhZG93OjBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTh7Ym94LXNoYWRvdzowcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE5e2JveC1zaGFkb3c6MHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMHtib3gtc2hhZG93OjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIxe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjJ7Ym94LXNoYWRvdzowcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyM3tib3gtc2hhZG93OjBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejI0e2JveC1zaGFkb3c6MHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcil7YmFja2dyb3VuZDojZmZmfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYmFkZ2UtY29udGVudHtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzNmNTFiNX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9Lm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1iYWRnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnR7ZGlzcGxheTpub25lfS5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50e2JhY2tncm91bmQ6I2I5YjliOTtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1iYWRnZS1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zaXRpb246dHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O3RyYW5zZm9ybTpzY2FsZSgwLjYpO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztwb2ludGVyLWV2ZW50czpub25lfS5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCwubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGV7dHJhbnNpdGlvbjpub25lfS5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZle3RyYW5zZm9ybTpub25lfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bGluZS1oZWlnaHQ6MTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTE0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtvcGFjaXR5Oi4xO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZDojMDAwfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50e2xpbmUtaGVpZ2h0OjQ4cHh9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhICFpbXBvcnRhbnR9Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtdGFibGV7YmFja2dyb3VuZDojZmZmfS5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LG1hdC1oZWFkZXItcm93LG1hdC1yb3csbWF0LWZvb3Rlci1yb3csW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sW21hdC1mb290ZXItcm93XSwubWF0LXRhYmxlLXN0aWNreXtiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtZm9vdGVyLXJvdyx0aC5tYXQtaGVhZGVyLWNlbGwsdGQubWF0LWNlbGwsdGQubWF0LWZvb3Rlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCwubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9ye2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9ye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlld3tjb2xvcjpyZ2JhKDAsMCwwLC4yNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSg2Myw4MSwxODEsLjIpfS5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNDksMTcxLDAsLjIpfS5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjMsIDgxLCAxODEsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjMpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmJlZm9yZXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDY0LDEyOSwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNDksMTcxLDAsLjIpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXJ7YmFja2dyb3VuZDojYThkYWI1fS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuMyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0OSwxNzEsMCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXJ7YmFja2dyb3VuZDojYThkYWI1fS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZDojNDZhMzVlfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZle2NvbG9yOiMzZjUxYjV9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1kYXRlLXJhbmdlLWlucHV0LWlubmVyW2Rpc2FibGVkXXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kaWFsb2ctY29udGFpbmVye2JveC1zaGFkb3c6MHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGl2aWRlcntib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRpdmlkZXItdmVydGljYWx7Ym9yZGVyLXJpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1hY3Rpb24tcm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYShob3Zlcjogbm9uZSl7Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6I2ZmZn19Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257Y29sb3I6aW5oZXJpdH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7aGVpZ2h0OjQ4cHh9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZHtoZWlnaHQ6NjRweH0ubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6IzNmNTFiNX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lm1hdC1pY29uLm1hdC1wcmltYXJ5e2NvbG9yOiMzZjUxYjV9Lm1hdC1pY29uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWljb24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiMzZjUxYjV9Lm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWxpc3QtaXRlbS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1saXN0LW9wdGlvbjpob3ZlciwubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXN7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24sLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246aG92ZXIsLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246Zm9jdXN7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1tZW51LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1tZW51LWl0ZW17YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXIsLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdIC5tYXQtaWNvbi1uby1jb2xvcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wYWdpbmF0b3ItY29udGFpbmVye21pbi1oZWlnaHQ6NTZweH0ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojYzVjYWU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmY4MGFifS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLC5tYXQtc3Bpbm5lciBjaXJjbGV7c3Ryb2tlOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZXtzdHJva2U6I2ZmNDA4MX0ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGV7c3Ryb2tlOiNmNDQzMzZ9Lm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1zZWxlY3QtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDY0LDEyOSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYzLDgxLDE4MSwuMil9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjIpfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29ue2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIubWF0LWFjY2VudCAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLC5tYXQtc3RlcC1oZWFkZXIubWF0LWFjY2VudCAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIubWF0LXdhcm4gLm1hdC1zdGVwLWljb257Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIubWF0LXdhcm4gLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcntoZWlnaHQ6NzJweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciwubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVye3BhZGRpbmc6MjRweCAyNHB4fS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7dG9wOi0xNnB4O2JvdHRvbTotMTZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZXt0b3A6MzZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7dG9wOjM2cHh9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItaGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE5NywyMDIsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwxMjgsMTcxLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC13YXJue2JhY2tncm91bmQ6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSwubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjppbmhlcml0fS5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dze21pbi1oZWlnaHQ6NjRweH0ubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93e2hlaWdodDo2NHB4fUBtZWRpYShtYXgtd2lkdGg6IDU5OXB4KXsubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93c3ttaW4taGVpZ2h0OjU2cHh9Lm1hdC10b29sYmFyLXJvdywubWF0LXRvb2xiYXItc2luZ2xlLXJvd3toZWlnaHQ6NTZweH19Lm1hdC10b29sdGlwe2JhY2tncm91bmQ6cmdiYSg5Nyw5Nyw5NywuOSl9Lm1hdC10cmVle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdHJlZS1ub2Rle21pbi1oZWlnaHQ6NDhweH0ubWF0LXNuYWNrLWJhci1jb250YWluZXJ7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNyk7YmFja2dyb3VuZDojMzIzMjMyO2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmNDA4MX1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-costs',
                templateUrl: './costs.component.html',
                styleUrls: ['./costs.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "t2wk":
/*!*********************************************************!*\
  !*** ./src/app/home/home-cards/home-cards.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardsComponent", function() { return HomeCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class HomeCardsComponent {
    constructor() {
        this.imgPath = "assets/images";
    }
    ngOnInit() {
    }
}
HomeCardsComponent.ɵfac = function HomeCardsComponent_Factory(t) { return new (t || HomeCardsComponent)(); };
HomeCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCardsComponent, selectors: [["app-home-cards"]], decls: 58, vars: 3, consts: [["id", "home-cards"], [1, "material-icons"], ["alt", "Image Animaticon", 3, "src"], ["alt", "Diamond Animaticon", 3, "src"], ["alt", "Rocket Animaticon", 3, "src"]], template: function HomeCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "emoji_transportation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destinations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Schedule your journey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Having trouble organizing your dream vacation?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rest easy with your new Vacation Planner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Schedule your journey to a distant land.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose your ideal location for your surreal vacation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Record your finances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bills can add up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Divide and conquer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Make sure your finances are in order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Avoid financial stress on your vacation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "luggage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Supplies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mind your belongings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Keep track of your pack.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Organize your belongings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Never forget what you need to bring.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Going somewhere? Make sure your belongings go with you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.imgPath, "/animat-essential/image/animat-image-color.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.imgPath, "/animat-essential/diamond/animat-diamond-color.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.imgPath, "/animat-essential/rocket/animat-rocket-color.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\narticle[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  max-width: 100%;\r\n}\r\n\r\n\r\n\r\narticle[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\r\n  max-width: 33.3333%;\r\n}\r\n\r\n\r\n\r\narticle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  max-width: 400px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCOztFQUV0Qix3RUFBd0U7RUFDeEUsd0JBQXdCO0FBQzFCOzs7O0FBSUEsZUFBZTs7OztBQUNmO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7OztBQUVBLG9CQUFvQjs7OztBQUVwQjtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJob21lLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAvKiBUaGUgb3ZlcmZsb3cteDogaGlkZGVuOyBjb2RlIG1lc3NlcyB1cCB0aGUgZGVwaWN0aW9uIG9mIHRoZSBxdW90ZXMhICovXHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEhvbWUgQ2FyZHMgKi9cclxuYXJ0aWNsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFydGljbGUgbWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogMzMuMzMzMyU7XHJcbn1cclxuXHJcbmFydGljbGUgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLyogSG9tZSBDYXJkcyBUZXh0ICovXHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4vKiBtYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-cards',
                templateUrl: './home-cards.component.html',
                styleUrls: ['./home-cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklist/checklist.component */ "wrh2");
/* harmony import */ var _costs_costs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./costs/costs.component */ "sHqL");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination/destination.component */ "SzZM");
// This file is not necessary because Angular Material Tabs let you render all components on the same page (Singular Page App).







const appRoutes = [
    { path: 'checklist', component: _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_2__["ChecklistComponent"] },
    { path: 'costs', component: _costs_costs_component__WEBPACK_IMPORTED_MODULE_3__["CostsComponent"] },
    { path: 'destination', component: _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__["DestinationComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");













































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wrh2":
/*!**************************************************!*\
  !*** ./src/app/checklist/checklist.component.ts ***!
  \**************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home-footer/home-footer.component */ "B+5u");
/* harmony import */ var _checklist_desktop_checklist_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checklist-desktop/checklist-desktop.component */ "oSKH");
/* harmony import */ var _checklist_mobile_checklist_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checklist-mobile/checklist-mobile.component */ "S1NW");








function ChecklistComponent_app_checklist_desktop_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-checklist-desktop");
} }
function ChecklistComponent_app_checklist_mobile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-checklist-mobile");
} }
class ChecklistComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 686px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.mobileSize = true;
            }
            else {
                this.mobileSize = false;
            }
        });
        this.breakpointObserver
            .observe(['(max-width: 1000px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.desktopSize = 'tablet';
            }
            else {
                this.desktopSize = 'desktop';
            }
        });
    }
}
ChecklistComponent.ɵfac = function ChecklistComponent_Factory(t) { return new (t || ChecklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
ChecklistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChecklistComponent, selectors: [["app-checklist"]], viewQuery: function ChecklistComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 4, vars: 2, consts: [[4, "ngIf"]], template: function ChecklistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChecklistComponent_app_checklist_desktop_1_Template, 1, 0, "app-checklist-desktop", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChecklistComponent_app_checklist_mobile_2_Template, 1, 0, "app-checklist-mobile", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desktopSize === "desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desktopSize === "tablet");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _home_home_footer_home_footer_component__WEBPACK_IMPORTED_MODULE_4__["HomeFooterComponent"], _checklist_desktop_checklist_desktop_component__WEBPACK_IMPORTED_MODULE_5__["ChecklistDesktopComponent"], _checklist_mobile_checklist_mobile_component__WEBPACK_IMPORTED_MODULE_6__["ChecklistMobileComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUZBQXVGO0VBQ3ZGLDREQUE0RDtFQUM1RCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2hlY2tsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAvKiBVc2UgLi4vLi4vYXNzZXRzL2ltYWdlcy9fX19fID0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvaXNzdWVzLzEyNzk3ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JlYWNoLmpwZycpOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChecklistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checklist',
                templateUrl: './checklist.component.html',
                styleUrls: ['./checklist.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"]]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map