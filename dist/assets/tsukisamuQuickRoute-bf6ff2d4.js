import{p as m,b as B,m as g}from"./index-c8fceb99.js";import{g as R,D as z,d as O}from"./index-66e0c920.js";const u=[[141.38021016,43.03455291],[141.39428776,43.03628007],[141.39595129,43.02903745],[141.38187201,43.0273086]];var M=m(u[2]),A=m(u[1]),N=B(M,A);const e=new g.Map({container:"map",zoom:15,center:[141.387932,43.032213],minZoom:15,maxZoom:19,maxBounds:[122,20,154,50],bearing:N,attributionControl:!1,style:{version:8,sources:{mierune_base:{type:"raster",tiles:["https://api.maptiler.com/maps/jp-mierune-gray/{z}/{x}/{y}.png?key=Oh6R8jzq3P80WGrClSBG"],tileSize:512},hillshade:{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"]}},layers:[{id:"base",source:"mierune_base",type:"raster"},{id:"hillshade",source:"hillshade",type:"raster",paint:{"raster-opacity":.2}}]}});e.addControl(new g.AttributionControl({compact:!0,customAttribution:'<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> | <a href="https://maplibre.org/" target="_blank">MapLibre</a> | <a href="https://maps.gsi.go.jp/development/ichiran.html#hillshademap" target="_blank">&copy; 国土地理院</a> | <a href="https://github.com/tilezen/joerd/blob/master/docs/attribution.md" target="_blank">&copy;Tilezen Joerd</a> | Maps are designed by <a href="https://twitter.com/miyakawa_to" target="_blank">宮川俊哉</a>, published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">"CC BY-SA 4.0</a>" '}));let f="r3_1",j="r3_1";document.getElementById("courseSelect").addEventListener("change",function(){e.setLayoutProperty(j,"visibility","none"),f=this.value,e.setLayoutProperty(f,"visibility","visible"),j=f});function G(t){const n=["route","outline"],s=["gpx","outline"];n.forEach(o=>{t.getLayer(o)&&t.removeLayer(o)}),s.forEach(o=>{t.getSource(o)&&t.removeSource(o)})}let i,d,L=[];document.getElementById("file-input").addEventListener("change",function(t){const n=t.target.files[0];if(n){const s=new FileReader;s.onload=function(o){const C=o.target.result;G(e),i=R(new z().parseFromString(C)),i=i.features[0];const l=i.geometry.coordinates,h=i.properties.coordinateProperties.times,k=i.properties.coordinateProperties["ns3:TrackPointExtensions"],S=[],_=[];for(let p=0;p<l.length-1;p++){const F=m(l[p]),T=m(l[p+1]),D=O(F,T,{units:"kilometers"}),I=new Date(h[p]),P=(new Date(h[p+1])-I)/1e3,x=P/60/D;L.push(P),S.push(x),_.push(parseFloat(x.toFixed(3)))}d={type:"FeatureCollection",name:"route",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[]};for(var r=0;r<l.length-1;r++){var E={type:"Feature",properties:{time:h[r],paceNum:S[r],paceText:_[r],heartRate:k[r],timeDif:L[r]},geometry:{type:"LineString",coordinates:[l[r],l[r+1]]}};d.features.push(E)}e.addSource("gpx",{type:"geojson",data:d}),e.addSource("outline",{type:"geojson",data:i}),e.addLayer({id:"outline",type:"line",source:"outline",layout:{},paint:{"line-width":1,"line-color":"black","line-opacity":.6,"line-gap-width":3}}),e.addLayer({id:"route",type:"line",source:"gpx",paint:{"line-width":3,"line-color":["interpolate",["linear"],["get","paceNum"],3,"rgb(0, 128, 0)",10,"rgb(255, 255, 0)",15,"rgb(255, 0, 0)"],"line-opacity":.5},layout:{"line-cap":"butt","line-round-limit":.1,"line-join":"miter"}})},s.readAsText(n)}});const b=document.getElementById("sliderLineOpacity");b.addEventListener("input",function(){let t=parseFloat(b.value);console.log(b.value),e.setPaintProperty("route","line-opacity",t),e.setPaintProperty("outline","line-opacity",t)});const v=document.getElementById("sliderLinewidth");v.addEventListener("input",function(){let t=parseFloat(v.value);console.log(v.value),e.setPaintProperty("route","line-width",t),e.setPaintProperty("outline","line-gap-width",t)});e.on("load",()=>{e.addSource("r3_1",{type:"image",url:"../public/maps/A.png",coordinates:u}),e.addSource("r3_2",{type:"image",url:"../public/maps/A.png",coordinates:u}),e.addSource("r3_3",{type:"image",url:"../public/maps/B.png",coordinates:u}),e.addSource("r3_4",{type:"image",url:"../public/maps/N.png",coordinates:u}),e.addLayer({id:"r3_1",source:"r3_1",type:"raster",paint:{},style:{}}),e.addLayer({id:"r3_2",source:"r3_2",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addLayer({id:"r3_3",source:"r3_3",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addLayer({id:"r3_4",source:"r3_4",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addControl(new g.NavigationControl),e.addControl(new g.ScaleControl({maxWidth:200,unit:"metric"}))});let w;const y=document.getElementById("replay");let a,c;y.addEventListener("click",()=>{if(y.innerText==="Replay"){let n=function(o){return{type:"Feature",properties:a.features[o].properties,geometry:{type:"Point",coordinates:a.features[o].geometry.coordinates[1]}}};y.innerText="Stop",e.setLayoutProperty("route","visibility","none"),e.setLayoutProperty("outline","visibility","none"),a={type:"FeatureCollection",name:"json4animation",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[d.features[0]]},c={type:"Feature",geometry:{type:"LineString",coordinates:[i.geometry.coordinates[0]]}},e.addSource("outline-anime",{type:"geojson",data:c}),e.addLayer({id:"outline-anime",type:"line",source:"outline-anime",layout:{},paint:{"line-width":1,"line-color":"black","line-opacity":.6,"line-gap-width":5}}),e.addSource("trace",{type:"geojson",data:a}),e.addLayer({id:"animation-line",type:"line",source:"trace",paint:{"line-width":5,"line-color":["interpolate",["linear"],["get","paceNum"],3,"rgb(0, 128, 0)",10,"rgb(255, 255, 0)",15,"rgb(255, 0, 0)"],"line-opacity":.5},layout:{"line-cap":"butt","line-round-limit":5,"line-join":"miter"}});let t=0,s=n(0);e.addSource("point",{type:"geojson",data:s}),e.addLayer({id:"pointSkin",source:"point",type:"circle",paint:{"circle-radius":11,"circle-color":"#ffffff"}}),e.addLayer({id:"point",source:"point",type:"circle",paint:{"circle-radius":8,"circle-color":["interpolate",["linear"],["get","heartRate"],100,"#c0c0c0",120,"#1e90ff",150,"#ffd700",200,"#9400d3"]}}),e.jumpTo({center:a.features[0].geometry.coordinates[1],zoom:16}),e.setPitch(0),w=window.setInterval(()=>{if(t<d.features.length){let o=n(t);a.features.push(d.features[t]),c.geometry.coordinates.push(i.geometry.coordinates[t]),e.getSource("point").setData(o),e.getSource("trace").setData(a),e.getSource("outline-anime").setData(c),e.panTo(o.geometry.coordinates),t++}else window.clearInterval(w)},L[t]*100)}else y.innerText="Replay",window.clearInterval(w),a.features=[],c.geometry.coordinates=[],console.log(c),console.log(a),e.getSource("trace").setData({type:"FeatureCollection",features:[]}),e.getSource("outline-anime").setData({type:"Feature",geometry:{type:"LineString",coordinates:[]}}),e.removeLayer("animation-line"),e.removeLayer("outline-anime"),e.removeLayer("point"),e.removeSource("trace"),e.removeSource("outline-anime"),e.removeSource("point"),e.setLayoutProperty("route","visibility","visible"),e.setLayoutProperty("outline","visibility","visible")});
