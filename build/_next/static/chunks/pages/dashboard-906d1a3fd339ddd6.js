(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{3211:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return X}});var n=a(6687),r=a(29),i=a(7794),o=a.n(i),s=a(7294),c=a(1163),l=a(4186),u=a.n(l),d=a(8982),p=a(4935),h=a(8746),b=a(6580),_=a(381),f=a.n(_),m=a(7054),y=a.n(m),x=a(7013),v=a(712),j=a(5893);var C=function(e){var t=e.dateSort,a=e.setDateSort,n=e.changeDate,r=e.selectedDates,i=e.setIsHabitModalListOpen,o=e.setCurrentHabitList,c=e.setIsLoading,l=(0,s.useState)(""),u=l[0],d=l[1];return(0,s.useEffect)((function(){var e=f()(r[0]),t=f()(r[r.length-1]);return e.year()!==t.year()?d("".concat(e.format("MMMM D, YYYY")," - ").concat(t.format("MMMM D, YYYY"))):e.year()===t.year()?e.month()===t.month()?d("".concat(e.format("MMMM D")," - ").concat(t.format("D, YYYY"))):d("".concat(e.format("MMMM D")," - ").concat(t.format("MMMM D, YYYY"))):void 0}),[r,t]),(0,j.jsx)("div",{className:y().wrapper,children:(0,j.jsxs)("div",{className:y().container,children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:y().arrowBtnContainer,children:[(0,j.jsx)(x.co,{onClick:function(){c(!0),n({increment:!1})},children:(0,j.jsx)(v.Xd,{})}),(0,j.jsx)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:y().dateContainerSmall,children:u}),(0,j.jsx)(x.co,{onClick:function(){c(!0),n({increment:!0})},children:(0,j.jsx)(v.ol,{})})]}),(0,j.jsx)("div",{className:y().dateContainer,children:u}),(0,j.jsx)("div",{className:y().dateChoiceWrapper,children:(0,j.jsx)(x._Y,{values:["Bi-Weekly","Monthly"],setValue:a,setIsLoading:c})})]}),(0,j.jsxs)(x.zx,{onClick:function(){i(!0),o(p.FG)},children:[(0,j.jsx)(v.v3,{}),"Add habit"]})]})})},g=a(371),w=a(9547),M=a.n(w);var O=function(){var e=(0,s.useState)(),t=e[0],a=e[1],n=(0,c.useRouter)();function i(){return(i=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==(0,h.jl)()){e.next=14;break}return e.prev=1,e.next=4,(0,g.Lm)();case 4:t=e.sent,a(t.data.username),e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status){e.next=14;break}return e.next=13,(0,h.ws)();case 13:return e.abrupt("return",n.push("/auth"));case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.ws)();case 2:n.push("/auth");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),(0,j.jsx)("div",{className:M().navbarWrapper,children:(0,j.jsxs)("div",{className:M().navbarContainer,children:[(0,j.jsxs)("div",{className:M().leftWrapper,onClick:function(){n.push("/")},children:[(0,j.jsx)("div",{className:M().logoContainer,children:(0,j.jsx)(v.$G,{})}),(0,j.jsx)("h1",{children:"Habitlux"})]}),(0,j.jsxs)("div",{className:M().rightWrapper,children:[t&&(0,j.jsxs)("h2",{onClick:function(){n.push("/dashboard")},children:[" ",t," "]}),(0,j.jsx)("h2",{onClick:function(){return l.apply(this,arguments)},children:"Logout"})]})]})})},N=a(9499),k=a(3310),S=a.n(k);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,N.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){var t=e.habits,a=e.setCurrentHabit,n=e.setIsHabitModalOpen,r=e.setIsHabitModalListOpen,i=e.setCurrentHabitList,o=e.dateSort,c=e.selectedDates,l=e.isLoading,u=(0,s.useState)([]),d=u[0],h=u[1];function _(e){var t=e.habit,r=D(D({},e.habitDay),t);r.target_repeat_count=r.target_repeat_count||r.default_repeat_count,delete r.id,delete r.habits,a(r),n(!0)}return(0,s.useEffect)((function(){var e=[];c.forEach((function(t){o===p.B7.monthly?e.push(p._T[f()(t).day()]):e.push(p.c8[f()(t).day()])})),h(e)}),[]),(0,j.jsxs)("div",{className:S().pageWrapper,children:[!t&&(0,j.jsx)("h1",{children:"No habits created yet"}),t&&!1===l&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{id:S().mainWeekTitle,className:o===p.B7.monthly?S().monthlyWrapper:S().rowWrapper,children:[(0,j.jsx)("div",{}),(0,j.jsx)("div",{className:o===p.B7.monthly?S().monthlyContainer:S().contentContainer,children:d&&d.map((function(e,t){return(0,j.jsx)("h6",{children:e},t)}))})]}),t&&t.map((function(e,t){return(0,j.jsxs)(b.E.div,{className:o===p.B7.monthly?S().monthlyWrapper:S().rowWrapper,children:[(0,j.jsx)(b.E.div,{className:S().rowTitleContainer,children:(0,j.jsxs)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layout:!0,whileHover:{scale:1.1,boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.2)"},whileTap:{scale:.9,boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.5)"},transition:{duration:.1,delay:0},className:S().rowTitle,id:o===p.B7.monthly?S().monthlyTitle:S().weeklyTitle,onClick:function(){!function(e){var t=D({},e.habit);i(t),r(!0)}({habit:e})},children:[(0,j.jsx)("div",{className:S().iconContainer,id:o===p.B7.monthly?S().monthlyIcon:S().weeklyIcon,style:{backgroundColor:"rgb(".concat(e.color,")")||0}}),(0,j.jsx)("h2",{children:e.habit_name})]})}),(0,j.jsx)(b.E.div,{className:o===p.B7.monthly?S().monthlyContainer:S().contentContainer,children:e.habits.map((function(t,a){return(0,j.jsxs)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.1,delay:"".concat(.03*a)},layout:!0,className:S().dayWrapper,children:[(0,j.jsx)("h6",{className:S().dayTitle,children:o===p.B7.monthly?p._T[f()(t.date_created).day()]:p.c8[f()(t.date_created).day()]}),(0,j.jsx)(x.NO,{dateSort:o,updateCurrentHabit:_,habit:e,habitDay:t})]},a)}))})]},t)}))]})]})},T=a(1190),E=a(7957),Y=a.n(E);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){(0,N.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e){var t=e.habit,a=e.openHabitModal,i=e.setOpenHabitModal,c=e.habits,l=e.setHabits,u=e.setNotifModalOpen,d=e.setNotifModalContent,p=(0,s.useState)(t),h=p[0],_=p[1];function m(){return(m=(0,r.Z)(o().mark((function e(){var t,a,r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.KZ)(h);case 2:if(200===(t=e.sent).status){for(a=(0,n.Z)(c),r=0;r<a.length;r++)if(a[r].habit_name===h.habit_name)for(s=0;s<a[r].habits.length;s++)f()(a[r].habits[s].date_created).format("YYYY-MM-DD")===f()(h.date_created).format("YYYY-MM-DD")&&(a[r].habits[s]=P(P({},t.data),{},{habit_id:t.data.id}));l(a),u(!0),d({msg:"Successfully udpated habit",error:!1}),i(!1)}else u(!0),d({msg:"An error occurred in updating habit",error:!0});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function e(){var t,a,r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.vz)(h);case 2:if(200===(t=e.sent).status){for(a=(0,n.Z)(c),r=0;r<a.length;r++)if(a[r].habit_name===h.habit_name)for(s=0;s<a[r].habits.length;s++)f()(a[r].habits[s].date_created).format("YYYY-MM-DD")===f()(h.date_created).format("YYYY-MM-DD")&&(a[r].habits[s]=P(P({},t.data),{},{habit_id:t.data.id}));l(a),u(!0),d({msg:"Successfully created habit",error:!1}),i(!1)}else u(!0),d({msg:"An error occurred in creating habit",error:!0});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){_(t)}),[t]),(0,j.jsx)(T.M,{children:a&&(0,j.jsx)(b.E.div,{onClick:function(){return i(!1)},className:Y().wrapper,children:(0,j.jsx)(b.E.div,{initial:{opacity:1,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",duration:.3},exit:{opacity:1,scale:0},layout:!0,onClick:function(e){return e.stopPropagation()},className:Y().container,children:h&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:Y().headerWrapper,children:[(0,j.jsxs)("div",{className:Y().headerContainer,children:[(0,j.jsx)("div",{className:Y().iconContainer,style:{backgroundColor:"rgb(".concat(h.color,")")||0}}),(0,j.jsxs)("div",{className:Y().titleContainer,children:[(0,j.jsx)("h1",{children:f()(h.date_created).format("MMMM DD, YYYY")}),(0,j.jsx)("span",{children:h.habit_name})]})]}),(0,j.jsx)(x.zx,{onClick:function(){i(!1),_(null)},children:(0,j.jsx)(v.x8,{})})]}),(0,j.jsx)(x.Ye,{setState:function(e){_(P(P({},h),{},{repeat_count:e}))},value:h.repeat_count,maxValue:h.target_repeat_count||h.default_repeat_count,children:"This day's Repeat Count"}),(0,j.jsx)(x.Ye,{id:Y().requiredCountContainer,value:h.target_repeat_count,setState:function(e){_(P(P({},h),{},{target_repeat_count:e}))},children:"Required Target Repeat Count"}),(0,j.jsx)(x.Kx,{placeholder:"Write a comment",value:h.comment,updateValue:function(e){_(P(P({},h),{},{comment:e}))}}),(0,j.jsxs)("div",{className:Y().rowContainer,children:[(0,j.jsx)(x.zx,{id:Y().greenBtn,primary:!1,onClick:function(){_(P(P({},h),{},{repeat_count:h.target_repeat_count}))},children:"Mark As Complete"}),(0,j.jsx)(x.zx,{primary:!1,onClick:function(){h.habit_id&&function(){m.apply(this,arguments)}(),h.habit_id||function(){y.apply(this,arguments)}()},children:"Save"})]})]})})})})},Z=a(222),I=a.n(Z);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){(0,N.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=function(e){var t=e.habitList,a=e.isOpenHabitModalList,i=e.setOpenHabitModalList,c=e.habits,l=e.setHabits,u=e.dateSort,d=e.selectedDates,_=e.setNotifModalOpen,f=e.setNotifModalContent,m=e.habitsToday,y=e.setHabitsToday,C=(0,s.useState)(t),w=C[0],M=C[1],O=(0,s.useState)(t.habit_name),N=O[0],k=O[1],S=(0,s.useState)(!1),H=S[0],D=S[1];function W(){return(W=(0,r.Z)(o().mark((function e(){var t,a,r,s,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,delete(t=z({},w)).habits,e.next=5,(0,g.UP)(t);case 5:if(200===(a=e.sent).status){for(r=(0,n.Z)(c),s=0;s<r.length;s++)if(r[s].habit_name===N)for(r[s].habit_name=a.data.habit_name,r[s].color=a.data.color,r[s].default_repeat_count=a.data.default_repeat_count,r[s].icon_url=a.data.icon_url,u=0;u<r[s].habits.length;u++)r[s].habits[u].habit_name===N&&(r[s].habits[u].target_repeat_count=a.data.default_repeat_count,r[s].habits[u].habit_name=a.data.habit_name);l(r),f({msg:"Successfully udpated habit list",error:!1}),_(!0),i(!1)}e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),f({msg:"An error occurred in updating habit list",error:!0}),_(!0),i(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function E(){return(E=(0,r.Z)(o().mark((function e(){var t,a,r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.aZ)(w);case 3:if(200===(t=e.sent).status){for(a=[],u===p.B7.weekly&&(a=(0,h.y)(d[0])),u===p.B7.biweekly&&(a=(0,h.nB)(d[0])),u===p.B7.monthly&&(a=(0,h.Zf)(d[0])),r=z(z({},w),{},{habits:(0,n.Z)(a)}),s=0;s<r.habits.length;s++)r.habits[s].target_repeat_count=t.data.default_repeat_count,r.habits[s].habit_name=t.data.habit_name,r.id=t.data.id;l(null===c?[r]:[].concat((0,n.Z)(c),[r])),i(!1),f({msg:"Successfully created habit list",error:!1}),_(!0)}e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),i(!1),f({msg:"An error occurred in creating habit list",error:!0}),_(!0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Y(){return(Y=(0,r.Z)(o().mark((function e(){var t,a,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.c$)({habit_name:w.habit_name});case 3:if(200===e.sent.status){for(t=[],a=0;a<c.length;a++)c[a].habit_name!==w.habit_name&&t.push(c[a]);for(n=[],r=0;r<m.length;r++)m[r].habit_name!==w.habit_name&&n.push(m[r]);y(n),l(t),_(!0),f({msg:"Successfully deleted habit list",error:!1}),i(!1),D(!1)}e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),_(!0),f({msg:"An error occurred in deleting habit list",error:!0}),D(!1),i(!1);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){M(t),k(t.habit_name)}),[t]),(0,j.jsxs)(T.M,{children:[H&&(0,j.jsx)(x.sm,{message:"Are you sure you want to delete this habit?",showConfirmModal:D,action:function(){return Y.apply(this,arguments)}},0),a&&(0,j.jsx)(b.E.div,{onClick:function(){return i(!1)},className:I().wrapper,children:(0,j.jsx)(b.E.div,{initial:{opacity:1,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",duration:.3},exit:{opacity:1,scale:0},layout:!0,onClick:function(e){return e.stopPropagation()},className:I().container,children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(b.E.div,{className:I().headerWrapper,children:[(0,j.jsx)(b.E.div,{className:I().titleContainer,children:(0,j.jsx)(b.E.h1,{children:t.id?"Edit Habit":"Create Habit"})}),(0,j.jsx)(x.zx,{onClick:function(){i(!1),M(p.FG)},children:(0,j.jsx)(v.x8,{})})]}),(0,j.jsx)(x.oi,{value:w.habit_name||"",setValue:function(e){M(z(z({},w),{},{habit_name:e}))},placeholder:"Habit name"}),(0,j.jsx)(x.Ye,{id:I().requiredCountContainer,value:w.default_repeat_count||0,setState:function(e){M(z(z({},w),{},{default_repeat_count:e}))},children:"Default Target Repeat Count"}),(0,j.jsx)(x.zH,{value:w.color||"",setValue:function(e){M(z(z({},w),{},{color:e}))},children:"Default Color"}),(0,j.jsxs)(b.E.div,{className:I().rowContainer,children:[t.id&&(0,j.jsx)(x.zx,{primary:!1,onClick:function(){D(!0)},style:{backgroundColor:"#ff6262",color:"#fff"},children:"Delete"}),(0,j.jsx)(x.zx,{primary:!1,onClick:function(){w.id&&function(){W.apply(this,arguments)}(),w.id||function(){E.apply(this,arguments)}()},children:"Save"})]})]})})},1)]})},V=a(6033),q=a.n(V);var F=function(e){var t=e.habitsToday,a=e.setIsHabitModalOpen,n=e.setCurrentHabit;return(0,j.jsxs)("div",{className:q().wrapper,children:[(0,j.jsxs)("h1",{children:["Habits for today ","(".concat(f()().format("MMMM D, YYYY"),")")]}),(0,j.jsx)("div",{className:q().habitWrapper,children:t.map((function(e,t){return(0,j.jsxs)(b.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layout:!0,whileHover:{scale:1.05,boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.2)"},whileTap:{scale:.95,boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.5)"},transition:{duration:.2,delay:0},className:q().habitContainer,onClick:function(){n(e),a(!0)},children:[(0,j.jsx)("div",{className:q().iconContainer,style:{backgroundColor:"rgb(".concat(e.color,")")}}),(0,j.jsxs)("div",{className:q().habitTitle,children:[(0,j.jsx)("h2",{children:e.habit_name}),e.repeat_count<1||e.repeat_count/e.target_repeat_count!==1?(0,j.jsx)("span",{className:q().notCompletedLabel,style:{color:"#a7a7a7"},children:"Not Completed"}):(0,j.jsx)("span",{className:q().completedLabel,style:{color:"#60f95d"},children:"Completed"})]}),(0,j.jsx)("div",{})]},t)}))})]})},G=a(3394),K=a.n(G);var U=function(){return(0,j.jsx)("div",{className:K().wrapper,children:(0,j.jsxs)("div",{className:K().container,children:[(0,j.jsx)("h6",{children:"\xa9 HabitLux 2022"}),(0,j.jsxs)("h6",{children:["Designed and developed by:",(0,j.jsx)("a",{href:"https://github.com/labadcloyd",target:"_blank",children:" Cloyd Abad"})]})]})})},J=a(4158);function X(){var e=(0,s.useState)(!0),t=e[0],a=e[1],i=(0,s.useState)(!1),l=i[0],b=i[1],_=(0,s.useState)(!1),f=_[0],m=_[1],y=(0,s.useState)(!1),v=y[0],g=y[1],w=(0,s.useState)({msg:"",error:!1}),M=w[0],N=w[1],k=(0,s.useState)(p.B7.biweekly),S=k[0],H=k[1],D=(0,s.useState)(null),E=D[0],Y=D[1],L=(0,s.useState)([]),P=L[0],Z=L[1],I=(0,s.useState)(),A=I[0],z=I[1],V=(0,s.useState)(p.FG),q=V[0],G=V[1],K=(0,s.useState)([]),X=K[0],$=K[1],Q=(0,c.useRouter)();function ee(){return(ee=(0,r.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t=[],r=[],S===p.B7.biweekly&&(t=(0,h.nB)(P[0])),S===p.B7.weekly&&(t=(0,h.y)(P[0])),S===p.B7.monthly&&(t=(0,h.Zf)(P[0])),t.forEach((function(e){r.push(e.date_created)})),Z(r),e.prev=7,e.next=10,(0,d.Gv)({Start_Date:r[0],End_Date:r[r.length-1]});case 10:if(!((i=e.sent).data.length<1)){e.next=14;break}return Y(null),e.abrupt("return",a(!1));case 14:s=(0,h.Ro)({habits:i.data,datesWithHabits:(0,n.Z)(t)}),Y(s),a(!1),e.next=27;break;case 19:if(e.prev=19,e.t0=e.catch(7),401!==e.t0.response.status){e.next=24;break}return(0,h.ws)(),e.abrupt("return",Q.push("/auth"));case 24:return g(!0),N({msg:"An error occurred in fetching the data",error:!0}),e.abrupt("return",a(!1));case 27:case"end":return e.stop()}}),e,null,[[7,19]])})))).apply(this,arguments)}function te(){return(te=(0,r.Z)(o().mark((function e(t){var r,i,s,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.increment,a(!0),i=[],s=[],r?(S===p.B7.biweekly&&(i=(0,h.wi)(P[P.length-1])),S===p.B7.weekly&&(i=(0,h.Tk)(P[P.length-1])),S===p.B7.monthly&&(i=(0,h.Ce)(P[P.length-1]))):r||(S===p.B7.biweekly&&(i=(0,h.XM)(P[0])),S===p.B7.weekly&&(i=(0,h.Au)(P[0])),S===p.B7.monthly&&(i=(0,h.KR)(P[0]))),i.forEach((function(e){s.push(e.date_created)})),Z(s),e.prev=6,e.next=9,(0,d.Gv)({Start_Date:s[0],End_Date:s[s.length-1]});case 9:if(!((c=e.sent).data.length<1)){e.next=13;break}return Y(null),e.abrupt("return",a(!1));case 13:return l=(0,h.Ro)({habits:c.data,datesWithHabits:(0,n.Z)(i)}),Y(l),e.abrupt("return",a(!1));case 18:if(e.prev=18,e.t0=e.catch(6),401!==e.t0.response.status){e.next=23;break}return(0,h.ws)(),e.abrupt("return",Q.push("/auth"));case 23:return g(!0),N({msg:"An error occurred in fetching the data",error:!0}),e.abrupt("return",a(!1));case 26:case"end":return e.stop()}}),e,null,[[6,18]])})))).apply(this,arguments)}function ae(){return(ae=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(0,h.jl)()){e.next=4;break}return e.next=3,(0,h.ws)();case 3:Q.push("/auth");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((function(){!function(){ae.apply(this,arguments)}()}),[]),(0,s.useEffect)((function(){!function(){ee.apply(this,arguments)}()}),[S]),(0,s.useEffect)((function(){if(null!==E){var e=(0,h.qb)(E);if(e.length<1)return;$(e)}}),[E]),(0,j.jsxs)("div",{className:u().pageWrapper,children:[(0,j.jsx)(O,{}),(0,j.jsx)(R,{habitList:q,isOpenHabitModalList:f,setOpenHabitModalList:m,habits:E,setHabits:Y,dateSort:S,selectedDates:P,setNotifModalOpen:g,setNotifModalContent:N,habitsToday:X,setHabitsToday:$}),(0,j.jsx)(B,{habit:A,openHabitModal:l,setOpenHabitModal:b,habits:E,setHabits:Y,setNotifModalOpen:g,setNotifModalContent:N}),(0,j.jsx)(x.NV,{modalOpen:v,setModalOpen:g,content:M,setContent:N}),(0,j.jsx)("div",{className:u().pageContainer,children:(0,j.jsxs)("div",{className:u().contentWrapper,children:[(0,j.jsx)(C,{setIsLoading:a,setCurrentHabitList:G,dateSort:S,setDateSort:H,changeDate:function(e){return te.apply(this,arguments)},selectedDates:P,setIsHabitModalListOpen:m}),t?(0,j.jsx)(J.Z,{}):(0,j.jsx)(T.M,{children:(0,j.jsxs)("div",{className:u().contentContainer,children:[(0,j.jsx)(W,{isLoading:t,dateSort:S,habits:E,selectedDates:P,setCurrentHabit:z,setIsHabitModalOpen:b,setIsHabitModalListOpen:m,setCurrentHabitList:G},0),(null!==E||(null===E||void 0===E?void 0:E.length)>0)&&(0,j.jsx)(F,{habitsToday:X,setCurrentHabit:z,setIsHabitModalOpen:b},1)]})}),(0,j.jsx)(U,{})]})})]})}},9704:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return a(3211)}])},7054:function(e){e.exports={wrapper:"dateChanger_wrapper__UwNyJ",container:"dateChanger_container__cvKNA",arrowBtnContainer:"dateChanger_arrowBtnContainer__348pz",dateContainer:"dateChanger_dateContainer__eOhaL",dateContainerSmall:"dateChanger_dateContainerSmall__jcuBm",dateChoiceWrapper:"dateChanger_dateChoiceWrapper__0i9lS"}},3310:function(e){e.exports={pageWrapper:"dateHabits_pageWrapper__lShV5",rowWrapper:"dateHabits_rowWrapper__H7gWI",monthlyWrapper:"dateHabits_monthlyWrapper__wF8_S",contentContainer:"dateHabits_contentContainer__NCjNl",monthlyContainer:"dateHabits_monthlyContainer__72TPg",dayWrapper:"dateHabits_dayWrapper__SVSCy",dayTitle:"dateHabits_dayTitle__EEeo6",rowTitleContainer:"dateHabits_rowTitleContainer__mkVsn",rowTitle:"dateHabits_rowTitle__cwmnA",iconContainer:"dateHabits_iconContainer__ivL5t",monthlyIcon:"dateHabits_monthlyIcon__DST7U",weeklyIcon:"dateHabits_weeklyIcon__5sU3i",monthlyTitle:"dateHabits_monthlyTitle__GemZu",mainWeekTitle:"dateHabits_mainWeekTitle__AJ4DB"}},3394:function(e){e.exports={wrapper:"footer_wrapper__t_l1V",container:"footer_container__wsQfe"}},222:function(e){e.exports={wrapper:"habitModalList_wrapper__JR_01",container:"habitModalList_container__PJ_dG",rowContainer:"habitModalList_rowContainer__mvpKK",headerWrapper:"habitModalList_headerWrapper__A2ZsT",titleContainer:"habitModalList_titleContainer__nNLnN",requiredCountContainer:"habitModalList_requiredCountContainer__y1fxz"}},7957:function(e){e.exports={wrapper:"habitModal_wrapper__cfEPE",container:"habitModal_container__oFqJf",rowContainer:"habitModal_rowContainer__vlT8y",iconContainer:"habitModal_iconContainer__OTSK_",headerWrapper:"habitModal_headerWrapper__VgcA7",headerContainer:"habitModal_headerContainer__5wyqg",titleContainer:"habitModal_titleContainer__H_pEl",requiredCountContainer:"habitModal_requiredCountContainer__Cflry",greenBtn:"habitModal_greenBtn__S9Trs"}},6033:function(e){e.exports={wrapper:"habitsToday_wrapper__NOarz",habitWrapper:"habitsToday_habitWrapper__0vFD7",habitContainer:"habitsToday_habitContainer__CnsNv",habitTitle:"habitsToday_habitTitle__PEnoj",iconContainer:"habitsToday_iconContainer__tfPlN"}},9547:function(e){e.exports={navbarWrapper:"navbar_navbarWrapper__Ci0P9",navbarContainer:"navbar_navbarContainer__3RlGZ",leftWrapper:"navbar_leftWrapper__RyL2K",logoContainer:"navbar_logoContainer__rITqe",rightWrapper:"navbar_rightWrapper__dmLfV"}},4186:function(e){e.exports={pageWrapper:"dashboard_pageWrapper__E2SMU",pageContainer:"dashboard_pageContainer__9IoyU",contentWrapper:"dashboard_contentWrapper__yT06N",contentContainer:"dashboard_contentContainer__z_C72"}}},function(e){e.O(0,[885,75,390,260,721,774,888,179],(function(){return t=9704,e(e.s=t);var t}));var t=e.O();_N_E=t}]);