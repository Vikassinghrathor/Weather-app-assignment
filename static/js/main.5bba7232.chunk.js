(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/WeatherIcons.0a218296.gif"},23:function(e,t,a){e.exports=a(58)},28:function(e,t,a){},3:function(e,t){e.exports={key:"16d0e4db3e96c4c3aa07fa40da935b87",base:"https://api.openweathermap.org/data/2.5/"}},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(28),a(6)),l=a.n(i),u=a(1),s=a(19),m=a(4),d=a(20),h=a.n(d),p=a(21),b=a.n(p),f=a(3),E=a.n(f),v=a(5),y=a.n(v);var g=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],s=l[1],d=Object(n.useState)({}),h=Object(m.a)(d,2),p=h[0],f=h[1];return Object(n.useEffect)((function(){return function(){}}),[]),r.a.createElement("div",{className:"forecast"},r.a.createElement("div",{className:"forecast-icon"},r.a.createElement(y.a,{icon:e.icon,color:"white",size:112,animate:!0})),r.a.createElement("div",{className:"today-weather"},r.a.createElement("h3",null,e.weather),r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search any city",onChange:function(e){return o(e.target.value)},value:c}),r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:"https://images.avishkaar.cc/workflow/newhp/search-white.png",onClick:function(){return e=c,void b.a.get("".concat(E.a.base,"weather?q=").concat("[object Object]"!=e?e:c,"&units=metric&APPID=").concat(E.a.key)).then((function(e){f(e.data),o("")})).catch((function(e){console.log(e),f(""),o(""),s({message:"Not Found",query:c})}));var e},alt:"error"}))),r.a.createElement("ul",null,"undefined"!==typeof p.main?r.a.createElement("div",null,r.a.createElement("li",{className:"cityHead"},r.a.createElement("p",null,p.name,", ",p.sys.country),r.a.createElement("img",{className:"temp",src:"https://openweathermap.org/img/wn/".concat(p.weather[0].icon,".png"),alt:"error"})),r.a.createElement("li",null,"Temperature"," ",r.a.createElement("span",{className:"temp"},Math.round(p.main.temp),"\xb0c (",p.weather[0].main,")")),r.a.createElement("li",null,"Humidity"," ",r.a.createElement("span",{className:"temp"},Math.round(p.main.humidity),"%")),r.a.createElement("li",null,"Visibility"," ",r.a.createElement("span",{className:"temp"},Math.round(p.visibility)," mi")),r.a.createElement("li",null,"Wind Speed"," ",r.a.createElement("span",{className:"temp"},Math.round(p.wind.speed)," Km/h"))):r.a.createElement("li",null,u.query," ",u.message))))},w=a(22),O=a.n(w),j="white",k=112,N=!0;var D=function(){var e=Object(n.useState)({lat:void 0,lon:void 0,errorMessage:void 0,temperatureC:void 0,temperatureF:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:"CLEAR_DAY",sunrise:void 0,sunset:void 0,errorMsg:void 0}),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){navigator.geolocation?o().then((function(e){i(e.coords.latitude,e.coords.longitude)})).catch((function(e){i(28.67,77.22),alert("You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real-time weather.")})):alert("Geolocation not available");var e=setInterval((function(){i(a.lat,a.lon)}),6e5);return function(){return clearInterval(e)}}),[a.lat,a.lon]);var o=function(e){return new Promise((function(t,a){navigator.geolocation.getCurrentPosition(t,a,e)}))},i=function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E.a.base,"weather?lat=").concat(t,"&lon=").concat(a,"&units=metric&APPID=").concat(E.a.key));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c((function(e){return Object(u.a)(Object(u.a)({},e),{},{lat:t,lon:a,city:r.name,temperatureC:Math.round(r.main.temp),temperatureF:Math.round(1.8*r.main.temp+32),humidity:r.main.humidity,main:r.weather[0].main,country:r.sys.country})})),e.t0=r.weather[0].main,e.next="Haze"===e.t0?10:"Clouds"===e.t0?12:"Rain"===e.t0?14:"Snow"===e.t0?16:"Dust"===e.t0?18:"Drizzle"===e.t0?20:"Fog"===e.t0?22:"Smoke"===e.t0?24:"Tornado"===e.t0?26:28;break;case 10:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"CLEAR_DAY"})})),e.abrupt("break",29);case 12:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"CLOUDY"})})),e.abrupt("break",29);case 14:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"RAIN"})})),e.abrupt("break",29);case 16:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"SNOW"})})),e.abrupt("break",29);case 18:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"WIND"})})),e.abrupt("break",29);case 20:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"SLEET"})})),e.abrupt("break",29);case 22:case 24:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"FOG"})})),e.abrupt("break",29);case 26:return c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"WIND"})})),e.abrupt("break",29);case 28:c((function(e){return Object(u.a)(Object(u.a)({},e),{},{icon:"CLEAR_DAY"})}));case 29:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return a.temperatureC?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"city"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,a.city),r.a.createElement("h3",null,a.country)),r.a.createElement("div",{className:"mb-icon"}," ",r.a.createElement(y.a,{icon:a.icon,color:j,size:k,animate:N}),r.a.createElement("p",null,a.main)),r.a.createElement("div",{className:"date-time"},r.a.createElement("div",{className:"dmy"},r.a.createElement("div",{id:"txt"}),r.a.createElement("div",{className:"current-time"},r.a.createElement(h.a,{format:"HH:mm:ss",interval:1e3,ticking:!0})),r.a.createElement("div",{className:"current-date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"temperature"},r.a.createElement("p",null,a.temperatureC,"\xb0",r.a.createElement("span",null,"C"))))),r.a.createElement(g,{icon:a.icon,weather:a.main,onTemperatureUpdate:function(e){return c((function(t){return Object(u.a)(Object(u.a)({},t),{},{temperatureC:Math.round(e)})}))}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:O.a,style:{width:"50%",WebkitUserDrag:"none"},alt:"error"}),r.a.createElement("h3",{style:{color:"white",fontSize:"22px",fontWeight:"600"}},"Detecting your location"),r.a.createElement("h3",{style:{color:"white",marginTop:"10px"}},"Your current location wil be displayed on the App ",r.a.createElement("br",null)," & used for calculating Real-time weather."))};a(57);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(D,null)),r.a.createElement("div",{className:"footer-info"},r.a.createElement("a",{href:"https://github.com/Vikassinghrathor/Weather-app-assignment"},"Download Source Code")," ","| Developed by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/vikas-rathore-51ba91194/"},"Vikas Singh Rathore")," ","| Powered by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.htmlhints.com/"},"HTML HINTS")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5bba7232.chunk.js.map