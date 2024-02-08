import{l as b,u as v,k as w,i as y,j as e,R as N,p as _,x as s,B as E,y as F,Q as x,z as h}from"./index-ee56b29a.js";const p={_origin:"https://api.emailjs.com"},S=(a,t="https://api.emailjs.com")=>{p._userID=a,p._origin=t},j=(a,t,i)=>{if(!a)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class g{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const k=(a,t,i={})=>new Promise((r,c)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:n})=>{const u=new g(n);u.status===200||u.text==="OK"?r(u):c(u)}),l.addEventListener("error",({target:n})=>{c(new g(n))}),l.open("POST",p._origin+a,!0),Object.keys(i).forEach(n=>{l.setRequestHeader(n,i[n])}),l.send(t)}),$=(a,t,i,r)=>{const c=r||p._userID;return j(c,a,t),k("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:c,service_id:a,template_id:t,template_params:i}),{"Content-type":"application/json"})},A=a=>{let t;if(typeof a=="string"?t=document.querySelector(a):t=a,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},O=(a,t,i,r)=>{const c=r||p._userID,l=A(i);j(c,a,t);const n=new FormData(l);return n.append("lib_version","3.11.0"),n.append("service_id",a),n.append("template_id",t),n.append("user_id",c),k("/api/v1.0/email/send-form",n)},T={init:S,send:$,sendForm:O},q=()=>{const[a,t]=b.useState(""),{ref:i}=v("Contact"),{language:r}=w(),{theme:c}=y(),l=o=>{t(`${o}${a}`)},n=b.useRef(),u=o=>{o.preventDefault(),n.current!=null&&T.sendForm("service_6yy9tdc","template_owr79hi",n.current,"XKMJ0QXsT8F35DPjm").then(m=>{console.log(m),r==="UA"?x.success(h.successEmailSent.uk):x.success(h.successEmailSent.en)},m=>{console.log(m),r==="UA"?x.error(h.failedEmailSent.uk):x.error(h.failedEmailSent.en)})};return e.jsx(N.Fragment,{children:e.jsxs("section",{className:"contact-container w-full min-[1921px]:px-[55rem] mt-16",id:"contact",children:[e.jsx("div",{className:"title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16",ref:i,children:e.jsxs(_.div,{style:{textAlign:"center"},children:[e.jsxs("p",{className:"text-[--black] mb-6",children:[e.jsx("span",{className:"text-[--orange]",children:"<"}),r==="UA"?s.title.uk:s.title.en,e.jsx("span",{className:"text-[--orange]",children:"/>"})]}),e.jsx("h2",{className:"text-[--black] text-center",children:r==="UA"?s.description.uk:s.description.en})]})}),e.jsxs("div",{className:"flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10",children:[e.jsx("div",{className:" flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-100 transition-all  quote-outer-container text-left",children:s.informations.map((o,m)=>e.jsxs("div",{children:[e.jsx("h4",{children:r==="UA"?o.title.uk:o.title.en},"title"+m),o.texts.map((d,f)=>d.url?e.jsx("a",{className:"ml-10 text-[--lightblue] hover:text-[--orange]",href:d.url,target:"_blank",rel:"noreferrer",children:r==="UA"?d.uk:d.en},"text"+f):e.jsx("p",{className:"ml-10",children:r==="UA"?d.uk:d.en},"text"+f))]},m))}),e.jsxs("form",{className:"flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10",ref:n,onSubmit:u,autoComplete:"off",children:[s.inputfields.map((o,m)=>e.jsx("input",{type:o.type,placeholder:r==="UA"?`${o.placeholder.uk}`:`${o.placeholder.en}`,name:o.name,required:!0,onFocus:()=>{l(o.name)},onMouseEnter:()=>{l(o.name)},className:`${c==="dark"?"bg-[--blackblue] dark-mode-shadow ":"bg-[--icewhite] dark-shadow "}`},m)),e.jsx("textarea",{rows:s.textarea.rows,placeholder:r==="UA"?`${s.textarea.placeholder.uk}`:`${s.textarea.placeholder.en}`,name:s.textarea.name,onFocus:()=>{l(s.textarea.name)},onMouseEnter:()=>{l(s.textarea.name)},className:`${c==="dark"?"bg-[--blackblue] dark-mode-shadow":"bg-[--icewhite] dark-shadow"}`}),e.jsxs("div",{className:"privacy-checkbox flex gap-16",children:[e.jsxs("label",{className:"block w-2 h-2 cursor-pointer",htmlFor:"checkbox-label",children:[e.jsx("input",{type:"checkbox",required:!0,name:"checkbox-label",id:"checkbox-label"}),e.jsx("span",{className:"checkbox"})]}),e.jsx("p",{children:r==="UA"?`${s.privacyOptIn.checkbox.uk}`:`${s.privacyOptIn.checkbox.en}`})]}),e.jsx("p",{children:r==="UA"?`${s.privacyOptIn.description.uk}`:`${s.privacyOptIn.description.en}`}),e.jsx(E,{value:r==="UA"?`${s.button.value.uk}`:`${s.button.value.en}`,iconSVG:s.icon,buttoncolor:s.colors.main,iconcolor:s.colors.icon,type:"submit",elementType:"input",target:"_blank"}),e.jsx(F,{className:"w-max text-3xl block p-3 max-lg:w-full ",position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:c})]})]})]})})};export{q as default};
