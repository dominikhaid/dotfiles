"use strict";(self.webpackChunkextension=self.webpackChunkextension||[]).push([[562],{57026:(e,t,n)=>{n.d(t,{Z:()=>i});var r,a,l=n(35776);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=function(e){return l.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),r||(r=l.createElement("defs",null,l.createElement("clipPath",{id:"outlined_svg__a"},l.createElement("path",{fill:"currentcolor",d:"M11.541.514a4 4 0 011.4 1.317l.126.209 5.58 9.92a4 4 0 01-3.23 5.953l-.256.008H4a4 4 0 01-3.605-5.733l.119-.228 5.58-9.92A4 4 0 0111.541.514zM7.92 2.887l-.082.133-5.58 9.92a2 2 0 001.594 2.976L4 15.92h11.16a2 2 0 001.815-2.841l-.071-.14-5.58-9.92a2 2 0 00-3.405-.133zM9.58 11.92a1 1 0 110 2 1 1 0 010-2zm0-7a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"})))),a||(a=l.createElement("g",{clipPath:"url(#outlined_svg__a)",fill:"currentcolor",transform:"translate(2.42 3.079)"},l.createElement("path",{d:"M0 0h19.161v17.921H0V0z"}))))}},80506:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(35776),a=n(86548),l=n(57026);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=e=>r.default.createElement(a.Z,o({},e,{IconPrimary:l.Z,IconSecondary:l.Z}))},20533:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(86484),a=n.n(r),l=n(35776),o=n(88767),i=n(28687),s=n.n(i),u=n(26990),c=n(80122),m=n(50562),d=n(25782),f=n(52465),p=n(62835);const b=i.gql`
  mutation SubmitArticle($url: String!) {
    submitArticle(url: $url) {
      result
      reason
      post {
        id
        title
        commentsPermalink
        image
        readTime
        numUpvotes
        permalink
        source {
          id
          image
        }
      }
      submission {
        id
        url
        userId
        createdAt
        status
        reason
      }
    }
  }
`,y=i.gql`
  query SubmissionAvailability {
    submissionAvailability {
      hasAccess
      limit
      todaySubmissionsCount
    }
  }
`;var h=n(6646),v=n(38e3),g=n(72107),E=n(45544),w=n(58953),N=n(87642),x=n(15098);const S=["headerCopy","submitArticleModalButton","onRequestClose"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function O(e,t,n,r,a,l,o){try{var i=e[l](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const q="Something went wrong, try again";function Z(e){var t,n;let r=e.headerCopy,i=e.submitArticleModalButton,C=e.onRequestClose,Z=A(e,S);const j=(0,l.useRef)(),_=(0,l.useContext)(p.ZP).user,I=(0,o.useQueryClient)(),Y=(0,l.useContext)(v.ZP).trackEvent,z=k((0,l.useState)(!1),2),M=z[0],U=z[1],D=k((0,l.useState)(!1),2),R=D[0],B=D[1],J=k((0,l.useState)(!1),2),L=J[0],T=J[1],$=k((0,l.useState)(null),2),F=$[0],K=$[1],W=k((0,l.useState)(),2),H=W[0],Q=W[1],V=["submission_availability",null==_?void 0:_.id],G=(0,o.useQuery)(V,(()=>s()(m.B3,y))),X=G.data,ee=G.isFetched,te=(X||{}).submissionAvailability,ne=null==te?void 0:te.hasAccess,re=(0,o.useMutation)((e=>s()(m.B3,b,{url:e}))).mutateAsync,ae=e=>{Y({event_name:"submit article fail",extra:JSON.stringify({reason:e})})},le=function(){var e,t=(e=a().mark((function e(t){var n,r,l,o,s,u,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=(0,c.x)(t.currentTarget),B(!0),n.articleUrl){e.next=7;break}return Q("Please submit a valid URL"),B(!1),e.abrupt("return");case 7:return Y({event_name:"submit article",feed_item_title:i,extra:JSON.stringify({url:null==n?void 0:n.articleUrl})}),e.prev=8,e.next=11,re(n.articleUrl);case 11:r=e.sent,l=r.submitArticle,o=l.reason,s=void 0===o?q:o,u=l.post,l.submission?(T(!0),(m={submissionAvailability:te}).submissionAvailability.todaySubmissionsCount+=1,I.setQueryData(V,m),Y({event_name:"submit article succeed"})):u?(K({post:u}),ae("Article exists already")):s&&(Q(s),ae(s)),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(8),Q(q),U(!1),ae(q);case 21:return e.prev=21,B(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[8,16,21,24]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){O(l,r,a,o,i,"next",e)}function i(e){O(l,r,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return ee?l.default.createElement(w.u_,P({},Z,{kind:w.u_.Kind.FlexibleTop,size:w.u_.Size.Medium,onRequestClose:C}),l.default.createElement(w.u_.Header,{title:r}),l.default.createElement(w.u_.Body,null,l.default.createElement("form",{ref:j,id:"submit-article","aria-busy":R,onSubmit:le},l.default.createElement("div",null,l.default.createElement("p",{className:"mb-2 typo-callout text-theme-label-tertiary"},"Found an interesting post? Do you want to share it with the community? Enter the post's URL / link below to add it to the feed."),!ne&&l.default.createElement("p",{className:"mt-6 mb-2 typo-callout text-theme-label-tertiary"},"You need more reputation to enable this feature"),l.default.createElement("a",{className:"font-bold underline typo-callout text-theme-label-link",target:"_blank",rel:"noopener",href:d.WJ},"Learn more"),l.default.createElement("p",{className:"mt-6 mb-4 typo-callout"},"Daily suggestions used ",null!==(t=null==te?void 0:te.todaySubmissionsCount)&&void 0!==t?t:0,"/",null!==(n=null==te?void 0:te.limit)&&void 0!==n?n:3),l.default.createElement(f.n,{autoFocus:!0,type:"url",autoComplete:"off",leftIcon:l.default.createElement(g.Z,null),fieldType:"tertiary",name:"articleUrl",inputId:"article_url",label:"Paste post url",disabled:!ne,hint:H,valid:!H,valueChanged:()=>{j.current&&(F&&K(null),H&&Q(null),U(j.current.checkValidity()))}}),L?l.default.createElement(E.ZP,{className:"mt-4",type:E.NK.Success,title:"We will notify you about the post-submission status via email"}):3===(null==te?void 0:te.todaySubmissionsCount)&&l.default.createElement(E.ZP,{className:"mt-4",type:E.NK.Error,title:"You have reached the limit of 3 submissions per day"}),ne&&l.default.createElement(N.Z,{source:x.Yq.CommunityPicks}),F?null:ne?l.default.createElement(E.ZP,{className:"mt-4",title:"Submission guidelines"},l.default.createElement(E.oM,null,"We want you to submit links that are well thought out, high value and high quality."),l.default.createElement(E.oM,null,"Please do not add your own posts, promotional content, clickbait etc. Additionally, redirected or shortened URLs will be rejected, please submit the full and final URL."),l.default.createElement(E.oM,null,"For more details see our"," ",l.default.createElement("a",{className:"hover:underline text-theme-label-link",href:d.Zm,target:"_blank",rel:"noopener"},"Community Picks submission guidelines"))):l.default.createElement(E.ZP,{className:"mt-4",type:E.NK.Error,title:"You do not have enough reputation to use this feature yet."})))),F&&l.default.createElement("div",{className:"w-full"},l.default.createElement("h4",{className:"pl-6 mb-2 font-bold typo-callout"},"Article exists"),l.default.createElement(h.Z,{postItem:F,showButtons:!1})),(!L||!!F)&&l.default.createElement(w.u_.Footer,null,l.default.createElement(u.z,{className:"btn-primary",type:"submit","aria-label":i,disabled:!M||!ne||!!F,loading:R,form:"submit-article"},l.default.createElement("span",{className:R&&"invisible"},i)))):l.default.createElement(l.default.Fragment,null)}},87642:(e,t,n)=>{n.d(t,{N:()=>E,Z:()=>x});var r=n(86484),a=n.n(r),l=n(35776),o=n(94184),i=n.n(o),s=n(43057),u=n(26990),c=n(7732),m=n(27052),d=n(84558),f=n(63031),p=n(25782),b=n(38e3),y=n(15098);function h(e,t,n,r,a,l,o){try{var i=e[l](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const E="DISMISS_PERMISSION_BANNER",w={[y.Yq.NotificationsPage]:"px-6 w-full border-l bg-theme-float",[y.Yq.NewComment]:"rounded-16 border px-4 mx-3 mb-3",[y.Yq.CommunityPicks]:"rounded-16 border px-4 mt-3",[y.Yq.NewSourceModal]:"",[y.Yq.SquadPage]:"rounded-16 border px-4 mt-6"},N={[y.Yq.NotificationsPage]:!1,[y.Yq.NewComment]:!1,[y.Yq.CommunityPicks]:!1,[y.Yq.NewSourceModal]:!1,[y.Yq.SquadPage]:!0};const x=function(e){let t=e.source,n=void 0===t?y.Yq.NotificationsPage:t,r=e.contentName,o=e.className;const g=(0,b.Os)().trackEvent,x=(0,l.useContext)(c.ZP),S=x.isInitialized,P=x.isSubscribed,O=x.isNotificationSupported,k=x.hasPermissionCache,C=x.acceptedPermissionJustNow,A=x.onAcceptedPermissionJustNow,q=x.onTogglePermission,Z=v((0,s.Z)(E,!1),3),j=Z[0],_=Z[1],I=Z[2],Y=()=>{g({event_name:y.s6.ClickNotificationDismiss,extra:JSON.stringify({origin:n})}),_(!0)},z=function(){var e,t=(e=a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n);case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:r="granted"===t,null==A||A(r);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){h(l,r,a,o,i,"next",e)}function i(e){h(l,r,a,o,i,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),M=(P||k)&&C,U=[!I,j,!S,!O,(P||k)&&!C].some((e=>e));if((0,l.useEffect)((()=>{U||g({event_name:y.s6.Impression,target_type:y.Lm.EnableNotifications,extra:JSON.stringify({origin:n})})}),[U]),(0,l.useEffect)((()=>()=>{null==A||A(!1)}),[]),U)return null;const D={[y.Yq.NewComment]:`Want to get notified when ${null!=r?r:"someone"} responds so you can continue the conversation?`,[y.Yq.CommunityPicks]:"Would you like to get notified on the status of your post submissions in real time?",[y.Yq.NotificationsPage]:"Stay in the loop whenever you get a mention, reply and other important updates.",[y.Yq.NewSourceModal]:"",[y.Yq.SquadPage]:`Get notified whenever something important happens on ${r}.`}[n],R=w[n],B=N[n];return l.default.createElement("div",{className:i()("overflow-hidden relative py-4 typo-callout border-theme-color-cabbage",R,o)},n===y.Yq.NotificationsPage&&l.default.createElement("span",{className:"flex flex-row font-bold"},C&&l.default.createElement(f.Z,{className:"mr-2"}),"Push notifications"+(C?" successfully enabled":"")),l.default.createElement("p",{className:"mt-2 w-full tablet:w-3/5 text-theme-label-tertiary"},C?l.default.createElement(l.default.Fragment,null,"Changing your"," ",l.default.createElement("a",{className:"underline hover:no-underline",href:`${p.uJ}account/notifications`},"notification settings")," ","can be done anytime through your account details"):D),l.default.createElement("div",{className:"flex mt-4 align-center"},!M&&l.default.createElement(u.z,{buttonSize:u.q.Small,className:"mr-4 min-w-[7rem] btn-primary-cabbage",onClick:z},"Enable notifications"),B&&l.default.createElement(u.z,{buttonSize:u.q.Small,className:"btn-tertiary",onClick:Y},"Dismiss")),l.default.createElement("img",{className:i()("hidden tablet:flex absolute w-[7.5rem] -bottom-2",C?"right-14":"right-4"),src:C?d.n.notifications.browser_enabled:d.n.notifications.browser,alt:"A sample browser notification"}),!B&&l.default.createElement(m.Z,{buttonSize:u.q.XSmall,className:"top-1 laptop:top-3 right-1 laptop:right-3",onClick:Y,position:"absolute"}))}},6646:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(35776),a=n(94184),l=n.n(a),o=n(41664),i=n.n(o),s=n(59363),u=n(85708),c=n(32256),m=n(26990),d=n(50104),f=n(38050),p=n(92360),b=n(77314),y=n(84558);const h=(0,c.Z)("div","absolute left-5 -my-1 w-8 h-8 rounded-full bg-theme-bg-primary");function v(e){var t;let n=e.postItem,a=e.showButtons,o=void 0===a||a,c=e.clickable,v=void 0===c||c,g=e.onHide,E=e.className,w=e.onContextMenu;const N=n.timestampDb,x=n.post,S=null!==(t=null==x?void 0:x.sharedPost)&&void 0!==t?t:x;return r.default.createElement(b.Z,{condition:v,wrapper:e=>r.default.createElement(i(),{href:x.commentsPermalink},e)},r.default.createElement("article",{className:l()("flex relative flex-row items-center py-3 pr-5 pl-9",v&&"hover:bg-theme-hover hover:cursor-pointer",E)},r.default.createElement(p.E,{src:S.image,alt:x.title,className:"object-cover w-16 laptop:w-24 h-16 rounded-16",loading:"lazy",fallbackSrc:y.n.post.imageCoverPlaceholder}),r.default.createElement(h,null),r.default.createElement(f.YY,{size:"small",rounded:"full",className:"absolute left-6",user:{image:x.source.image,username:`source of ${x.title}`},nativeLazyLoading:!0}),r.default.createElement("div",{className:"flex flex-col flex-1 ml-4"},r.default.createElement("h3",{className:"flex flex-1 mr-6 text-left break-words line-clamp-2 typo-callout"},x.title),r.default.createElement(d.Z,{readTime:x.readTime,numUpvotes:x.numUpvotes})),o&&g&&r.default.createElement(m.z,{buttonSize:m.q.Small,className:"hidden laptop:flex btn-tertiary",icon:r.default.createElement(s.Z,null),onClick:e=>{e.stopPropagation(),g({postId:x.id,timestamp:N})}}),o&&r.default.createElement(m.z,{className:"btn-tertiary","data-testId":`post-item-${x.id}`,icon:r.default.createElement(u.Z,null),onClick:e=>{e.stopPropagation(),w(e,n)},buttonSize:m.q.Small})))}},45544:(e,t,n)=>{n.d(t,{NK:()=>m,ZP:()=>y,oM:()=>b});var r=n(35776),a=n(94184),l=n.n(a),o=n(86456),i=n(80506),s=n(63031),u=n(32256),c=n(86548);let m;!function(e){e.Info="info",e.Error="error",e.Success="success"}(m||(m={}));const d={info:"text-theme-color-bun",error:"text-theme-status-error",success:"text-theme-status-success"},f={info:"border-l-theme-color-bun",error:"border-l-theme-status-error",success:"border-l-theme-status-success"},p={info:o.Z,error:i.Z,success:s.Z},b=(0,u.Z)("p","typo-callout mt-3");const y=function(e){let t=e.className,n=e.title,a=e.children,o=e.type,i=void 0===o?m.Info:o;const s=p[i];return r.default.createElement("div",{className:l()("flex flex-col p-3 border border-theme-active border-l-4",f[i],a?"rounded-16":"rounded-12",t)},r.default.createElement("span",{className:"flex flex-row items-center"},r.default.createElement(s,{size:c.J.Small,className:l()("mr-2",d[i])}),r.default.createElement("span",{className:l()("typo-callout flex flex-1",a&&"font-bold",a&&d[i])},n)),a)}},80122:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return Array.from(e.elements).reduce(((e,t)=>""===t.name?e:"checkbox"===t.type?a(a({},e),{},{[t.name]:t.checked}):"radio"!==t.type||t.checked?a(a({},e),{},{[t.name]:t.value.length?t.value:null}):e),t)}n.d(t,{x:()=>o})}}]);