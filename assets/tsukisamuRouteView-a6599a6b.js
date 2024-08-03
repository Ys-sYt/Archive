import{a as f,p as w,b as L,m as S}from"./index-c8fceb99.js";import{c as j,b as M}from"./index-c4dfeedf.js";const a=[[141.38021016,43.03455291],[141.39428776,43.03628007],[141.39595129,43.02903745],[141.38187201,43.0273086]],E=f(a),I=j(E),T=w(a[2]),$=w(a[1]);var k=L(T,$);const e=new S.Map({container:"map",style:"https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json",center:I.geometry.coordinates,zoom:15,pitch:0,bearing:k,attributionControl:!1});e.addControl(new S.AttributionControl({compact:!0,customAttribution:'<a href="https://maplibre.org/" target="_blank">MapLibre</a> | Maps are designed by <a href="https://twitter.com/miyakawa_to" target="_blank">宮川俊哉</a>, published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">"CC BY-SA 4.0</a>" '}));const _={m21a:[[141.38184001,43.03118843],[141.38179477,43.03050698],[141.38223947,43.03084647],[141.381776,43.02877852],[141.38388351,43.02831024],[141.38429933,43.02897237],[141.385411,43.0312774],[141.3901289,43.0334642],[141.3904666,43.0328557],[141.3885583,43.0320908],[141.38757917,43.03196422],[141.38611309,43.03130056],[141.38607835,43.03306326],[141.38712985,43.03329407],[141.38820243,43.03311132],[141.38807224,43.03174945],[141.383623,43.0317782],[141.38541067,43.0334691],[141.38505421,43.03100017],[141.38403707,43.03014032],[141.38275855,43.03052668],[141.38181052,43.0298879],[141.38151762,43.03023518],[141.38133067,43.03112553]],w21a:[[141.38184001,43.03118843],[141.38179477,43.03050698],[141.38223947,43.03084647],[141.381776,43.02877852],[141.38388351,43.02831024],[141.38429933,43.02897237],[141.385411,43.0312774],[141.3901289,43.0334642],[141.3904666,43.0328557],[141.3885583,43.0320908],[141.38757917,43.03196422],[141.38362207,43.03177901],[141.38505523,43.03099735],[141.38404448,43.03014345],[141.38275719,43.03052488],[141.38180894,43.02990263],[141.38151643,43.03023202],[141.38133343,43.03112631]],r3_3:[],r3_4:[]},c="/Archive/",x=`${c}tsukisamu/maps/M21A.png`,z=`${c}tsukisamu/maps/A.png`,D=`${c}tsukisamu/maps/B.png`,H=`${c}tsukisamu/maps/N.png`;e.on("load",()=>{e.addSource("m21a",{type:"image",url:x,coordinates:a}),e.addSource("w21a",{type:"image",url:z,coordinates:a}),e.addSource("r3_3",{type:"image",url:D,coordinates:a}),e.addSource("r3_4",{type:"image",url:H,coordinates:a}),e.addLayer({id:"m21a",source:"m21a",type:"raster",paint:{},style:{}}),e.addLayer({id:"w21a",source:"w21a",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addLayer({id:"r3_3",source:"r3_3",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addLayer({id:"r3_4",source:"r3_4",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),e.addSource("route_m21a",{type:"geojson",data:"/tsukisamu/routes/m21a.geojson"}),e.addSource("route_w21a",{type:"geojson",data:"/tsukisamu/routes/w21a.geojson"}),e.addLayer({id:"route_m21a",type:"line",source:"route_m21a",paint:{"line-width":2,"line-color":["interpolate",["linear"],["get","standing"],1,"#ff1493",2,"#0000cd",3,"#d2691e",4,"#8a2be2"],"line-dasharray":[3,3]}}),e.addLayer({id:"route_w21a",type:"line",source:"route_w21a",layout:{visibility:"none"},paint:{"line-width":2,"line-color":["interpolate",["linear"],["get","standing"],1,"#ff1493",2,"#0000cd",3,"#d2691e"],"line-dasharray":[3,3]}});function p(){var t=document.querySelectorAll(".legend");t.forEach(function(o){o.style.display="none"})}function g(t){var o=document.getElementById(t);o&&(o.style.display="block")}function m(t){length=t.length-3;var o="<option value='99'>All</option>";o+="<option value='0'>△-1</option>";for(var n=1;n<=length;n++)o+="<option value='"+n+"'>"+n+"-"+(n+1)+"</option>";o+="<option value='"+n+"'>"+n+"-◎</option>",secondDropdown.innerHTML="<label><b>Leg</b></label><br><select id= 'leg'>"+o+"</select><p>レッグ毎に表示可能です</p>",document.getElementById("leg").addEventListener("change",function(){let l=parseInt(this.value);if(l===99)e.fitBounds([a[3],a[1]],{bearing:k,zoom:15});else{console.log(t[l]),console.log(t[l+1]);let y=t[l],b=t[l+1],P=L(y,b),h=f([y,b]);console.log(h);let s=M(h);console.log(s);let A=[s[0],s[1]],B=[s[2],s[3]],v=[A,B];console.log(v),e.fitBounds(v,{padding:{top:100,bottom:100},bearing:P})}})}let i="m21a",r="m21a",d="route_"+r;console.log(d);let u=_[r];p(),g(r),m(u),document.getElementById("courseSelect").addEventListener("change",function(){e.setLayoutProperty(r,"visibility","none"),e.setLayoutProperty(d,"visibility","none"),i=this.value,d="route_"+i,e.setLayoutProperty(i,"visibility","visible"),e.setLayoutProperty(d,"visibility","visible"),r=i,p(),g(i),u=_[i],m(u)})});
