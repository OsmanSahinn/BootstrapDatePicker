function BootstrapDatepicker(e){!function(){const e=document.createElement("style");e.type="text/css",e.innerText="\n.calendar-day{position:relative;height:50px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;transition:background-color .3s;flex-direction:column}.calendar-day:hover{background-color:#ebeced}.in-range,.selected,.special-day.in-range{background-color:#ebeced!important}.special-day,.special-day-badge{background-color:#fff3cd!important}.calendar-header{font-weight:700;text-align:center;padding:10px}.calendar-container{display:grid;grid-template-columns:repeat(7,1fr);gap:0}.special-day{font-weight:700;color:#000}.special-day-badge{font-weight:400;color:#664d03;border:1px solid #ffe69c}.sday-container{margin-bottom:10px}.clock-container{display:flex;justify-content:space-around;padding:10px}.first-date,.last-date{background-color:#d1d3d4!important}.day-price{font-size:10px;color:#888;display:block;margin-top:1px}.disabled-day{background-color:#f8d7da;color:#6c757d;cursor:not-allowed!important;opacity:.5}\n    ",document.head.appendChild(e)}();const t={inputId:"takvim",dayDifference:"no",childDiscounts:[],dayTooltip:"Gün",personCount:1,specialDays:[],ShowTotalAmount:"no",Prices:[],currency:"TL",checkavailability:"no",ShowPrice:"no",LanguageSelect:"tr-TR",ShowClock:"no",RangeSelect:"no",Display:"modal",Translations:{"tr-TR":{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],days:["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"],OkButton:"Tamam",Button:"Tamam",UygulaButton:"Uygula",SelectTime:"Saat Seç",StartTime:"Başlangıç Saati",EndTime:"Bitiş Saati",Warning:"Seçtiğiniz tarihler arasında ${currentDateString} rezerve edilemez bir gün bulunmaktadır.",NoPriceWarning:"Seçtiğiniz tarihler arasında ${currentDateString} için bir fiyat bulunmamaktadır.",TotalPriceMessage:"Seçili günlerdeki toplam tutar: ${totalPrice}₺",TotalDaysMessage:'<div class="alert alert-warning fw-bold w-100 mb-2 mt-2">Toplam Gün Sayısı: ${totalDays}, Toplam Tutar: ${totalPrice} ${currency}</div>',UpdateTotalDaysMessage:'<div class="alert alert-warning fw-bold w-100 mb-2 mt-2">Toplam Yetişkin: ${adultCount}, Toplam Çocuk ${childCount}, Toplam Gün Sayısı: ${totalDays}, Toplam Tutar: ${totalPrice} ${currency}</div>',UnavailableDaysMessage:"<b>Müsait olmayan günler:</b> ",NoPriceDaysMessage:"<b>Fiyat bilgisi olmayan günler:</b> ",ChildAgePlaceholder:"${index}. Çocuk Yaşı",AdultCountLabel:"Yetişkin:",ChildCountLabel:"Çocuk:",LoadingText:"Bekleyiniz...",WarningTitle:"Uyarı"},"en-US":{months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],OkButton:"Done",Button:"Done",UygulaButton:"Apply",SelectTime:"Select Time",StartTime:"Start Time",EndTime:"End Time",Warning:"There is an unavailable day (${currentDateString}) within the selected dates.",NoPriceWarning:"There is no price available for the date ${currentDateString} within the selected range.",TotalPriceMessage:"Total amount for selected days: ${totalPrice}₺",TotalDaysMessage:'<div class="alert alert-warning fw-bold w-100 mb-2 mt-2">Total Days: ${totalDays}, Total Amount: ${totalPrice} ${currency}</div>',UpdateTotalDaysMessage:'<div class="alert alert-warning fw-bold w-100 mb-2 mt-2">Adult Count: ${adultCount}, Child Count ${childCount}, Total Days: ${totalDays}, Total Amount: ${totalPrice} ${currency}</div>',UnavailableDaysMessage:"<b>Unavailable days:</b> ",NoPriceDaysMessage:"<b>No price for days:</b> ",ChildAgePlaceholder:"${index}. Child Age",AdultCountLabel:"Adult:",ChildCountLabel:"Child:",LoadingText:"Loading...",WarningTitle:"Warning"}}},n={...t,...e},a=function(e,t){const n={...e};for(const e in t)n[e]?n[e]={...n[e],...t[e]}:n[e]=t[e];return n}(t.Translations,e.Translations||{});n.Translations=a;const{inputId:i,dayDifference:l,childDiscounts:d,dayTooltip:o,personCount:s,specialDays:c,ShowTotalAmount:r,Prices:u,currency:m,checkavailability:g,ShowPrice:p,LanguageSelect:y,ShowClock:h,RangeSelect:b,Display:v,defaultTranslations:f}=n;function T(){document.querySelectorAll(".calendar-day").forEach((e=>{e.classList.remove("selected","in-range","first-date","last-date","special-day")})),N(L,$),document.getElementById("saat").innerHTML="",document.getElementById("price").innerHTML="",document.getElementById("person").innerHTML=""}const E=document.getElementById(i);if(!E&&"modal"===v)return;let w=void 0!==h?h:"no",L=(new Date).getFullYear(),$=(new Date).getMonth(),D=null,S=null,M=null,C=null,x=!1,A=void 0!==y?y:function(){let e=navigator.language||navigator.userLanguage;2===e.length&&(e=e+"-"+e.toUpperCase());return e}();const B=k();function k(){const e=document.createElement("div");return e.innerHTML='\n<div class="fade modal"id=calendarModal aria-hidden=true aria-labelledby=calendarModalLabel tabindex=-1><div class=modal-dialog><div class=modal-content><div class="d-flex justify-content-between m-4 mb-3"><h5 class=text-start id=currentMonth></h5><div class="d-flex gap-2 ms-auto"><button class="btn btn-light"id=prevMonth><svg class="bi bi-caret-left-fill"fill=currentColor height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg></button> <button class="btn btn-light"id=nextMonth><svg class="bi bi-caret-right-fill"fill=currentColor height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button></div></div><div class=calendar-container id=takvim></div><div class=clock-container id=saat></div><div class="text-center me-2 ms-2 person-container small"id=person></div><div class="text-center me-5 ms-5 price-container"id=price></div><div class=sday-container id=sday></div></div></div></div>\n',document.body.appendChild(e),new bootstrap.Modal(document.getElementById("calendarModal"))}function I(e,t,n){const i=document.getElementById("takvim");i.innerHTML="",a[n]||(console.warn(`Dil "${n}" bulunamadı, varsayılan dil "en-US" kullanılıyor.`),n="en-US");const l=a[n].months,d=a[n].days;document.getElementById("currentMonth").innerText=`${l[t]} ${e}`,d.forEach((e=>{const t=document.createElement("div");t.className="calendar-header",t.innerText=e,i.appendChild(t)}));let o=new Date(e,t,1).getDay();0===o&&(o=7);for(let e=1;e<o;e++){const e=document.createElement("div");e.className="calendar-day",i.appendChild(e)}const s=new Date(e,t+1,0).getDate();for(let n=1;n<=s;n++){const a=document.createElement("div");a.className="calendar-day",a.innerText=n,a.setAttribute("data-date",`${e}-${String(t+1).padStart(2,"0")}-${String(n).padStart(2,"0")}`),i.appendChild(a),a.addEventListener("click",(()=>P(a))),a.addEventListener("mouseover",(()=>H(a)))}var c;D&&(c=D,document.querySelectorAll(".calendar-day").forEach((e=>{e.getAttribute("data-date")===c&&(e.classList.add("selected"),e.classList.add("first-date"))}))),D&&S&&j(D,S),N(e,t),function(){const e=document.querySelectorAll(".calendar-day"),t=p;e.forEach((e=>{const n=e.getAttribute("data-date"),a=u.find((e=>e.date===n));if(a&&"yes"===t&&!e.querySelector(".day-price")){const t=document.createElement("div");t.className="day-price",a.price?t.innerText=`${a.price} ${m}`:t.innerText="",e.appendChild(t)}}))}(),function(e){document.querySelectorAll(".calendar-day").forEach((t=>{const n=t.getAttribute("data-date"),a=e.find((e=>e.date===n));a&&0===a.availability&&(t.classList.add("disabled-day"),t.style.pointerEvents="none",t.style.opacity="0.5")}))}(u)}function N(e,t){const n=document.getElementById("sday");n.innerHTML="";const a=c.filter((n=>{const[a,i]=n.date.split("-");return parseInt(a)===e&&parseInt(i)===t+1}));a.length>0&&a.forEach((e=>{const t=document.createElement("div");t.className="me-2 d-block ps-2 pe-2",t.innerHTML=`<span class='m-1 badge special-day-badge w-100'>${e.date} ${e.name}</span>`,n.appendChild(t)}));document.querySelectorAll(".calendar-day").forEach((e=>{const t=e.getAttribute("data-date");c.find((e=>e.date===t))&&e.classList.add("special-day")}))}function P(e,t){"modal"===v?function(e,t){const n=e.getAttribute("data-date"),a="yes"===b;!1===a||"no"===a?(D=n,T(),e.classList.add("selected","first-date"),E.value=D,z(),"yes"===w?(U(),W()):B.hide()):!0!==a&&"yes"!==a||(D?!S&&x?(S=n,new Date(D)>new Date(S)&&([D,S]=[S,D]),E.value=`${D} - ${S}`,j(D,S),z(),x=!1,"yes"===h?(q(),V(D,S),W()):"yes"===r?V(D,S):B.hide()):(D=null,S=null,T(),D=n,e.classList.add("selected","first-date"),x=!0,W()):(D=n,T(),e.classList.add("selected","first-date"),x=!0,W()))}(e):"inline"===v&&function(e,t){const n=e.getAttribute("data-date"),a="yes"===b;if(!1===a||"no"===a)D=n,T(),e.classList.add("selected","first-date"),E.value=D,z(),"yes"===w?(U(),W()):B.hide();else if(!0===a||"yes"===a)if(D)if(!S&&x){S=n,new Date(D)>new Date(S)&&([D,S]=[S,D]);const e=document.querySelector('input[data-value="calendar"]');e&&(e.value=`${D} - ${S}`),j(D,S),z(),x=!1,"yes"===h?(q(),V(D,S),W()):"yes"===r&&V(D,S)}else D=null,S=null,T(),D=n,e.classList.add("selected","first-date"),x=!0,W();else D=n,T(),e.classList.add("selected","first-date"),x=!0,W()}(e)}function H(e){if(x&&D){const n=e.getAttribute("data-date");T();let a=D,i=n;new Date(D)>new Date(n)&&(a=n,i=D);const d=Math.abs(new Date(i)-new Date(a));let s=Math.ceil(d/864e5);if("no"===l&&(s+=1),j(a,i),e&&"object"==typeof e){e.setAttribute("title",`${s} ${o}`);try{var t=new bootstrap.Tooltip(e,{trigger:"hover"});t&&(t.show(),setTimeout((function(){t&&(t.hide(),t.dispose())}),2e3))}catch(e){}}}}function U(){const e=a[A].UygulaButton,t=a[A].SelectTime;document.getElementById("saat").innerHTML=`\n<div><label>${t}</label> <input class=form-control id=singleTime type=time></div><button class="btn btn-primary mt-3"id=submitSingleTime>${e}</button>    `,document.getElementById("submitSingleTime").addEventListener("click",(()=>{M=document.getElementById("singleTime").value,E.value=`${D} ${M}`,B.hide()}))}function q(){const e=a[A].UygulaButton,t=a[A].StartTime,n=a[A].EndTime;document.getElementById("saat").innerHTML=`\n<div class="d-flex mb-2"><div class="d-flex me-3"><div class="w-40 me-5"><label>${t}:</label> <input class=form-control id=startTime type=time></div><div class="me-3 w-40"><label>${n}:</label> <input class=form-control id=endTime type=time></div></div><button class="btn btn-secondary btn-sm mt-4"id=submitTimes>${e}</button></div>\n    `,document.getElementById("submitTimes").addEventListener("click",(()=>{M=document.getElementById("startTime").value,C=document.getElementById("endTime").value,E.value=`${D} ${M} - ${S} ${C}`,B.hide()}))}function z(){document.querySelectorAll(".calendar-day").forEach((e=>{const t=e.getAttribute("data-date");c.find((e=>e.date===t))&&e.classList.add("special-day")}))}function W(){document.querySelectorAll(".tooltip").forEach((e=>{const t=bootstrap.Tooltip.getInstance(e);t&&t.hide()}))}function j(e,t){const n=document.querySelectorAll(".calendar-day"),a=new Date(e.split(" ")[0]),i=new Date(t.split(" ")[0]);n.forEach((e=>{const t=new Date(e.getAttribute("data-date"));t>=a&&t<=i&&(e.classList.add("in-range"),t.getTime()===a.getTime()&&(e.classList.add("first-date"),e.classList.remove("in-range")),t.getTime()===i.getTime()&&(e.classList.add("last-date"),e.classList.remove("in-range")))}))}function F(){a[A]||(A="en-US"),I(L,$,A)}function O(){const e=parseInt(document.getElementById("adultCount").value)||0;let t=0,n=0,i=0,l=[],o=[];const c=document.querySelectorAll(".childAge");c.forEach((e=>{""!==e.value.trim()&&t++}));(function(){let e=[];if(D&&S){let t=new Date(D);const n=new Date(S);for(;t<=n;){const n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;e.push(n),t.setDate(t.getDate()+1)}}return e})().forEach((t=>{const a=u.find((e=>e.date===t));if(a){let t=a.price;i+=1,n+=t/s*e,c.forEach((e=>{const a=parseInt(e.value);if(!isNaN(a)){const e=d.find((e=>a>=e.minAge&&a<=e.maxAge));n+=e?t/s*(1-e.discountPercent/100):t/s}}))}else o.push(t);0===a?.availability&&l.push(t)}));const r=document.getElementById("price");if(l.length>0||o.length>0){let e=`<div class="alert small w-100 alert-warning mt-2"><strong>${a[A].WarningTitle}:</strong><br>`;l.length>0&&(e+=`${a[A].UnavailableDaysMessage}`+l.join(", ")+"<br>"),o.length>0&&(e+=`${a[A].NoPriceDaysMessage}`+o.join(", ")),e+="</div>",r.innerHTML=e}else{const l=a[A]?.UpdateTotalDaysMessage,d=l.replace("${adultCount}",e).replace("${childCount}",t).replace("${totalDays}",i).replace("${totalPrice}",n.toFixed(2)).replace("${currency}",m);r.innerHTML=d}if("inline"!==v){const e=document.createElement("button"),t=Y();e.className="btn btn-secondary m-3 closeModalButton",e.setAttribute("data-button-id",t),e.innerText=a[A]?.OkButton||"Done";const n=document.getElementById("closeModalButton");n&&n.remove(),r.appendChild(e),e.addEventListener("click",(()=>{const e=document.querySelectorAll(".childAge");let t=!1;e.forEach((e=>{""===e.value.trim()?(e.classList.add("is-invalid"),t=!0):e.classList.remove("is-invalid")})),t||B.hide()})),e.innerHTML=`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${a[A]?.LoadingText||"Loading..."}`,e.disabled=!0,setTimeout((()=>{e.innerHTML=a[A]?.OkButton||"Done",e.disabled=!1,document.querySelectorAll("input").forEach((e=>{e.blur()}))}),2e3)}}function Y(){return"button-"+Math.random().toString(36).substr(2,9)}function R(){const e=document.getElementById("person");e.innerHTML="";const t=document.createElement("div");t.className="row mb-3 g-2";const n=document.createElement("div");n.className="col-md-2";const i=document.createElement("label");i.setAttribute("for","adultCount"),i.innerText=a[A].AdultCountLabel,i.className="form-label";const l=document.createElement("input");l.type="number",l.id="adultCount",l.min=1,l.value=2,l.className="form-control",l.addEventListener("change",O),l.addEventListener("keyup",O),l.addEventListener("input",O),n.appendChild(i),n.appendChild(l);const d=document.createElement("div");d.className="col-md-2";const o=document.createElement("label");o.setAttribute("for","childCount"),o.innerText=a[A].ChildCountLabel,o.className="form-label";const s=document.createElement("input");s.type="number",s.id="childCount",s.min=0,s.value=0,s.className="form-control",s.addEventListener("change",(()=>{!function(){const e=parseInt(document.getElementById("childCount").value),t=document.getElementById("childAges");if(t.innerHTML="",e>0){const n=document.createElement("div");n.className="row g-2";for(let t=0;t<e;t++){const e=document.createElement("div");e.className="col-md-4";const i=document.createElement("label");i.innerText=`${a[A].ChildAgePlaceholder.replace("${index}",t+1)}`,i.className="form-label";const l=document.createElement("input");l.type="number",l.classList.add("form-control","mb-2","childAge"),l.placeholder=`${a[A].ChildAgePlaceholder.replace("${index}",t+1)}`,l.min=0,l.max=12,l.required=!0,l.addEventListener("change",O),l.addEventListener("keyup",O),l.addEventListener("input",O),e.appendChild(i),e.appendChild(l),n.appendChild(e)}t.appendChild(n)}}(),O()})),s.addEventListener("keyup",O),s.addEventListener("input",O),d.appendChild(o),d.appendChild(s);const c=document.createElement("div");c.className="col-md-8",c.id="childAges",t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)}function V(e,t){document.getElementById("person");if("yes"===r){const n=new Date(e),i=new Date(t);let o=0,c=0,r=[],g=[];R();const p=document.getElementById("adultCount"),y=document.getElementById("childCount"),h=document.querySelectorAll(".childAge");if(p&&y){let a=parseInt(p.value)||0;parseInt(y.value);for(let e=new Date(n);e<=i;e.setDate(e.getDate()+1)){const t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,n=u.find((e=>e.date===t));if(n){let e=n.price;o+=e/s*a,h.forEach((t=>{const n=parseInt(t.value);if(!isNaN(n)){const t=d.find((e=>n>=e.minAge&&n<=e.maxAge));o+=t?e/s*(1-t.discountPercent/100):e/s}})),c++,0===n.availability&&r.push(t)}else g.push(t)}"yes"===l&&c>1&&(c-=1,o-=u.find((e=>e.date===t))?.price||0),new Date(e).getTime()===new Date(t).getTime()&&(c=1)}const b=document.getElementById("price");if(r.length>0||g.length>0){let e=`<div class="alert small w-100 alert-warning mt-2"><strong>${a[A].WarningTitle}:</strong><br>`;r.length>0&&(e+=`${a[A].UnavailableDaysMessage}`+r.join(", ")+"<br>"),g.length>0&&(e+=`${a[A].NoPriceDaysMessage}`+g.join(", ")),e+="</div>",b.innerHTML=e}else{const e=a[A]?.TotalDaysMessage,t=e.replace("${totalDays}",c).replace("${totalPrice}",o.toFixed(2)).replace("${currency}",m);b.innerHTML=t}if("inline"!==v){const e=document.createElement("button"),t=Y();e.className="btn btn-secondary m-3 closeModalButton",e.setAttribute("data-button-id",t),e.innerText=a[A]?.OkButton||"Done";const n=document.getElementById("closeModalButton");n&&n.remove(),b.appendChild(e),e.addEventListener("click",(()=>{const e=document.querySelectorAll(".childAge");let t=!1;e.forEach((e=>{""===e.value.trim()?(e.classList.add("is-invalid"),t=!0):e.classList.remove("is-invalid")})),t||B.hide()})),e.innerHTML=`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${a[A]?.LoadingText||"Loading..."}`,e.disabled=!0,setTimeout((()=>{e.innerHTML=a[A]?.OkButton||"Done",e.disabled=!1,document.querySelectorAll("input").forEach((e=>{e.blur()}))}),2e3)}}}document.addEventListener("DOMContentLoaded",(function(){F(),E.addEventListener("click",(()=>{if(E.value){const[e,t]=E.value.split(" - ");D=e,S=t||null}I(L,$,A),"modal"===v&&B.show()})),document.getElementById("prevMonth").addEventListener("click",(()=>{$--,$<0&&($=11,L--),F(),T()})),document.getElementById("nextMonth").addEventListener("click",(()=>{$++,$>11&&($=0,L++),F(),T()}))})),"inline"===v?function(e,t){const n=document.getElementById(e);if(!n)return;const a='\n<div class="calendar-container d-flex justify-content-between m-4 mb-3"><h5 class=text-start id=currentMonth></h5><div class="d-flex gap-2 ms-auto"><button class="btn btn-light"id=prevMonth><svg class="bi bi-caret-left-fill"fill=currentColor height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg></button> <button class="btn btn-light"id=nextMonth><svg class="bi bi-caret-right-fill"fill=currentColor height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button></div></div><div class=calendar-container id=takvim></div><div class=clock-container id=saat></div><div class="text-center me-2 ms-2 person-container small"id=person></div><div class="text-center me-5 ms-5 price-container"id=price></div><div class=sday-container id=sday></div>\n';n.innerHTML=a,I((new Date).getFullYear(),(new Date).getMonth(),t)}(n.inputId,A):k(),I(L,$,A)}