(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.userId,a=e.handleDeleteCard,u=e.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._likes=r.likes,this._id=r._id,this._cardUserId=r.owner._id,this._user=i,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteCard=a,this._handleCardLike=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick()})),this._user===this._cardUserId&&this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard(e._id,e._element)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__button-like_active")?e._handleCardLike.handleDeleteLike(e._id):e._handleCardLike.handleSetLike(e._id)}))}},{key:"renderCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__button-like"),this._deleteButton=this._element.querySelector(".element__button-delete"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementTitle.textContent=this._name,this._setEventListeners(),this._handleLike(),this._user!==this._cardUserId&&this._deleteButton.remove(),this._element}},{key:"_handleLike",value:function(){var e=this;0!==this._likes.length?this._element.querySelector(".element__like-counter").textContent=this._likes.length:this._element.querySelector(".element__like-counter").textContent="0",this._likes.forEach((function(t){t._id===e._user&&e._likeButton.classList.add("element__button-like_active")}))}},{key:"updateLikes",value:function(e){this._likeButton.classList.toggle("element__button-like_active"),this._element.querySelector(".element__like-counter").textContent=0!==e?e:"0"}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._validateForm=n}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._submitButton=this._validateForm.querySelector(this._submitButtonSelector),this._inputs=Array.from(this._validateForm.querySelectorAll(this._inputSelector)),this._setEventListeners()}},{key:"_handleFieldValidation",value:function(e){var t=e.target;this._validateForm.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.toggle(this._inputErrorClass,!t.validity.valid),t.classList.toggle(this._errorClass,!t.validity.valid)}},{key:"_setSubmitButtonState",value:function(){this._submitButton.disabled=!this._validateForm.checkValidity(),this._submitButton.classList.toggle(this._inactiveButtonClass,!this._validateForm.checkValidity())}},{key:"_setEventListeners",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){t.addEventListener("input",(function(t){e._handleFieldValidation(t),e._setSubmitButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){var n=e._validateForm.querySelector("#".concat(t.id,"-error"));t.classList.remove(e._inputErrorClass),n.classList.remove(e._errorClass),n.textContent=""}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n._button=n._form.querySelector(".popup__submit-button"),n}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;c(p(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e.showLoadingStatus(!0),t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){c(p(a.prototype),"close",this).call(this),this._form.reset()}},{key:"showLoadingStatus",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить";this._button.textContent=e?"Сохранение...":t}}],n&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._link=t._popup.querySelector(".popup__image"),t._name=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){this._link.src=e.link,this._link.alt=e.name,this._name.textContent=e.name,y(k(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.profileName,r=t.profileOccupation,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nikname=n,this._occupation=r,this._avatar=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{nikname:this._nikname.textContent,occupation:this._occupation.textContent}}},{key:"setUserInfo",value:function(e){this._nikname.textContent=e.name,this._occupation.textContent=e.about,this._avatar.src=e.avatar}}],n&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r=t.handleSubmitDelete;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitDelete=r,n._form=n._popup.querySelector(".popup__form"),n._confirmButton=n._form.querySelector(".popup__submit-button"),n}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;j(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e.showLoadingStatus(!0),t.preventDefault(),e._handleSubmitDelete(e._idCard,e._cardElement)}))}},{key:"getCard",value:function(e,t){this._clear(),this._idCard=e,this._cardElement=t}},{key:"_clear",value:function(){this._idCard="",this._cardElement=""}},{key:"showLoadingStatus",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Да";this._confirmButton.textContent=e?"Удаление...":t}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.nikname,about:e.occupation})}).then((function(e){return t._handleResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResponse(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=document.querySelector(".popup_type_edit"),A=document.querySelector(".profile-info__edit-button"),F=D.querySelector(".popup__form"),V=D.querySelector(".popup__name"),U=D.querySelector(".popup__occupation"),N=document.querySelector(".profile-info__name"),J=document.querySelector(".profile-info__occupation"),G=document.querySelector(".popup_type_add").querySelector(".popup__form"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_edit-avatar").querySelector(".popup__form"),z=document.querySelector(".profile__avatar"),$=document.querySelector(".profile__avatar-edit");function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q={},W="",X=new x({url:"https://mesto.nomoreparties.co/v1/cohort-34/",headers:{Authorization:"302340aa-fc01-46c7-9fc8-2e2b6878fdbb","Content-Type":"application/json"}}),Y=[X.getUserInfo(),X.getCards()];Promise.all(Y).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W=o._id,te.renderItems(i),re.setUserInfo(o)})).catch((function(e){console.log(e)}));var Z=new g(".popup_type_image");Z.setEventListeners();var ee=function(e){var n=new t({data:e,userId:W,handleCardClick:function(){Z.open({name:e.name,link:e.link})},handleDeleteCard:function(e,t){ue.open(),ue.getCard(e,t)},handleCardLike:{handleSetLike:function(e){X.addCardLike(e).then((function(e){n.updateLikes(e.likes.length)})).catch((function(e){console.log(e)}))},handleDeleteLike:function(e){X.deleteCardLike(e).then((function(e){n.updateLikes(e.likes.length)})).catch((function(e){console.log(e)}))}}},"#element-template");return n.renderCard()},te=new w({renderer:function(e){te.addItem(ee(e))}},".elements__list"),ne=new h(".popup_type_add",{handleFormSubmit:function(e){X.addNewCard(e).then((function(e){te.addNewItem(ee(e)),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.showLoadingStatus(!1)}))}});ne.setEventListeners();var re=new E({profileName:N,profileOccupation:J,profileAvatar:z}),oe=new h(".popup_type_edit",{handleFormSubmit:function(e){X.editProfile(e).then((function(e){re.setUserInfo(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.showLoadingStatus(!1)}))}});oe.setEventListeners();var ie=new h(".popup_edit-avatar",{handleFormSubmit:function(e){X.editAvatar(e).then((function(e){re.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ie.showLoadingStatus(!1)}))}});ie.setEventListeners();var ae,ue=new T(".popup_type_delete",{handleSubmitDelete:function(e,t){X.deleteCard(e).then((function(){t.remove(),t="",ue.close()})).catch((function(e){console.log(e)}))}});ue.setEventListeners(),H.addEventListener("click",(function(){ne.open(),Q[G.name].resetValidation()})),A.addEventListener("click",(function(){var e=re.getUserInfo();V.value=e.nikname,U.value=e.occupation,oe.open(D),Q[F.name].resetValidation()})),$.addEventListener("click",(function(){ie.open(),Q[M.name].resetValidation()})),ae={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(ae.formSelector)).forEach((function(e){var t=new r(ae,e);Q[e.name]=t,t.enableValidation()}))})();
//# sourceMappingURL=main.js.map