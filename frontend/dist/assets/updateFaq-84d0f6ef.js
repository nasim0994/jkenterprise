import{k as p,D as j,$ as h,a0 as g,j as s,v as c}from"./index-e345c454.js";function v(){const l=p(),{id:d}=j(),{data:n}=h(d),e=n==null?void 0:n.data,[u,{isLoading:i}]=g(),o=async a=>{var r;a.preventDefault();const m=a.target.qus.value,x=a.target.ans.value,t=await u({id:d,data:{qus:m,ans:x}});(r=t==null?void 0:t.data)!=null&&r.success?(c.fire("","Faq update success","success"),a.target.reset(),l("/admin/faq")):(c.fire("","something went wrong!","error"),console.log(t))};return s.jsxs("section",{className:"bg-base-100 shadow rounded",children:[s.jsx("div",{className:"p-4 border-b text-neutral font-medium flex justify-between items-center",children:s.jsx("h3",{children:"Edit Your FAQ"})}),s.jsxs("form",{className:"p-4",onSubmit:o,children:[s.jsx("div",{className:"text-neutral-content grid grid-cols-2 gap-4",children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{children:[s.jsx("p",{className:"mb-1",children:"Qus"}),s.jsx("input",{type:"text",name:"qus",required:!0,defaultValue:e==null?void 0:e.qus})]}),s.jsxs("div",{children:[s.jsx("p",{className:"mb-1",children:"Ans"}),s.jsx("input",{type:"text",name:"ans",required:!0,defaultValue:e==null?void 0:e.ans})]})]})}),s.jsx("div",{className:"mt-6",children:s.jsx("button",{disabled:i&&"disabled",className:"primary_btn",children:i?"Loading...":"Edit Faq"})})]})]})}export{v as default};
