const fetch = require('isomorphic-fetch')
require('babel-polyfill')
const fs = require('fs')

const verbs = [
  // 'roll',
  // 'crease',
  // 'fold',
  // 'store',
  'tension',
  'bend',
  // 'shorten',
  'twist',
  // 'dapple',
  // 'crumple',
  // 'shave',
  // 'tear',
  // 'chop',
  // 'splat',
  // 'drop',
  // 'remove',
  'simplify',
  // 'differ',
  // 'disarrange',
  // 'open',
  // 'mix',
  // 'splash',
  // 'knot',
  // 'spell',
  // 'droop',
  // 'flow',
  // 'curve',
  // 'list',
  // 'inlay',
  // 'impress',
  // 'fire',
  // 'flood'
  // 'smear',

  'rotate',
  'swirl',
  // 'support',
  // 'hook',
  // 'suspend',
  // 'spread',
  // 'hang',
  // 'collect',
  // 'grasp',
  // 'tighten',
  // 'bundle',
  // 'keep',
  // 'gather',
  // 'scatter',
  // 'arrange',
  // 'repair',
  // 'discard'
  // 'pair',
  // 'distribute',
  // 'subject',
  // 'complement',
  // 'enclose',
  // 'surround',
  'encircle'
  // 'hide',
  // 'cover',
  // 'wrap',
  // 'dig'
  // 'tie',
  // 'bind',
  // 'weave',
  // 'join',
  // 'match',
  // 'laminate',
  // 'bond',
  // 'hinge',
  // 'mark',
  // 'expand',
  // 'dilute',
  // 'light',
  // 'modulate',
  // 'distill'
  // 'continue',
  // 'stretch',
  // 'bounce',
  // 'erase',
  // 'spray',
  // 'systematize',
  // 'refer',
  // 'force',
  // 'waves',
  // 'electromagnetic',
  // 'inertia',
  // 'ionization',
  // 'polarization',
  // 'refraction',
  // 'simultaneity'
  // 'tides',
  // 'reflection',
  // 'equilibrium',
  // 'symmetry',
  // 'friction',
  // 'mapping',
  // 'location',
  // 'context',
  // 'time',
  // 'carbonization',
  // 'gravity',
  // 'entropy',
  // 'nature',
  // 'grouping',
  // 'layering',
  // 'felting'
]

const objectBaseUrl =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

// fetch a query
function fetchMuseumData(url) {
  return fetch(url).then(data => data.json())
}

function fromEntries(iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    console.log('obj', obj)
    obj[key] = val
    return obj
  }, {})
}

function wait(ms) {
  var start = new Date().getTime()
  var end = start
  while (end < start + ms) {
    end = new Date().getTime()
  }
}

// fetch first fifty objects by ID
function fetchObjects(data) {
  const { objectIDs, total } = data
  if (!objectIDs) {
    return new Promise((res, rej) => res([]))
  }
  // const firstFiftyObjectIDs = objectIDs.slice(0, 50)
  const promises = objectIDs.map(function(n, i) {
    let objUrl = objectBaseUrl + n

    return fetch(objUrl)
      .then(data => {
        if (!data.ok) {
          return Promise.resolve(undefined)
        }
        return data.json()
      })
      .then(data => {
        return data
      })
      .catch(e => {
        return {
          error: true,
          objUrl
        }
      })
  })
  return Promise.all(promises).then(promises => [promises, total])
}

// by verb
const searchUrl =
  'https://collectionapi.metmuseum.org/public/collection/v1/search?q='

const promises = verbs.map(verb => {
  console.log('VERB', verb)
  wait(5000)
  const searchQueryUrl = searchUrl + verb
  return fetchMuseumData(searchQueryUrl)
    .then(data => {
      return fetchObjects(data)
    })
    .then(([objs, total]) => {
      console.log('got all words for ', verb)

      const newEntry = {}
      newEntry.total = total

      const filteredObjs = objs.filter(o => !o.error)
      // group objects
      const classifications = groupBy(filteredObjs, o => o.classification)
      const newObj = {}
      for (let [key, value] of Object.entries(classifications)) {
        const listOfObjs = value
        newObj[key] = listOfObjs.map(obj => {
          const { primaryImageSmall, objectName, title } = obj
          return { primaryImageSmall, objectName, title }
        })
      }
      newEntry.objectsByClassification = newObj
      return [verb, newEntry]
    })
    .catch(e => {
      console.log('Error with verb', verb, ': \n\n\n', e)
      return [verb, 'error']
    })
})

Promise.all(promises)
  .then(res => {
    const results = fromEntries(res)
    console.log('RESULTS', JSON.stringify(results))
    console.log('Going to write file')
    fs.writeFileSync(`some_objects.json`, JSON.stringify(results))
  })
  .catch(e => {
    console.log('error in promises', e)
  })

function xah_map_to_obj(aMap) {
  const obj = {}
  aMap.forEach((v, k) => {
    obj[k] = v
  })
  return obj
}

function groupBy(list, keyGetter) {
  const map = new Map()
  if (!list) {
    return xah_map_to_obj(map)
  }
  list.forEach(item => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return xah_map_to_obj(map)
}
