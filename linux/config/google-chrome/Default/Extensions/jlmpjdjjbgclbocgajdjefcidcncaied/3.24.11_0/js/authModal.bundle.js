"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[731],{72146:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(35776),o=n(94184),l=n.n(o),a=n(1708),u=n(48185),i=n(62835),s=n(87328),c=n(38e3),f=n(58953);const g=["className","trigger","onRequestClose"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){let t=e.className,n=e.trigger,o=e.onRequestClose,m=d(e,g);const h=(0,r.useContext)(c.ZP).trackEvent,b=p((0,r.useState)(a.u.Default),2),v=b[0],S=b[1],C=(0,r.useContext)(i.ZP),O=C.user,w=C.closeLogin,j=C.logout,x=C.loginState,R=e=>{h({event_name:s.FF.CloseSignUp,extra:JSON.stringify({trigger:n,screenValue:v})}),o(e)},k=(0,u.Z)({onDiscard:e=>{O&&!O.username&&j(),R(e)}}),A=k.onContainerChange,E=k.formRef,N=k.onDiscardAttempt,P="legacy_logout"===n;return r.default.createElement(f.u_,y({},m,{kind:f.u_.Kind.FixedCenter,size:f.u_.Size.Small,overlayRef:A,onRequestClose:N,className:l()(t,"auth")}),r.default.createElement(a.Z,{className:"h-full",onClose:R,formRef:E,onSuccessfulLogin:()=>{var e;null==x||null===(e=x.onLoginSuccess)||void 0===e||e.call(x),w()},onSuccessfulRegistration:null==x?void 0:x.onRegistrationSuccess,trigger:n,isLoginFlow:P,onDisplayChange:e=>S(e)}))}}}]);