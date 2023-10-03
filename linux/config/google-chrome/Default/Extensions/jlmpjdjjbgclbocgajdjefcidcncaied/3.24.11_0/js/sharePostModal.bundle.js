"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[609],{38150:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Y});var r=o(35776),n=o(58953),a=o(74596),l=o(15098),s=o(7525),i=o(30742),u=o(88767),c=o(94184),m=o.n(c),d=o(30435),f=o(47164),p=o(57304),h=o(70939),b=o(89228),y=o(41542),v=o(36170),g=o(8311),P=o(31117),x=o(91278);const E=function(e){let t=e.date,o=e.source,n=e.size,a=void 0===n?"medium":n,l=e.className;const s="unknown"===o.id;return r.default.createElement("span",{className:m()("flex flex-row items-center text-theme-label-tertiary typo-footnote",l)},!s&&r.default.createElement(r.default.Fragment,null,r.default.createElement(x.Z,{source:o,size:a}),r.default.createElement("h3",{className:"ml-3"},o.handle)),!!t&&r.default.createElement(r.default.Fragment,null,!s&&r.default.createElement(P.Z0,null),r.default.createElement("time",{dateTime:t},t)))};var N=o(89907),w=o(84558),O=o(38061),k=o(38050),j=o(57877),S=o(52809),A=o(23576),C=o(3805);function R(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Z(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?R(Object(o),!0).forEach((function(t){T(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function T(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},F.apply(this,arguments)}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var r,n,a=[],l=!0,s=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){s=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(s)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const L=function(e){let t=e.post,o=e.isFallback,n=e.shouldOnboardAuthor,a=e.enableShowShareNewComment,l=e.origin,s=e.position,i=e.postPosition,c=e.inlineActions,P=e.className,x=e.customNavigation,R=e.onPreviousPost,T=e.onNextPost,D=e.onClose,L=e.onRemovePost;const M=(0,u.useMutation)(S.ox).mutateAsync,q=(0,r.useContext)(O.ZP).openNewTab,H=!!R||!!T,I=z((0,r.useState)(null),2),Y=I[0],B=I[1],$=z((0,r.useState)(!0),2),_=$[0],G=$[1],Q=(0,p.Z)({origin:l,post:t}),U=Q.onReadArticle,J=Q.onSharePost,K=Q.onToggleBookmark,V=(0,C.t)({source:null==t?void 0:t.source,user:null==t?void 0:t.author}).role,W={post:t,onBookmark:K,onPreviousPost:R,onNextPost:T,onShare:J,postPosition:i,onClose:D,inlineActions:c,onRemovePost:L},X=(0,r.useMemo)((()=>null===Y?"auto":_?Y:0),[_,Y]);return(0,r.useEffect)((()=>{null!=t&&t.id&&M(t.id)}),[null==t?void 0:t.id]),r.default.createElement(r.default.Fragment,null,"fixed"===s&&r.default.createElement(h.Z,F({},W,{onReadArticle:U,className:null==P?void 0:P.fixedNavigation})),r.default.createElement(f.Z,{className:m()("relative py-8 px-6 post-content",null==P?void 0:P.container),hasNavigation:H},r.default.createElement(N.F,{className:Z(Z({},P),{},{onboarding:"mb-6",navigation:{actions:"ml-auto",container:"mb-6"}}),isFallback:o,customNavigation:x,enableShowShareNewComment:a,shouldOnboardAuthor:n,navigationProps:W,engagementProps:Q,origin:l,post:t},r.default.createElement(E,{date:(0,d.mY)(t.createdAt),source:t.source,className:"!typo-body"}),r.default.createElement("span",{className:"flex flex-row items-center mt-3"},r.default.createElement(j.R,{user:t.author},r.default.createElement(k.YY,{user:t.author,size:"xxlarge",nativeLazyLoading:!0})),r.default.createElement(j.R,{user:t.author,link:{href:t.author.permalink}},r.default.createElement("a",{className:"flex flex-col ml-4"},r.default.createElement("div",{className:"flex items-center"},r.default.createElement("span",{className:"font-bold"},t.author.name),r.default.createElement(A.Z,{key:"squadMemberRole",role:V})),r.default.createElement("span",{className:"text-theme-label-tertiary"},"@",t.author.username)))),r.default.createElement("p",{className:"mt-6 typo-title3"},t.title),r.default.createElement("div",{className:"flex flex-col mt-8 rounded-16 border border-theme-divider-tertiary hover:border-theme-divider-secondary"},r.default.createElement("a",{href:"unknown"===t.sharedPost.source.id?t.sharedPost.permalink:t.sharedPost.commentsPermalink,title:"Go to post",target:"_blank",rel:"noopener",className:"flex flex-col-reverse laptop:flex-row p-4 max-w-full",onClick:U},r.default.createElement("div",{className:"flex flex-col flex-1"},r.default.createElement("h2",{className:"flex flex-wrap mt-4 laptop:mt-0 mb-4 font-bold typo-body"},t.sharedPost.title),r.default.createElement(E,{date:t.sharedPost.readTime?`${t.sharedPost.readTime}m read time`:void 0,source:t.sharedPost.source,size:"small"}),r.default.createElement(v.H,{className:"mt-5 btn-secondary w-fit",href:t.sharedPost.permalink,openNewTab:q,onClick:U})),r.default.createElement("div",{className:"block overflow-hidden ml-2 w-70 rounded-2xl cursor-pointer h-fit"},r.default.createElement(y.w,{imgSrc:t.sharedPost.image,imgAlt:"Post cover image",ratio:"52%",eager:!0,fallbackSrc:w.n.post.imageCoverPlaceholder}))),t.sharedPost.summary&&r.default.createElement(r.default.Fragment,null,r.default.createElement(b.Z,{ref:e=>{null!=e&&e.offsetHeight&&null===Y&&B(e.offsetHeight)},style:{height:X},className:m()("mx-4 transition-all duration-300 ease-in-out",_&&"mb-4"),summary:t.sharedPost.summary}),r.default.createElement("button",{type:"button",className:"flex flex-row justify-center py-2 w-full font-bold hover:underline border-t border-theme-divider-tertiary typo-callout",onClick:()=>G(!_)},_?"Hide":"Show"," TLDR"," ",r.default.createElement(g.Z,{className:m()("ml-2 transition-transform ease-in-out duration-300",!_&&"rotate-180")})))))))};var M=o(8115);const q=["id","className","onRequestClose","onPreviousPost","onNextPost","postPosition","onRemovePost"];function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},H.apply(this,arguments)}function I(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Y(e){let t=e.id,o=(e.className,e.onRequestClose),u=e.onPreviousPost,c=e.onNextPost,m=e.postPosition,d=e.onRemovePost,f=I(e,q);const p=(0,r.useContext)(M.Z).showArticleOnboarding,h=(0,s.ZP)({id:t}),b=h.post,y=h.isPostLoadingOrFetching,v=(0,i.Z)({isLoading:y,isDisplayed:f.isOpen,offset:p?N.D:0}),g="post-content";return r.default.createElement(a.Z,H({},f,{size:n.u_.Size.Large,onRequestClose:o,postType:S.hQ.Share,isLoading:y,loadingClassName:g}),r.default.createElement(L,{position:v,post:b,onPreviousPost:u,onNextPost:c,postPosition:m,inlineActions:!0,onClose:o,origin:l.aP.ArticleModal,onRemovePost:d,className:{container:g,fixedNavigation:{container:"w-[inherit]",actions:"ml-auto"},navigation:{actions:"tablet:hidden ml-auto"}}}))}}}]);