(this["webpackJsonpintellrocket-app"]=this["webpackJsonpintellrocket-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(66)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(22),a(1));a(23),a(24);function s(e){var t=e.name,a=e.label;return r.a.createElement("button",{className:t},a)}var o=a(5),m=a.n(o);a(25);var u=function(e){var t=e.toggleTheme,a=e.isLight,l=Object(n.useState)(window.innerWidth),i=Object(c.a)(l,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){var e=function(){o(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement("button",{className:s<=992?"theme-toggle-wrapper mobile":"theme-toggle-wrapper"},r.a.createElement("input",{type:"checkbox",id:"checkbox",onChange:function(){return t()},checked:!a}),r.a.createElement("label",{className:"theme-toggle",htmlFor:"checkbox"},r.a.createElement("div",{className:"toggle"}),r.a.createElement("span",null,"Dark"),r.a.createElement("span",null,"Light")))},d=function(e){var t=e.isLight,a=e.toggleTheme,l=Object(n.useState)(!1),i=Object(c.a)(l,2),o=i[0],d=i[1],g=Object(n.useState)(window.innerWidth),f=Object(c.a)(g,2),E=f[0],h=f[1];Object(n.useEffect)((function(){var e=function(){h(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return r.a.createElement("header",{className:o?"mobile-open":""},r.a.createElement("div",{className:"toggler"},r.a.createElement(u,{toggleTheme:a,isLight:t})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-between"},r.a.createElement("div",{className:"col-6 col-sm-3"},r.a.createElement("a",{href:"/",title:"Go to Home Page",className:"logo"},r.a.createElement("img",{src:t?"img/intellrocket-logo.png":"img/intellrocket-logo-white.png",alt:""}))),r.a.createElement("div",{className:"col-6 col-sm-8 d-flex align-items-center justify-content-end"},r.a.createElement("div",{className:m()("navigation",{"menu-open":o},{"mobile-overlay":E<=992})},r.a.createElement("nav",null,r.a.createElement("ul",{className:o?"header-list open":"header-list"},r.a.createElement("li",{className:"header-item"},r.a.createElement("a",{href:"/home",className:o?"underline text-slide-in":"underline"},"Home")),r.a.createElement("li",{className:"header-item"},r.a.createElement("a",{href:"/about-us",className:o?"underline text-slide-in":"underline"},"About us")),r.a.createElement("li",{className:"header-item"},r.a.createElement("a",{href:"/services",className:o?"underline text-slide-in":"underline"},"Services")),r.a.createElement("li",{className:"header-item"},r.a.createElement("a",{href:"/work",className:o?"underline text-slide-in":"underline"},"Work")),E<=992?r.a.createElement("li",{className:"header-item"},r.a.createElement("a",{href:"/work",className:o?"underline text-slide-in":"underline"},"Get a Quote")):r.a.createElement(s,{name:"btn",label:"Get a Quote"})),r.a.createElement("div",{className:"social-items"},r.a.createElement("a",{href:"/",className:"text-slide-in"},r.a.createElement("span",{className:"social-icon"},r.a.createElement("img",{src:"img/social-fb-icon.svg",alt:""}))),r.a.createElement("a",{href:"/",className:"text-slide-in"},r.a.createElement("span",{className:"social-icon"},r.a.createElement("img",{src:"img/social-linkedin-icon.svg",alt:""})))))),r.a.createElement("button",{className:o?"menu active":"menu",onClick:function(){d(!o)},"aria-label":"Open Menu"},r.a.createElement("span",{className:"text"},"Menu"),r.a.createElement("div",{className:"hamburger"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))))))},g=(a(26),function(e){var t=e.isLight,a=Object(n.useState)(""),l=Object(c.a)(a,2),i=l[0],o=l[1];return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-12 col-sm-6 col-lg-4 mb-5"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("img",{src:t?"img/intellrocket-logo.png":"img/intellrocket-logo-white.png",alt:"logo"})),r.a.createElement("ul",{className:"footer-contact"},r.a.createElement("li",null,"Company name: IntellRocket Inc."),r.a.createElement("li",null,"Address: 2035 Sunset Lake Rd, Suite B-2, Newark, 19702 DE, USA"),r.a.createElement("li",null,"Phone: (415) 767-1800"),r.a.createElement("li",null," Email: office@intellrocket.com"))),r.a.createElement("div",{className:"col-6 col-sm-6 mb-5 col-lg-2"},r.a.createElement("h4",null,"Pages"),r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/home",className:"underline"},"Home")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/about-us",className:"underline"},"About us")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/services",className:"underline"},"Services")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/work",className:"underline"},"Work")))),r.a.createElement("div",{className:"col-6 col-sm-6 mb-5 col-lg-3"},r.a.createElement("h4",null,"Reach us"),r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/contact",className:"underline"},"Contact us")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/careers",className:"underline"},"Careers")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/blog",className:"underline"},"Blog")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{href:"/privacy",className:"underline"},"Privacy Policy")))),r.a.createElement("div",{className:"col-10 col-sm-6 col-md-5 col-lg-3"},r.a.createElement("h4",{className:"footer-item"},"Follow Us"),r.a.createElement("ul",{className:"social-list d-flex align-items-center"},r.a.createElement("li",{className:"social-list-item"},r.a.createElement("a",{href:"/",className:"social-icon","aria-label":"Navigate to Facebook"},r.a.createElement("img",{src:t?"img/social-fb-icon-dark.svg":"img/social-fb-icon.svg",alt:"facebook"}))),r.a.createElement("li",{className:"social-list-item"},r.a.createElement("a",{href:"/",className:"social-icon","aria-label":"Navigate to Linkedin"},r.a.createElement("img",{src:t?"img/social-linkedin-icon-dark.svg":"img/social-linkedin-icon.svg",alt:"linkedin"}))),r.a.createElement("li",{className:"social-list-item"},r.a.createElement("a",{href:"/",className:"social-icon","aria-label":"Navigate to Twitter"},r.a.createElement("img",{src:t?"img/social-twitter-icon-dark.svg":"img/social-twitter-icon.svg",alt:"twitter"}))),r.a.createElement("li",{className:"social-list-item"},r.a.createElement("a",{href:"/",className:"social-icon","aria-label":"Navigate to Dribbble"},r.a.createElement("img",{src:t?"img/social-dribbble-icon-dark.svg":"img/social-dribbble-icon.svg",alt:"dribbble"})))),r.a.createElement("h4",{className:"footer-item"}," Newsletter"),r.a.createElement("div",null,r.a.createElement("form",{action:"",className:"d-flex justify-content-between",onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"footer-email"},r.a.createElement("input",{type:"email",id:"email",required:!0,placeholder:" ",onChange:function(e){o(e.target.value)},value:i}),r.a.createElement("label",{htmlFor:"email"},"Enter your email")),r.a.createElement(s,{name:"round"})))))),r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 "},r.a.createElement("div",{className:"copyright-wrap flex-column flex-md-row d-flex justify-content-between "},r.a.createElement("div",{className:"copyright-links"},r.a.createElement("a",{href:"/privacy",className:"underline"},"Privacy Policy"),r.a.createElement("a",{href:"/map",className:"underline"},"Site map")),r.a.createElement("h6",null,"\xa92014 - 2020"," ",r.a.createElement("a",{href:"/",className:"underline"},"IntellRocket,"," "),"All rights reserved")))))))}),f=(a(27),a(2)),E=a(15),h=a(4),p=a(3);a(32);f.a.registerPlugin(h.a);var v=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),l=Object(c.a)(a,2),i=(l[0],l[1]),s=Object(n.useState)(!1),o=Object(c.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(!1),g=Object(c.a)(d,2),E=(g[0],g[1]),v=Object(n.useState)(!0),b=Object(c.a)(v,2),w=b[0],N=b[1];Object(n.useEffect)((function(){var a=new h.a(t.current,{type:"lines",linesClass:"split-child"});u(a);var n=new h.a(t.current,{type:"lines",linesClass:"split-parent"});E(n),"li"===e.tag&&i(!0)}),[]);var y="".concat(e.tag);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{onEnter:function(e){w&&f.a.from(m.lines,{duration:1,yPercent:100,ease:"strong.inOut",stagger:.1})},onLeave:function(){return N(!1)}},r.a.createElement(y,{ref:t,className:"reveal-title"},e.title)))};f.a.registerPlugin(E.a);a(33),a(34),a(35);f.a.registerPlugin(h.a);var b=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),l=Object(c.a)(a,2),i=l[0],s=l[1],o=Object(n.useState)(!1),m=Object(c.a)(o,2),u=(m[0],m[1]),d=Object(n.useState)(!0),g=Object(c.a)(d,2),E=g[0],v=g[1];Object(n.useEffect)((function(){var e=new h.a(t.current,{type:"lines",linesClass:"text-split-child"});s(e);var a=new h.a(t.current,{type:"lines",linesClass:"text-split-parent"});u(a)}),[]);var b="".concat(e.tag);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{onEnter:function(e){E&&f.a.from(i.lines,{duration:.6,opacity:0,y:50,ease:"power1",stagger:.05,delay:.5})},onLeave:function(){return v(!1)}},r.a.createElement(b,{ref:t,className:"reveal-text"},e.text)))};a(36),a(37);f.a.registerPlugin(h.a);a(38),a(39);var w=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("section",{id:"section-quote"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement(v,{tag:"h3",title:"Let\u2019s Make Something Beautiful Together"})),r.a.createElement("div",{className:"col-12 col-lg-3"},r.a.createElement(p.a,{onEnter:function(){return l(!0)}},r.a.createElement("div",null,r.a.createElement(s,{name:a?"btn btn-slide-in":"btn",label:"Get a Quote"})))))))};a(40),a(41);f.a.registerPlugin(h.a);var N=function(e){var t=e.item,a=Object(n.useRef)(null),l=Object(n.useRef)(null),i=Object(n.useState)(!1),s=Object(c.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(null),d=Object(c.a)(u,2),g=d[0],E=d[1],p=Object(n.useState)(null),v=Object(c.a)(p,2),b=v[0],w=v[1],N=Object(n.useState)(null),y=Object(c.a)(N,2),j=y[0],k=y[1],x=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=f.a.timeline();k(e);var t=new h.a(a.current,{type:"chars, words"});E(t);var n=new h.a(l.current,{type:"chars, words",charsClass:"bottom-char"});w(n)}),[]);var O=function(e){o?j.play():j.to(g.chars,{duration:.1,y:-5,opacity:0,stagger:.02}).to(b.chars,{duration:.1,y:0,opacity:1,stagger:.02},.1),m(!0)};return r.a.createElement("div",{id:"slider-item",onMouseEnter:function(){return O()},onMouseLeave:function(){j.reverse()},ref:x},r.a.createElement("img",{src:t.image,alt:""}),r.a.createElement("div",{className:"slider-text-wrap"},r.a.createElement("h4",null,t.title),r.a.createElement("div",{className:"text-desc-wrap"},r.a.createElement("span",{className:"line"}),r.a.createElement("h5",{className:"slider-text-desc",ref:a},t.desc),r.a.createElement("h5",{className:"slider-text-hover",ref:l},t.hover))))},y=a(13),j=a.n(y),k=(a(57),a(58),a(16)),x=(a(59),a(14));f.a.registerPlugin(x.a);var O=function(e){var t=e.type,a=Object(k.a)(e,["type"]),l=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useRef)(null),o=Object(n.useState)(!1),m=Object(c.a)(o,2),u=m[0],d=m[1],g=Object(n.useState)(null),E=Object(c.a)(g,2),h=E[0],p=E[1];Object(n.useEffect)((function(){var e=f.a.timeline();p(e)}),[]);var v=function(e){u?h.play():(h.set(l.current,{visibility:"visible"}).set(i.current,{visibility:"visible"}).set(s.current,{visibility:"visible"}),h.fromTo(l.current,{drawSVG:0},{duration:.5,drawSVG:"100%"}).fromTo(i.current,{drawSVG:0},{duration:.5,drawSVG:"100%"},0).fromTo(s.current,{drawSVG:0},{duration:.5,drawSVG:"100%"},.2)),d(!0)};return r.a.createElement("button",Object.assign({className:"next"===t?"slider-arrow":"slider-arrow prev"},a,{onMouseEnter:function(){return v()},onMouseLeave:function(){h.reverse()}}),r.a.createElement("svg",{version:"1.2",baseProfile:"tiny",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 50 50"},r.a.createElement("path",{fill:"none",stroke:"#888888",strokeMiterlimit:"10",d:"M18.416,24.5L32.584,24.5"}),r.a.createElement("path",{fill:"none",stroke:"#888888",strokeMiterlimit:"10",d:"M27.529,19.541L32.488,24.5L27.529,29.459"}),r.a.createElement("path",{ref:i,id:"line-next",fill:"none",stroke:"#888888",strokeMiterlimit:"10",d:"M18.416,24.5L32.584,24.5"}),r.a.createElement("path",{ref:s,id:"arrow-next",fill:"none",stroke:"#888888",strokeMiterlimit:"10",d:"M27.529,19.541L32.488,24.5L27.529,29.459"}),r.a.createElement("path",{fill:"none",stroke:"#888888",strokeMiterlimit:"10",d:"M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"}),r.a.createElement("path",{id:"circle-next",ref:l,fill:"none",strokeMiterlimit:"10",d:"M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"})))},S=function(e){var t=e.title,a=e.data,l=e.toFilter,i=Object(n.useState)(null),s=Object(c.a)(i,2),o=s[0],m=s[1];Object(n.useEffect)((function(){var e=f.a.timeline();m(e)}),[]);var u=Object(n.useRef)(null);return r.a.createElement("section",{id:"section-slider",className:"margin-b"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"title-wrap "},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"arrow-wrap"},r.a.createElement(O,{type:"prev",onClick:function(){return u.current.slickPrev()}}),r.a.createElement(O,{type:"next",onClick:function(){return u.current.slickNext()}})))),r.a.createElement("div",{className:"col-12"},r.a.createElement(p.a,{onEnter:function(){o.to("#slider-item",{duration:.6,opacity:1,x:0,stagger:.2})}},r.a.createElement("div",null,r.a.createElement(j.a,Object.assign({},{dots:!1,arrows:!1,infinite:!0,speed:500,slidesToScroll:1,rows:1,adaptiveHeight:!0,variableWidth:!0},{ref:u}),a.filter((function(e){return e.title!==l})).map((function(e){return r.a.createElement(N,{item:e,key:e.title})})))))))))},T=[{image:"img/slider-retyre.jpg",title:"reTyre",desc:"strategy web design wordpress",hover:"discover more"},{image:"img/slider-valis.jpg",title:"Vallis-Technologies",desc:"web design wordpress",hover:"discover more"},{image:"img/slider-imt.jpg",title:"Interface Masters Technologies",desc:"strategy web design wordpress",hover:"discover more"},{image:"img/slider-alpha.jpg",title:"Alphaparking",desc:"web design wordpress",hover:"discover more"},{image:"img/slider-fixbreakdown.jpg",title:"Fixbreakdown",desc:" strategy web design",hover:"discover more"}];var L=[{title:"reTyre",desc:"reTyre is an innovative start-up company that made the first ever modular bicycle tyre, for which they received a few prestigious awards, including the Red Dot Design Award for highest design quality. Working with a company that aspires to be different and strives to set the trends allowed us to present their brand in a unique and creative way. Just like reTyre wants to improve user experience for their customers, our goal was to show how they can do this and what makes their products unique and necessary.",challenge:"Good web design lets the product speak for itself. We had to find a way to achieve this, explaining along the way what reTyre is and how their products work. It\u2019s never easy to design a website for a new product. The challenge is greater because you have to find the perfect balance between a clean, user-friendly design and content-rich guides that explain the purpose of the innovative products.",approach:"Since we were dealing with creative and innovative tyre solutions, we found that the best way to approach the design is by letting the pictures and animations showcase the value of the products. The main idea was to allow visitors to find all the necessary information about the products thanks to the intuitive site navigation and create attractive visual experience that will make them stay long enough to truly understand the benefits of the products.",mobile:"A functional and clean mobile design is crucial for reaching all users and increasing the market for your products. Our websites are mobile-friendly and mobile responsive and allow our clients, like reTyre, to showcase their products or services on all devices.",product:[{title:"Product Selection",text:"Showing the product selection on the homepage was our priority and we did it with an engaging animation displaying all the possible terrains and weather conditions in which reTyre products can enhance the user experience.",img:"img/projects/retyre-product-selection.gif"},{title:"Product Overview",text:"With new and creative products, it takes time for customers to accept them. Reading the product description may engage a few visitors but seeing how the product looks and what it does is a more effective way to present it. That\u2019s why we have combined text and animations to showcase reTyre\u2019s products, focusing on appearance and functionality.",img:"img/projects/retyre-winter.gif"},{title:"Application",text:"Explaining why these modular bicycle tyres are unique was always the primary goal of our web design. We found that simple graphic animation can point out all the product\u2019s features in a quick, effective manner.",img:"img/projects/retyre-application.gif"},{title:"Product Landing Page",text:"Appealing photographs, useful animations and detailed product information focused on different applications of each item, are vital building blocks for product landing pages designed to draw the attention of the visitors and spike their interest in the products.",img:"img/projects/retyre-Winter-Traveler.png"}],mockup:"img/projects/retyre-mockup.png",home:"img/projects/retyre-home.jpg",mobileImg:"img/projects/retyre-mobile-screens.png",page:"img/projects/retyre-Winter-Traveler.png",contact:"img/projects/retyre-contact-about-us-trail-rider.png",result:"The site has received a lot of praise from several sources. ReTyre's clients and partners were delighted with ours work. Also, all our clients and partners praised both the innovative product and ours Work. Visit the site to get the best impression.",resultData:[{label:"Date",info:"May 2019."},{label:"Client",info:"reTyre.co"},{label:"Platform",info:"WordPress"}],url:"https://www.retyre.co/"}];a(60),a(61);var M=function(e){var t=e.src,a=e.alt,l=Object(n.useState)(!1),i=Object(c.a)(l,2),s=i[0],o=i[1];return r.a.createElement("div",{id:"reveal-image"},r.a.createElement(p.a,{bottomOffset:"200px",onEnter:function(){return o(!0)}},r.a.createElement("img",{src:t,alt:a,className:s?"show":""})))};var P=function(){return r.a.createElement("section",{id:"project-intro",className:"mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center "},r.a.createElement("div",{className:"col-12 col-md-8 d-flex flex-column align-items-center intro-text-wrap margin-b-100"},r.a.createElement("div",{className:"d-flex flex-column align-items-center mb-3"},r.a.createElement(v,{tag:"h2",title:L[0].title}),r.a.createElement(b,{tag:"p",text:L[0].desc})),r.a.createElement("div",{className:"explore d-flex align-items-center btn-slide-in"},r.a.createElement(s,{name:"round",label:""}),r.a.createElement("span",null,"Explore")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(M,{src:L[0].mockup,alt:"home page design"})))))};a(62);var A=function(){return r.a.createElement("section",{id:"section-project-desc",className:"margin-b"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-desc"},r.a.createElement("div",{className:"col-12 col-md-6 d-flex flex-column align-items-center mb-3 mb-lg-0"},r.a.createElement(v,{tag:"h3",title:"The Challenge"}),r.a.createElement(b,{tag:"p",text:L[0].challenge})),r.a.createElement("div",{className:"col-12 col-md-6 d-flex flex-column align-items-center"},r.a.createElement(v,{tag:"h3",title:"The Approach"}),r.a.createElement(b,{tag:"p",text:L[0].approach}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(M,{src:L[0].home,alt:"home page design"})))))};a(63);var W=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("section",{id:"project-result"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-start"},r.a.createElement("div",{className:"col-12 col-lg-9 result-desc"},r.a.createElement(v,{tag:"h2",title:"Results"}),r.a.createElement(b,{tag:"p",text:L[0].result})),L[0].resultData.map((function(e,t){return r.a.createElement("div",{className:"col-12 col-sm-4 col-md-2 margin-b-100 info-wrap",key:t},r.a.createElement(b,{tag:"h4",text:e.label,classname:"result-label"}),r.a.createElement(b,{tag:"p",text:e.info,classname:"result-info"}))})),r.a.createElement("div",{className:"col-md-8 d-flex pt-3 mr-auto btn-wrap"},r.a.createElement(p.a,{onEnter:function(){return l(!0)}},r.a.createElement("button",{className:a?"btn btn-slide-in":"btn"},r.a.createElement("a",{href:L[0].url,target:"_blank"},"Visit Website")))))))};a(64);var R=function(){return r.a.createElement("section",{id:"section-project-mobile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center flex-column-reverse flex-md-row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("div",{className:"text-wrap"},r.a.createElement(v,{tag:"h2",title:"Mobile Design"}),r.a.createElement(b,{tag:"p",text:L[0].mobile}))),r.a.createElement("div",{className:"col-12 col-md-6 mb-5"},r.a.createElement(M,{src:L[0].mobileImg,alt:"mobile design"})))))};var C=function(){return r.a.createElement("section",{id:"section-project-product",className:"margin-b-100"},r.a.createElement("div",{className:"container"},L[0].product.map((function(e,t){return r.a.createElement("div",{className:"row",key:t},r.a.createElement("div",{className:"col-12 col-lg-8 mb-4 mb-lg-5"},r.a.createElement(v,{tag:"h2",title:e.title}),r.a.createElement(b,{tag:"p",text:e.text})),r.a.createElement("div",{className:"col-12 product-img margin-b-100"},r.a.createElement(M,{src:e.img,alt:e.title})))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 pt-lg-5"},r.a.createElement(M,{src:"/img/projects/retyre-contact-about.png",alt:"contact, about page design"})))))};var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(A,null),r.a.createElement(R,null),r.a.createElement(C,null),r.a.createElement(W,null),r.a.createElement(S,{title:"More Projects",data:T,toFilter:"reTyre"}),r.a.createElement(w,null))};var D=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("theme"));l(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(a))}),[a]),r.a.createElement("div",{className:a?"App":"App dark"},r.a.createElement(d,{isLight:a,toggleTheme:function(){l(!a)}}),r.a.createElement(G,null),r.a.createElement(g,{isLight:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.c17a4b92.chunk.js.map