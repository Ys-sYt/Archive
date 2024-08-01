// MapLibre GL JSの読み込み
import maplibregl, { LngLatBounds } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//turf
import { point,lineString, lineStrings, multiPoint } from '@turf/helpers';
//import distance from '@turf/distance';
import bearing from '@turf/bearing';
import center from '@turf/center';
import bbox from '@turf/bbox';

const mapcoord = [
  [141.38021016, 43.03455291], //left-top , 43.03455291,141.38021016
  [141.39428776, 43.03628007], //right-top , 43.03628007,141.39428776
  [141.39595129, 43.02903745], //right-bottom , 43.02903745,141.39595129
  [141.38187201, 43.02730860], //left-bottom ,43.02730860,141.38187201
];
const mapcoordTurf = multiPoint(mapcoord);
const mapcenter = center(mapcoordTurf);
const point1 = point(mapcoord[2]);
const point2 = point(mapcoord[1]) ;
var turfbearing = bearing(point1, point2);

const map =  new maplibregl.Map({
  container: 'map',
  style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json', 
  center: mapcenter.geometry.coordinates, 
  zoom: 15, 
  pitch: 0,
  bearing: turfbearing,
  attributionControl: false,
});

//著作権表示
map.addControl(
  new maplibregl.AttributionControl({
    compact: true,
    customAttribution:
      '<a href="https://maplibre.org/" target="_blank">MapLibre</a> | Maps are designed by <a href="https://twitter.com/miyakawa_to" target="_blank">宮川俊哉</a>, published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">"CC BY-SA 4.0</a>" ',
  })
);

//フルスクリーン
//map.addControl(new maplibregl.FullscreenControl());
//
//map.addControl(new FullscreenControl({container: document.querySelector('body')}));

//courseCoordinates
const courseCoordinates = {
  m21a: [
    [141.38184001, 43.03118843], //43.03118843,141.38184001
    [141.38179477, 43.03050698], //43.03050698,141.38179477
    [141.38223947, 43.03084647], //43.03084647,141.38223947
    [141.38177600, 43.02877852],//43.02877852,141.38177600
    [141.38388351, 43.02831024],//43.02831024,141.38388351
    [141.38429933, 43.02897237],//43.02897237,141.38429933
    [141.3854110, 43.0312774],//43.0312774,141.3854110
    [141.3901289, 43.0334642],//43.0334642,141.3901289
    [141.3904666, 43.0328557,],//43.0328557,141.3904666
    [141.38855830, 43.03209080],//43.03209080,141.38855830
    [141.38757917, 43.03196422],
    [141.38611309, 43.03130056],
    [141.38607835, 43.03306326],
    [141.38712985, 43.03329407],
    [141.38820243, 43.03311132],
    [141.38807224, 43.03174945],
    [141.3836230, 43.0317782],
    [141.38541067, 43.03346910],
    [141.38505421, 43.03100017],
    [141.38403707, 43.03014032],
    [141.38275855, 43.03052668],
    [141.38181052, 43.02988790],
    [141.38151762, 43.03023518],
    [141.38133067, 43.03112553]
  ],
  w21a: [
    [141.38184001, 43.03118843], //43.03118843,141.38184001
    [141.38179477, 43.03050698], //43.03050698,141.38179477
    [141.38223947, 43.03084647], //43.03084647,141.38223947
    [141.38177600, 43.02877852],//43.02877852,141.38177600
    [141.38388351, 43.02831024],//43.02831024,141.38388351
    [141.38429933, 43.02897237],//43.02897237,141.38429933
    [141.3854110, 43.0312774],//43.0312774,141.3854110
    [141.3901289, 43.0334642],//43.0334642,141.3901289
    [141.3904666, 43.0328557,],//43.0328557,141.3904666
    [141.38855830, 43.03209080],//43.03209080,141.38855830
    [141.38757917, 43.03196422],//43.03196422,141.38757917
    [141.38362207, 43.03177901],//43.03177901,141.38362207
    [141.38505523, 43.03099735],//43.03099735,141.38505523
    [141.38404448, 43.03014345],//43.03014345,141.38404448
    [141.38275719, 43.03052488],//43.03052488,141.38275719
    [141.38180894, 43.02990263],//43.02990263,141.38180894
    [141.38151643, 43.03023202],//43.03023202,141.38151643
    [141.38133343, 43.03112631],//43.03112631,141.38133343
  ],
  r3_3: [

  ],
  r3_4: [

  ]
};

map.on('load', () => {
  //地図追加
  map.addSource('m21a', {
    type: "image",
    url: "/tsukisamu/maps/M21A.png",
    coordinates: mapcoord,
  });

  map.addSource('w21a', {
    type: "image",
    url: "/tsukisamu/maps/A.png",
    coordinates: mapcoord
  });

  map.addSource('r3_3', {
    type: "image",
    url: "/tsukisamu/maps/B.png",
    coordinates: mapcoord
  });

  map.addSource('r3_4', {
    type: "image",
    url: "/tsukisamu/maps/N.png",
    coordinates: mapcoord
  });

  map.addLayer({id: "m21a", source: "m21a", type: "raster", paint: {}, style: {}});
  map.addLayer({id: "w21a", source: "w21a", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3_3", source: "r3_3", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});
  map.addLayer({id: "r3_4", source: "r3_4", type: "raster", paint: {}, style: {}, "layout": {'visibility': 'none'}});

   //ルート追加
  map.addSource('route_m21a', {
    type: 'geojson',
    data: '/tsukisamu/routes/m21a.geojson'
  });
  map.addSource('route_w21a', {
    type: 'geojson',
    data: '/tsukisamu/routes/w21a.geojson',
  }); 
/*   map.addSource('m21_3', {
    type: 'geojson',
    data: './route/route_m21_3.geojson'
  }); 
  //map.addLayer({id: 'outline', type: 'line', source: 'route_r3-1', paint: {'line-width': 0.5, 'line-color': 'black', 'line-gap-width': 2.1,'line-dasharray': [1, 1]}});
  //点線じゃないからダメだった。*/

  map.addLayer({
    id: 'route_m21a',
    type: 'line',
    source: 'route_m21a',
    //"layout": {'visibility': 'none'},
    paint: {
      'line-width': 2,
      'line-color':[
        'interpolate',
        ['linear'],
        ['get', 'standing'],
        1, '#ff1493',
        2, '#0000cd',
        3, '#d2691e',
        4, '#8a2be2'
      ],
      'line-dasharray': [3, 3],
    },
  });
  
  map.addLayer({
    id: 'route_w21a',
    type: 'line',
    source: 'route_w21a',
    "layout": {'visibility': 'none'},
    paint: {
      'line-width': 2,
      'line-color':[
        'interpolate',
        ['linear'],
        ['get', 'standing'],
        1, '#ff1493',
        2, '#0000cd',
        3, '#d2691e',
      ],
      'line-dasharray': [3, 3],
    },
  });

  //chat gpt
  // legend all off
  function hideAllLegends() {
    var allLegends = document.querySelectorAll('.legend');
    allLegends.forEach(function(legend) {
        legend.style.display = 'none';
    });
  }

  // show selected legend
  function showSelectedLegend(selectedCourse) {
    var legendToShow = document.getElementById(selectedCourse);
    if (legendToShow) {
        legendToShow.style.display = 'block'; // もしくは 'inline-block' など、適切な表示方法に応じて設定
    }
  }

  //chatGPT
  //function to create options depending on 
  function updateSecondDropdown(targetCourseCoordinates) {
    length = targetCourseCoordinates.length-3;
    var optionsHTML = "<option value='99'>All</option>";
    optionsHTML += "<option value='0'>△-1</option>";
    for (var i = 1; i <= length; i++) {
      optionsHTML += "<option value='" + i + "'>" + i + "-" + (i + 1) + "</option>";
    }
    optionsHTML += "<option value='"+i+"'>"+ i + "-◎</option>";
    secondDropdown.innerHTML = "<label><b>Leg</b></label><br><select id= 'leg'>" + optionsHTML + "</select><p>レッグ毎に表示可能です</p>";

    document.getElementById(('leg')).addEventListener('change', function() {
      //get value
      let selectedValue = parseInt(this.value);
      if (selectedValue === 99) {
        // fit map
        map.fitBounds(
          [mapcoord[3],mapcoord[1]], {bearing: turfbearing, zoom: 15}
        );
        } else {
          // fit leg
          console.log(targetCourseCoordinates[selectedValue]);
          console.log(targetCourseCoordinates[selectedValue+1]);
          let legstart = targetCourseCoordinates[selectedValue];
          let legend = targetCourseCoordinates[selectedValue+1];
          //console.log(legstart, legend);
          let legBearing = bearing(legstart,legend);
          let mulpoints = multiPoint([legstart,legend]);
          console.log(mulpoints);
          let legBbox = bbox(mulpoints);  //get geojson, infinity :D
          console.log(legBbox);
          let sw = [legBbox[0], legBbox[1]];
          let ne = [legBbox[2], legBbox[3]];
          let v3 = [sw, ne];
          console.log(v3);
          map.fitBounds(v3, {
            padding: {top: 100, bottom:100}, //, left: 40, right: 40
            bearing: legBearing}
          ); 
        }
      }
    )
  };

  //reset
  let selectedCourse = "m21a";
  let visibleMap = "m21a";
  let visibleRoute = "route_" + visibleMap;
  console.log(visibleRoute);
  let targetCourseCoordinates = courseCoordinates[visibleMap];

  hideAllLegends()
  showSelectedLegend(visibleMap); 
  updateSecondDropdown(targetCourseCoordinates);

  //event lister, detecting chaning pul-down
  document.getElementById(('courseSelect')).addEventListener('change', function() {
    //turn off visible map
    map.setLayoutProperty(visibleMap, 'visibility', 'none');

    //turn off visible route
    map.setLayoutProperty(visibleRoute, 'visibility', 'none');
    
    //store selected value
    selectedCourse = this.value;
    visibleRoute = "route_"+selectedCourse;

    //make selected map visible
    map.setLayoutProperty(selectedCourse, 'visibility', 'visible');
    map.setLayoutProperty(visibleRoute, 'visibility', 'visible');
  
    visibleMap = selectedCourse;    
    
    hideAllLegends(); // hide all legend
    showSelectedLegend(selectedCourse); //show selected legend

    
    //LEG
    targetCourseCoordinates = courseCoordinates[selectedCourse];
    //console.log(targetCourseCoordinates);
    updateSecondDropdown(targetCourseCoordinates); //creating pul-down&event listner
  });
});

