(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{3394:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products",function(){return s(5112)}])},9762:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5893),r=s(7294),i=s(1163),a=s(7437);function l(e){var t=e.setOpen,s=e.setAlert,l=e.product,o=(0,r.useRef)(null),c=(0,i.useRouter)();return(0,n.jsx)("form",{ref:o,onSubmit:function(e){e.preventDefault();var n=new FormData(o.current),r={title:n.get("title"),price:parseInt(n.get("price")),description:n.get("description"),categoryId:parseInt(n.get("category")),images:[n.get("images").name]};l?(0,a.nM)(l.id,r).then((function(e){c.push("/dashboard/products/")})):(0,a.gK)(r).then((function(){s({active:!0,message:"Product added succesfully",type:"succes",autoClose:!1}),t(!1)})).catch((function(e){s({active:!0,message:e.message,type:"error",autoClose:!1})}))},children:(0,n.jsxs)("div",{className:"overflow-hidden",children:[(0,n.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:(0,n.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,n.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,n.jsx)("input",{defaultValue:null===l||void 0===l?void 0:l.title,type:"text",name:"title",id:"title",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,n.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,n.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Price"}),(0,n.jsx)("input",{defaultValue:null===l||void 0===l?void 0:l.price,type:"number",name:"price",id:"price",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,n.jsxs)("div",{className:"col-span-6",children:[(0,n.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,n.jsxs)("select",{id:"category",name:"category",defaultValue:null===l||void 0===l?void 0:l.category,autoComplete:"category-name",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[(0,n.jsx)("option",{value:"1",children:"Clothes"}),(0,n.jsx)("option",{value:"2",children:"Electronics"}),(0,n.jsx)("option",{value:"3",children:"Furniture"}),(0,n.jsx)("option",{value:"4",children:"Toys"}),(0,n.jsx)("option",{value:"5",children:"Others"})]})]}),(0,n.jsxs)("div",{className:"col-span-6",children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,n.jsx)("textarea",{defaultValue:null===l||void 0===l?void 0:l.description,name:"description",id:"description",autoComplete:"description",rows:"3",className:"form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,n.jsx)("div",{className:"col-span-6",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Cover photo"}),(0,n.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,n.jsxs)("div",{className:"space-y-1 text-center",children:[(0,n.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,n.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,n.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,n.jsxs)("label",{htmlFor:"images",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,n.jsx)("span",{children:"Upload a file"}),(0,n.jsx)("input",{defaultValue:null===l||void 0===l?void 0:l.images,id:"images",name:"images",type:"file",className:"sr-only"})]}),(0,n.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,n.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})]})}),(0,n.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,n.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})}},5112:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var n=s(7568),r=s(414),i=s(5893),a=s(7294),l=s(3153),o=s(1664),c=s.n(o),d=s(9196),m=s(8346);function u(e){var t=e.open,s=e.setOpen,n=e.children,r=(0,a.useRef)(null);return(0,i.jsx)(d.u.Root,{show:t,as:a.Fragment,children:(0,i.jsx)(m.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:r,onClose:s,children:(0,i.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,i.jsx)(d.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)(m.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,i.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,i.jsx)(d.u.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,i.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,i.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:(0,i.jsx)(l.oOx,{className:"flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer","aria-hidden":"true",onClick:function(){return s(!1)},ref:r})}),(0,i.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,i.jsx)("div",{className:"sm:flex sm:items-start",children:n})})]})})]})})})}var x=s(9762),p=s(8945),h=s(788),f=s(1799),g=function(e){var t=(0,a.useState)((0,f.Z)({},{active:!1,message:"",type:"",autoClose:!0},e)),s=t[0],n=t[1];return{alert:s,setAlert:n,toggleAlert:function(){n(s.active)}}},v=function(e){var t=e.alert,s=e.handleClose;return t&&t.autoClose&&setTimeout((function(){s()}),9e3),(0,i.jsx)(i.Fragment,{children:(null===t||void 0===t?void 0:t.active)&&(0,i.jsx)("div",{"x-data":!0,className:"bg-indigo-100 p-5 w-full rounded mb-8",children:(0,i.jsxs)("div",{className:"flex space-x-3",children:[(0,i.jsx)("div",{className:"flex-1 leading-tight text-sm text-black font-medium",children:t.message}),(0,i.jsx)("button",{type:"button",children:(0,i.jsx)(l.oOx,{className:"w-6 h-6 text-gray-600",onClick:s})})]})})})},y=s(7437);function j(){var e=(0,a.useState)(!1),t=e[0],s=e[1],o=(0,a.useState)([]),d=o[0],m=o[1],f=g(),j=f.alert,b=f.setAlert,N=f.toggleAlert;(0,a.useEffect)((function(){function e(){return(e=(0,n.Z)((function(){var e;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return[4,p.Z.get(h.Z.products.allProducts)];case 1:return e=t.sent(),m(e.data),[2]}}))}))).apply(this,arguments)}try{!function(){e.apply(this,arguments)}()}catch(t){console.log(t)}}),[j]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{alert:j,handleClose:N}),(0,i.jsxs)("div",{className:"lg:flex lg:items-center lg:justify-between mb-8",children:[(0,i.jsx)("div",{className:"flex-1 min-w-0",children:(0,i.jsx)("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",children:"List of Products"})}),(0,i.jsx)("div",{className:"mt-5 flex lg:mt-0 lg:ml-4",children:(0,i.jsx)("span",{className:"sm:ml-3",children:(0,i.jsxs)("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return s(!0)},children:[(0,i.jsx)(l.nQG,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),"Add Product"]})})})]}),(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,i.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,i.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,i.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,i.jsx)("thead",{className:"bg-gray-50",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Price"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Id"}),(0,i.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,i.jsx)("span",{className:"sr-only",children:"Edit"})}),(0,i.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,i.jsx)("span",{className:"sr-only",children:"Delete"})})]})}),(0,i.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===d||void 0===d?void 0:d.map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:(0,i.jsx)("img",{className:"h-10 w-10 rounded-full",src:e.images[0],alt:""})}),(0,i.jsx)("div",{className:"ml-4",children:(0,i.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.title})})]})}),(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,i.jsx)("div",{className:"text-sm text-gray-900",children:e.category.name})}),(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,i.jsxs)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:["$",e.price]})}),(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.id}),(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,i.jsx)(c(),{href:"/dashboard/edit/".concat(e.id),className:"text-indigo-600 hover:text-indigo-900",children:"Edit"})}),(0,i.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,i.jsx)(l.oOx,{className:"flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer","aria-hidden":"true",onClick:function(){return t=e.id,void(0,y.Ir)(t).then((function(){b({active:!0,message:"Delete product succesfully",TypeError:"error",autoClose:!0})}));var t}})})]},"Product-item-".concat(e.id))}))})]})})})})}),(0,i.jsx)(u,{open:t,setOpen:s,children:(0,i.jsx)(x.Z,{setOpen:s,setAlert:b})})]})}},7437:function(e,t,s){"use strict";s.d(t,{Ir:function(){return o},gK:function(){return l},nM:function(){return c}});var n=s(7568),r=s(414),i=s(8945),a=s(788),l=function(){var e=(0,n.Z)((function(e){var t;return(0,r.__generator)(this,(function(s){switch(s.label){case 0:return t={headers:{accept:"*/*","Content-Type":"application/json"}},[4,i.Z.post(a.Z.products.addProducts,e,t)];case 1:return[2,s.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)((function(e){return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return[4,i.Z.delete(a.Z.products.deleteProduct(e))];case 1:return[2,t.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((function(e,t){var s;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return s={headers:{accept:"*/*","Content-Type":"application/json"}},[4,i.Z.put(a.Z.products.updateProduct(e),t,s)];case 1:return[2,n.sent().data]}}))}));return function(t,s){return e.apply(this,arguments)}}()}},function(e){e.O(0,[153,486,774,888,179],(function(){return t=3394,e(e.s=t);var t}));var t=e.O();_N_E=t}]);