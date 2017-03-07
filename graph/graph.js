var d3 = require('d3');

const graph = () => {
    console.log('test',d3);
    d3.select("body").selectAll("p").data([4, 8, 15, 16, 23, 42]).enter().append("p").text(d => "I'm number " + d + "!");
}

module.exports = graph;