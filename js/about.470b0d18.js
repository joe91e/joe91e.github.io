(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"22f2":function(e,t,a){"use strict";var n=a("d3ac"),i=a.n(n);i.a},"4cf2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("v-toolbar",{attrs:{color:"secondary",flat:""}},[a("v-toolbar-side-icon",{on:{click:e.backHome}},[a("v-icon",{attrs:{color:"white"}},[e._v("arrow_back")])],1),a("v-toolbar-title",{staticClass:"white--text"},[e._v("nVision")])],1),e.created?a("div",[e.notFound?a("div",{staticClass:"container-details"},[e._v("\n            Container "),a("strong",[e._v(e._s(e.container.id))]),e._v(" was not found.\n        ")]):e._e(),e.notFound?e._e():a("div",{staticClass:"container-details"},[a("label",[e._v("properties for")]),a("h1",[e._v(e._s(e.container.id))]),a("hr",{staticClass:"separator"}),a("label",[e._v("Weight (kg)")]),a("h2",[e._v(e._s(e.container["Weight (kg)"]||"--"))]),a("label",[e._v("Type ISO")]),a("h2",[e._v(e._s(e.container["Type ISO"]||"--"))]),a("label",[e._v("Category")]),a("h2",[e._v(e._s(e.container["Category"]||"--"))]),a("label",[e._v("Position")]),a("h2",[e._v(e._s(e.container["Position"]||"--"))]),a("label",[e._v("Line Op")]),a("h2",[e._v(e._s(e.container["Line Op"]||"--"))]),a("label",[e._v("POL")]),a("h2",[e._v(e._s(e.container["POL"]||"--"))]),a("label",[e._v("POD")]),a("h2",[e._v(e._s(e.container["POD"]||"--"))]),a("label",[e._v("Frght Kind")]),a("h2",[e._v(e._s(e.container["Frght Kind"]||"--"))]),a("label",[e._v("O/B Actual Visit")]),a("h2",[e._v(e._s(e.container["O/B Actual Visit"]||"--"))]),a("label",[e._v("Vessel ATA")]),a("h2",[e._v(e._s(e.container["Vessel ATA"]||"--"))]),a("label",[e._v("Vessel ATD")]),a("h2",[e._v(e._s(e.container["Vessel ATD"]||"--"))]),a("label",[e._v("Reqs Power")]),a("h2",[e._v(e._s(e.container["Reqs Power"]||"--"))]),a("label",[e._v("Hzd UNNbrs")]),a("h2",[e._v(e._s(e.container["Hzd UNNbrs"]||"--"))]),a("label",[e._v("Hazardous")]),a("h2",[e._v(e._s(e.container["Hazardous?"]||"--"))]),a("label",[e._v("Temp Required (C)")]),a("h2",[e._v(e._s(e.container["Temp Required (C)"]||"--"))]),a("label",[e._v("IMDG")]),a("h2",[e._v(e._s(e.container["IMDG"]||"--"))]),a("label",[e._v("Damages")]),a("h2",[e._v(e._s(e.container["Damages"]||"--"))]),a("h2",{staticStyle:{display:"flex"}},[a("span",{staticStyle:{flex:"1"}}),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-text-field",{attrs:{label:"Add damage",placeholder:"describe"},model:{value:e.damageDesc,callback:function(t){e.damageDesc=t},expression:"damageDesc"}})],1),a("v-btn",{attrs:{icon:""},on:{click:e.addDamage}},[a("v-icon",[e._v("add")])],1)],1)])]):e._e()],1)},i=[],s=(a("ac6a"),a("cadf"),a("551c"),a("097d"),a("ddde")),o={name:"Container",components:{},created:function(){var e=this;this.container.id=this.$route.params.id,s["a"].getData().get().then(function(t){e.notFound=!0,t.forEach(function(t){t.data().id===e.container.id&&(console.log(t.data()),e.container=t.data(),e.notFound=!1,e.docId=t.id)}),e.created=!0})},methods:{backHome:function(){this.$router.push({name:"home"})},addDamage:function(){s["a"].getData().doc(this.docId).update({Damages:this.damageDesc}),this.container.Damages=this.damageDesc,this.damageDesc=""}},data:function(){return{docId:"",container:{},containers:[],notFound:!1,created:!1,damageDesc:""}}},r=o,c=(a("91a7"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"9b4e53e0",null);l.options.__file="Container.vue";t["default"]=l.exports},"91a7":function(e,t,a){"use strict";var n=a("d8b9"),i=a.n(n);i.a},d3ac:function(e,t,a){},d8b9:function(e,t,a){},e9a0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"results"},[a("v-toolbar",{attrs:{color:"secondary",flat:""}},[a("v-toolbar-side-icon",{on:{click:e.backHome}},[a("v-icon",{attrs:{color:"white"}},[e._v("arrow_back")])],1),a("v-toolbar-title",{staticClass:"white--text"},[e._v("nVision")])],1),e.created?a("div",[a("div",{staticClass:"container"},[a("label",[a("strong",[e._v("results found ("+e._s(e.filteredContainers.length)+"):")])]),a("v-text-field",{attrs:{"hide-details":"",flat:"","single-line":"",placeholder:"Find Containers"},on:{input:e.updateQuery},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e.notFound?a("div",{staticClass:"container-details"},[e._v("\n            No containers found with the results.\n        ")]):e._e(),e.notFound?e._e():a("div",{staticClass:"container-details"},e._l(e.filteredContainers,function(t){return a("div",[a("div",{staticClass:"search-result",on:{click:function(){return e.goToResult(t.id)}}},[e._m(0,!0),a("div",{staticClass:"values"},[a("h1",[e._v(e._s(t.id))]),a("h1",[e._v(e._s(t["Type ISO"]||"--"))])])])])}))]):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"labels"},[a("div",[e._v("Container")]),a("div",[e._v("ISO")])])}],s=(a("ac6a"),a("cadf"),a("551c"),a("097d"),a("ddde")),o={name:"SearchResults",created:function(){this.query=this.$route.params.query,this.updateQuery()},methods:{backHome:function(){this.$router.push({name:"home"})},updateQuery:function(){var e=this;this.filteredContainers=[],s["a"].getData().get().then(function(t){e.notFound=!0,t.forEach(function(t){t.data().id.toLowerCase().indexOf(e.query.toLowerCase())>-1&&(e.filteredContainers.push(t.data()),e.notFound=!1)}),e.created=!0})},goToResult:function(e){this.$router.push({name:"container",params:{id:e}})}},data:function(){return{query:"",filteredContainers:[],created:!1,notFound:!0}}},r=o,c=(a("22f2"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,"2e3c863d",null);l.options.__file="SearchResults.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=about.470b0d18.js.map