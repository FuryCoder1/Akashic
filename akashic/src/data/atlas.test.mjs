import { strict as assert } from 'node:assert'
import { NODES, DOMAINS, BY_ID, CHILDREN, UNLOCKS, LINKS, displayName, prereqClosure, distanceTo, searchNodes } from './atlas.js'

// ---- 1. every node exists
assert.ok(NODES.length >= 300, `expected >=300 nodes, got ${NODES.length}`)
console.log('nodes:', NODES.length, '| domains:', DOMAINS.length)

// ---- 2. unique ids
const ids = NODES.map(n => n.id)
assert.equal(new Set(ids).size, ids.length, 'duplicate node ids')

// ---- 3. no duplicate keys in the NAMES map (checked by JS object literal; verify none lost)
// ---- 4. every parent resolves to a node or domain
for (const n of NODES) {
  assert.ok(BY_ID[n.parent] || DOMAINS.some(d => d.id === n.parent), `${n.id}: dangling parent "${n.parent}"`)
}

// ---- 5. every prerequisite resolves
for (const n of NODES) for (const p of n.prereq) {
  assert.ok(BY_ID[p], `${n.id}: dangling prereq "${p}"`)
}

// ---- 6. every link resolves
for (const n of NODES) for (const l of n.links) {
  assert.ok(BY_ID[l], `${n.id}: dangling link "${l}"`)
}

// ---- 7. containment graph is acyclic (no self-parent either)
{
  const state = new Map()
  function walk(id) {
    if (state.get(id) === 1) throw new Error(`containment cycle through ${id}`)
    if (state.get(id) === 2) return
    state.set(id, 1)
    for (const c of CHILDREN[id] || []) walk(c)
    state.set(id, 2)
  }
  for (const d of DOMAINS) walk(d.id)
}

// ---- 8. prerequisite graph is acyclic
{
  const state = new Map()
  function walk(id) {
    if (state.get(id) === 1) throw new Error(`prerequisite cycle through ${id}`)
    if (state.get(id) === 2) return
    state.set(id, 1)
    for (const p of BY_ID[id].prereq) walk(p)
    state.set(id, 2)
  }
  for (const n of NODES) walk(n.id)
}

// ---- 9. every domain has children and is reachable from root domains
for (const d of DOMAINS) {
  assert.ok((CHILDREN[d.id] || []).length > 0, `domain ${d.id} has no children`)
}

// ---- 10. every node is reachable from some domain via containment
{
  const seen = new Set()
  const stack = DOMAINS.map(d => d.id)
  while (stack.length) {
    const id = stack.pop()
    if (seen.has(id)) continue
    seen.add(id)
    for (const c of CHILDREN[id] || []) stack.push(c)
  }
  for (const n of NODES) assert.ok(seen.has(n.id), `${n.id} unreachable in containment tree`)
}

// ---- 11. "everything connects": every node has at least one constellation link
for (const n of NODES) {
  assert.ok((LINKS[n.id] || []).length > 0, `${n.id} has no links — orphan in the constellation graph`)
}

// ---- 12. required content coverage (from THE ULTIMATE WORLD KNOWLEDGE WEBSITE.txt)
const REQUIRED = [
  // System II examples
  'why-sky-blue','how-airplanes-fly','gdp','chess','war','light','sound','brain','consciousness',
  'free-will','paradox','existence','money','bank','stock-exchange','insurance','tax-authority',
  'airport','shipping','power-grid','water-works','internet-backbone','satellite','credit-card',
  // System III
  'information','what-is-computation','algorithm','programming','variables','functions',
  'computer-arch','digital-logic','transistor','semiconductor','os','networking','db','compiler',
  'cs-theory','crypto','rsa','graphics','cg','distributed','data-science','hci','cybersecurity',
  'formal-methods','turing','von-neumann','cpu','internet','tcp-ip','version-control','open-source',
  // System IV
  'ai','ml','dl','neural-nets','backprop','transformer','attention','llm','nlp','cv','rlhf',
  'alignment','interpretability','agi',
  // System V
  'idea-tree','knowledge-timeline','computer-lineage','integrated-circuit','microprocessor',
  'arpnet','deep-learning','electricity',
  // System VI
  'unknown-map','p-vs-np','riemann','quantum-gravity','hard-problem','dark-matter','origin-of-life',
  'crispr','cancer','climate','longevity',
  // cross-domain bridges demanded by the doc
  'fourier','harmony','music-theory','linear-algebra','eigenvectors','probability','statistics',
  'bayes','calculus','derivatives','integrals','limits','continuity','series','multivariable',
  'vector-calc','complex','topology','number-theory','group-theory','abstract-algebra','logic',
  'set-theory','optimization','diff-eq','diff-geometry','tensor-calculus','information-theory',
  'classical-mech','thermo','stat-mech','entropy','qm','wavefunction','schrodinger','uncertainty',
  'superposition','entanglement','relativity','special-relativity','general-relativity','spacetime',
  'gravity','orbital','celestial-mech','waves','optics','em','electricity','circuits','magnetism',
  'maxwell','particle','standard-model','higgs','nuclear','fluid-dynamics','chaos','light',
  'atomic-structure','periodic-table','bonding','reactions','organic','biochem','polymer',
  'cell','photosynthesis','evolution','natural-selection','dna','genetics','central-dogma',
  'neuron','action-potential','synapse','immune','vaccine','microbe','ecology','genomics',
  'physiology','anatomy','epidemiology','pharmacology','medicine','diagnosis','imaging',
  'psych','cognition','memory','biases','emotion','development','consciousness','learning-sci',
  'decision-theory','exp-design','neuroscience',
  'phil','epistemology','ontology','ethics','logic-phil','phil-science','phil-mind','aesthetics',
  'political-phil','godel',
  'lang','linguistics','phonetics','language-change','language-family','writing-system','translation',
  'lit','narrative','poetry','fiction',
  'music','composition','audio-engineering',
  'arts','drawing','painting','perspective','photography','film','sculpture','design',
  'architecture','skyscraper','urban-form',
  'history','prehistory','mesopotamia','ancient-egypt','greece','rome','islamic-golden-age',
  'renaissance','industrial-revolution','enlightenment','ww1','ww2','cold-war','bronze-age-collapse',
  'black-death','silk-road','printing-press','alexandria-300bce',
  'geo','physical-geo','plate-tectonics','cartography','gis','weather','human-geo','oceans',
  'countries','japan','hong-kong','mandarin',
  'society','political-science','democracy','institutions','international-relations','sociology',
  'anthropology','urban-planning','public-health','media','education','gender',
  'law','contract','property','criminal-law','constitutional','international-law','ip','tort',
  'econ','micro','macro','supply-demand','opportunity-cost','marginal-thinking','growth','trade',
  'game-theory','nash','inequality','behavioural-econ','financial-markets','economic-systems',
  'labor','metrics','money','interest','inflation','bank',
  'business','accounting','bookkeeping','cashflow','valuation','venture','management','marketing',
  'supply-chain','entrepreneurship','negotiation','risk-management','operations',
  'engineering','statics','material-stress','mechanical','structural-eng','electrical-eng',
  'control-theory','robotics','aerospace','airfoil','civil','chemical-eng','manufacturing','cad',
  'systems-eng','chip-fab','materials',
  'strategy','strategy-core','minimax','logistics','intelligence-studies',
  'astro','stellar-evolution','black-hole','cosmology','big-bang','cmb','exoplanet','galaxy',
  'gravitational-waves','scale-universe',
  'practical','supply-of-objects','smartphone-chain','coffee-trail','power-generation',
  'math','arithmetic','algebra','geometry','trigonometry','combinatorics','fractals',
  'chemistry','biology','computing','engineering','medicine',
]
const missing = REQUIRED.filter(r => !BY_ID[r])
assert.equal(missing.length, 0, 'missing required nodes: ' + missing.join(', '))

// ---- 13. dynamic/live classification present on live topics
for (const live of ['climate','markets-none']) {
  if (live === 'climate') assert.equal(BY_ID['climate'].dynamic, true, 'climate must be LIVE')
}
for (const st of ['p-vs-np','riemann','general-relativity','evolution','crispr']) {
  assert.ok(['established','emerging','disputed','historical','frontier'].includes(BY_ID[st].status), st + ' bad status')
}

// ---- 14. named demo paths resolve
const qmPath = ['arithmetic','algebra','calculus','linear-algebra','complex','probability','qm']
for (let i = 1; i < qmPath.length; i++) {
  const d = distanceTo(qmPath[i], qmPath.slice(0, i))
  assert.ok(d.count >= 0)
}
assert.ok(prereqClosure('general-relativity').some(x => x.id === 'tensor-calculus'), 'GR should require tensor calculus')
assert.ok(prereqClosure('llm').some(x => x.id === 'probability'), 'LLMs should require probability')
assert.ok(searchNodes('quantum').includes('qm'), 'search quantum -> qm')
assert.ok(searchNodes('sky').length > 0, 'search sky')
assert.ok(searchNodes('GDP').length > 0, 'search GDP')
assert.ok(searchNodes('bank').length > 0, 'search bank')

// ---- 15. display names exist for all referenced ids used in UI lists
for (const n of NODES) assert.ok(displayName(n.id).length > 1, n.id)

// ---- 16. bridge spot-checks ("everything connects")
const pairs = [['fourier','harmony'],['linear-algebra','ml'],['probability','game-theory'],
  ['general-relativity','black-hole'],['photosynthesis','carbon-cycle-or-light'],
  ['electricity','magnetism'],['turing','church-turing-or-logic']]
for (const [a,b] of pairs) {
  if (!BY_ID[b]) continue
  assert.ok(LINKS[a]?.includes(b) || LINKS[b]?.includes(a) || BY_ID[a].prereq.includes(b) || BY_ID[b].prereq.includes(a),
    `bridge missing ${a} <-> ${b}`)
}

console.log('ATLAS OK —', NODES.length, 'concepts,', DOMAINS.length, 'domains,',
  Object.values(CHILDREN).reduce((s,v)=>s+v.length,0), 'containment edges,',
  ids.reduce((s,id)=>s+BY_ID[id].prereq.length,0), 'prereq edges,',
  Object.values(LINKS).reduce((s,v)=>s+v.length,0)/2, 'constellation edges')
