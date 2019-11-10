const classificationDictionary = {
  Jewelry: 'Jewelry',
  'Jewelry, Precious Metals and Precious Stones': 'Jewelry',
  Paintings: 'Paintings',
  'Wood-Paintings': 'Paintings',
  Albums: 'Misc',
  'Chess Sets': 'Misc',
  Ephemera: 'Misc',
  'Equestrian Equipment-Bits': 'Misc',
  'Equestrian Equipment-Saddles': 'Misc',
  'Equestrian Equipment-Shaffrons': 'Misc',
  'Equestrian Equipment-Stirrups': 'Misc',
  Hardstone: 'Misc',
  Inrō: 'Misc',
  Installations: 'Misc',
  Ivories: 'Misc',
  'Ivories and Bone': 'Misc',
  'Ivory/Bone-Ornaments': 'Misc',
  'Miscellaneous-Paper': 'Misc',
  'Natural Substances': 'Misc',
  Rubbing: 'Misc',
  'Aerophone-Reed Vibrated-single reed cylindrical': 'Musical Instrument',
  'Chordophone-Harp': 'Musical Instruments',
  'Chordophone-Lute-plucked-fretted': 'Musical Instruments',
  'Chordophone-Zither-plucked': 'Musical Instruments',
  'Chordophone-Zither-plucked-long zither': 'Musical Instruments',
  'Idiophone-Shaken-jingle': 'Musical Instruments',
  'Membranophone-double-headed / cylindrical drum': 'Musical Instruments',
  'Membranophone-double-headed / waisted drum': 'Musical Instruments',
  Books: 'Manuscripts/Codexs',
  Codices: 'Manuscripts/Codexs',
  'Illustrated Books': 'Manuscripts/Codexs',
  'Manuscripts and Illuminations': 'Manuscripts/Codexs',
  Ceramics: 'Ceramics',
  'Ceramics-Containers': 'Ceramics',
  'Ceramics-Porcelain': 'Ceramics',
  'Ceramics-Pottery': 'Ceramics',
  'Ceramics-Sculpture': 'Ceramics',
  'Ceramics-Tiles': 'Ceramics',
  'Clay-Tablets-Inscribed': 'Ceramics',
  'Clay-Tablets-Inscribed-Seal Impressions': 'Ceramics',
  'Firearms-Guns-Flintlock': 'Arms & Armor',
  'Firearms-Guns-Matchlock': 'Arms & Armor',
  'Firearms-Pistols-Flintlock': 'Arms & Armor',
  'Firearms-Pistols-Revolvers': 'Arms & Armor',
  Helmets: 'Arms & Armor',
  'Shafted Weapons': 'Arms & Armor',
  Shields: 'Arms & Armor',
  Glass: 'Glass',
  'Glass-Sculpture': 'Glass',
  Bronzes: 'Metalworks',
  Coins: 'Metalworks',
  'Gold and Silver': 'Metalworks',
  'Medals and Plaquettes': 'Metalworks',
  Metal: 'Metalworks',
  'Metal-Implements': 'Metalworks',
  'Metal-Ornaments': 'Metalworks',
  Metalwork: 'Metalworks',
  'Metalwork-Bronze': 'Metalworks',
  'Metalwork-Copper': 'Metalworks',
  'Metalwork-Copper alloy': 'Metalworks',
  'Metalwork-Electrotype': 'Metalworks',
  'Metalwork-Gilt Bronze': 'Metalworks',
  'Metalwork-Gold': 'Metalworks',
  'Metalwork-Implements': 'Metalworks',
  'Metalwork-Iron': 'Metalworks',
  'Metalwork-Ornaments': 'Metalworks',
  'Metalwork-Pewter': 'Metalworks',
  'Metalwork-Silver': 'Metalworks',
  'Metalwork-Silver In Combination': 'Metalworks',
  'Miscellaneous-Buckles & Ornament': 'Metalworks',
  Silver: 'Metalworks',
  Swords: 'Metalworks',
  Architecture: 'Photography',
  Photographs: 'Photographs',
  Costumes: 'Textiles',
  'Costumes-Embroidered': 'Textiles',
  Textiles: 'Textiles',
  'Textiles-Costumes': 'Textiles',
  'Textiles-Embroidered': 'Textiles',
  'Textiles-Laces': 'Textiles',
  'Textiles-Rugs': 'Textiles',
  'Textiles-Tapestries': 'Textiles',
  'Textiles-Velvets': 'Textiles',
  'Textiles-Woven': 'Textiles',
  Drawings: 'Drawings',
  Ink: 'Drawings',
  Prints: 'Drawings',
  Calligraphy: 'Drawings/Prints',
  Enamels: 'Furniture/Decorative Arts',
  'Enamels-Champlevé': 'Furniture/Decorative Arts',
  Frames: 'Furniture/Decorative Arts',
  Furniture: 'Furniture/Decorative Arts',
  'Gaming pieces': 'Furniture/Decorative Arts',
  Lacquer: 'Furniture/Decorative Arts',
  Screens: 'Furniture/Decorative Arts',
  Vases: 'Furniture/Decorative Arts',
  Wood: 'Furniture/Decorative Arts',
  'Wood-Furniture': 'Furniture/Decorative Arts',
  Woodwork: 'Furniture/Decorative Arts',
  'Woodwork-Furniture': 'Furniture/Decorative Arts',
  'Metal-Sculpture': 'Sculpture',
  Sculpture: 'Sculpture',
  'Sculpture-Architectural-Stone': 'Sculpture',
  'Sculpture-Bronze': 'Sculpture',
  'Sculpture-Miniature': 'Sculpture',
  'Sculpture-Stone': 'Sculpture',
  'Sculpture-Wood': 'Sculpture',
  'Stone Sculpture': 'Sculpture',
  'Stone-Containers': 'Sculpture',
  'Stone-Implements': 'Sculpture',
  'Stone-Ornaments': 'Sculpture',
  'Stone-Sculpture': 'Sculpture',
  Terracottas: 'Sculpture',
  'Wood-Sculpture': 'Sculpture'
}

/* 
  Filter out only the classifications I want
*/
const classificationsFilter = [
  'Arms & Armor',
  'Ceramics',
  'Drawing/Prints',
  'Furniture/Decorative Arts',
  'Glass',
  'Jewelry',
  'Manuscript/Codexs',
  'Metalworks',
  'Musical Instruments',
  'Paintings',
  'Photography',
  'Sculpture',
  'Textiles',
  'Misc'
]

const definitions = {
  rotate: {
    POS: 'ro•tate/verb:',
    definition: 'To cause to turn or move about on axis or a center.'
  },
  encircle: {
    POS: 'en•cir•cle/verb:',
    definition: 'To form a circle around; surround.'
  },
  simplify: {
    POS: 'sim•pli•fy/verb:',
    definition: 'To make (something) simpler or easier to do or understand.'
  },
  twist: {
    POS: 'twist/verb:',
    definition: 'To form into a bent, curling, or distorted shape.'
  },
  swirl: {
    POS: 'swirl/verb:',
    definition: 'To move in a twisting or spiraling pattern.'
  },
  bend: {
    POS: 'bend/verb:',
    definition: 'To shape or force (something straight) into a curve or angle.'
  },
  tension: {
    POS: 'ten•sion/verb:',
    definition: 'The state of being stretched tight.'
  }
}

////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
var margin = { left: 120, top: 0, right: 120, bottom: 10 },
  width = 730,
  height = 740,
  innerRadius = 244,
  outerRadius = innerRadius * 1.05

var svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

d3.json(
  'https://gist.githubusercontent.com/mell0kat/f56adeba9298171baf01d83a8fb54dc1/raw/f4b9b8d549662b3eede3bf0b8e42885318576d43/the-met-data.json',
  (err, classification_verb_counts) => {
    if (err) {
      console.log('There was an error fetching data')
    } else {
      /*

      Redo verb counts to use super categories

      */
      const countVals = obj => {
        let count = 0
        for (let key in obj) {
          count = count + (obj[key] || []).length
        }
        return count
      }

      const super_classification_counts = {}
      for (let verb in classification_verb_counts) {
        const newObjectsByClassification = {}
        const { objectsByClassification } = classification_verb_counts[verb]
        for (let classification in objectsByClassification) {
          const curatedClassification =
            classificationDictionary[classification] || 'Misc'
          if (newObjectsByClassification[curatedClassification]) {
            newObjectsByClassification[
              curatedClassification
            ] = newObjectsByClassification[curatedClassification].concat(
              objectsByClassification[curatedClassification]
            )
          } else {
            newObjectsByClassification[curatedClassification] =
              objectsByClassification[curatedClassification]
          }
        }
        super_classification_counts[verb] = {
          objectsByClassification: newObjectsByClassification,
          total: countVals(newObjectsByClassification)
        }
      }

      /* 
        Transform the data into the shape I need
      */

      const newData = []
      for (let verb in super_classification_counts) {
        const { objectsByClassification, total } = super_classification_counts[
          verb
        ]
        for (let classification in objectsByClassification) {
          const newObj = {
            verb: verb,
            classification: classification,
            count: total
          }
          newData.push(newObj)
        }
      }
      const filteredData = newData.filter(
        d => classificationsFilter.indexOf(d.classification) > -1
      )

      ////////////////////////////////////////////////////////////
      /////////////////// Set-up Loom parameters /////////////////
      ////////////////////////////////////////////////////////////

      //Some default parameters of how wide the graphic is
      var pullOutSize = 20 + (30 / 135) * innerRadius
      var numFormat = d3.format(',.0f')
      // Manually sorted the inner verbs based on the order I want
      var verbOrder = [
        'rotate',
        'simplify',
        'swirl',
        'encircle',
        'bend',
        'tension',
        'twist'
      ]
      function sortVerb(a, b) {
        return (
          verbOrder.indexOf(a.toLowerCase()) -
          verbOrder.indexOf(b.toLowerCase())
        )
      }
      //Initiate the loom function with all the options

      var loom = d3
        .loom()
        // ADJUSTABLE!
        //sets the amount of white space that goes between the different outer arcs; a bigger value means more whitespace.
        .padAngle(0.05)

        .sortSubgroups(sortVerb)
        .heightInner(20)
        //this gives the percentage of the circle that will be empty to create space in the top and bottom. Supplying it as a ratio between 0 and 1, 0.2 would be the same as 20% of the circle being empty.
        .emptyPerc(0.2)

        //this width gives the horizontal distance between the inner endpoints of the strings in the center between the 2 sides of the graphic.
        .widthInner(30)
        .value(function(d) {
          return d.count
        })
        .inner(function(d) {
          return d.verb.toUpperCase()
        })
        .outer(function(d) {
          return d.classification
        })
      //Initiate the inner string function that belongs to the loom
      var string = d3
        .string()
        .radius(innerRadius)
        .pullout(pullOutSize)
      //Initiate an arc drawing function that is also needed
      var arc = d3
        .arc()
        .innerRadius(innerRadius * 1.01)
        .outerRadius(outerRadius)
      ////////////////////////////////////////////////////////////
      ///////////////////////// Colors ///////////////////////////
      ////////////////////////////////////////////////////////////

      //Colors for the unique locations

      /*
      This is how I can customize the colors!
    */
      var colors = [
        '#603813',
        '#7d6e67',
        '#773c42',
        '#c67d1f',
        '#948d71',
        '#5d504a',
        '#4b3935',
        '#7d5a32',
        '#5c4c47',
        '#998675',
        '#736357',
        '#a97840',
        '#714f4f'
      ]

      var color = d3
        .scaleOrdinal() //setting up the variable
        .domain(classificationsFilter)
        .range(colors)
      ////////////////////////////////////////////////////////////
      ///////////////////// Read in data /////////////////////////
      ////////////////////////////////////////////////////////////

      //Create a group that already holds the data
      var g = svg
        .append('g')
        .attr(
          'transform',
          'translate(' +
            (width / 2 + margin.left) +
            ',' +
            (height / 2 + margin.top) +
            ')'
        )
        .datum(loom(filteredData))

      ////////////////////////////////////////////////////////////
      ////////////////////// Draw outer arcs /////////////////////
      ////////////////////////////////////////////////////////////
      var arcGroup = g.append('g').attr('class', 'arc-outer-wrapper')
      //Create a group per outer arc, which will contain the arc path + the location name & number of words text
      var arcs = arcGroup
        .selectAll('.arc-wrapper')
        .data(function(s) {
          return s.groups
        })
        .enter()
        .append('g')
        .attr('class', 'arc-wrapper')
        .each(function(d) {
          d.pullOutSize = pullOutSize * (d.startAngle > Math.PI + 1e-2 ? -1 : 1)
        })
      //Create the actual arc paths
      var outerArcs = arcs
        .append('path')
        .attr('class', 'arc')
        .style('fill', function(d) {
          return color(d.outername)
        })
        .attr('d', arc)
        .attr('transform', function(d, i) {
          return 'translate(' + d.pullOutSize + ',' + 0 + ')' //Pull the two slices apart
        })

      ////////////////////////////////////////////////////////////
      //////////////////// Draw outer labels /////////////////////
      ////////////////////////////////////////////////////////////
      //The text needs to be rotated with the offset in the clockwise direction
      var outerLabels = arcs
        .append('g')
        .each(function(d) {
          d.angle = (d.startAngle + d.endAngle) / 2
        })
        .attr('class', 'outer-labels')
        .attr('text-anchor', function(d) {
          return d.angle > Math.PI ? 'end' : null
        })
        .attr('transform', function(d, i) {
          var c = arc.centroid(d)
          return (
            'translate(' +
            (c[0] + d.pullOutSize) +
            ',' +
            c[1] +
            ')' +
            'rotate(' +
            ((d.angle * 180) / Math.PI - 90) +
            ')' +
            'translate(' +
            26 +
            ',0)' +
            (d.angle > Math.PI ? 'rotate(180)' : '')
          )
        })

      //The outer name
      outerLabels
        .append('text')
        .attr('class', 'outer-label')
        .attr('dy', '.35em')
        .style('fill', function(d, i) {
          return color(d.outername)
        })
        .text(function(d, i) {
          return d.outername
        })

      //The value below it
      outerLabels
        .append('text')
        .attr('class', 'outer-label-value')
        .attr('dy', '1.5em')
        .text(function(d, i) {
          return numFormat(d.value) + ' objects'
        })
      ////////////////////////////////////////////////////////////
      //////////////////// Draw inner strings ////////////////////
      ////////////////////////////////////////////////////////////

      var stringGroup = g.append('g').attr('class', 'string-wrapper')
      //Draw the paths of the inner strings
      var strings = stringGroup
        .selectAll('path')
        .data(function(strings) {
          return strings
        })
        .enter()
        .append('path')
        .attr('class', 'string')
        .style('fill', function(d) {
          return d3.rgb(color(d.outer.outername)).brighter(0.2)
        })
        .style('opacity', 0.85)
        .attr('d', string)

      ////////////////////////////////////////////////////////////
      //////////////////// Draw inner labels /////////////////////
      ////////////////////////////////////////////////////////////

      var innerLabelGroup = g.append('g').attr('class', 'inner-label-wrapper')
      //Place the inner text labels in the middle
      var innerLabels = innerLabelGroup
        .selectAll('text')
        .data(function(s) {
          return s.innergroups
        })
        .enter()
        .append('text')
        .attr('class', 'inner-label')
        .attr('x', function(d, i) {
          return d.x
        })
        .attr('y', function(d, i) {
          return d.y
        })
        .attr('dy', '.35em')
        .text(function(d, i) {
          return d.name
        })
        .on('mouseover', function(d) {
          const classificationCounts =
            super_classification_counts[d.name.toLowerCase()]
              .objectsByClassification

          outerLabels.selectAll('.outer-label-value').text(function(d, i) {
            const value = (classificationCounts[d.outername] || []).length
            return numFormat(value) + ' objects'
          })

          // Update label opacities
          d3.select(this).style('font-size', '2rem')
          innerLabelGroup
            .selectAll('.inner-label')
            .filter(_d => _d.name !== d.name)
            .style('opacity', 0.2)

          // Update "appears # times" text
          d3.select('#count').text(() => {
            const verb = d.name
            const count = super_classification_counts[verb.toLowerCase()].total
            return `Appears ${count} times`
          })

          d3.select('#definition span').text(
            definitions[d.name.toLowerCase()].POS
          )
          d3.select('#definition p').text(
            definitions[d.name.toLowerCase()].definition
          )

          d3.select('#header-verb').text(() => {
            const lower = d.name.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.substring(1) + '?'
          })

          stringGroup
            .selectAll('path')
            .filter(_d => _d.inner.name !== d.name)
            .style('opacity', 0.2)

          const objectsByClass =
            super_classification_counts[d.name.toLowerCase()]
              .objectsByClassification
          let objects = []
          for (let key in objectsByClass) {
            const objs = objectsByClass[key]
            objects = objects.concat(objs)
          }

          objects = objects.filter(o => !!o)

          const imageUpdateSelection = d3
            .select('#images')
            .selectAll('.imageContainer')
            .data(objects)

          imageUpdateSelection
            .enter()
            .append('div')
            .attr('class', 'imageContainer')
            .merge(imageUpdateSelection)
            .html(
              d =>
                `<a href=${d.objectURL} target='_'><img class='image' src='${d.primaryImageSmall}'></a>`
            )
            .style('opacity', 0)
            .transition()
            .delay((d, i) => i * 150)
            .style('opacity', 1)

          imageUpdateSelection.exit().remove()
        })
        .on('mouseout', function(d) {
          stringGroup.selectAll('path').style('opacity', 0.85)

          innerLabelGroup
            .selectAll('.inner-label')
            .style('opacity', 1)
            .style('font-size', '1.6rem')
        })
    }
  }
)
