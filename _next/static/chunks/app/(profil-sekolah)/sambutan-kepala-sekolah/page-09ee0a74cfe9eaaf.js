(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3907],{1220:function(e,a,t){Promise.resolve().then(t.bind(t,7204))},8495:function(e,a,t){"use strict";t.d(a,{default:function(){return k}});var l=t(7437),s=t(1942),i=t(7692);function n(e){let{date:a,monthAndYear:t,title:s,description:i,isHoliday:n,key:r}=e;return(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsxs)("div",{className:"bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center",children:[(0,l.jsx)("h1",{className:"flex justify-center items-center font-bold text-2xl text-white",children:a}),(0,l.jsx)("p",{className:"text-[12px] text-white",children:t})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:s}),(0,l.jsx)("p",{className:"font-semibold lg:text-sm text-[12px] ".concat(n?"text-red-600":"text-blue-600"),dangerouslySetInnerHTML:{__html:i}})]})]})},r)}var r=t(7138),c={src:"/_next/static/media/icons-facebook.d0b0206c.svg",height:48,width:48,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/icons-youtube.301a7f20.svg",height:48,width:48,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/icons-tiktok.236398de.svg",height:48,width:48,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/icons-instagram.21058950.svg",height:48,width:48,blurWidth:0,blurHeight:0},u=t(6648),h=t(2265),x=t(7395),f=t(1929);let g="https://www.facebook.com/smpnegeri1dobo?mibextid=ZbWKwL",b="https://youtube.com/@smpnegeri1dobo?si=JO8Nnx-7ih-v4SP4",p="https://www.tiktok.com/@spensa_dobo?_t=8mMPh0kaQVT&_r=1",j="https://www.instagram.com/smpnegeri1dobo?igsh=bTVyaWVvbnA3MHpt";function k(){let[e,a]=(0,h.useState)([]),[t,k]=(0,h.useState)(!1),[w,v]=(0,h.useState)([]),[N,y]=(0,h.useState)(!1),A=async()=>{try{k(!0);let e=await fetch("/api/informasi-sekolah"),t=await e.json();e&&a(t.response.data),k(!1)}catch(e){console.log("Error fetching data:",e),k(!1)}},S=async()=>{try{y(!0);let e=await fetch("https://admin.smpnegeri1dobo.sch.id/api/get-posts?search=test&limit=2"),a=await (null==e?void 0:e.json());a&&v(a.data),y(!1)}catch(e){console.log("Error fetching data:",e),y(!1)}};return(0,h.useEffect)(()=>{A(),S()},[]),(0,l.jsxs)("div",{className:"mt-20 bg-white flex flex-col lg:gap-10 gap-5 lg:p-10 p-3",children:[(0,l.jsxs)("div",{className:"flex lg:flex-row flex-col gap-5",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("iframe",{title:"peta smp negeri 1 dobo",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.656485086666!2d134.22685327477757!3d-5.762476356900616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2d9092d7c5e2ed%3A0xc50a6a748f9dee0d!2sSMPN%201%20DOBO%20PP%20Aru!5e0!3m2!1sid!2sid!4v1715844689532!5m2!1sid!2sid",className:"lg:w-[600px] w-full",loading:"lazy"})}),t?(0,l.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,l.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,l.jsxs)("div",{className:"flex flex-col gap-8 w-full",children:[(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700",children:"Informasi Sekolah"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h3",{className:"font-semibold lg:text-lg text-sm text-gray-600",children:null==e?void 0:e.name}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(s.LL$,{className:"text-xl"})}),(0,l.jsxs)("h3",{className:"font-semibold lg:text-base text-sm",children:["NSPN: ",(0,l.jsx)("span",{children:null==e?void 0:e.nspn})]})]}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(s.Nh4,{className:"text-xl"})}),(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:null==e?void 0:e.address})]}),(0,l.jsxs)("div",{className:"flex items-start gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(i.XqJ,{className:"text-xl"})}),(0,l.jsx)("h3",{className:"font-semibold lg:text-base text-sm text-blue-600",children:null==e?void 0:e.phone})]})]})]},null==e?void 0:e.npsn),(0,l.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700 mb-5",children:"Agenda Sekolah"}),N?(0,l.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,l.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,l.jsx)(l.Fragment,{children:null==w?void 0:w.map(e=>(0,l.jsx)(n,{date:(0,f.fk)(null==e?void 0:e.published_at),monthAndYear:(0,f.mQ)(null==e?void 0:e.published_at),title:null==e?void 0:e.name,description:(0,x.W)(null==e?void 0:e.content,30)},null==e?void 0:e.id))})]})]}),(0,l.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between items-center lg:text-lg text-sm",children:[(0,l.jsxs)("h3",{children:["SMP Negeri 1 DOBO - Interchange 2.1 | ",new Date().getFullYear()]}),(0,l.jsxs)("div",{className:"flex items-center justify-center",children:[(0,l.jsx)(r.default,{href:g,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(u.default,{src:c,width:40,height:40,alt:"icons-facebook"})})}),(0,l.jsx)(r.default,{href:b,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(u.default,{src:o,width:40,height:40,alt:"icons-facebook"})})}),(0,l.jsx)(r.default,{href:p,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(u.default,{src:d,width:40,height:40,alt:"icons-tiktok"})})}),(0,l.jsx)(r.default,{href:j,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,l.jsx)(u.default,{src:m,width:40,height:40,alt:"icons-instagram"})})})]})]})]})}},7204:function(e,a,t){"use strict";t.d(a,{default:function(){return c}});var l=t(7437),s=t(6648),i=t(8495),n=t(8538),r=t(118);function c(){return(0,l.jsxs)("div",{className:"flex flex-col gap-10 w-full min-h-screen h-full","data-aos":"fade-up",children:[(0,l.jsx)("h1",{className:"text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase",children:"Sambutan Kepala Sekolah"}),(0,l.jsxs)("div",{className:"my-10 flex md:flex-row flex-col md:gap-10 gap-0",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 w-full",children:[(0,l.jsx)("div",{className:"bg-white w-full rounded-2xl h-[350px] flex overflow-hidden",children:(0,l.jsx)(s.default,{src:r.Z,alt:"banner sambutan kepala sekolah",style:{objectFit:"cover",objectPosition:"center"},className:"w-full h-full"})}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("h3",{className:"font-bold text-xl text-white",children:"Assalamualaikum warahmatullahi wabarakatuh, Salam sejahtera untuk kita semua, shalom"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Pada kesempatan yang berbahagia ini, izinkan saya menyampaikan beberapa hal penting terkait dengan implementasi Sistem Informasi Manajemen (SIM) dan Kurikulum di SMP Negeri 1 Dobo"}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Sistem Informasi Manajemen (SIM) di SMP Negeri 1 Dobo merupakan suatu sistem yang dirancang untuk mengelola informasi secara efisien dan efektif. Dengan adanya SIM, kita dapat memperbaiki proses administrasi, meningkatkan transparansi, dan memudahkan akses informasi bagi semua pihak yang terlibat, baik itu guru, siswa, maupun orang tua. Implementasi SIM di sekolah kita bertujuan untuk:"}),(0,l.jsxs)("ol",{className:"flex flex-col gap-3",children:[(0,l.jsx)("li",{className:"text-white font-regular text-xl ml-5",children:"1. Mengembangkan Potensi Siswa Secara Maksimal: Memberikan ruang bagi siswa untuk mengeksplorasi minat dan bakat mereka serta mengembangkan keterampilan abad 21."}),(0,l.jsx)("li",{className:"text-white font-regular text-xl ml-5",children:"2. Fleksibilitas dalam Pembelajaran: Guru diberikan kebebasan untuk menyesuaikan metode dan materi pembelajaran sesuai dengan kebutuhan dan karakteristik siswa."}),(0,l.jsx)("li",{className:"text-white font-regular text-xl ml-5",children:"3. Pembelajaran yang Relevan dan Kontekstual: Mengintegrasikan pembelajaran dengan konteks kehidupan nyata, sehingga siswa dapat lebih mudah memahami dan mengaplikasikan pengetahuan yang mereka peroleh."})]}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Dengan implementasi Kurikulum Merdeka, kita berharap dapat menciptakan lingkungan belajar yang lebih dinamis, kreatif, dan inovatif. Hal ini juga diharapkan dapat menumbuhkan semangat belajar yang tinggi di kalangan siswa serta mempersiapkan mereka untuk menghadapi tantangan masa depan dengan lebih baik."}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Akhir kata, saya mengajak seluruh warga sekolah untuk bersama-sama mendukung dan berpartisipasi aktif dalam penerapan Sistem Informasi Manajemen dan Kurikulum Merdeka ini. Semoga upaya kita ini dapat membawa kemajuan dan keberhasilan bagi sekolah kita tercinta SMP Negeri 1 Dobo."}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Melalui Sistem Informasi Manajemen (SIM), SMP Negeri 1 Dobo semoga kami, sebagai pendidik dan tenaga pendidik dapat terus berkomitmen dan di mapukan untuk menjalankan Tugas yang mulia ini, dan salah satu usaha SMP Negeri 1 Dobo menyesuaikan diri dengan perkembangan ilmu dan teknologi guna memberikan layanan dan fasilitas pembelajaran yang memadai yang dapat membuat peserta didik nyaman dalam menerima pelajaran."}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-regular text-xl",children:"Sekali lagi, saya ingin mengucapkan selamat datang bergabung di Sistem Informasi Manajemen (SIM) SMP Negeri 1 Dobo."}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("h3",{className:"text-white font-bold text-xl",children:"Wassalamualaikum warahmatullahi wabarakatuh. Salam sejahtera, shalom"})]})]}),(0,l.jsxs)("div",{className:"h-full w-full max-w-[35%] bg-white p-10 rounded-xl",children:[(0,l.jsx)("div",{className:"flex justify-center items-center py-5",children:(0,l.jsx)(s.default,{src:n.Z,alt:"logo sekolah",width:200,height:200})}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,l.jsx)("h3",{className:"font-bold text-xl text-gray-700",children:"Publish"}),(0,l.jsx)("h3",{className:"font-semibold text-xl text-gray-700",children:"02 Juni 2024"})]}),(0,l.jsx)("h3",{className:"font-bold text-xl text-gray-700",children:"Dibaca 2000 Kali"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col mt-7",children:[(0,l.jsx)("h3",{className:"text-3xl font-bold text-gray-700 mb-5",children:"Tulisan Lainnya"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(s.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]}),(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(s.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]}),(0,l.jsxs)("div",{className:"flex gap-3 cursor-pointer hover:bg-gray-200 p-3",children:[(0,l.jsx)("div",{className:" w-32 h-32",children:(0,l.jsx)(s.default,{src:n.Z,alt:"gambar",width:300,height:300})}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full ",children:[(0,l.jsx)("h4",{className:"text-gray-700 text-lg font-semibold",children:"Oleh: SMP Negeri 1 Dobo"}),(0,l.jsx)("h2",{className:"font-bold text-xl text-blue-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing."})]})]})]})]})]})]}),(0,l.jsx)(i.default,{})]})}},6648:function(e,a,t){"use strict";t.d(a,{default:function(){return s.a}});var l=t(5601),s=t.n(l)},7138:function(e,a,t){"use strict";t.d(a,{default:function(){return s.a}});var l=t(231),s=t.n(l)},5601:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{default:function(){return c},getImageProps:function(){return r}});let l=t(9920),s=t(497),i=t(8173),n=l._(t(1241));function r(e){let{props:a}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}}let c=i.Image},1929:function(e,a,t){"use strict";function l(e){if(""===e||void 0===e)return;let a=new Date(e);return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(a)}function s(e){if(""===e||void 0===e)return;let a=new Date(e);return new Intl.DateTimeFormat("id-ID",{month:"long",year:"numeric"}).format(a)}function i(e){if(""!==e&&void 0!==e)return new Date(e).getDate()}t.d(a,{Uo:function(){return l},fk:function(){return i},mQ:function(){return s}})},7395:function(e,a,t){"use strict";function l(e,a){if(void 0!==e)return e.length<=a?e:(null==e?void 0:e.slice(0,a-3))+"..."}t.d(a,{W:function(){return l}})},118:function(e,a){"use strict";a.Z={src:"/_next/static/media/1.c111c89c.webp",height:3456,width:5184,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoIAAUAAkA4JZwAAppikcAA/T0/We37uIZoKfR4hvtd99gIa6jYjfGgd5P4+CQwAAA=",blurWidth:8,blurHeight:5}},8538:function(e,a){"use strict";a.Z={src:"/_next/static/media/logo1.2c186a4b.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXE+Tq9hY40AH+A6TKMvQaE0Rqg3YMGeoqI3bOq/tb9eZ45GZq0ZPsI1aNN1e691fLGHm9tTbMGNoN1MZ8AUKq0dT9aFfHGdkYOlmIW8X5gxAAAAFXRSTlMA+eYQh8GQYA3+/v0tO6f+/fv6+/qMmFQtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nBXGRxKAMAwAsU11OtUJ/P+jDDoJmowhDWTmnPMUZJ7HdU+h16eUt3acXdu+rIOoxmgEUlANiX/eJ/gAZs8ChTmuML4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},1810:function(e,a,t){"use strict";t.d(a,{w_:function(){return d}});var l=t(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=l.createContext&&l.createContext(s),n=["attr","size","title"];function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach(function(a){var l,s;l=a,s=t[a],(l=function(e){var a=function(e,a){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,a||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}(l))in e?Object.defineProperty(e,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[l]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function d(e){return a=>l.createElement(m,r({attr:o({},e.attr)},a),function e(a){return a&&a.map((a,t)=>l.createElement(a.tag,o({key:t},a.attr),e(a.child)))}(e.child))}function m(e){var a=a=>{var t,{attr:s,size:i,title:c}=e,d=function(e,a){if(null==e)return{};var t,l,s=function(e,a){if(null==e)return{};var t,l,s={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,n),m=i||a.size||"1em";return a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className),l.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,d,{className:t,style:o(o({color:e.color||a.color},a.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==i?l.createElement(i.Consumer,null,e=>a(e)):a(s)}}},function(e){e.O(0,[3665,7699,4030,2971,7023,1744],function(){return e(e.s=1220)}),_N_E=e.O()}]);