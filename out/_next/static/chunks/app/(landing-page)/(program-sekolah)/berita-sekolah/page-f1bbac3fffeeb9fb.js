(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3739],{3759:function(e,l,t){Promise.resolve().then(t.bind(t,5977))},4569:function(e,l,t){"use strict";t.d(l,{Z:function(){return r}});var s=t(7437),i=t(495),n=t(6648),a=t(7088);function r(e){let{key:l,badge:t,imageSource:r,title:c,description:o,buttons:d}=e;return(0,s.jsxs)("div",{className:"flex h-[500px] flex-col gap-10 bg-white p-3",children:[(0,s.jsx)("div",{className:"flex justify-center items-center w-full min-h-[200px] h-full overflow-hidden",children:(0,s.jsx)(n.default,{src:a.default,alt:"model",loading:"lazy",className:"w-full object-cover flex",width:300,height:300})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[t?(0,s.jsxs)("small",{className:"w-full",children:[(0,s.jsx)("span",{className:"font-semibold",children:"Terbit : "})," ",t]}):null,c?(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("h3",{className:"font-semibold text-2xl text-gray-700 uppercase",children:c})}):null,o?(0,s.jsx)("div",{className:"flex justify-start",children:(0,s.jsx)("h1",{className:"font-semibold text-base text-gray-700",dangerouslySetInnerHTML:{__html:o}})}):null,(0,s.jsx)("div",{className:"".concat(d?"flex gap-2 w-full mt-5 mb-2":""),children:null==d?void 0:d.map(e=>(0,s.jsx)(i.z,{size:"lg",variant:"destructive",className:"w-full",children:e},e))})]})]},l)}},5977:function(e,l,t){"use strict";t.d(l,{default:function(){return o}});var s=t(7437),i=t(2265),n=t(4569),a=t(8495),r=t(1929),c=t(7395);function o(){let[e,l]=(0,i.useState)([]),[t,o]=(0,i.useState)(!1),d=async()=>{try{o(!0);let e=await fetch("https://admin.smpnegeri1dobo.sch.id/api/get-posts?search=test&limit=10&page=1"),t=await (null==e?void 0:e.json()),s=null==t?void 0:t.data.filter(e=>"Berita Sekolah"===e.category);t&&l(s),o(!1)}catch(e){console.log("Error fetching data:",e),o(!1)}};return(0,i.useEffect)(()=>{d()},[]),(0,s.jsxs)("div",{className:"w-full h-full min-h-screen",children:[(0,s.jsx)("h1",{className:"2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48",children:"Berita Sekolah"}),(0,s.jsx)("div",{className:"flex lg:flex-row flex-col gap-5",children:t?(0,s.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,s.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(null==e?void 0:e.length)===0||void 0===e?(0,s.jsx)("h3",{className:"text-center font-bold text-white text-4xl",children:"Tidak Ada Data / Berita Kosong"}):(0,s.jsx)("div",{className:"my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center",children:null==e?void 0:e.map(e=>(0,s.jsx)(n.Z,{imageSource:null==e?void 0:e.meta_og_image,badge:"".concat((0,r.Uo)(null==e?void 0:e.published_at)," | By : ").concat(null==e?void 0:e.created_by_alias),title:(0,c.W)(null==e?void 0:e.name,35),description:(0,c.W)(null==e?void 0:e.content,50)},null==e?void 0:e.id))})}),(0,s.jsx)(a.default,{})]})}},7088:function(e,l,t){"use strict";t.r(l),l.default={src:"/_next/static/media/example-6.ee3f6d5f.svg",height:512,width:669,blurWidth:0,blurHeight:0}},2218:function(e,l,t){"use strict";t.d(l,{j:function(){return n}});let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,l,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(l=function e(l){var t,s,i="";if("string"==typeof l||"number"==typeof l)i+=l;else if("object"==typeof l){if(Array.isArray(l))for(t=0;t<l.length;t++)l[t]&&(s=e(l[t]))&&(i&&(i+=" "),i+=s);else for(t in l)l[t]&&(i&&(i+=" "),i+=t)}return i}(e))&&(s&&(s+=" "),s+=l);return s},n=(e,l)=>t=>{var n;if((null==l?void 0:l.variants)==null)return i(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:a,defaultVariants:r}=l,c=Object.keys(a).map(e=>{let l=null==t?void 0:t[e],i=null==r?void 0:r[e];if(null===l)return null;let n=s(l)||s(i);return a[e][n]}),o=t&&Object.entries(t).reduce((e,l)=>{let[t,s]=l;return void 0===s||(e[t]=s),e},{});return i(e,c,null==l?void 0:null===(n=l.compoundVariants)||void 0===n?void 0:n.reduce((e,l)=>{let{class:t,className:s,...i}=l;return Object.entries(i).every(e=>{let[l,t]=e;return Array.isArray(t)?t.includes({...r,...o}[l]):({...r,...o})[l]===t})?[...e,t,s]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[3665,7699,4030,1003,3345,2971,7023,1744],function(){return e(e.s=3759)}),_N_E=e.O()}]);