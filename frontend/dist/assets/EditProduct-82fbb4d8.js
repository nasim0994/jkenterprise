import{r as c,k as P,D as y,R as w,T as D,j as e,Q as E,v as f}from"./index-1c2cfebc.js";import{J as _}from"./jodit-react-11d6d643.js";import{_ as C}from"./index-64f19c2f.js";function V(){const g=c.useRef(null),v=P(),[t,u]=c.useState([]),[m,p]=c.useState(""),{id:x}=y(),{data:n}=w({id:x}),s=n==null?void 0:n.data;c.useEffect(()=>{s&&p(s.description)},[s]);const[b,{isLoading:h}]=D(),N=async a=>{var j;a.preventDefault();const d=a.target.title.value,l=a.target.price.value,o=a.target.discountPrice.value,i=new FormData;i.append("title",d),i.append("price",l),i.append("discountPrice",o),i.append("description",m),(t==null?void 0:t.length)>0&&i.append("img",t[0].file);const r=await b({id:x,formData:i});(j=r==null?void 0:r.data)!=null&&j.success?(f.fire("","Product add success","success"),a.target.reset(),u([]),v("/admin/product/all")):(f.fire("","something went wrong!","error"),console.log(r))};return e.jsxs("section",{className:"bg-base-100 shadow rounded",children:[e.jsx("div",{className:"p-4 border-b text-neutral font-medium flex justify-between items-center",children:e.jsx("h3",{children:"Edit Product"})}),e.jsxs("form",{className:"p-4",onSubmit:N,children:[e.jsxs("div",{className:"text-neutral-content flex flex-col gap-4",children:[e.jsxs("div",{className:"grid sm:grid-cols-2 gap-3 border rounded border-dashed p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Image"}),e.jsx("div",{children:e.jsx(C,{defaultValue:t,onChange:a=>u(a),dataURLKey:"data_url",children:({onImageUpload:a,onImageRemove:d,dragProps:l})=>e.jsxs("div",{...l,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{onClick:a,className:"w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm",children:"Choose Image"}),e.jsx("p",{className:"text-neutral-content",children:"or Drop here"})]}),e.jsx("div",{className:`${(t==null?void 0:t.length)>0&&"mt-4"} `,children:t==null?void 0:t.map((o,i)=>e.jsxs("div",{className:"image-item relative",children:[e.jsx("img",{src:o.data_url,alt:"",className:"w-24"}),e.jsx("div",{onClick:()=>d(i),className:"w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer",children:e.jsx(E,{})})]},i))})]})})})]}),(s==null?void 0:s.img)&&e.jsx("div",{className:"border-l",children:e.jsx("img",{src:`https://api.venturecommunicationsbd.com/product/${s==null?void 0:s.img}`,alt:"product",className:"w-28 mx-auto"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Title"}),e.jsx("input",{type:"text",name:"title",required:!0,defaultValue:s==null?void 0:s.title})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Price"}),e.jsx("input",{type:"number",name:"price",required:!0,defaultValue:s==null?void 0:s.price})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Discount Price"}),e.jsx("input",{type:"number",name:"discountPrice",required:!0,defaultValue:s==null?void 0:s.discountPrice})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Description"}),e.jsx(_,{ref:g,value:m,onBlur:a=>p(a)})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{disabled:h&&"disabled",className:"primary_btn",children:h?"Loading...":"Edit Product"})})]})]})}export{V as default};
