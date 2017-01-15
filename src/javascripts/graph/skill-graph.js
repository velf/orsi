import * as d3 from "d3";

let width,height;
let chartWidth, chartHeight;
let margin;
let svg;
let circleWidth = 5;
let colors = d3.scaleOrdinal(d3.schemeCategory20);


var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  };

const Skill = {
  init:() => {
      svg = d3.select("#graph")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1000 800")
        .classed("svg-content-responsive", true);

      var nodes = [
            { name: "Skills"},
            { name: "HTML5", target: [0], r: 58},
            { name: "CSS3", target: [0, 1], r: 65},
            { name: "Scss", target: [0, 1, 2], r: 52},
            { name: "Compass", target: [0, 3], r: 48},
            { name: "Susy", target: [0,3,4], r: 40},
            { name: "Breakpoints", target: [0,3,4,5], r: 36},
            { name: "jQuery", target: [0, 1, 2], r: 52},
            { name: "Javascript", target: [0, 1, 2, 8], r: 37},
            { name: "PHP", target: [0,1,2], r: 20},
            { name: "Wordpress", target: [0,1,2,3,9], r: 67},
            { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], r: 68},
            { name: "Snap.svg", target: [0,1,2,7,8 ], r: 16},
            { name: "d3", target: [0,1,2,7,8], r: 25},
            { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], r: 45},
            { name: "Angular", target: [0,1,2,7,8], r: 25},
            { name: "Adobe CS", target: [0,1,2,12], r: 57},
            { name: "mySql", target: [0,9,10], r: 20},
            { name: "Grunt", target: [0,9,10], r: 37},
      ];

      var links = [];

      for (var i = 0; i < nodes.length; i++){
            if (nodes[i].target !== undefined) {
                  for ( var x = 0; x < nodes[i].target.length; x++ )
                    links.push({
                        source: nodes[i],
                        target: nodes[nodes[i].target[x]]
                    });
            };
      };

      // var data = {
      //     nodes:d3.range(0, range).map(function(d){ return {label: "l"+d , r:~~d3.randomUniform(8, 28)()}}),
      //     links:d3.range(0, range).map(function(){ return {source:~~d3.randomUniform(range)(), target:~~d3.randomUniform(range)()} })
      // }
      var data = {
          nodes:nodes,
          links:links
      }

      // Skill.setSize(data);
      Skill.drawChart(data);
  },
  setSize: (data) => {
      width = document.querySelector("#graph").clientWidth;
      height = document.querySelector("#graph").clientHeight;
      margin = {top:0, left:0, bottom:0, right:0 };

      chartWidth = width - (margin.left+margin.right);
      chartHeight = height - (margin.top+margin.bottom);

      svg.attr("width", width).attr("height", height);

      svg
          .attr("width", chartWidth)
          .attr("height", chartHeight)
          .attr("transform", "translate("+[margin.left, margin.top]+")");

  },
  drawChart: (data) => {
      var simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d) { return d.index; }))
          .force("collide",d3.forceCollide( function(d){return d.r + 30; }).iterations(16) )
          .force("charge", d3.forceManyBody().strength(-800))
          .force("center", d3.forceCenter(1000/2, 800 / 2))
          // // .force('X', d3.forceX().x(function(d) { return d._x }))
          // // .force('Y', d3.forceY().y(function(d) { return d._y }))


      var link = svg.attr("class", "links")
          .selectAll("line")
          .data(data.links)
          .enter()
          .append("line")
          .attr("stroke", palette.lightgray)
          .attr('strokewidth', '1');

      var node =  svg.selectAll('circle')
        .data(data.nodes).enter()
        .append('g')
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));


          node.append("circle")
            .attr('cx', function(d){return d.x; })
            .attr('cy', function(d){return d.y; })
            .attr('r', function(d,i){
                  if ( i > 0 ) {
                        return circleWidth + d.r;
                  } else {
                        return circleWidth + 35;
                  }
            })
            .attr('fill', function(d,i){
                  if ( i > 0 ) {
                        return colors(i);
                  } else {
                        return '#fff';
                  }
            })
            .attr('strokewidth', function(d,i){
                  if ( i > 0 ) {
                        return '0';
                  } else {
                        return '2';
                  }
            })
            .attr('stroke', function(d,i){
                  if ( i > 0 ) {
                        return '';
                  } else {
                        return 'black';
                  }
            })


        node.append("text")
          .text(function(d){ return d.name; })
          .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
          .attr('fill', function(d, i){
                if ( i > 0 && d.r < 10 ) {
                      return palette.mediumgray;
                } else if ( i > 0 && d.r >10 ) {
                      return palette.lightgray;
                } else {
                      return palette.blue;
                }
          })
          .attr('text-anchor', function(d, i) {
                return 'middle';
          })
          .attr('font-size', function(d, i){
                if (i > 0) {
                      return '0.8em';
                } else {
                      return '0.9em';
                }
          });



      var ticked = function() {
          link
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });

          node.attr('transform', function(d, i){
            return 'translate(' + d.x + ','+ d.y + ')'
          })
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
      return simulation;
  }
};

export default Skill;
