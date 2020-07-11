webpackJsonp([0],{148:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),s=t.n(o),u=t(11),c=t(6),A=t(13),l=t(164),d=t.n(l),p=t(149),h=t(50),b=t(51),g=t(10),m=t(49),f=t(152),C=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),_=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.inputChangeHandler=function(e){var n=e.target.name,r=e.target.value,a=Object.assign({},t.state.controls);a[n]=Object.assign({},a[n],{value:r,valid:Object(f.a)(r,a[n].validation),touched:!0}),t.setState({controls:a})},t.formSubmitHandler=function(e){e.preventDefault();var n={email:t.state.controls.email.value,password:t.state.controls.password.value,signupMode:t.state.signupMode};t.props.authenticate(n)},t.switchAuthModeHandler=function(e){t.setState(function(e){return{signupMode:!e.signupMode}})},t.state={controls:{email:{type:"input",config:{type:"text",name:"email",placeholder:"Email Address"},value:"",validation:{isRequired:!0,isEmail:!0},valid:!1,touched:!1},password:{type:"input",config:{type:"password",name:"password",placeholder:"Password (must be atleast 6 characters or longer)"},value:"",validation:{isRequired:!0,minLength:6},valid:!1,touched:!1}},signupMode:!1},t.inputChangeHandler=t.inputChangeHandler.bind(t),t.formSubmitHandler=t.formSubmitHandler.bind(t),t.switchAuthModeHandler=t.switchAuthModeHandler.bind(t),t}return i(n,e),C(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.redirectPath||this.props.setAuthRedirectPath()}},{key:"render",value:function(){var e=this;if(this.props.isAuthenticated)return s.a.createElement(u.c,{to:this.props.redirectPath});var n=Object.keys(this.state.controls).map(function(n){return s.a.createElement(p.a,Object.assign({key:n},e.state.controls[n],{onChange:e.inputChangeHandler}))}),t=s.a.createElement(s.a.Fragment,null,n,s.a.createElement("div",{className:d.a.Actions},s.a.createElement(h.a,{btnType:"Success",clicked:this.formSubmitHandler},this.state.signupMode?"Sign up":"Log in"),s.a.createElement(h.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},this.state.signupMode?"Already have a account?":"Create new account")));this.props.authenticating&&(t=s.a.createElement(m.a,null));var r=null;return this.props.error&&(r=s.a.createElement("p",null,this.props.error.message)),s.a.createElement("div",{className:d.a.Auth},r,t)}}]),n}(s.a.Component),x=function(e){return{authenticating:e.auth.authenticating,isAuthenticated:e.auth.isAuthenticated,error:e.auth.error,redirectPath:e.auth.redirectPath,buildingBurger:e.burger.building}},B=function(e){return{authenticate:function(n){return e(g.b(n))},setAuthRedirectPath:function(){return e(g.k("/"))}}};n.default=Object(c.b)(x,B)(Object(b.a)(_,A.a))},149:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(150),o=t.n(i),s=function(e){var n=null,t=[o.a.InputElement];switch(e.touched&&!e.valid&&t.push(o.a.Invalid),e.type){case"textarea":n=a.a.createElement("textarea",Object.assign({className:t.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}));break;case"select":var r=e.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.name)});n=a.a.createElement("select",Object.assign({className:t.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}),r);break;case"input":default:n=a.a.createElement("input",Object.assign({className:t.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}))}return a.a.createElement("div",{className:o.a.Input},e.label&&a.a.createElement("label",{className:o.a.Label,htmlFor:e.config.name},e.label),n)};n.a=s},150:function(e,n,t){var r=t(151);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(145)(r,a);r.locals&&(e.exports=r.locals)},151:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#eee}.Input__Invalid__38X2d{border:1px solid red;background-color:#f7a299}","",{version:3,sources:["C:/Users/Anik/Desktop/React - The Complete Guide/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAAqC,CACxC",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #eee;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: rgb(247, 162, 153);\r\n}\r\n"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},152:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e,n){var t=!0;if(!n)return!0;if(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.trim().length>=n.minLength&&t),n.maxLength&&(t=e.trim().length<=n.maxLength&&t),n.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.trim())&&t}if(n.isNumeric){t=/^\d+$/.test(e.trim())&&t}return t}},164:function(e,n,t){var r=t(165);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(145)(r,a);r.locals&&(e.exports=r.locals)},165:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}.Auth__Actions__ySZCR{margin:0;padding:10px;width:100%}.Auth__Actions__ySZCR button{display:inline-block;padding:0}.Auth__Actions__ySZCR button:last-of-type{font-size:.9rem;font-weight:400}","",{version:3,sources:["C:/Users/Anik/Desktop/React - The Complete Guide/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ,AAED,sBACI,SAAU,AACV,aAAc,AACd,UAAY,CACf,AAED,6BACI,qBAAsB,AACtB,SAAW,CACd,AAED,0CACI,gBAAkB,AAClB,eAAoB,CACvB",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .Auth {\r\n        width: 500px;\r\n    }\r\n}\r\n\r\n.Actions {\r\n    margin: 0;\r\n    padding: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.Actions button {\r\n    display: inline-block;\r\n    padding: 0;\r\n}\r\n\r\n.Actions button:last-of-type {\r\n    font-size: 0.9rem;\r\n    font-weight: normal;\r\n}\r\n"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt",Actions:"Auth__Actions__ySZCR"}}});
//# sourceMappingURL=0.27ed0a79.chunk.js.map