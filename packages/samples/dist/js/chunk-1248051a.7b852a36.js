(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1248051a"],{"46fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-title"},[e._v("Transfer 穿梭框")]),a("p",[e._v("双栏穿梭选择框，常用于将多个项目从一边移动到另一边。")]),a("div",{staticClass:"page-sub-title"},[e._v("Transfer 组件主要基于以下四个 API 来使用:")]),e._m(0),a("div",{staticClass:"page-sub-title"},[e._v("基本用法")]),a("p",[e._v("展示了 data、target-keys、每行的渲染函数 render-format 以及回调函数 on-change 的用法。")]),a("br"),a("Transfer",{attrs:{data:e.data1,"target-keys":e.targetKeys1,"render-format":e.render1},on:{"on-change":e.handleChange1,"on-selected-change":e.handleSelectedChange}}),a("div",{staticClass:"page-sub-title"},[e._v("搜索")]),a("p",[e._v("通过设置属性 filterable 可以进行搜索，可以自定义搜索函数。")]),a("br"),a("Transfer",{attrs:{data:e.data2,"target-keys":e.targetKeys2,filterable:"","filter-method":e.filterMethod},on:{"on-change":e.handleChange2}}),a("div",{staticClass:"page-sub-title"},[e._v("高级用法")]),a("p",[e._v("穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。")]),a("br"),a("Transfer",{attrs:{data:e.data3,"target-keys":e.targetKeys3,"list-style":e.listStyle,"render-format":e.render3,operations:["To left","To right"],filterable:""},on:{"on-change":e.handleChange3}},[a("div",{style:{float:"right",margin:"5px"}},[a("Button",{attrs:{size:"small"},on:{click:e.reloadMockData}},[e._v("Refresh")])],1)]),a("div",{staticClass:"page-sub-title"},[e._v("自定义渲染行数据")]),a("p",[e._v("可以通过 render-format 来渲染复杂的数据。")]),a("br"),a("Transfer",{attrs:{data:e.data4,"target-keys":e.targetKeys4,"render-format":e.render4},on:{"on-change":e.handleChange4}})],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list"},[a("li",[a("p",[e._v(":data：总体数据，数组，每项为一个对象，且必须含有 key 值，组件基于此做索引。")])]),a("li",[a("p",[e._v(":target-keys：目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。")])]),a("li",[a("p",[e._v(":render-format：每行数据显示的格式函数，默认优先显示 label 值，没有时显示 key 值，可以自己组合出需要的数据格式。")])]),a("li",[a("p",[e._v("@on-change：当点击转移按钮时，组件本身并不会转移数据，而是触发事件，由用户来操作数据。")])])])}],n={data(){return{data1:this.getMockData(),targetKeys1:this.getTargetKeys(),data2:this.getMockData(),targetKeys2:this.getTargetKeys(),data3:this.getMockData(),targetKeys3:this.getTargetKeys(),data4:this.getMockData(),targetKeys4:this.getTargetKeys(),listStyle:{height:"300px",width:"250px"}}},methods:{getMockData(){let e=[];for(let t=1;t<=20;t++)e.push({key:t.toString(),label:"Content "+t,description:"The desc of content  "+t,disabled:3*Math.random()<1});return e},getTargetKeys(){return this.getMockData().filter(()=>2*Math.random()>1).map(e=>e.key)},render1(e){return e.label},handleChange1(e,t,a){console.log(e),console.log(t),console.log(a),this.targetKeys1=e},handleChange2(e){this.targetKeys2=e},filterMethod(e,t){return e.filter(e=>-1!==e.label.indexOf(t))},handleChange3(e){this.targetKeys3=e},render3(e){return e.label+" - "+e.description},reloadMockData(){this.data3=this.getMockData(),this.targetKeys3=this.getTargetKeys()},handleChange4(e){this.targetKeys4=e},render4(e){return e.label+" - "+e.description},handleSelectedChange(e,t){console.log("选中项发生变化：",e,t)}}},l=n,i=(a("e689"),a("2be6")),o=Object(i["a"])(l,r,s,!1,null,"8b522938",null);t["default"]=o.exports},bdce:function(e,t,a){},e689:function(e,t,a){"use strict";var r=a("bdce"),s=a.n(r);s.a}}]);