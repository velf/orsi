import * as d3 from "d3";

var width,height;
var chartWidth, chartHeight;
var margin;
var svg;
var chartLayer;

const Skill = {
  init:() => {
      svg = d3.select("#graph").append("svg");
      chartLayer = svg.append("g").classed("chartLayer", true);
      var range = 100;
      var data = {
          nodes:d3.range(0, range).map(function(d){ return {label: "l"+d ,r:~~d3.randomUniform(8, 28)()}}),
          links:d3.range(0, range).map(function(){ return {source:~~d3.randomUniform(range)(), target:~~d3.randomUniform(range)()} })
      }

      Skill.setSize(data);
      Skill.drawChart(data);

      //
      // var palette = {
      //       "lightgray": "#E5E8E8",
      //       "gray": "#708284",
      //       "mediumgray": "#536870",
      //       "blue": "#3B757F"
      //   };
      //
      // var colors = d3.scale.category20();
      //
      // var nodes = [
      //       { name: "Skills"},
      //       { name: "HTML5", target: [0], value: 58 },
      //       { name: "CSS3", target: [0, 1], value: 65 },
      //       { name: "Scss", target: [0, 1, 2], value: 52 },
      //       { name: "Compass", target: [0, 3], value: 48 },
      //       { name: "Susy", target: [0,3,4], value: 40 },
      //       { name: "Breakpoints", target: [0,3,4,5], value: 36 },
      //       { name: "jQuery", target: [0, 1, 2], value: 52 },
      //       { name: "Javascript", target: [0, 1, 2, 8], value: 37 },
      //       { name: "PHP", target: [0,1,2], value: 20 },
      //       { name: "Wordpress", target: [0,1,2,3,9], value: 67 },
      //       { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
      //       { name: "Snap.svg", target: [0,1,2,7,8 ], value: 16 },
      //       { name: "d3", target: [0,1,2,7,8], value: 25 },
      //       { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 45 },
      //       { name: "Angular", target: [0,1,2,7,8], value: 25 },
      //       { name: "Adobe CS", target: [0,1,2,12], value: 57 },
      //       { name: "mySql", target: [0,9,10], value: 20 },
      //       { name: "Grunt", target: [0,9,10], value: 37 },
      // ];
      //
      // var links = [];
      //
      // for (var i = 0; i < nodes.length; i++){
      //       if (nodes[i].target !== undefined) {
      //             for ( var x = 0; x < nodes[i].target.length; x++ )
      //               links.push({
      //                   source: nodes[i],
      //                   target: nodes[nodes[i].target[x]]
      //               });
      //       };
      // };
      //
  },
  setSize: (data) => {
      width = document.querySelector("#graph").clientWidth;
      height = document.querySelector("#graph").clientHeight;
      margin = {top:0, left:0, bottom:0, right:0 };

      chartWidth = width - (margin.left+margin.right);
      chartHeight = height - (margin.top+margin.bottom);

      svg.attr("width", width).attr("height", height);

      chartLayer
          .attr("width", chartWidth)
          .attr("height", chartHeight)
          .attr("transform", "translate("+[margin.left, margin.top]+")");

  },
  drawChart: (data) => {
      var simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d) { return d.index; }))
          .force("collide",d3.forceCollide( function(d){return d.r + 8; }).iterations(16) )
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(chartWidth / 2, chartWidth / 2))
          .force("y", d3.forceY(0))
          .force("x", d3.forceX(0));

      var link = svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(data.links)
          .enter()
          .append("line")
          .attr("stroke", "black")

      var node = svg.append("g")
          .attr("class", "nodes")
          .selectAll("circle")
          .data(data.nodes)
          .enter().append("circle")
          .attr("r", function(d){  return d.r })
          .call(d3.drag()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended));

      var ticked = function() {
          link
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });

          node
              .attr("cx", function(d) { return d.x; })
              .attr("cy", function(d) { return d.y; });
      }

      simulation.nodes(data.nodes).on("tick", ticked);
      simulation.force("link").links(data.links);

      function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
      }

      function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
      }

      function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
      }
      console.log(simulation);
      return simulation;
  }
};

export default Skill;



//
// var   w = 1000,
//       h =  800,
//       circleWidth = 5;
//

//
// var myChart = d3.select('body')
//       .append("div")
//         .classed("svg-container", true)
//
//       .append('svg')
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 1000 800")
//         .classed("svg-content-responsive", true)
//
//
// var force = d3.layout.force()
//       .nodes(nodes)
//       .links([])
//       .gravity(0.1)
//       .charge(-1000)
//       .size([w,h]);
//
//       var link = myChart.selectAll('line')
//             .data(links).enter().append('line')
//             .attr('stroke', palette.lightgray)
//             .attr('strokewidth', '1');
//
//       var node =  myChart.selectAll('circle')
//             .data(nodes).enter()
//             .append('g')
//             .call(force.drag);
//
//
//      node.append('circle')
//             .attr('cx', function(d){return d.x; })
//             .attr('cy', function(d){return d.y; })
//             .attr('r', function(d,i){
//                   console.log(d.value);
//                   if ( i > 0 ) {
//                         return circleWidth + d.value;
//                   } else {
//                         return circleWidth + 35;
//                   }
//             })
//             .attr('fill', function(d,i){
//                   if ( i > 0 ) {
//                         return colors(i);
//                   } else {
//                         return '#fff';
//                   }
//             })
//             .attr('strokewidth', function(d,i){
//                   if ( i > 0 ) {
//                         return '0';
//                   } else {
//                         return '2';
//                   }
//             })
//             .attr('stroke', function(d,i){
//                   if ( i > 0 ) {
//                         return '';
//                   } else {
//                         return 'black';
//                   }
//             });
//
//
//       force.on('tick', function(e){
//             node.attr('transform', function(d, i){
//               return 'translate(' + d.x + ','+ d.y + ')'
//             })
//
//           link
//               .attr('x1', function(d){ return d.source.x; })
//               .attr('y1', function(d){ return d.source.y; })
//               .attr('x2', function(d){ return d.target.x; })
//               .attr('y2', function(d){ return d.target.y; })
//       });
//
//
//       node.append('text')
//             .text(function(d){ return d.name; })
//             .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
//             .attr('fill', function(d, i){
//               console.log(d.value);
//                   if ( i > 0 && d.value < 10 ) {
//                         return palette.mediumgray;
//                   } else if ( i > 0 && d.value >10 ) {
//                         return palette.lightgray;
//                   } else {
//                         return palette.blue;
//                   }
//             })
//             .attr('text-anchor', function(d, i) {
//                   return 'middle';
//             })
//             .attr('font-size', function(d, i){
//                   if (i > 0) {
//                         return '.8em';
//                   } else {
//                         return '.9em';
//                   }
//             })
//
// force.start();
