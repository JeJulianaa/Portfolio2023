import{g}from"./portfoliodb-316bb27c.js";import{h as f,i as k,j as b,o as n,c as a,e as l,t as s,u as t,b as o,n as d}from"./index-697ea654.js";const v={key:0,class:"portfolio-item"},y=["src"],B=o("br",null,null,-1),D=["href"],C=o("br",null,null,-1),S=["href"],x=o("br",null,null,-1),G={key:1},R={__name:"PortfolioDetail",props:{id:String},setup(p){const r=p,h=f(),{state:_}=g(),{id:c}=k(r),e=b(()=>_.value.find(i=>i.id==c.value)),m=()=>{h.go(-1)};return(i,u)=>(n(),a("div",null,[l(" test : "+s(i.$route.params.id)+" + "+s(t(c))+" ",1),o("div",null,[t(e)?(n(),a("div",v,[o("p",{class:d(["category",t(e).category])},s(t(e).category),3),o("h4",null,s(t(e).title)+" - id: "+s(t(e).id),1),o("p",null,s(t(e).description),1),o("img",{src:t(e).image,alt:"image",width:"200",height:"200"},null,8,y),B,l(" LinkedIn: "),o("a",{href:t(e).link},s(t(e).link),9,D),C,l(" Github: "),o("a",{href:t(e).github},s(t(e).github),9,S),o("p",null," TechStack: "+s(t(e).tech),1),o("p",null," Date: "+s(t(e).date),1),o("p",null,[l(" Completed: "),o("span",{class:d(t(e).complete)},s(t(e).completed),3)]),x])):(n(),a("div",G,"Loading...")),o("button",{onClick:u[0]||(u[0]=L=>m())},"Go Back"),l(" Details test "+s(r.id),1)])]))}};export{R as default};
