"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=p(a),N=n,s=c["".concat(o,".").concat(N)]||c[N]||k[N]||r;return a?l.createElement(s,i(i({ref:t},u),{},{components:a})):l.createElement(s,i({ref:t},u))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var l=a(7462),n=(a(7294),a(3905));const r={},i="\u4f34\u4f34\u5b78\uff1a\u4e00\u8d77\u4f86\u5171\u5b78\u8207\u6253\u9020\u6a5f\u68b0\u624b\u81c2\u5427\uff5e",m={permalink:"/Learn/blog/0717robotics",editUrl:"https://github.com/accomdemy/Learn/blog/0717robotics.md",source:"@site/blog/0717robotics.md",title:"\u4f34\u4f34\u5b78\uff1a\u4e00\u8d77\u4f86\u5171\u5b78\u8207\u6253\u9020\u6a5f\u68b0\u624b\u81c2\u5427\uff5e",description:"\u7c21\u4ecb",date:"2022-07-17T11:50:11.000Z",formattedDate:"July 17, 2022",tags:[],readingTime:2.96,truncated:!1,authors:[],frontMatter:{},nextItem:{title:"\u5f9e0\u5230\u6709\u88fd\u4f5c\u81ea\u5df1\u7684CPU\uff01\uff01 \u7b2c\u4e8c\u5468\u6d3b\u52d5\u8a18\u9304 20220712",permalink:"/Learn/blog/risc0712.md"}},o={authorsImageUrls:[]},p=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u53c3\u52a0\u4f19\u4f34",id:"\u53c3\u52a0\u4f19\u4f34",level:2},{value:"\u9032\u5ea6\u5b89\u6392",id:"\u9032\u5ea6\u5b89\u6392",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],u={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7c21\u4ecb"},"\u7c21\u4ecb"),(0,n.kt)("p",null,"\u9019\u662f\u4e00\u500b\u7dda\u4e0a\u5171\u5b78\u7684\u8a08\u756b\u3002\n\u4e3b\u984c\u662f\u4e00\u8d77\u4f86\u5b78\u7fd2\u5982\u4f55\u6253\u9020\u4e00\u500b\u6a5f\u68b0\u624b\u81c2\uff0c\u4e86\u89e3\u63a7\u5236\u65b9\u5f0f\u8207\u539f\u7406\u3002\n\u8207\u60f3\u4e00\u8d77\u5b78\u7fd2\u7684\u5b78\u53cb\u5206\u5de5\u5408\u4f5c\uff0c\u5b8c\u6210\u4e86\u89e3\u6a5f\u68b0\u624b\u81c2\u539f\u7406\uff0c\u672a\u4f86\u6253\u9020\u51fa\u81ea\u5df1\u7684\u6a5f\u68b0\u624b\u81c2\u3002\n\u9019\u8a08\u756b\u7684\u76f8\u95dc\u8cc7\u6599\u8acb\u898b\uff1a\nGithub :\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SkyentificGit/SmallRobotArm"},"https://github.com/SkyentificGit/SmallRobotArm"),"\nyoutube\n",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/c/Skyentific/search?query=6DoF"},"https://www.youtube.com/c/Skyentific/search?query=6DoF")," mostly 3D Printed Robot Arm"),(0,n.kt)("p",null,"\u4e0d\u63a8\u667a\u6167\u541b\u7684\u6a5f\u68b0\u624b\u81c2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u92c1\u88fd cnc"),(0,n.kt)("li",{parentName:"ul"},"\u50f9\u683c\u9ad8"),(0,n.kt)("li",{parentName:"ul"},"\u6e1b\u901f\u6a5f\u5f88\u8cb4\uff0c\u5c31\u7b97\u53ea\u7528\u4ee3\u7528\u5ee0\u7684\uff0c\u4e00\u500b\u4e5f\u89817500\u5143\u53f0\u5e63\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b65\u9032\u99ac\u9054\u9a45\u52d5\u5668\u662f\u4ed6\u81ea\u5df1\u8a2d\u8a08\u7684\u3002")),(0,n.kt)("p",null,"\u6539\u63a8\nmostly 3D Printed Robot Arm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3d \u5217\u5370\u7684\u6750\u6599"),(0,n.kt)("li",{parentName:"ul"},"\u7d50\u69cb\u7c21\u55ae"),(0,n.kt)("li",{parentName:"ul"},"\u4fbf\u5b9c"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u63d0\u4f9b\u904b\u52d5\u5b78\u7684\u90e8\u5206\uff0c\u6709\u52a9\u65bc\u4e86\u89e3\u5b78\u7fd2"),(0,n.kt)("li",{parentName:"ul"},"\u9069\u5408\u5165\u9580")),(0,n.kt)("p",null,"Discord \u804a\u5929\u983b\u9053\uff1a\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/rmzJQbUUwB"},"https://discord.gg/rmzJQbUUwB")),(0,n.kt)("p",null,"\u7dda\u4e0a\u805a\u6703\u6642\u9593\uff1a\n\u6bcf\u9031\u4e94\u665a\u4e0a 20:00 ~ 22:00"),(0,n.kt)("h2",{id:"\u53c3\u52a0\u4f19\u4f34"},"\u53c3\u52a0\u4f19\u4f34"),(0,n.kt)("p",null,"\u60f3\u53c3\u52a0\u6a5f\u68b0\u624b\u81c2\u5171\u5b78\u7684\u5925\u4f34\uff0c\u8acb\u7167\u4e0b\u65b9\u7684\u683c\u5f0f\u7559\u4e0b\u4f60\u7684\u8cc7\u8a0a\uff0c\u597d\u65b9\u4fbf\u8a8d\u8b58\u8207\u6d3b\u52d5\u901a\u77e5\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f60\u7684\u540d\u5b57"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: "),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1a "),(0,n.kt)("li",{parentName:"ul"},"\u5c08\u9577\u6216\u662f\u8208\u8da3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u912d\u9d3b\u65d7 honki \uff08\u4f34\u4f34\u5b78\u793e\u7fa4\u6d3b\u52d5\u5354\u52a9\uff09"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:honkiaa@gmail.com"},"honkiaa@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1a Honki#1520"),(0,n.kt)("li",{parentName:"ul"},"\u79d1\u6280\u85dd\u8853"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u71b1\u72d7"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:alex1208tw@gmail.com"},"alex1208tw@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1a \u5446\u5446\u53ec\u559a\u5e2b#5652"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Johnson\u9ec3 (\u65c1\u807d\u751f)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:johnsonssstudio@gmail.com"},"johnsonssstudio@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1a JS-Hackintosh#8473"),(0,n.kt)("li",{parentName:"ul"},"\u6559\u5b78\u5f71\u7247: ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/user/JohnsonsStudio/"},"https://www.youtube.com/user/JohnsonsStudio/")),(0,n.kt)("li",{parentName:"ul"},"\u9ed1\u860b\u679c\u7cfb\u7d71\u3001NAS\u7cfb\u7d71\u300110G\u7db2\u8def \u5efa\u7f6e\u7b49"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f76\u5cf0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:610921247@gms.ndhu.edu.tw"},"610921247@gms.ndhu.edu.tw")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f: Chifeng#4337"),(0,n.kt)("li",{parentName:"ul"},"\u8cc7\u8a0a\u5de5\u7a0b\u7562\u696d\uff0c\u4e4b\u524d\u6709\u7cbe\u5bc6\u6ed1\u53f0\u76f8\u95dc\u7d93\u9a57\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Daniel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:dan199537@gmail.com"},"dan199537@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1aRisusdan#1966"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"chia"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:a0979699457@gmail.com"},"a0979699457@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f\uff1achia#1360"),(0,n.kt)("li",{parentName:"ul"},"\u6a5f\u68b0\u80cc\u666f\u3001\u719f\u60893D\u6a5f\u68b0\u7e6a\u5716\u3001\u6709\u4f7f\u7528PLC arduino\u7684\u7d93\u9a57")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u89d2\u89d2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:0966459924qpwo@gmail.com"},"0966459924qpwo@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"DC \u5e33\u865f: \u89d2\u89d2#2214")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bridan"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:bridan.wang@gmail.com"},"bridan.wang@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f: Bridan#3685"),(0,n.kt)("li",{parentName:"ul"},"Blog: ",(0,n.kt)("a",{parentName:"li",href:"https://4rdp.blogspot.com/2021/02/blog-post.html?m=0"},"https://4rdp.blogspot.com/2021/02/blog-post.html?m=0")),(0,n.kt)("li",{parentName:"ul"},"Firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trinity \uff08\u6316\u5751\u5751\u4e3b\uff09"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:goodenough030@gmail.com"},"goodenough030@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f: Trinity#2751"),(0,n.kt)("li",{parentName:"ul"},"PCB Layout\u30013D\u5217\u5370"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Little fox"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"email: ",(0,n.kt)("a",{parentName:"li",href:"mailto:liangyong.tlf@gmail.com"},"liangyong.tlf@gmail.com")),(0,n.kt)("li",{parentName:"ul"},"dc \u5e33\u865f: thelittlefox"),(0,n.kt)("li",{parentName:"ul"},"\u6a02\u9ad8\u6a5f\u5668\u4eba\u3001STEAM \u6559\u80b2\u76f8\u95dc")))),(0,n.kt)("h2",{id:"\u9032\u5ea6\u5b89\u6392"},"\u9032\u5ea6\u5b89\u6392"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5217\u51fa bom \u8868\uff0c\u7c4c\u63aa\u6750\u6599\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5217\u51fa\u786c\u9ad4\u4f9b\u61c9\u5ee0\u5546\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8acb 3d \u4ee3\u5370\u8207\u5176\u4ed6\u5ee0\u5546\u5831\u50f9\uff08\u81ea\u884c\u8cfc\u8cb7\u50f9\u683c\u8207\u5718\u8cfc\u50f9\u683c\uff09\u3002honki \u8a8d\u9818\u5de5\u4f5c\u53bb\u8a62\u554f"),(0,n.kt)("li",{parentName:"ul"},"\u8b93\u5927\u5bb6\u6c7a\u5b9a\u8981\u81ea\u884c\u8cfc\u8cb7\u6216\u662f\u53c3\u8207\u5718\u8cfc\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u7814\u7a76\u7a0b\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b65\u9032\u99ac\u9054\u4ecb\u7d39"),(0,n.kt)("li",{parentName:"ul"},"arduino + \u6b65\u9032\u99ac\u9054\u7684\u7df4\u7fd2"),(0,n.kt)("li",{parentName:"ul"},"g-code "))),(0,n.kt)("li",{parentName:"ol"},"\u4e86\u89e3\u96fb\u5b50\u96fb\u8def"),(0,n.kt)("li",{parentName:"ol"},"\u7a0b\u5f0f\u78bc"),(0,n.kt)("li",{parentName:"ol"},"\u6a5f\u69cb\u7d44\u88dd"),(0,n.kt)("li",{parentName:"ol"},"\u904b\u52d5\u5b78"),(0,n.kt)("li",{parentName:"ol"},"\u6a5f\u68b0\u624b\u81c2\u7684\u672a\u4f86\u8207\u89c0\u5bdf")),(0,n.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"))}k.isMDXComponent=!0}}]);