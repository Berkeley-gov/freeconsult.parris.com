"use strict";(self.webpackChunkparris_landing_pages=self.webpackChunkparris_landing_pages||[]).push([[413],{5413:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(2791),n=(s(6814),s(2943)),o=s.n(n),l=s(3360),r=s(4437),i=s(184);const c=t.lazy((()=>s.e(316).then(s.bind(s,5316)))),d=()=>{const[e,a]=(0,t.useState)({first_name:"",last_name:"",email:"",phone_number:"",message:"",gclid:"",ip_address:""}),[s,n]=(0,t.useState)(""),[d,m]=(0,t.useState)(!1),[h,p]=(0,t.useState)(!1),[u,j]=(0,t.useState)(!1),[x,b]=(0,t.useState)(!1),f=()=>m(!1);(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.ipify.org?format=json"),s=await e.json();a((e=>({...e,ip_address:s.ip})))}catch(e){console.error("Error fetching IP:",e),b(!0)}})()}),[]),(0,t.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("gclid");e&&n(e)}),[]);const g=s=>{const{name:t,value:n}=s.target;let o=!0;o="phone_number"===t?/^\+?(\d.*){3,}$/.test(n):/^[a-zA-Z\s]*$/.test(n),(o||""===n)&&a({...e,[t]:n})};return(0,i.jsx)(t.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsxs)(r.Z,{noValidate:!0,validated:h,className:"row g-3 form-section shadow-sm bg-dark bg-gradient ".concat(u?"fade-out":""),onSubmit:async s=>{p(!0);const t=s.currentTarget;s.preventDefault(),!1===t.checkValidity()?s.stopPropagation():(j(!0),setTimeout((()=>{m(!0)}),500));try{const s=await fetch("https://api.ipify.org?format=json"),t=(await s.json()).ip;a({...e,ip_address:t})}catch(n){console.error("Error fetching IP:",n),b(!0)}try{const a="https://hooks.zapier.com/hooks/catch/3796793/38z21pr/";console.log(e);const s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok){const e=await s.json();console.log("Data sent successfully to the webhook:",e)}else console.error("Failed to send datat to the webhook. Status code:",s.statusText),b(!0);console.log("Form data submitted:",e)}catch(n){console.log("Error Posting to Zapier:",n),b(!0)}},children:[(0,i.jsxs)("div",{className:"col-md-12 text-center",children:[(0,i.jsx)("h4",{children:"Contact Us"}),(0,i.jsx)("h5",{id:"form",children:"Free Case Evaluation"})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)(r.Z.Label,{htmlFor:"first_name",className:"form-label",children:"First Name"}),(0,i.jsx)(r.Z.Control,{name:"first_name",type:"text",required:!0,onChange:g,pattern:"[A-Za-z\\s]*",isInvalid:h&&""===e.first_name}),(0,i.jsx)(r.Z.Control.Feedback,{type:"invalid",children:"Please provide a first name."})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)(r.Z.Label,{htmlFor:"last_name",className:"form-label",children:"Last Name"}),(0,i.jsx)(r.Z.Control,{name:"last_name",type:"text",required:!0,onChange:g,pattern:"[A-Za-z\\s]*",isInvalid:h&&""===e.last_name}),(0,i.jsx)(r.Z.Control.Feedback,{type:"invalid",children:"Please proved a last name."})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)(r.Z.Label,{htmlFor:"email",className:"form-label",children:"Email"}),(0,i.jsx)(r.Z.Control,{name:"email",type:"email",required:!0,pattern:"^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9_\\-]+[.]+[a-zA-Z0-9\\-.]{2,61}$",onChange:g,isInvalid:h&&""===e.email}),(0,i.jsx)(r.Z.Control.Feedback,{type:"invalid",children:"Please provide an email address."})]}),(0,i.jsxs)("div",{className:"col-md-6",children:[(0,i.jsx)(r.Z.Label,{htmlFor:"phone_number",className:"form-label",children:"Phone Number"}),(0,i.jsx)(o(),{name:"phone_number",type:"tel",className:"form-control",id:"phone_number",options:{phone:!0,phoneRegionCode:"US"},pattern:"^\\+?( ?[\\(]?[\\-]?[0-9][\\)]?){6,13}$",required:!0,onChange:g,isInvalid:h&&""===e.phone_number}),(0,i.jsx)(r.Z.Control.Feedback,{type:"invalid",children:"Please provide a phone number."})]}),(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsx)(r.Z.Label,{htmlFor:"message",className:"form-label",children:"Tell Us About Your Case"}),(0,i.jsx)(r.Z.Control,{as:"textarea",name:"message",style:{height:"100px"},required:!0,onChange:g,isInvalid:h&&""===e.message}),(0,i.jsx)(r.Z.Control.Feedback,{type:"invalid",children:"Please tell use about your case."})]}),(0,i.jsx)(r.Z.Control,{type:"hidden",id:"gclid",name:"gclid",value:s,onChange:g}),(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsx)(l.Z,{type:"submit",variant:"secondary",disabled:x,children:"Submit"}),(0,i.jsxs)(c,{show:d,onHide:f,animation:!0,children:[(0,i.jsx)(c.Header,{closeButton:!0,children:(0,i.jsx)(c.Title,{children:"Thank you!"})}),(0,i.jsx)(c.Body,{children:"We appreciate your submission, someone from our team will reach out soon!"}),(0,i.jsx)(c.Footer,{className:"d-flex justify-content-center",children:(0,i.jsx)(l.Z,{variant:"secondary",onClick:f,children:"Close"})})]})]})]})})},m=()=>(0,i.jsx)("section",{className:"container d-flex justify-content-center",children:(0,i.jsx)(d,{})})}}]);
//# sourceMappingURL=413.7b2a1e6d.chunk.js.map