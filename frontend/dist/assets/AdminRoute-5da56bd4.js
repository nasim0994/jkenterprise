import{u,l as c,j as e,m,S as f}from"./index-1c2cfebc.js";function p({children:s}){var n,o;const{loggedUser:t}=u(r=>r.user),i=c(),a=localStorage.getItem("token");return!a&&((n=t==null?void 0:t.data)==null?void 0:n.role)!=="admin"?e.jsx(m,{to:"/admin/login",state:{from:i},replace:!0}):a&&(t!=null&&t.success)&&((o=t==null?void 0:t.data)==null?void 0:o.role)=="admin"?s:e.jsx(f,{})}export{p as default};
