import{G as O,r as o,j as t,y as S,z as L,n as $,B as k,l as A,C as _,S as D,L as w,v as p,A as M}from"./index-36b948db.js";function B(x){return O({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"}}]})(x)}function G({pages:x,currentPage:l,setCurrentPage:j}){const i=[];for(let e=1;e<=x;e++)i.push(e);const[n,f]=o.useState([]);return o.useEffect(()=>{let e=[...n];const a="...";if(i.length<6)e=i;else if(l>=1&&l<=3)e=[1,2,3,4,a,i.length];else if(l===4)e=[...i.slice(0,5),a,i.length];else if(l>4&&l<i.length-2){const m=i.slice(l-2,l),h=i.slice(l,l+1);e=[1,a,...m,...h,a,i.length]}else if(l>i.length-3){const m=i.slice(i.length-4);e=[1,a,...m]}f(e),j(l)},[l,x]),t.jsxs("div",{className:"pagination-container sm:flex",children:[t.jsx("button",{className:`prevBtn ${l===1?"disabled":""}`,onClick:()=>j(e=>e<=1?e:e-1),children:t.jsx(S,{className:"text-sm"})}),n==null?void 0:n.map((e,a)=>t.jsx("button",{className:`${l===e&&l!=="..."?"active":""}`,onClick:()=>j(e),children:e},a)),t.jsx("button",{className:`nextBtn ${l===i.length?"disabled":""}`,onClick:()=>j(e=>e>=i.length?e:e+1),children:t.jsx(L,{})})]})}function I(){var g,v;const[x,l]=o.useState(1),j=5;let i={};i.limit=j,i.page=x;const{data:n,isLoading:f}=$({...i}),[e,{isLoading:a}]=k(),{pathname:m}=A(),h=n==null?void 0:n.data,[C,{isLoading:y}]=_();return f?t.jsx(D,{}):t.jsxs("div",{className:"mt-4 bg-base-100 p-4 rounded shadow",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{children:"Latest Orders"}),m!=="/admin/orders"&&t.jsx(w,{to:"/admin/orders",className:"primary_btn text-sm",children:"All Orders"})]}),t.jsx("div",{className:"mt-4 relative overflow-x-auto",children:t.jsxs("table",{className:"dashboard_table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"#"}),t.jsx("th",{children:"User"}),t.jsx("th",{children:"Products"}),t.jsx("th",{children:"Total"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Action"})]})}),t.jsx("tbody",{children:(h==null?void 0:h.length)>0&&(h==null?void 0:h.map(s=>{var N;return t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsxs("p",{children:["INV-",s==null?void 0:s.invoiceNumber]}),t.jsx("p",{children:s==null?void 0:s.createdAt.split("T")[0]})]}),t.jsxs("td",{children:[t.jsxs("p",{children:["Name: ",s==null?void 0:s.name]}),t.jsxs("div",{className:"text-sm text-neutral-content",children:[t.jsxs("p",{children:["Phone: ",s==null?void 0:s.phone]}),t.jsxs("p",{children:["city: ",s==null?void 0:s.city]})]})]}),t.jsx("td",{children:t.jsx("div",{className:"flex -space-x-4 rtl:space-x-reverse",children:(N=s==null?void 0:s.products)==null?void 0:N.map(c=>{var d;return t.jsx("img",{className:"w-10 h-10 border border-white rounded-full dark:border-gray-800",src:`https://api.auroracollectionbd.com/product/${(d=c==null?void 0:c.product)==null?void 0:d.img}`,alt:"product"},c==null?void 0:c._id)})})}),t.jsx("td",{children:s==null?void 0:s.total}),t.jsx("td",{children:y?"Loading...":t.jsxs("select",{value:s==null?void 0:s.status,onChange:async c=>{var u;const d=await C({id:s==null?void 0:s._id,status:c.target.value});(u=d==null?void 0:d.data)!=null&&u.success?p.fire("","Status updated","success"):p.fire("","Something went wrong","error")},className:`border rounded p-1 text-xs cursor-pointer ${(s==null?void 0:s.status)=="pending"&&"text-yellow-500 border-yellow-500"} ${(s==null?void 0:s.status)=="shipped"&&"text-blue-400 border-blue-400"} ${(s==null?void 0:s.status)=="delivered"&&"text-green-400 border-green-400"} ${(s==null?void 0:s.status)=="cancelled"&&"text-red-400 border-red-400"}`,children:[t.jsx("option",{value:"pending",children:"Pending"}),t.jsx("option",{value:"shipped",children:"Shipped"}),t.jsx("option",{value:"delivered",children:"Delivered"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"flex gap-3",children:[t.jsx(w,{to:`/admin/order/${s==null?void 0:s._id}`,className:" hover:text-blue-700",children:t.jsx(B,{})}),t.jsx("button",{disabled:a&&"disabled",className:"hover:text-red-700",onClick:async c=>{var u;if(c.preventDefault(),window.confirm("Are You Sure Delete this Order")){const b=await e(s==null?void 0:s._id);(u=b==null?void 0:b.data)!=null&&u.success?p.fire("","Delete success","success"):p.fire("","Something went wrong","error")}},children:a?"...":t.jsx(M,{})})]})})]},s==null?void 0:s._id)}))})]})}),((g=n==null?void 0:n.meta)==null?void 0:g.pages)>1&&t.jsx(G,{pages:(v=n==null?void 0:n.meta)==null?void 0:v.pages,currentPage:x,setCurrentPage:l})]})}export{I as O};
