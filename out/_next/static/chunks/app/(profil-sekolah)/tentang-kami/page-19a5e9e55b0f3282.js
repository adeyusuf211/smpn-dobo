(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7264],{3922:function(e,t,s){Promise.resolve().then(s.bind(s,4011))},8495:function(e,t,s){"use strict";s.d(t,{default:function(){return N}});var l=s(7437),i=s(1942),a=s(7692);function n(e){let{date:t,monthAndYear:s,title:i,description:a,isHoliday:n,key:r}=e;return(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsxs)("div",{className:"bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center",children:[(0,l.jsx)("h1",{className:"flex justify-center items-center font-bold text-2xl text-white",children:t}),(0,l.jsx)("p",{className:"text-[12px] text-white",children:s})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:i}),(0,l.jsx)("p",{className:"font-semibold lg:text-sm text-[12px] ".concat(n?"text-red-600":"text-blue-600"),dangerouslySetInnerHTML:{__html:a}})]})]})},r)}var r=s(7138),c={src:"/_next/static/media/icons-facebook.d0b0206c.svg",height:48,width:48,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/icons-youtube.301a7f20.svg",height:48,width:48,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/icons-tiktok.236398de.svg",height:48,width:48,blurWidth:0,blurHeight:0},x={src:"/_next/static/media/icons-instagram.21058950.svg",height:48,width:48,blurWidth:0,blurHeight:0},h=s(6648),m=s(2265),f=s(7395),u=s(1929);let g="https://www.facebook.com/smpnegeri1dobo?mibextid=ZbWKwL",b="https://youtube.com/@smpnegeri1dobo?si=JO8Nnx-7ih-v4SP4",p="https://www.tiktok.com/@spensa_dobo?_t=8mMPh0kaQVT&_r=1",j="https://www.instagram.com/smpnegeri1dobo?igsh=bTVyaWVvbnA3MHpt";function N(){let[e,t]=(0,m.useState)([]),[s,N]=(0,m.useState)(!1),[v,w]=(0,m.useState)([]),[A,y]=(0,m.useState)(!1),k=async()=>{try{N(!0);let e=await fetch("/api/informasi-sekolah"),s=await e.json();e&&t(s.response.data),N(!1)}catch(e){console.log("Error fetching data:",e),N(!1)}},_=async()=>{try{y(!0);let e=await fetch("https://admin.smpnegeri1dobo.sch.id/api/get-posts?search=test&limit=2"),t=await (null==e?void 0:e.json());t&&w(t.data),y(!1)}catch(e){console.log("Error fetching data:",e),y(!1)}};return(0,m.useEffect)(()=>{k(),_()},[]),(0,l.jsxs)("div",{className:"mt-20 bg-white flex flex-col lg:gap-10 gap-5 lg:p-10 p-3",children:[(0,l.jsxs)("div",{className:"flex lg:flex-row flex-col gap-5",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("iframe",{title:"peta smp negeri 1 dobo",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.656485086666!2d134.22685327477757!3d-5.762476356900616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2d9092d7c5e2ed%3A0xc50a6a748f9dee0d!2sSMPN%201%20DOBO%20PP%20Aru!5e0!3m2!1sid!2sid!4v1715844689532!5m2!1sid!2sid",className:"lg:w-[600px] w-full",loading:"lazy"})}),s?(0,l.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,l.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,l.jsxs)("div",{className:"flex flex-col gap-8 w-full",children:[(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700",children:"Informasi Sekolah"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h3",{className:"font-semibold lg:text-lg text-sm text-gray-600",children:null==e?void 0:e.name}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(i.LL$,{className:"text-xl"})}),(0,l.jsxs)("h3",{className:"font-semibold lg:text-base text-sm",children:["NSPN: ",(0,l.jsx)("span",{children:null==e?void 0:e.nspn})]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(i.Nh4,{className:"text-xl"})}),(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:null==e?void 0:e.address})]}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(a.XqJ,{className:"text-xl"})}),(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm text-blue-600",children:null==e?void 0:e.phone})]})]})]},null==e?void 0:e.npsn),(0,l.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700 mb-5",children:"Agenda Sekolah"}),A?(0,l.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,l.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,l.jsx)(l.Fragment,{children:null==v?void 0:v.map(e=>(0,l.jsx)(n,{date:(0,u.fk)(null==e?void 0:e.published_at),monthAndYear:(0,u.mQ)(null==e?void 0:e.published_at),title:null==e?void 0:e.name,description:(0,f.W)(null==e?void 0:e.content,30)},null==e?void 0:e.id))})]})]}),(0,l.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between items-center lg:text-lg text-sm",children:[(0,l.jsxs)("h3",{children:["SMP Negeri 1 DOBO - Interchange 2.1 | ",new Date().getFullYear()]}),(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)(r.default,{href:g,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(h.default,{src:c,width:40,height:40,alt:"icons-facebook"})})}),(0,l.jsx)(r.default,{href:b,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(h.default,{src:o,width:40,height:40,alt:"icons-facebook"})})}),(0,l.jsx)(r.default,{href:p,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(h.default,{src:d,width:40,height:40,alt:"icons-tiktok"})})}),(0,l.jsx)(r.default,{href:j,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(h.default,{src:x,width:40,height:40,alt:"icons-instagram"})})})]})]})]})}},4011:function(e,t,s){"use strict";s.d(t,{default:function(){return o}});var l=s(7437),i=s(6648),a=s(8851),n=s(8538),r=s(8495),c=s(9880);function o(){return(0,a.s)(),(0,l.jsxs)("div",{className:"flex flex-col gap-10 w-full min-h-screen h-full","data-aos":"fade-up",children:[(0,l.jsx)("h1",{className:"text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase",children:"Tentang Kami"}),(0,l.jsxs)("div",{className:"my-10 flex md:flex-row flex-col md:gap-10 gap-0",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full",children:[(0,l.jsx)("div",{className:"bg-white w-full rounded-2xl h-[350px] flex",children:(0,l.jsx)(i.default,{src:c.default,alt:"banner sambutan kepala sekolah",style:{objectFit:"cover",objectPosition:"center"},className:"w-full h-full"})}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("h3",{className:"font-bold text-xl text-white",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsa."}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis officiis minima. Corporis facilis, possimus, tempore ab molestiae doloremque optio sint autem ex laudantium voluptates, inventore veritatis voluptate eligendi in reiciendis et temporibus. Esse, quasi. Praesentium nisi animi ipsa quis blanditiis, non debitis. Eaque nostrum, officia error nihil assumenda sint?"}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem mollitia perspiciatis, dolores reprehenderit excepturi cumque possimus? Expedita, laudantium aut quis accusamus magnam nobis veritatis!"})]})]}),(0,l.jsxs)("div",{className:"h-full w-full max-w-[35%] bg-white p-10 rounded-xl",children:[(0,l.jsx)("div",{className:"flex justify-center items-center py-5",children:(0,l.jsx)(i.default,{src:n.Z,alt:"logo sekolah",width:200,height:200})}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,l.jsx)("h3",{className:"font-bold text-xl text-gray-700",children:"Publish"}),(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700",children:"02 Juni 2024"})]}),(0,l.jsx)("h3",{className:"font-bold text-xl text-gray-700",children:"Dibaca 2000 Kali"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col mt-7",children:[(0,l.jsx)("h3",{className:"text-3xl font-bold text-gray-700 mb-5",children:"Tulisan Lainnya"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(i.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]}),(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(i.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]}),(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(i.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]})]})]})]})]}),(0,l.jsx)(r.default,{})]})}},8851:function(e,t,s){"use strict";s.d(t,{s:function(){return n}});var l=s(2265),i=s(7323),a=s.n(i);function n(){(0,l.useEffect)(()=>{a().init()},[])}s(3023)},1929:function(e,t,s){"use strict";function l(e){if(""===e||void 0===e)return;let t=new Date(e);return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(t)}function i(e){if(""===e||void 0===e)return;let t=new Date(e);return new Intl.DateTimeFormat("id-ID",{month:"long",year:"numeric"}).format(t)}function a(e){if(""!==e&&void 0!==e)return new Date(e).getDate()}s.d(t,{Uo:function(){return l},fk:function(){return a},mQ:function(){return i}})},7395:function(e,t,s){"use strict";function l(e,t){if(void 0!==e)return e.length<=t?e:(null==e?void 0:e.slice(0,t-3))+"..."}s.d(t,{W:function(){return l}})},9880:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/aula-1.fed6215d.webp",height:720,width:1280,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoIAAUAAkA4JQAAXO2WvqgA/tzt/PYTY9+CRhk92WVQwGiGQ62J/kz/wgjgt6oLhwHnauAA",blurWidth:8,blurHeight:5}},8538:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo1.2c186a4b.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXE+Tq9hY40AH+A6TKMvQaE0Rqg3YMGeoqI3bOq/tb9eZ45GZq0ZPsI1aNN1e691fLGHm9tTbMGNoN1MZ8AUKq0dT9aFfHGdkYOlmIW8X5gxAAAAFXRSTlMA+eYQh8GQYA3+/v0tO6f+/fv6+/qMmFQtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nBXGRxKAMAwAsU11OtUJ/P+jDDoJmowhDWTmnPMUZJ7HdU+h16eUt3acXdu+rIOoxmgEUlANiX/eJ/gAZs8ChTmuML4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[6704,3665,7699,4030,4724,2971,7023,1744],function(){return e(e.s=3922)}),_N_E=e.O()}]);