(window.webpackJsonp=window.webpackJsonp||[]).push([[7,22],{119:function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),l=t.n(n),s=t(123),c=t(122),o=t(46),r=t(127),i=t(2),m=t(124),u=t.n(m),d=t(136),b=t(137),p=t(125),h=t(128),k=t(101),f=t.n(k);function E({item:e,onItemClick:a,collapsible:t,...s}){const{items:c,href:o,label:r,type:m}=e,[d,b]=Object(n.useState)(e.collapsed),[k,f]=Object(n.useState)(null);e.collapsed!==k&&(f(e.collapsed),b(e.collapsed));const g=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),b(e=>!e)});switch(m){case"category":return c.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":d}),key:r},l.a.createElement("a",Object(i.a)({className:u()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?g:void 0},s),r),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(E,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(p.a,Object(i.a)({className:"menu__link",to:o},Object(h.a)(o)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},s),r))}}var g=function(e){const[a,t]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:s,hideOnScroll:o=!1}={}}}={},isClient:r}=Object(c.a)(),{logoLink:m,logoLinkProps:h,logoImageUrl:k,logoAlt:g}=Object(b.a)(),{docsSidebars:_,path:v,sidebar:C,sidebarCollapsible:N}=e;if(Object(d.a)(a),!C)return null;const w=_[C];if(!w)throw new Error(`Cannot find the sidebar "${C}" in the sidebar config!`);return N&&w.forEach(e=>function e(a,t){const{items:n,href:l,type:s}=a;switch(s){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t}}(e,v)),l.a.createElement("div",{className:f.a.sidebar},o&&l.a.createElement(p.a,Object(i.a)({tabIndex:"-1",className:f.a.sidebarLogo,to:m},h),null!=k&&l.a.createElement("img",{key:r,src:k,alt:g}),null!=s&&l.a.createElement("strong",null,s)),l.a.createElement("div",{className:u()("menu","menu--responsive",f.a.menu,{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:u()(f.a.sidebarMenuIcon,f.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:f.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},w.map(e=>l.a.createElement(E,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),t(!1)},collapsible:N})))))},_=t(131),v=t(132),C=t(135),N=t(106),w=t.n(N);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,i=a.routes.find(e=>Object(C.a)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=t,b=m[i.path],{siteConfig:{themeConfig:p={}}={},isClient:h}=Object(c.a)(),{sidebarCollapsible:k=!0}=p;return 0===Object.keys(i).length?l.a.createElement(v.default,e):l.a.createElement(r.a,{version:d,key:h},l.a.createElement("div",{className:w.a.docPage},b&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:u,path:i.path,sidebar:b,sidebarCollapsible:k})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(s.a,{components:_.a},Object(o.a)(a.routes)))))}},132:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(127);a.default=function(){return l.a.createElement(s.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);