(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header d-flex\">\n  <div class=\"header-left\">\n    <img src=\"https://img.icons8.com/dusk/64/000000/bank.png\" />\n  </div>\n  <div class=\"header-title\"><h1>PokeList</h1></div>\n  <div class=\"header-right\"></div>\n</div>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pokemon-list/pokemon-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pokemon-list/pokemon-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-xs-6 col-md-8 pt-3\">\n    <h1 class=\"text-center\">List of Pokemon</h1>\n    <div class=\"row justify-content-center mb-2\">\n      <div class=\"col-xs-10\">\n        <input\n          type=\"text\"\n          [(ngModel)]=\"searchInput\"\n          class=\"form-control\"\n          (keyup)=\"onChange()\"\n        />\n      </div>\n      <div class=\"col-xs-2\">\n        <button class=\"btn btn-primary\">Search</button>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li\n        (click)=\"onClick(i)\"\n        class=\"list-group-item\"\n        *ngFor=\"\n          let pokemon of searchInput ? searchedList : pokemonList;\n          let i = index\n        \"\n      >\n        <div class=\"row\">\n          <div class=\"col-xs mx-3\">\n            <h4>Name: {{ pokemon.name | uppercase }}</h4>\n          </div>\n          <div class=\"col-xs mx-3\">\n            <h4>Type: {{ pokemon.type.type.name | uppercase }}</h4>\n            <h4>Weight: {{ pokemon.weight }}</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <div class=\"col-xs\">\n              <img class=\"img-fluid\" src=\"{{ pokemon.image }}\" alt=\"\" />\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-list/pokemon-list.component */ "./src/app/pokemon-list/pokemon-list.component.ts");




var routes = [{ path: '', component: _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  padding: 0.2em;\n  background-color: #66c6ec;\n  justify-content: center;\n  align-items: center;\n}\n.header h1 {\n  font-family: \"Luckiest Guy\", cursive;\n  color: white;\n  text-transform: uppercase;\n  font-size: 2em;\n  margin: auto;\n}\n.header .header-left,\n.header .header-right {\n  flex-basis: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXERvY3VtZW50c1xcUHJvZ3JhbW1pbmdcXFdlYiBEZXZlbG9wbWVudFxcUGVyc29uYWwgUHJvamVjdHNcXHBva2Vtb24tbGlzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNFSjtBREFFOztFQUVFLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDE5OCwgMjM2KTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmhlYWRlci1sZWZ0LFxyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZmxleC1iYXNpczogNTAlO1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgcGFkZGluZzogMC4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmM2ZWM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLCBjdXJzaXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVyIC5oZWFkZXItbGVmdCxcbi5oZWFkZXIgLmhlYWRlci1yaWdodCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pokemon-list';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pokemon-list/pokemon-list.component */ "./src/app/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pokemon.service */ "./src/app/services/pokemon.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_7__["PokemonListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_8__["PokemonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pokemon-list/pokemon-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pokemon-list/pokemon-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  cursor: pointer;\n}\n\nh1 {\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nul h4 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbi1saXN0L0c6XFxEb2N1bWVudHNcXFByb2dyYW1taW5nXFxXZWIgRGV2ZWxvcG1lbnRcXFBlcnNvbmFsIFByb2plY3RzXFxwb2tlbW9uLWxpc3Qvc3JjXFxhcHBcXHBva2Vtb24tbGlzdFxccG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURHRTtFQUNFLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wb2tlbW9uLWxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG59XHJcbiIsImxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xufVxuXG51bCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pokemon-list/pokemon-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pokemon-list/pokemon-list.component.ts ***!
  \********************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pokemon.service */ "./src/app/services/pokemon.service.ts");



var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(pokeService) {
        this.pokeService = pokeService;
        this.searchInput = '';
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokeService.getPokemon().subscribe(function (list) {
            _this.pokemonList = list;
        });
        this.pokeService.fetchPokemon();
    };
    PokemonListComponent.prototype.onClick = function ($event) { };
    PokemonListComponent.prototype.onChange = function () {
        var _this = this;
        this.searchedList = this.pokemonList.filter(function (pokemon) {
            return pokemon.name.includes(_this.searchInput);
        });
    };
    PokemonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pokemon-list',
            template: __webpack_require__(/*! raw-loader!./pokemon-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.scss */ "./src/app/pokemon-list/pokemon-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.pokemonList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    PokemonService.prototype.getPokemon = function () {
        return this.pokemonList;
    };
    PokemonService.prototype.fetchPokemon = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, results;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .get('https://pokeapi.co/api/v2/pokemon/')
                            .toPromise()];
                    case 1:
                        result = _a.sent();
                        results = result.results;
                        results.forEach(function (pokemon) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var pokeStats, newPokemon;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.http
                                            .get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
                                            .toPromise()];
                                    case 1:
                                        pokeStats = _a.sent();
                                        newPokemon = {
                                            name: pokemon.name,
                                            image: pokeStats.sprites.front_default,
                                            height: pokeStats.height,
                                            abilities: pokeStats.abilities,
                                            id: pokeStats.id,
                                            moves: pokeStats.moves,
                                            type: pokeStats.types[0],
                                            weight: pokeStats.weight
                                        };
                                        this.pokemonList.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.pokemonList.value, [newPokemon]));
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        console.log(this.pokemonList);
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Documents\Programming\Web Development\Personal Projects\pokemon-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map