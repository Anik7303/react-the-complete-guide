webpackJsonp([3],{149:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(150),i=n.n(o),l=function(e){var t=null,n=[i.a.InputElement];switch(e.touched&&!e.valid&&n.push(i.a.Invalid),e.type){case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}));break;case"select":var r=e.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.name)});t=a.a.createElement("select",Object.assign({className:n.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}),r);break;case"input":default:t=a.a.createElement("input",Object.assign({className:n.join(" "),id:e.config.name},e.config,{value:e.value,onChange:e.onChange}))}return a.a.createElement("div",{className:i.a.Input},e.label&&a.a.createElement("label",{className:i.a.Label,htmlFor:e.config.name},e.label),t)};t.a=l},150:function(e,t,n){var r=n(151);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(145)(r,a);r.locals&&(e.exports=r.locals)},151:function(e,t,n){t=e.exports=n(144)(!0),t.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#eee}.Input__Invalid__38X2d{border:1px solid red;background-color:#f7a299}","",{version:3,sources:["C:/Users/Anik/Desktop/React - The Complete Guide/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAAqC,CACxC",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #eee;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: rgb(247, 162, 153);\r\n}\r\n"],sourceRoot:""}]),t.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.trim())&&n}if(t.isNumeric){n=/^\d+$/.test(e.trim())&&n}return n}},156:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),s=n(6),c=n(13),u=n(50),d=n(157),p=n.n(d),A=n(149),m=n(49),b=n(10),h=n(51),g=n(152),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),C=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={orderForm:n.getFormsState(),isFormValid:!1},n.orderHandler=n.orderHandler.bind(n),n.inputChangeHandler=n.inputChangeHandler.bind(n),n}return o(t,e),f(t,[{key:"getFormsState",value:function(){return{name:{type:"input",config:{type:"text",name:"name",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{type:"input",config:{type:"email",name:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},street:{type:"input",config:{type:"text",name:"street",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{type:"input",config:{type:"text",name:"zipCode",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:4,maxLength:10,isNumeric:!0},valid:!1,touched:!1},country:{type:"input",config:{type:"text",name:"country",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{type:"select",config:{name:"deliveryMethod"},options:[{value:"fastest",name:"Fastest"},{value:"cheapest",name:"Cheapest"}],value:"fastest",validation:{},valid:!0}}}},{key:"inputChangeHandler",value:function(e){var t=e.target.name,n=e.target.value,r=Object.assign({},this.state.orderForm),a=!0;for(var o in r)a=r[o].valid&&a;r[t]=Object.assign({},r[t],{value:n,valid:Object(g.a)(n,r[t].validation),touched:!0}),this.setState({orderForm:r,isFormValid:a})}},{key:"orderHandler",value:function(e){e.preventDefault();var t=this.state.orderForm,n={ingredients:Object.assign({},this.props.ingredients),price:this.props.price.toFixed(2),orderData:{userId:this.props.userId,name:t.name.value,address:{street:t.street.value,zipCode:t.zipCode.value,country:t.country.value},email:t.email.value},deliveryMethod:t.deliveryMethod.value};this.props.onStoreOrder(n,this.props.token)}},{key:"render",value:function(){var e=[];for(var t in this.state.orderForm)e.push(l.a.createElement(A.a,Object.assign({key:t},this.state.orderForm[t],{onChange:this.inputChangeHandler})));return this.props.loading?l.a.createElement(m.a,null):l.a.createElement("div",{className:p.a.ContactData},l.a.createElement("fieldset",null,l.a.createElement("legend",{style:{fontSize:"1.2rem"}},l.a.createElement("strong",null,"Enter your contact data")),l.a.createElement("form",{onSubmit:this.orderHandler,noValidate:!0},e,l.a.createElement(u.a,{btnType:"Success",disabled:!this.state.isFormValid},"Order"))))}}]),t}(l.a.Component),v=function(e){return{ingredients:e.burger.ingredients,price:e.burger.price,loading:e.order.loading,token:e.auth.auth.token,userId:e.auth.auth.userId}},x=function(e){return{onStoreOrder:function(t,n){return e(b.g(t,n))}}};t.default=Object(s.b)(v,x)(Object(h.a)(C,c.a))},157:function(e,t,n){var r=n(158);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;n(145)(r,a);r.locals&&(e.exports=r.locals)},158:function(e,t,n){t=e.exports=n(144)(!0),t.push([e.i,".ContactData__ContactData__1whvJ{margin:20px auto;width:80%;text-align:center}@media (min-width:600px){.ContactData__ContactData__1whvJ{width:500px}}","",{version:3,sources:["C:/Users/Anik/Desktop/React - The Complete Guide/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACI,iBAAkB,AAClB,UAAW,AACX,iBAAmB,CAKtB,AAaD,yBACI,iCACI,WAAa,CAChB,CACJ",file:"ContactData.css",sourcesContent:[".ContactData {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    /* box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    box-sizing: border-box; */\r\n}\r\n\r\n/* .ContactData input,\r\n.ContactData select {\r\n    display: block;\r\n    margin: 10px auto;\r\n    width: 80%;\r\n    max-width: 300px;\r\n    height: 2rem;\r\n    padding: 0.5rem;\r\n    box-sizing: border-box;\r\n} */\r\n\r\n@media (min-width: 600px) {\r\n    .ContactData {\r\n        width: 500px;\r\n    }\r\n}\r\n"],sourceRoot:""}]),t.locals={ContactData:"ContactData__ContactData__1whvJ"}}});
//# sourceMappingURL=3.90ab13b2.chunk.js.map