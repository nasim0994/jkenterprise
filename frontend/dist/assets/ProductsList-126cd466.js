import{I as o,J as f,j as e,S as g,L as x,K as w,A as P,v as c}from"./index-e345c454.js";function b(){const{data:n,isLoading:h,isError:a,isSuccess:d}=o(),l=n==null?void 0:n.data,[j]=f(),m=async s=>{if(window.confirm("Are you sure delete this product?"))try{const t=await j(s).unwrap();t!=null&&t.success&&c.fire({title:"",text:"Product Deleted Successfully",icon:"success"})}catch{c.fire({title:"",text:"Something went wrong",icon:"error"})}};let i=null;return h?i=e.jsx(g,{}):(a&&(i=e.jsx("p",{className:"text-red-500 mt-5",children:"Something went wrong to get data!"})),!a&&d&&(i=e.jsx("tbody",{children:l==null?void 0:l.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:r+1}),e.jsx("td",{children:e.jsx("img",{src:`https://api.auradhaka.com/product/${s==null?void 0:s.img}`,alt:s==null?void 0:s.img,className:"w-14 h-8 rounded"})}),e.jsx("td",{children:s==null?void 0:s.title}),e.jsx("td",{children:s==null?void 0:s.price}),e.jsx("td",{children:s==null?void 0:s.discountPrice}),e.jsx("td",{children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(x,{to:`/admin/product/edit/${s==null?void 0:s._id}`,children:e.jsx(w,{className:"text-lg hover:text-red-500"})}),e.jsx("button",{onClick:()=>m(s==null?void 0:s._id),children:e.jsx(P,{className:"text-lg hover:text-red-500"})})]})})]},s==null?void 0:s._id))})),e.jsxs("section",{children:[e.jsx("div",{className:"p-4 border-b bg-base-100 rounded",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"font-medium text-neutral",children:"Products"}),e.jsx(x,{to:"/admin/product/add",className:"primary_btn text-sm",children:"Add Product"})]})}),e.jsx("div",{className:"relative overflow-x-auto mt-2",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SL"}),e.jsx("th",{children:"Image"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Discount Price"}),e.jsx("th",{children:"Action"})]})}),i]})})]}))}export{b as default};
