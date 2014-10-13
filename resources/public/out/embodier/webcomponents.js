// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.webcomponents');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('embodier.canvasdraw');
goog.require('embodier.canvasdraw');
goog.require('embodier.fileapi');
goog.require('embodier.fileapi');
embodier.webcomponents.default$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),false,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false], null);
embodier.webcomponents.width = 640;
embodier.webcomponents.height = 480;
embodier.webcomponents.routes = reagent.core.atom.call(null,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
embodier.webcomponents.layers = reagent.core.atom.call(null,null);
embodier.webcomponents.current_layer_num = reagent.core.atom.call(null,0);
embodier.webcomponents.req_id = reagent.core.atom.call(null,null);
embodier.webcomponents.req_id2 = reagent.core.atom.call(null,null);
embodier.webcomponents.scene = reagent.core.atom.call(null,(new embodier.canvasdraw.THREE.Scene()));
embodier.webcomponents.scene2 = reagent.core.atom.call(null,(new embodier.canvasdraw.THREE.Scene()));
embodier.webcomponents.camera = reagent.core.atom.call(null,(new embodier.canvasdraw.THREE.PerspectiveCamera(75,(embodier.webcomponents.width / embodier.webcomponents.height),0.1,1000)));
embodier.webcomponents.renderer = reagent.core.atom.call(null,(new embodier.canvasdraw.THREE.WebGLRenderer()));
embodier.webcomponents.renderer2 = reagent.core.atom.call(null,(new embodier.canvasdraw.THREE.WebGLRenderer()));
embodier.webcomponents.logo = (function logo(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",3722789425),"35px"], null)], null),"Gcode Viewer"], null);
});
embodier.webcomponents.github = (function github(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"https://github.com/gzmask/embodier"], null),"Github"], null);
});
embodier.webcomponents.header = (function header(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",1688702424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.logo], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",1688702423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",1688702423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/gcode"], null),"Gcode File"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",1688702423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/layers"], null),"View Layers"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",1688702423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.github], null)], null)], null);
});
embodier.webcomponents.upload_button = (function upload_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#upload-button","input#upload-button",3773194999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"name","name",1017277949),"files[]",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#555"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5673_SHARP_){return embodier.fileapi.setOnLoad.call(null,(p1__5673_SHARP_.target.files[0]),embodier.webcomponents.layers);
})], null)], null);
});
embodier.webcomponents.gcode_dropper = (function gcode_dropper(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4.col-md-offset-1","div.col-md-4.col-md-offset-1",3472445452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#file-dropper.bcircle.circle_file","div#file-dropper.bcircle.circle_file",1258536322),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-hdd","span.glyphicon.glyphicon-hdd",4570303237)], null),"Select Gcode File"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3.col-md-offset-3","div.col-md-3.col-md-offset-3",2119135757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.upload_button], null)], null)], null)], null);
});
embodier.webcomponents.layer_view_before = (function layer_view_before(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layer-view-before.bcircle.circle_layer","div#layer-view-before.bcircle.circle_layer",1381210725),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#mycanvas","canvas#mycanvas",4037984321)], null)], null);
});
embodier.webcomponents.control_range_BANG_ = (function control_range_BANG_(name,min,max){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.col-md-offset-2","div.col-md-10.col-md-offset-2",3764978192),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",4171284561),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,embodier.webcomponents.current_layer_num),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5674_SHARP_){cljs.core.reset_BANG_.call(null,embodier.webcomponents.current_layer_num,p1__5674_SHARP_.target.value);
return embodier.canvasdraw.show_layer.call(null,embodier.webcomponents.layers,"layer-view-before",embodier.webcomponents.current_layer_num,embodier.webcomponents.scene,embodier.webcomponents.camera,embodier.webcomponents.renderer,embodier.webcomponents.req_id);
}),new cljs.core.Keyword(null,"min","min",1014012356),min,new cljs.core.Keyword(null,"max","max",1014012118),max,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",3806786827),"4px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",2295458237),name,": ",cljs.core.deref.call(null,embodier.webcomponents.current_layer_num)], null)], null)], null);
});
embodier.webcomponents.layer_viewer = (function layer_viewer(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layer-view.row","div#layer-view.row",2276277681),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",1688702430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.control_range_BANG_,"layer",embodier.canvasdraw.first_layer_num.call(null,cljs.core.deref.call(null,embodier.webcomponents.layers)),(cljs.core.count.call(null,cljs.core.deref.call(null,embodier.webcomponents.layers)) - 1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-11.col-md-offset-1","div.col-md-11.col-md-offset-1",823320592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.layer_view_before], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-md-offset-6","span.col-md-offset-6",1320462579),"hold 'D' to drag"], null)], null)], null)], null);
});
embodier.webcomponents.app = (function app(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.header], null),(function (){var iter__4160__auto__ = (function iter__5679(s__5680){return (new cljs.core.LazySeq(null,(function (){var s__5680__$1 = s__5680;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5680__$1);if(temp__4092__auto__)
{var s__5680__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5680__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5680__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5682 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5681 = 0;while(true){
if((i__5681 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__5681);cljs.core.chunk_append.call(null,b__5682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)));
{
var G__5683 = (i__5681 + 1);
i__5681 = G__5683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5682),iter__5679.call(null,cljs.core.chunk_rest.call(null,s__5680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5682),null);
}
} else
{var x = cljs.core.first.call(null,s__5680__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)),iter__5679.call(null,cljs.core.rest.call(null,s__5680__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,4));
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"layer-view","layer-view",920003859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,embodier.webcomponents.routes)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.layer_viewer], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,embodier.webcomponents.routes)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.gcode_dropper], null):null)], null);
});

//# sourceMappingURL=webcomponents.js.map