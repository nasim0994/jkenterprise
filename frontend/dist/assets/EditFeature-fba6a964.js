import{k as j,r as f,D as g,X as b,Y as v,j as e,Q as N,v as u}from"./index-36b948db.js";import{_ as w}from"./index-d817e257.js";function D(){const x=j(),[s,c]=f.useState([]),{id:d}=g(),{data:i}=b(d),a=i==null?void 0:i.data,[p,{isLoading:o}]=v(),h=async t=>{t.preventDefault();const n=t.target.title.value,l=new FormData;l.append("title",n),(s==null?void 0:s.length)>0&&l.append("icon",s[0].file);const r=await p({id:d,formData:l}).unwrap();r!=null&&r.success?(u.fire("","Feature add success","success"),t.target.reset(),c([]),x("/admin/features/all")):(u.fire("","something went wrong!","error"),console.log(r))};return e.jsxs("section",{className:"bg-base-100 shadow rounded",children:[e.jsx("div",{className:"p-4 border-b text-neutral font-medium flex justify-between items-center",children:e.jsx("h3",{children:"Edit Feature"})}),e.jsxs("form",{className:"p-4",onSubmit:h,children:[e.jsxs("div",{className:"text-neutral-content flex flex-col gap-4",children:[e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Title"}),e.jsx("input",{type:"text",name:"title",required:!0,defaultValue:a==null?void 0:a.title})]})}),e.jsxs("div",{className:"flex flex-col border rounded border-dashed p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Image"}),e.jsx("div",{children:e.jsx(w,{defaultValue:s,onChange:t=>c(t),dataURLKey:"data_url",children:({onImageUpload:t,onImageRemove:n,dragProps:l})=>e.jsxs("div",{...l,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{onClick:t,className:"w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm",children:"Choose Image"}),e.jsx("p",{className:"text-neutral-content",children:"or Drop here"})]}),e.jsx("div",{className:`${(s==null?void 0:s.length)>0&&"mt-4"} `,children:s==null?void 0:s.map((r,m)=>e.jsxs("div",{className:"image-item relative w-40",children:[e.jsx("img",{src:r.data_url,alt:"",className:"w-28"}),e.jsx("div",{onClick:()=>n(m),className:"w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer",children:e.jsx(N,{})})]},m))})]})})})]}),(a==null?void 0:a.icon)&&e.jsx("div",{className:"border-l",children:e.jsx("img",{src:`https://api.auroracollectionbd.com/feature/${a==null?void 0:a.icon}`,alt:"",className:"w-28 mx-auto"})})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{disabled:o&&"disabled",className:"primary_btn",children:o?"Loading...":"Edit Feature"})})]})]})}export{D as default};
