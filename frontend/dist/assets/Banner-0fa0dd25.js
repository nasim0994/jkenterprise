import{a1 as B,a2 as N,a3 as w,j as e,a4 as n}from"./index-36b948db.js";function b(){const{data:i}=B(),a=i==null?void 0:i.data,d=a==null?void 0:a._id,[p,{isLoading:l}]=N(),[f,{isLoading:c}]=w(),g=async t=>{var o,u,m,x;t.preventDefault();const h=t.target.title.value,j=t.target.description.value,v=t.target.video.value,r={title:h,description:j,video:v};if(d){const s=await f({id:d,info:r});(o=s==null?void 0:s.data)!=null&&o.success?n.success("Banner Update Success"):(n.error(((u=s==null?void 0:s.data)==null?void 0:u.message)||"something went wrong!"),console.log(s))}else{const s=await p(r);(m=s==null?void 0:s.data)!=null&&m.success?n.success("Banner Add Success"):(n.error(((x=s==null?void 0:s.data)==null?void 0:x.message)||"something went wrong!"),console.log(s))}};return e.jsxs("section",{className:"bg-base-100 rounded shadow",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h3",{className:"font-medium text-neutral",children:"Banner"})}),e.jsxs("form",{className:"p-4",onSubmit:g,children:[e.jsxs("div",{className:"text-neutral-content flex flex-col gap-4 w-full items-start",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"mb-1",children:"Banner Title"}),e.jsx("input",{type:"text",name:"title",required:!0,defaultValue:a==null?void 0:a.title})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"mb-1",children:"Banner Description"}),e.jsx("textarea",{type:"text",name:"description",required:!0,defaultValue:a==null?void 0:a.description})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"mb-1",children:"Banner Youtube Video Id"}),e.jsx("textarea",{type:"text",name:"video",required:!0,defaultValue:a==null?void 0:a.video})]})]}),e.jsx("div",{className:"mt-5",children:e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{disabled:l||c,className:"primary_btn",children:l||c?"Loading...":d?"Update Banner":"Add Banner"})})})]})]})}export{b as default};
