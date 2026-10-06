// =====================================================================
// AKASHIC — THE ATLAS  (System I of six)
// The global knowledge graph: domains -> fields -> concepts.
// "Knowledge is not a list. It is a graph."
//   parent : containment (the zoom-through-knowledge path)
//   prereq : global prerequisite graph ("what you need to know first")
//   links  : knowledge constellations ("everything connects")
//   status : established | emerging | disputed | historical | frontier
//   dynamic: true = LIVE KNOWLEDGE (changes continuously), false = static
// =====================================================================

export const DOMAINS = [
  { id: 'math', name: 'Mathematics', glyph: '∑', color: '#7aa2ff', tag: 'How we describe patterns', great: 'What can be known by pure reason?' },
  { id: 'physics', name: 'Physics', glyph: '⚛', color: '#8ef0e0', tag: 'How matter and energy behave', great: 'What is reality?' },
  { id: 'chemistry', name: 'Chemistry', glyph: '⌬', color: '#c9a6ff', tag: 'How matter combines', great: 'Why does matter react as it does?' },
  { id: 'biology', name: 'Biology', glyph: '⌁', color: '#9fe39a', tag: 'How life organizes itself', great: 'How does life emerge?' },
  { id: 'medicine', name: 'Medicine', glyph: '✚', color: '#ff9db0', tag: 'How we heal bodies', great: 'What makes organisms sick — and well?' },
  { id: 'computing', name: 'Computing', glyph: '⌘', color: '#ffd479', tag: 'How we automate thought', great: 'What can be computed?' },
  { id: 'ai', name: 'Artificial Intelligence', glyph: '◉', color: '#ffb26b', tag: 'How machines learn', great: 'Can a machine understand?' },
  { id: 'engineering', name: 'Engineering', glyph: '⚒', color: '#d9b38c', tag: 'How humans build things', great: 'How do we make the impossible reliable?' },
  { id: 'astro', name: 'Astronomy', glyph: '✦', color: '#a9c5ff', tag: 'How the cosmos is arranged', great: 'Where did the universe come from?' },
  { id: 'geo', name: 'Geography', glyph: '⊕', color: '#7fd6c8', tag: 'How Earth is arranged', great: 'How does place shape people?' },
  { id: 'history', name: 'History', glyph: '⌛', color: '#e0c07a', tag: 'How civilization got here', great: 'Why did societies rise and fall?' },
  { id: 'society', name: 'Society & Politics', glyph: '⚖', color: '#cfcfcf', tag: 'How societies organize power', great: 'How should power be legitimated?' },
  { id: 'law', name: 'Law', glyph: '§', color: '#b8c4d8', tag: 'How rules bind people', great: 'What is justice?' },
  { id: 'econ', name: 'Economics', glyph: '⇅', color: '#a8e6a1', tag: 'How humans allocate resources', great: 'How should scarce resources be allocated?' },
  { id: 'business', name: 'Business', glyph: '▤', color: '#d8cfa8', tag: 'How organizations create value', great: 'What makes firms succeed?' },
  { id: 'psych', name: 'Psychology', glyph: 'ψ', color: '#f0a6d8', tag: 'How minds behave', great: 'How does consciousness arise?' },
  { id: 'phil', name: 'Philosophy', glyph: '☉', color: '#e8e2c8', tag: 'How we reason about meaning', great: 'What does it mean to know?' },
  { id: 'lit', name: 'Literature', glyph: '❧', color: '#d8a8a0', tag: 'How stories carry meaning', great: 'What does narrative reveal?' },
  { id: 'lang', name: 'Languages', glyph: '文', color: '#a0d8d0', tag: 'How humans encode meaning', great: 'How does language shape thought?' },
  { id: 'music', name: 'Music', glyph: '♪', color: '#c0a8f0', tag: 'How organized sound moves us', great: 'Why does pattern become emotion?' },
  { id: 'arts', name: 'Visual Arts', glyph: '◈', color: '#f0c8a0', tag: 'How humans make images', great: 'What is beauty, and who decides?' },
  { id: 'arch', name: 'Architecture', glyph: '⌂', color: '#c8d0b8', tag: 'How humans shape space', great: 'How does built space shape behavior?' },
  { id: 'strategy', name: 'Strategy', glyph: '♟', color: '#b0b8d0', tag: 'How agents decide under conflict', great: 'How should one act against an opposing will?' },
  { id: 'practical', name: 'The Practical World', glyph: '⚏', color: '#d0d8e0', tag: 'How the world actually works', great: 'How does civilization operate day to day?' },
  { id: 'unknown', name: 'The Unknown', glyph: '?', color: '#ff6b6b', tag: "Everything we don't know", great: 'What lies beyond the edge of the map?' },
]

const N = (id, domain, parent, o) => ({
  id, domain, parent,
  level: o.level ?? 2,
  kind: o.kind ?? 'concept',
  status: o.status ?? 'established',
  dynamic: !!o.dynamic,
  tldr: o.tldr ?? '',
  intuition: o.intuition ?? '',
  formal: o.formal ?? '',
  prereq: o.prereq ?? [],
  links: o.links ?? [],
  sim: o.sim ?? null,
  evidence: o.evidence ?? null,
  unknown: o.unknown ?? null,
  unlockable: o.unlockable ?? [],
  reviewed: o.reviewed ?? '2026-09-01',
})

export const NODES = [
  // ================= MATHEMATICS =================
  N('arithmetic','math','math',{kind:'field',level:1,tldr:'Counting, place value, and the four operations — the base layer of all quantitative thought.',intuition:'Numbers are names for quantities; arithmetic is the bookkeeping of quantity.',formal:'The natural numbers with + and ×, extended to integers, rationals, reals.',unlockable:['algebra','geometry'],links:['number-theory']}),
  N('algebra','math','math',{kind:'field',level:1,tldr:'Using symbols to state general relationships and solve for unknowns.',intuition:'Algebra turns "some number that…" into an object you can push around.',formal:'Study of sets with operations satisfying axioms: groups, rings, fields.',prereq:['arithmetic'],unlockable:['calculus','linear-algebra','number-theory','abstract-algebra'],links:['logic','cs-theory']}),
  N('geometry','math','math',{kind:'field',level:1,tldr:'Shape, distance, angle, and space — reasoning about where things are.',intuition:'Geometry is vision made rigorous.',formal:'Axiomatic study of spaces via transformations and invariants.',prereq:['arithmetic'],unlockable:['trigonometry','topology','diff-geometry'],links:['perspective','relativity'],evidence:{claim:'Euclid’s Elements (~300 BCE) systematized geometry from axioms.',source:'Heath, The Thirteen Books of Euclid’s Elements (1908)',strength:'strong'}}),
  N('trigonometry','math','algebra',{level:2,tldr:'Angles and side-lengths via sine/cosine; the bridge between circles and waves.',prereq:['geometry','algebra'],unlockable:['calculus','fourier'],links:['waves','harmony']}),
  N('calculus','math','math',{kind:'field',level:1,tldr:'Mathematics of change: derivatives measure rates, integrals measure accumulation.',intuition:'Zoom in until a curve looks straight (derivative); slice up and add (integral).',formal:'Limits define f′(x)=lim_{h→0}(f(x+h)−f(x))/h and the Riemann integral.',prereq:['algebra','trigonometry'],unlockable:['diff-eq','probability','optimization','classical-mech'],links:['fourier'],sim:'derivative'}),
  N('limits','math','calculus',{level:2,tldr:'What a function approaches as its input approaches something — the foundation calculus is built on.',prereq:['algebra'],links:['continuity']}),
  N('derivatives','math','calculus',{level:2,tldr:'Instantaneous rate of change = slope of the tangent line.',intuition:'Your speedometer, not your odometer.',formal:'f′(x) = lim_{h→0} (f(x+h) − f(x)) / h.',prereq:['limits'],unlockable:['optimization','diff-eq','backprop'],links:['classical-mech'],sim:'derivative'}),
  N('integrals','math','calculus',{level:2,tldr:'Accumulation: area under a curve; the inverse operation of differentiation.',formal:'Fundamental theorem: ∫_a^b f′(x)dx = f(b) − f(a).',prereq:['derivatives'],links:['probability']}),
  N('continuity','math','calculus',{level:2,tldr:'No jumps: small input changes give small output changes.',prereq:['limits']}),
  N('series','math','calculus',{level:2,tldr:'Adding infinitely many terms; how computers represent functions like sin and eˣ.',prereq:['limits'],links:['numerical-methods','fourier']}),
  N('multivariable','math','calculus',{level:3,tldr:'Calculus with several inputs: gradients, partial derivatives, surfaces.',prereq:['calculus'],unlockable:['vector-calc','diff-geometry','optimization'],links:['ml']}),
  N('vector-calc','math','multivariable',{level:3,tldr:'Divergence, curl, flux — the grammar of fields.',prereq:['multivariable'],links:['maxwell','fluid-dynamics']}),
  N('linear-algebra','math','algebra',{kind:'field',level:2,tldr:'Vectors, matrices, and linear maps — the mathematics of multi-dimensional data.',intuition:'A matrix is a machine that stretches and rotates space.',formal:'Vector spaces over a field; linear transformations; eigen-decomposition.',prereq:['algebra'],unlockable:['ml','qml','graphics','optimization'],links:['data-science'],sim:'matrix'}),
  N('eigenvectors','math','linear-algebra',{level:3,tldr:'Directions a linear map only stretches — the invariant axes of a transformation.',formal:'Av = λv.',prereq:['linear-algebra'],links:['hilbert-space','data-science'],unlockable:['qml']},),
  N('matrix-algebra','math','linear-algebra',{level:2,tldr:'Rules for multiplying and inverting arrays of numbers.',prereq:['algebra']}),
  N('probability','math','math',{kind:'field',level:2,tldr:'The mathematics of uncertainty: chance as a measurable quantity.',intuition:'Probability is bookkeeping for ignorance done honestly.',formal:'Kolmogorov axioms (1933): a measure on events with P(Ω)=1.',prereq:['calculus','combinatorics'],unlockable:['statistics','ml','game-theory','stat-mech'],links:['bayes','entropy']}),
  N('combinatorics','math','arithmetic',{level:2,tldr:'Counting without listing: permutations, combinations, inclusion–exclusion.',prereq:['arithmetic'],links:['crypto','algo']}),
  N('statistics','math','probability',{kind:'field',level:2,tldr:'Drawing conclusions from data under uncertainty.',formal:'Estimation, hypothesis testing, confidence, regression.',prereq:['probability'],unlockable:['ml','exp-design','macro','epidemiology'],links:['data-science'],sim:'regression'}),
  N('bayes','math','probability',{level:3,tldr:'Update beliefs with evidence: P(H|E) ∝ P(E|H)·P(H).',intuition:'Evidence re-weights hypotheses instead of flipping them.',prereq:['probability'],links:['decision-theory','diagnosis','ml']}),
  N('number-theory','math','algebra',{kind:'field',level:3,tldr:'The properties of whole numbers — primes, divisibility, congruences.',formal:'Arithmetic of ℤ; modular forms; analytic number theory.',prereq:['algebra'],unlockable:['crypto'],links:['riemann']}),
  N('topology','math','geometry',{kind:'field',level:4,tldr:'What survives continuous deformation — connectedness, holes, compactness.',intuition:'To a topologist a coffee cup is a doughnut.',formal:'Open sets closed under unions and finite intersections.',prereq:['multivariable'],links:['diff-geometry','cosmology']}),
  N('abstract-algebra','math','algebra',{kind:'field',level:4,tldr:'Groups, rings, fields: structure defined purely by axioms.',prereq:['linear-algebra'],links:['group-theory','crypto']}),
  N('galois','math','abstract-algebra',{level:5,status:'historical',tldr:'Symmetries of polynomial roots prove why no radical formula exists for degree ≥ 5.',prereq:['abstract-algebra'],links:['group-theory']}),
  N('group-theory','math','abstract-algebra',{level:4,tldr:'The mathematics of symmetry; the language of particle physics.',prereq:['abstract-algebra'],links:['particle','crystallography']}),
  N('diff-eq','math','calculus',{kind:'field',level:3,tldr:'Equations relating a function to its rates of change — how nature writes its laws.',formal:'ODEs/PDEs; existence-uniqueness theorems; linear systems.',prereq:['calculus'],unlockable:['classical-mech','maxwell','control-theory','fluid-dynamics'],links:['chaos']}),
  N('diff-geometry','math','multivariable',{kind:'field',level:5,tldr:'Calculus on curved spaces: curvature, manifolds, tensors.',prereq:['vector-calc','linear-algebra'],unlockable:['general-relativity'],links:['topology']}),
  N('tensor-calculus','math','diff-geometry',{level:5,tldr:'Objects that keep their meaning when you change coordinates — the grammar of relativity.',prereq:['diff-geometry','multivariable'],links:['general-relativity']}),
  N('fourier','math','series',{level:3,tldr:'Any signal is a sum of pure frequencies.',intuition:'A prism for information: split anything wiggly into notes.',prereq:['calculus','complex'],links:['acoustics','sound','neural-nets'],sim:'fourier'}),
  N('complex','math','algebra',{level:3,tldr:'Numbers on a plane; rotations and oscillations become algebra.',prereq:['trigonometry'],links:['quantum','riemann','control-theory']}),
  N('optimization','math','multivariable',{kind:'field',level:3,tldr:'Finding best choices: gradients, constraints, convexity.',prereq:['multivariable'],unlockable:['ml','control-theory','operations'],links:['game-theory']}),
  N('logic','math','algebra',{kind:'field',level:3,tldr:'Valid inference itself, studied as a formal system.',formal:'Propositional/first-order logic; proof systems; model theory.',prereq:['algebra'],unlockable:['set-theory','cs-theory'],links:['godel','boolean']}),
  N('set-theory','math','logic',{level:4,tldr:'Collections as foundations of mathematics; infinities of different sizes.',prereq:['logic'],links:['topology']}),
  N('information-theory','math','probability',{kind:'field',level:4,tldr:'Quantifies surprise and the limits of communication (Shannon 1948).',formal:'Entropy H = −Σ p log p; channel capacity theorems.',prereq:['probability'],links:['entropy','crypto','compression','llm'],unlockable:['compression']}),
  N('numerical-methods','math','calculus',{level:3,tldr:'Approximating math on finite machines: rounding error, stability, iteration.',prereq:['calculus','linear-algebra'],links:['climate-model','simulation']}),
  N('fractals','math','geometry',{level:3,tldr:'Self-similar structure across scales; roughness with an exact dimension.',prereq:['series'],links:['coastline-paradox','growth-patterns']}),

  // ================= PHYSICS =================
  N('classical-mech','physics','physics',{kind:'field',level:2,tldr:'Motion from forces: F=ma, conservation of energy and momentum.',formal:"Newton's laws; Lagrangian and Hamiltonian reformulations.",prereq:['calculus','diff-eq'],unlockable:['relativity','fluid-dynamics','thermo','orbital','control-theory'],links:['energy','momentum','oscillation'],sim:'projectile'}),
  N('newton-laws','physics','classical-mech',{level:2,tldr:'Inertia, F=ma, action–reaction.',prereq:['classical-mech'],links:['gravity','friction'],evidence:{claim:'Published in the Principia, 1687.',source:'Newton, Philosophiæ Naturalis Principia Mathematica (1687)',strength:'strong'}}),
  N('lagrangian','physics','classical-mech',{level:4,tldr:'Derive all motion from one quantity: stationary action.',prereq:['diff-eq','multivariable'],links:['noether','quantum-field']}),
  N('oscillation','physics','classical-mech',{level:2,tldr:'Systems that swing back: springs, pendulums, waves, circuits.',prereq:['diff-eq'],links:['waves','resonance','harmony'],sim:'pendulum'}),
  N('gravity','physics','classical-mech',{level:2,tldr:'Mutual attraction of mass; at deeper levels, spacetime curvature.',prereq:['classical-mech'],unlockable:['orbital','general-relativity','cosmology'],links:['black-hole','dark-matter'],sim:'orbit'}),
  N('orbital','physics','gravity',{level:3,tldr:'Orbits, escape velocity, Kepler’s laws — how to move through the solar system.',prereq:['gravity','diff-eq'],links:['celestial-mech','satellite']}),
  N('energy','physics','classical-mech',{level:2,tldr:'The conserved currency of physical change.',prereq:['calculus'],links:['thermo','power-generation']}),
  N('momentum','physics','classical-mech',{level:2,tldr:'Mass in motion; conserved in every collision.',prereq:['classical-mech'],links:['rocketry','collisions']}),
  N('friction','physics','classical-mech',{level:2,tldr:'Surfaces resist sliding; ordered motion becomes heat.',prereq:['classical-mech'],links:['wear','walking']}),
  N('waves','physics','oscillation',{level:2,tldr:'Disturbances that carry energy without carrying matter.',prereq:['oscillation'],unlockable:['optics','acoustics','wavefunction'],links:['light','sound','fourier'],sim:'wave'}),
  N('sound','physics','waves',{level:2,tldr:'Pressure waves in air; frequency is pitch, amplitude is loudness.',prereq:['waves'],links:['acoustics','harmony'],sim:'wave'}),
  N('acoustics','physics','sound',{level:3,tldr:'How rooms, instruments, and materials shape sound.',prereq:['sound','fourier'],links:['audio-engineering','architecture']}),
  N('optics','physics','waves',{level:3,tldr:'Light as a wave: reflection, refraction, lenses, interference.',prereq:['waves'],links:['photography','microscope','laser']}),
  N('thermo','physics','classical-mech',{kind:'field',level:2,tldr:'Heat, work, entropy, and the laws that limit every engine.',formal:'Laws 0–3; dU = TdS − pdV.',prereq:['calculus'],unlockable:['stat-mech','thermodynamic-eng','chemical-eng'],links:['entropy','arrow-of-time'],sim:'gas'}),
  N('stat-mech','physics','thermo',{kind:'field',level:4,tldr:'Thermodynamics derived from counting microstates.',prereq:['thermo','probability'],links:['entropy','information-theory']}),
  N('entropy','physics','thermo',{level:3,tldr:'Energy unavailable for work; also missing information.',intuition:'"Disorder" is shorthand for: many microstates look the same.',prereq:['thermo','probability'],links:['information-theory','arrow-of-time','black-hole']}),
  N('arrow-of-time','physics','entropy',{level:5,status:'emerging',tldr:'Microphysics is time-symmetric; macroscopic time flows because entropy grows.',prereq:['stat-mech'],links:['cosmology','memory'],unknown:'Why the early universe began in such a low-entropy state.'}),
  N('em','physics','waves',{kind:'field',level:3,tldr:'Electric and magnetic fields are one entity; light is an EM wave.',prereq:['vector-calc'],unlockable:['circuits','electricity','optics'],links:['maxwell','light']}),
  N('electricity','physics','em',{level:2,tldr:'Charge, current, voltage: moving electrons as a controllable resource.',prereq:['em'],unlockable:['circuits','electrical-eng','power-grid'],links:['magnetism','semiconductor'],timeline:[{year:'1600',who:'William Gilbert',what:'De Magnete separates electricity from magnetism'},{year:'1752',who:'Franklin',what:'Kite experiment: lightning is electrical'},{year:'1800',who:'Volta',what:'Battery gives continuous current'},{year:'1820',who:'Ørsted / Ampère',what:'Current creates magnetic force'},{year:'1831',who:'Faraday',what:'Induction → generators & transformers'},{year:'1865',who:'Maxwell',what:'Light is an electromagnetic wave'},{year:'1947',who:'Bardeen/Brattain/Shockley',what:'The transistor'},{year:'Today',who:'',what:'Integrated quantum electronics'}]}),
  N('circuits','physics','electricity',{level:2,tldr:'Loops of components that steer current; Kirchhoff’s rules as accounting.',prereq:['electricity','algebra'],unlockable:['digital-logic','electronics'],links:['ohm'],sim:'circuit'}),
  N('ohm','physics','circuits',{level:2,tldr:'V = IR — voltage, current, resistance in linear proportion.',prereq:['circuits']}),
  N('magnetism','physics','em',{level:2,tldr:'Fields from moving charge; compass needles to MRI machines.',prereq:['em'],links:['electricity','earth-field']}),
  N('maxwell','physics','em',{level:4,tldr:'Four equations unify electricity, magnetism, and light.',formal:'∇·E=ρ/ε₀ · ∇·B=0 · ∇×E=−∂B/∂t · ∇×B=μ₀J+μ₀ε₀∂E/∂t',prereq:['vector-calc','em'],links:['relativity','radio'],evidence:{claim:'Predicted electromagnetic waves travelling at c; confirmed by Hertz (1887).',source:'Maxwell, A Dynamical Theory of the Electromagnetic Field (1865)',strength:'strong'}}),
  N('relativity','physics','classical-mech',{kind:'field',level:4,tldr:'Space and time adjust so physics and the speed of light hold for everyone.',prereq:['classical-mech','em','linear-algebra'],unlockable:['cosmology','black-hole','nuclear'],links:['spacetime','gravity']}),
  N('special-relativity','physics','relativity',{level:4,tldr:'Constant c ⇒ time dilation, length contraction, E=mc².',prereq:['em','algebra'],unlockable:['general-relativity','particle'],links:['lorentz'],sim:'relativity'}),
  N('general-relativity','physics','relativity',{kind:'field',level:5,tldr:'Gravity is spacetime curvature; matter tells geometry how to bend.',formal:'Gμν + Λgμν = (8πG/c⁴) Tμν',prereq:['tensor-calculus','diff-geometry','special-relativity'],unlockable:['black-hole','cosmology','gravitational-waves'],links:['gps-corrections','mercury-perihelion'],sim:'geodesic'}),
  N('spacetime','physics','relativity',{level:4,tldr:'One 4D manifold whose intervals, not times, are invariant.',prereq:['special-relativity'],links:['causality','light-cone']}),
  N('lorentz','physics','special-relativity',{level:4,tldr:'The coordinate transform that leaves c unchanged.',prereq:['linear-algebra','special-relativity'],links:['spacetime']}),
  N('qm-core','physics','physics',{kind:'field',level:3,tldr:'The quantum realm: discreteness, superposition, uncertainty.',prereq:['calculus'],links:['photoelectric','planck']}),
  N('qm','physics','qm-core',{kind:'field',level:4,tldr:'Outcomes are probabilities of amplitudes; measurement matters.',formal:'|ψ⟩ in Hilbert space; iħ∂ₜ|ψ⟩ = Ĥ|ψ⟩; Born rule.',prereq:['linear-algebra','complex','probability','diff-eq'],unlockable:['chemistry-bonding','semiconductor','nuclear','quantum-computing'],links:['uncertainty','wavefunction','hilbert-space'],status:'established',sim:'wavepacket'}),
  N('wavefunction','physics','qm',{level:4,tldr:'A complex amplitude field whose squared magnitude gives probabilities.',prereq:['qm','complex'],links:['schrodinger','hilbert-space'],sim:'wavepacket'}),
  N('schrodinger','physics','wavefunction',{level:4,tldr:'The wave equation of quantum mechanics: iħ ∂ψ/∂t = Ĥψ.',prereq:['diff-eq','wavefunction'],links:['tunneling'],evidence:{claim:'Reproduced the hydrogen spectral lines (1926).',source:'Schrödinger, Annalen der Physik 79 (1926)',strength:'strong'}}),
  N('hilbert-space','physics','qm',{level:5,tldr:'Infinite-dimensional inner-product space — home of quantum states.',prereq:['linear-algebra','functional-analysis'],links:['eigenvectors']}),
  N('functional-analysis','math','hilbert-space',{level:6,tldr:'Analysis on function spaces: operators, completeness, spectra.',prereq:['multivariable','set-theory'],links:['measure-theory']}),
  N('uncertainty','physics','qm',{level:4,tldr:'Conjugate quantities cannot both be sharp: ΔxΔp ≥ ħ/2.',prereq:['fourier','qm'],links:['measurement-problem'],sim:'wavepacket'}),
  N('superposition','physics','qm',{level:4,tldr:'States add; amplitudes interfere before measurement.',prereq:['qm'],links:['entanglement','interference']}),
  N('entanglement','physics','qm',{level:5,tldr:'Correlated states with no separable description; Bell-tested.',prereq:['superposition','probability'],links:['bell','quantum-computing'],status:'established'}),
  N('bell','physics','entanglement',{level:5,tldr:'Inequalities that rule out local hidden variables; experiments violate them.',prereq:['entanglement','statistics'],links:['locality'],evidence:{claim:'Bell inequality violated in increasingly loophole-free tests.',source:'Aspect et al., Phys. Rev. Lett. 49 (1982); 2022 Nobel Prize',strength:'strong'}}),
  N('particle','physics','qm',{kind:'field',level:5,tldr:'Quarks, leptons, bosons: the Standard Model’s catalogue.',prereq:['qm','special-relativity','group-theory'],links:['standard-model','cosmology'],status:'established'}),
  N('quantum-field','physics','particle',{level:6,tldr:'Fields are fundamental; particles are quantized excitations.',prereq:['qm','special-relativity','complex'],links:['standard-model','quantum-gravity']}),
  N('standard-model','physics','particle',{level:6,tldr:'SU(3)×SU(2)×U(1) gauge theory of known particles; extraordinarily precise.',prereq:['quantum-field','group-theory'],links:['higgs'],status:'established'}),
  N('higgs','physics','standard-model',{level:6,tldr:'A field with nonzero vacuum value gives particles mass.',prereq:['quantum-field'],links:['lhc'],evidence:{claim:'Higgs boson observed near 125 GeV.',source:'ATLAS & CMS, Physics Letters B 716 (2012)',strength:'strong'}}),
  N('nuclear','physics','particle',{level:4,tldr:'Binding energy of nuclei: fission, fusion, decay, dose.',prereq:['qm'],links:['stellar-evolution','reactor','imaging'],sim:'decay'}),
  N('fluid-dynamics','physics','classical-mech',{kind:'field',level:3,tldr:'Moving liquids and gases: pressure, flow, turbulence.',prereq:['vector-calc','diff-eq'],links:['airfoil','weather','navier-stokes'],sim:'fluid'}),
  N('navier-stokes','physics','fluid-dynamics',{level:6,kind:'problem',status:'frontier',tldr:'Do smooth 3D solutions always exist? Unproven — a Millennium Problem.',prereq:['fluid-dynamics','diff-eq'],links:['turbulence'],unknown:'Existence and smoothness in 3D remains unsolved.'}),
  N('plasma','physics','em',{level:5,tldr:'Ionized gas: stars, neon signs, fusion attempts.',prereq:['em','thermo'],links:['solar-flare','aurora']}),
  N('condensed-matter','physics','qm',{kind:'field',level:5,tldr:'Collective behaviour of many-body matter: crystals, superconductors.',prereq:['qm','stat-mech'],links:['semiconductor','superconductivity','materials']}),
  N('superconductivity','physics','condensed-matter',{level:6,status:'emerging',tldr:'Zero resistance below a critical temperature.',prereq:['condensed-matter','qm'],links:['mri','room-temp-superconductor'],unknown:'Ambient-pressure room-temperature superconductivity is unresolved; high-profile claims were retracted.'}),
  N('chaos','physics','classical-mech',{level:3,tldr:'Deterministic systems whose sensitivity to initial conditions defeats long prediction.',prereq:['diff-eq'],links:['weather','three-body','population-dynamics']}),
  N('light','physics','optics',{level:2,tldr:'Visible EM radiation; photons with wave and particle faces.',prereq:['em'],links:['photosynthesis','photoelectric','relativity'],sim:'wave'}),
  N('photoelectric','physics','light',{level:3,tldr:'Light ejects electrons only above a threshold frequency — evidence for photons.',prereq:['light','qm'],links:['solar-cell'],evidence:{claim:'Photon explanation verified experimentally (Millikan 1916).',source:'Einstein, Annalen der Physik 17 (1905)',strength:'strong'}}),

  // ================= CHEMISTRY =================
  N('atomic-structure','chemistry','chemistry',{level:2,tldr:'Nucleus plus quantized electron shells; chemistry follows from the outermost ones.',prereq:['qm'],unlockable:['bonding','periodic-table'],links:['spectroscopy'],sim:'atom'}),
  N('periodic-table','chemistry','atomic-structure',{kind:'field',level:2,tldr:'Elements ordered by proton count; columns share valence and reactivity.',prereq:['atomic-structure'],unlockable:['bonding','reactions','materials'],links:['mendeleev'],sim:'periodic'}),
  N('bonding','chemistry','atomic-structure',{kind:'field',level:2,tldr:'Atoms share or transfer electrons: covalent, ionic, metallic, hydrogen bonds.',prereq:['atomic-structure'],unlockable:['organic','reactions','dna'],links:['molecular-geometry','materials']}),
  N('molecular-geometry','chemistry','bonding',{level:3,tldr:'Electron-pair repulsion predicts shape; shape predicts function.',prereq:['bonding'],links:['drug-design']}),
  N('reactions','chemistry','bonding',{kind:'field',level:2,tldr:'Rearrangements of bonds obeying conservation of mass and charge.',prereq:['bonding'],unlockable:['kinetics','equilibrium','electrochem'],links:['stoichiometry'],sim:'titration'}),
  N('stoichiometry','chemistry','reactions',{level:2,tldr:'Bookkeeping atoms with mole ratios.',prereq:['reactions','ratios']}),
  N('kinetics','chemistry','reactions',{level:3,tldr:'How fast reactions go and why: activation energy, catalysts.',prereq:['diff-eq','reactions'],links:['enzyme','autocatalysis']}),
  N('equilibrium','chemistry','reactions',{level:3,tldr:'Forward and reverse rates balance; Le Chatelier predicts shifts.',prereq:['probability','reactions'],links:['ph','habber-process']}),
  N('acid-base','chemistry','equilibrium',{level:2,tldr:'Proton donation and acceptance; pH is a logarithmic scale.',prereq:['equilibrium','logs'],links:['buffer','digestion']}),
  N('electrochem','chemistry','reactions',{level:3,tldr:'Redox reactions that move electrons through wires: batteries and plating.',prereq:['reactions','electricity'],links:['battery','corrosion'],sim:'circuit'}),
  N('organic','chemistry','bonding',{kind:'field',level:3,tldr:'Carbon frameworks: functional groups, mechanisms, synthesis.',prereq:['bonding','reactions'],unlockable:['biochem','polymer'],links:['petrochem']}),
  N('polymer','chemistry','organic',{level:3,tldr:'Long repeating chains: plastics, rubber, proteins, DNA.',prereq:['organic'],links:['plastics','protein','materials']}),
  N('biochem','chemistry','organic',{kind:'field',level:4,tldr:'The chemistry of living molecules: enzymes, metabolism, DNA.',prereq:['organic'],links:['photosynthesis','dna','metabolism']}),
  N('thermo-chem','chemistry','thermo',{level:3,tldr:'Energy flows in reactions: enthalpy, entropy, free energy.',prereq:['thermo','reactions'],links:['metabolism','fuel']}),
  N('crystallography','chemistry','periodic-table',{level:4,tldr:'X-ray diffraction reveals atomic arrangement.',prereq:['waves','lattice'],links:['dna','minerals','chip-fab']}),

  // ================= BIOLOGY =================
  N('cell','biology','biology',{level:2,tldr:'Membrane-bound chemistry that maintains itself and copies itself.',prereq:['biochem'],unlockable:['genetics','physiology','microbe'],links:['mitochondria'],sim:'cell'}),
  N('photosynthesis','biology','cell',{level:2,tldr:'Light splits water and fixes CO₂ into sugar; most food chains start here.',formal:'6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ (light reactions → Calvin cycle).',prereq:['biochem','light'],links:['carbon-cycle','crop-yield','solar-cell'],sim:'photosynthesis',evidence:{claim:'The O₂ released comes from water, shown by isotope labelling.',source:'Ruben & Kamen, Nature 154 (1944)',strength:'strong'}}),
  N('respiration','biology','cell',{level:2,tldr:'Cells extract energy from glucose using oxygen via the electron transport chain.',prereq:['biochem','cell'],links:['metabolism','exercise']}),
  N('evolution-core','biology','biology',{kind:'field',level:2,tldr:'Life’s history and its mechanism.',prereq:['cell'],links:['fossil-record','darwin']}),
  N('evolution','biology','evolution-core',{kind:'field',level:2,tldr:'Descent with modification: variation + heritability + differential survival.',formal:'Population genetics: allele frequency change under selection, drift, migration, mutation.',prereq:['probability','genetics'],unlockable:['ecology','behavioral-eco'],links:['natural-selection','antibiotic-resistance'],status:'established',sim:'evolution'}),
  N('natural-selection','biology','evolution',{level:2,tldr:'Traits that aid reproduction accumulate; nothing intends it.',prereq:['evolution','probability'],links:['peppered-moth','sexual-selection'],evidence:{claim:'Observed in real time (Grant finches, E. coli LTEE).',source:'Grant & Grant, Science 317 (2007)',strength:'strong'}}),
  N('dna','biology','genetics',{level:2,tldr:'Base-paired polymer storing hereditary information; replication by complementarity.',prereq:['biochem','bonding'],unlockable:['transcription','crispr','forensics'],links:['central-dogma','double-helix']}),
  N('genetics','biology','dna',{kind:'field',level:2,tldr:'Heredity via discrete units (genes) carried on chromosomes.',prereq:['cell'],unlockable:['genomics','crispr'],links:['punnett-square','mutation','mendel'],sim:'punnett'}),
  N('central-dogma','biology','dna',{level:3,tldr:'DNA → RNA → protein; information rarely runs backwards.',prereq:['dna'],links:['transcription','retrovirus']}),
  N('transcription','biology','central-dogma',{level:3,tldr:'Genes copied to mRNA by RNA polymerase; regulation happens mostly here.',prereq:['central-dogma'],links:['mrna-vaccine','epigenetics']}),
  N('crispr','biology','genetics',{kind:'field',level:5,status:'emerging',tldr:'Programmable molecular scissors (Cas9 + guide RNA) edit genomes.',prereq:['genetics','dna','enzyme'],links:['gene-therapy','bioethics-editing'],evidence:{claim:'Approved therapeutic use for sickle cell disease (2023).',source:'Frangoul et al., NEJM 384 (2021); regulatory approvals 2023',strength:'strong'}}),
  N('neuro-core','biology','biology',{kind:'field',level:2,tldr:'The nervous system: cells, circuits, systems, behaviour.',prereq:['cell'],links:['brain','psych']}),
  N('neuron','biology','neuro-core',{level:2,tldr:'A cell transmitting electrochemical signals along axons, talking at synapses.',prereq:['cell','electricity'],unlockable:['action-potential','synapse'],links:['brain','ion-channel'],sim:'neuron'}),
  N('action-potential','biology','neuron',{level:3,tldr:'All-or-none voltage spike from ion-channel cascades; coded by firing rate.',formal:'Hodgkin–Huxley: C dV/dt = −Σ I_ion + I_ext.',prereq:['neuron','circuits'],links:['nerve-impulse','anesthesia'],sim:'neuron',evidence:{claim:'Ionic basis of action potentials quantified in the squid axon.',source:'Hodgkin & Huxley, J. Physiol. 117 (1952)',strength:'strong'}}),
  N('synapse','biology','neuron',{level:3,tldr:'Chemical gap where neurotransmitters flip the next cell’s odds of firing.',prereq:['action-potential'],links:['neurotransmitter','plasticity','drug-action']}),
  N('brain','biology','neuro-core',{kind:'field',level:3,tldr:'~86 billion neurons in layered recurrent networks; regions specialize yet depend.',prereq:['neuron'],unlockable:['consciousness','connectome','memory'],links:['neural-nets','psych']}),
  N('immune','biology','physiology',{kind:'field',level:3,tldr:'Layered self/non-self discrimination: barriers, innate cells, adaptive memory.',prereq:['cell','genetics'],links:['vaccine','autoimmune','cancer-immuno'],sim:'immune'}),
  N('vaccine','biology','immune',{level:3,tldr:'Trained immunity: show an antigen safely so memory responds faster next time.',prereq:['immune'],links:['herd-immunity','mrna-vaccine'],evidence:{claim:'Smallpox eradicated globally in 1980 by vaccination.',source:'WHO, Global Eradication of Smallpox (1980)',strength:'strong'}}),
  N('microbe','biology','cell',{kind:'field',level:2,tldr:'Bacteria, viruses, fungi: tiny replicators shaping health, climate, evolution.',prereq:['cell'],links:['gut-microbiome','antibiotics','fermentation','pandemic']}),
  N('ecology','biology','evolution',{kind:'field',level:2,tldr:'Populations, niches, food webs, energy flow, nutrient cycles.',prereq:['evolution','statistics'],links:['biodiversity','climate','carrying-capacity'],sim:'predator-prey'}),
  N('genomics','biology','genetics',{kind:'field',level:4,status:'emerging',tldr:'Reading and comparing whole genomes at scale.',prereq:['genetics','data-science','algo'],links:['personalized-medicine','ancient-dna']}),
  N('physiology','biology','cell',{kind:'field',level:3,tldr:'How organ systems maintain regulated function (homeostasis).',prereq:['cell','diff-eq'],links:['organ-systems','exercise','medicine']}),
  N('origin-of-life','biology','biochem',{kind:'problem',level:6,status:'frontier',tldr:'How did self-sustaining replication arise from chemistry?',prereq:['biochem','evolution'],links:['rna-world','abiogenesis'],unknown:'No consensus pathway from prebiotic chemistry to the first cell.'}),
  N('cancer','biology','cell',{kind:'field',level:4,status:'emerging',tldr:'Multistep evolution of somatic cells escaping growth controls.',prereq:['genetics','evolution','cell'],links:['oncogene','immunotherapy','screening'],unknown:'Metastasis prediction and durable cures for solid tumours remain open.'}),

  // ================= COMPUTING =================
  N('what-is-computation','computing','computing',{level:0,tldr:'Computation is executing precise instructions on symbols; some things are provably not computable.',prereq:[],unlockable:['algorithm','programming'],links:['turing','church-turing']}),
  N('information','computing','what-is-computation',{level:0,tldr:'Information is reduction of uncertainty, measured in bits.',prereq:[],links:['entropy','information-theory','compression']}),
  N('algorithm','computing','what-is-computation',{kind:'field',level:1,tldr:'A finite unambiguous recipe; efficiency measured in Big-O.',prereq:['what-is-computation'],unlockable:['data-structures','complexity'],links:['sorting','recursion'],sim:'sorting'}),
  N('programming','computing','algorithm',{kind:'field',level:1,tldr:'Writing executable intent in a formal language; debugging is science.',prereq:['algorithm'],unlockable:['compiler','software-eng'],links:['type-theory','testing'],sim:'code'}),
  N('variables','computing','programming',{level:1,tldr:'Named storage whose contents can change.',prereq:['programming'],links:['scope','assignment']}),
  N('functions','computing','programming',{level:1,tldr:'Reusable mappings from inputs to outputs — the unit of abstraction.',prereq:['variables'],links:['lambda','recursion']}),
  N('data-structures','computing','algorithm',{kind:'field',level:1,tldr:'Organizing data so needed operations are cheap: arrays, trees, hashes, graphs.',prereq:['algorithm','programming'],unlockable:['db','algo-design'],links:['cache','memory-layout'],sim:'tree'}),
  N('algo-design','computing','data-structures',{kind:'field',level:2,tldr:'Design and analysis of efficient procedures: divide-and-conquer, greedy, DP, flow.',prereq:['data-structures','discrete-math'],links:['np-complete','graph-theory','optimization'],sim:'sorting'}),
  N('computer-arch','computing','digital-logic',{kind:'field',level:1,tldr:'Datapaths, pipelines, caches, memory hierarchies: how hardware runs instructions.',prereq:['digital-logic'],unlockable:['os','parallel'],links:['cpu','gpu'],sim:'alu'}),
  N('digital-logic','computing','circuits',{level:1,tldr:'Boolean gates assembled into adders, multiplexers, registers, ALUs.',prereq:['boolean','circuits'],unlockable:['computer-arch','vlsi'],links:['transistor'],sim:'logic'}),
  N('boolean','computing','logic',{level:1,tldr:'Algebra of true/false; two values suffice to express all logic and arithmetic.',prereq:['logic'],unlockable:['digital-logic'],links:['shannon']}),
  N('transistor','computing','semiconductor',{level:2,tldr:'A voltage-controlled switch; billions per chip made computing possible.',prereq:['semiconductor'],unlockable:['integrated-circuit'],links:['chip-fab','moore-law']}),
  N('semiconductor','physics','condensed-matter',{level:3,tldr:'Materials whose conductivity is engineered by doping.',prereq:['qm','materials'],links:['diode','solar-cell','transistor']}),
  N('os','computing','computer-arch',{kind:'field',level:1,tldr:'Resource referee: processes, virtual memory, filesystems, scheduling.',prereq:['computer-arch','data-structures'],links:['concurrency','virtualization'],sim:'scheduler'}),
  N('networking','computing','os',{kind:'field',level:1,tldr:'Layered protocols move packets across heterogeneous links (TCP/IP).',prereq:['os','probability'],links:['internet','routing','latency'],sim:'packet'}),
  N('db','computing','data-structures',{kind:'field',level:1,tldr:'Persistent concurrent queryable data with consistency guarantees.',prereq:['data-structures','relational-algebra'],links:['sql','cap-theorem'],sim:'query'}),
  N('relational-algebra','computing','db',{level:2,tldr:'Set operations (select, project, join) as the math behind SQL.',prereq:['set-theory'],links:['sql']}),
  N('compiler','computing','programming',{kind:'field',level:2,tldr:'Translation pipeline: lex → parse → optimize → emit machine code.',prereq:['automata','data-structures'],links:['jit','llvm'],sim:'compile'}),
  N('automata','computing','formal-languages',{level:3,tldr:'Machines and grammars: regular → context-free → Turing.',prereq:['logic'],links:['regex','turing']}),
  N('formal-languages','computing','automata',{level:3,tldr:'Grammars classify what languages a machine can recognize.',prereq:['automata'],links:['chomsky','parser']}),
  N('cs-theory','computing','logic',{kind:'field',level:3,tldr:'Computability and complexity: what can be solved, and at what cost.',prereq:['logic','algorithm'],links:['turing','complexity','information-theory'],unlockable:['complexity']}),
  N('complexity','computing','cs-theory',{level:4,tldr:'Resource classes P, NP, EXP; reductions show which problems are equally hard.',prereq:['cs-theory'],links:['np-complete','p-vs-np']}),
  N('np-complete','computing','complexity',{level:4,tldr:'A class where solving any one member efficiently solves all of NP.',prereq:['complexity'],links:['p-vs-np','traveling-salesman','crypto']}),
  N('crypto','computing','number-theory',{kind:'field',level:3,tldr:'Security from hard problems: modular arithmetic, hashing, key exchange.',prereq:['number-theory','probability','complexity'],links:['rsa','post-quantum'],sim:'cipher'}),
  N('rsa','computing','crypto',{level:3,tldr:'A trapdoor function built from factoring large primes.',prereq:['crypto','number-theory'],links:['prime-factorization','tls','quantum-threat']}),
  N('graphics','computing','linear-algebra',{kind:'field',level:3,tldr:'Turning geometry and light into pixels: transforms, rasterization, ray tracing.',prereq:['linear-algebra','multivariable'],links:['cg','render-equation','gpu'],sim:'projection'}),
  N('cg','computing','graphics',{level:4,tldr:'Modeling, shading, animation: the math of believable images.',prereq:['graphics','diff-eq'],links:['mesh','shader','path-tracing']}),
  N('distributed','computing','networking',{kind:'field',level:2,tldr:'Many unreliable machines acting as one: clocks, quorum, eventual consistency.',prereq:['networking','os'],links:['consensus','cap-theorem']}),
  N('consensus','computing','distributed',{level:4,tldr:'Agreeing despite failures (Paxos/Raft/BFT); impossible async with faults.',prereq:['distributed'],links:['byzantine','blockchain']}),
  N('cap-theorem','computing','distributed',{level:4,tldr:'Consistency, Availability, Partition tolerance — pick two.',prereq:['distributed'],links:['nosql','quorum']}),
  N('concurrency','computing','os',{level:2,tldr:'Overlapping computation: races, locks, deadlocks, atomicity.',prereq:['os'],links:['parallel','actor-model']}),
  N('parallel','computing','concurrency',{level:3,tldr:'Splitting work across processors; Amdahl’s law bounds speedup.',prereq:['concurrency','computer-arch'],links:['gpu','mapreduce']}),
  N('gpu','computing','parallel',{level:3,tldr:'Thousands of simple cores with wide bandwidth — ideal for vectors.',prereq:['parallel','computer-arch'],links:['ml','cg']}),
  N('data-science','computing','statistics',{kind:'field',level:2,tldr:'Cleaning, modeling, and communicating structure in data.',prereq:['statistics','programming','linear-algebra'],links:['visualization','ml'],sim:'scatter'}),
  N('hci','computing','programming',{level:3,tldr:'Human fit of interfaces: affordances, feedback, cognitive load.',prereq:['programming','psych'],links:['design','accessibility']}),
  N('cybersecurity','computing','crypto',{kind:'field',level:2,tldr:'Threat models, attack surfaces, defence in depth.',prereq:['networking','crypto'],links:['pentest','malware']}),
  N('formal-methods','computing','logic',{level:5,tldr:'Machine-checked proofs of program correctness.',prereq:['logic','automata'],links:['verification','proof-assistants']}),
  N('turing','computing','cs-theory',{level:3,tldr:'A tape-and-rule machine defines computability; halting is undecidable.',prereq:['logic'],links:['halting','universal-machine','church-turing'],evidence:{claim:'Halting problem undecidable by diagonalization.',source:'Turing, Mind 42 (1936)',strength:'strong'}}),
  N('von-neumann','computing','computer-arch',{level:2,tldr:'Stored-program architecture: instructions live in memory beside data.',prereq:['computer-arch'],links:['cpu','fetch-decode']}),
  N('cpu','computing','computer-arch',{kind:'field',level:2,tldr:'Fetch–decode–execute with pipelining, branches, registers.',prereq:['digital-logic','von-neumann'],links:['pipeline','isa'],sim:'alu'}),
  N('internet','computing','networking',{kind:'field',level:1,dynamic:true,tldr:'Packets routed across autonomous networks: IP addressing, TCP delivery, DNS naming.',prereq:['networking'],links:['tcp-ip','submarine-cables'],sim:'packet'}),
  N('tcp-ip','computing','internet',{level:2,tldr:'Layered suite: link, internet, transport, application.',prereq:['internet'],links:['packet','routing']}),
  N('version-control','computing','programming',{level:1,tldr:'Immutable history of snapshots with branching and merging (git).',prereq:['programming','graph-theory'],links:['merge-conflict','open-source']}),
  N('open-source','computing','version-control',{level:2,dynamic:true,tldr:'Source shared under licenses; public goods maintained by distributed contributors.',prereq:['version-control'],links:['licensing','commons']}),

  // ================= AI =================
  N('ai','ai','computing',{kind:'field',level:2,dynamic:true,tldr:'Building systems that perceive, learn, decide, and generate.',prereq:['programming','linear-algebra','probability','optimization'],unlockable:['ml','reinforcement-learning','nlp','cv'],links:['neuroscience','ethics','phil-mind'],status:'emerging'}),
  N('ml','ai','ai',{kind:'field',level:2,dynamic:true,tldr:'Fit a flexible model to data, minimize loss, generalize to unseen cases.',formal:'Minimize Σ L(f(xᵢ),yᵢ) + λΩ(f).',prereq:['statistics','linear-algebra','optimization','programming'],unlockable:['dl','reinforcement-learning','nlp','cv'],links:['bias-variance','gradient-descent'],sim:'classifier'}),
  N('supervised','ai','ml',{level:2,tldr:'Learn input→output mapping from labelled examples.',prereq:['ml'],links:['classification','regression']}),
  N('unsupervised','ai','ml',{level:2,tldr:'Find structure without labels: clustering, representation, density.',prereq:['ml'],links:['clustering','embeddings']}),
  N('reinforcement-learning','ai','ml',{kind:'field',level:3,dynamic:true,tldr:'Learn a policy by trial, error, and reward across sequential decisions.',formal:'MDP (S,A,P,R,γ); Bellman equations.',prereq:['probability','ml','dynamic-programming'],links:['markov','bandits','robotics'],sim:'gridworld'}),
  N('dl','ai','ml',{kind:'field',level:3,dynamic:true,tldr:'Deep stacked layers trained by backpropagation on GPUs learn hierarchical features.',prereq:['ml','multivariable','gpu'],unlockable:['transformer','convnet','generative-models'],links:['representation','scaling-laws'],sim:'nn'}),
  N('neural-nets','ai','dl',{level:2,tldr:'Layers of weighted nonlinear units; universal approximators.',prereq:['linear-algebra','derivatives'],links:['neuron','backprop'],sim:'nn'}),
  N('backprop','ai','neural-nets',{level:3,tldr:'The chain rule applied through a computation graph to get every gradient.',formal:'∂L/∂w propagated backward layer by layer.',prereq:['derivatives','neural-nets'],links:['autodiff','gradient-descent']}),
  N('gradient-descent','ai','ml',{level:2,tldr:'Step downhill along the gradient; SGD powers most of ML.',prereq:['multivariable','ml'],links:['loss-landscape','convexity']}),
  N('transformer','ai','dl',{kind:'field',level:4,dynamic:true,status:'frontier',tldr:'Attention-only architecture: every token attends to every token — massively parallel training.',formal:'Attention(Q,K,V)=softmax(QKᵀ/√d)V with MLP blocks and residuals.',prereq:['dl','linear-algebra','probability'],links:['attention','llm','scaling-laws'],sim:'attention'}),
  N('attention','ai','transformer',{level:4,dynamic:true,tldr:'Learned content-based weighting over other positions — a soft lookup.',prereq:['transformer','softmax'],links:['embeddings','interpretability']}),
  N('llm','ai','transformer',{kind:'field',level:4,dynamic:true,status:'frontier',tldr:'Next-token prediction at scale yields in-context instruction following.',prereq:['transformer','probability','tokenization'],links:['emergence','alignment','hallucination'],unknown:'Whether scaling keeps improving capability is actively disputed.'}),
  N('tokenization','ai','llm',{level:3,tldr:'Splitting text into subword units; determines what a model can even see.',prereq:['llm'],links:['unicode','morphology']}),
  N('embeddings','ai','dl',{level:3,tldr:'Meaning as location: vectors where distance tracks similarity.',prereq:['linear-algebra','dl'],links:['semantic-search','analogy']}),
  N('nlp','ai','ml',{kind:'field',level:3,dynamic:true,tldr:'Language understanding and generation: syntax, semantics, pragmatics, evaluation.',prereq:['ml','probability','linguistics'],links:['machine-translation','sentiment']}),
  N('cv','ai','ml',{kind:'field',level:3,dynamic:true,tldr:'Structure from images and video: detection, segmentation, reconstruction.',prereq:['ml','linear-algebra','optics'],links:['convnet','medical-imaging']}),
  N('convnet','ai','cv',{level:3,tldr:'Weight-sharing filters learn translation-invariant features.',prereq:['dl','convolution'],links:['vision-cortex']}),
  N('rlhf','ai','reinforcement-learning',{level:5,dynamic:true,status:'emerging',tldr:'Train a reward model from human preferences, then optimize policy toward it.',prereq:['llm','reinforcement-learning'],links:['alignment','reward-hacking']}),
  N('alignment','ai','rlhf',{kind:'problem',level:6,status:'frontier',tldr:'Making powerful AI reliably pursue intended goals.',prereq:['rlhf','decision-theory','ethics'],links:['interpretability','instrumental-convergence'],unknown:'No accepted theory guarantees scalable alignment for very capable systems.'}),
  N('interpretability','ai','dl',{kind:'field',level:5,status:'frontier',tldr:'Reverse-engineering learned representations: features, circuits, probes.',prereq:['dl','linear-algebra'],links:['faithfulness','probing']}),
  N('bias-variance','ai','ml',{level:2,tldr:'Error decomposes into underfitting, overfitting, irreducible noise.',prereq:['ml','probability'],links:['regularization','overfit']}),
  N('overfit','ai','bias-variance',{level:2,tldr:'Memorizing noise instead of signal; caught on held-out data.',prereq:['bias-variance'],links:['dropout','generalization']}),
  N('benchmark','ai','ml',{level:3,dynamic:true,tldr:'Standard tasks and datasets to compare systems; only as good as their hygiene.',prereq:['ml','statistics'],links:['leaderboard','contamination','goodhart']}),
  N('generative-models','ai','dl',{kind:'field',level:4,dynamic:true,tldr:'Learn a distribution and sample from it: diffusion, autoregressive, VAE, GAN.',prereq:['dl','probability'],links:['diffusion','gan']}),
  N('diffusion','ai','generative-models',{level:4,dynamic:true,tldr:'Iteratively denoise random noise into structured samples.',prereq:['generative-models','stochastic-process'],links:['score-matching']}),
  N('ai-neuro','ai','neuro-core',{level:4,tldr:'A two-way street: nets inspired by brains, and brains modeled by nets.',prereq:['neural-nets','neuroscience'],links:['predictive-coding','vision-cortex']}),
  N('agi','ai','llm',{kind:'problem',level:6,status:'disputed',tldr:'Would general machine intelligence match humans on novel tasks — and how would we tell?',prereq:['llm','cognition','cs-theory'],links:['consciousness','turing-test'],unknown:'Definition and feasibility are genuinely contested among researchers.'}),

  // ================= ENGINEERING =================
  N('statics','engineering','mechanical',{level:2,tldr:'Forces in equilibrium: free-body diagrams, moments, trusses.',prereq:['classical-mech','vectors'],links:['structural-eng','material-stress']}),
  N('material-stress','engineering','statics',{level:3,tldr:'Stress, strain, yield, fatigue: how much load is too much.',prereq:['statics','materials'],links:['factor-of-safety','bridge','skyscraper']}),
  N('mechanical','engineering','engineering',{kind:'field',level:2,tldr:'Machines, mechanisms, thermodynamics, manufacturing.',prereq:['classical-mech'],links:['engine','gear','vibration']}),
  N('structural-eng','engineering','statics',{kind:'field',level:3,tldr:'Load paths in buildings and bridges; redundancy saves lives.',prereq:['material-stress'],links:['arch','truss','earthquake-engineering']}),
  N('electrical-eng','engineering','em',{kind:'field',level:2,tldr:'Power systems, signals, machines, protection.',prereq:['circuits','diff-eq'],links:['power-grid','motor','transformer']}),
  N('power-grid','engineering','electrical-eng',{level:2,dynamic:true,tldr:'Generation, transmission, distribution: instantaneous balance of supply and demand.',prereq:['electrical-eng','optimization'],links:['power-generation','renewables','blackout'],sim:'grid'}),
  N('control-theory','engineering','diff-eq',{kind:'field',level:3,tldr:'Feedback loops that stabilize systems: PID, margins, observers.',prereq:['diff-eq','complex'],links:['autopilot','robotics','thermostat'],sim:'pid'}),
  N('robotics','engineering','control-theory',{kind:'field',level:3,dynamic:true,tldr:'Perception + planning + actuation in physical loops.',prereq:['control-theory','linear-algebra','programming'],links:['kinematics','sensor-fusion','slam']}),
  N('aerospace','engineering','fluid-dynamics',{kind:'field',level:3,tldr:'Flight: lift, drag, propulsion, structures, orbits.',prereq:['fluid-dynamics','material-stress'],links:['airfoil','jet-engine','rocketry']}),
  N('airfoil','engineering','aerospace',{level:3,tldr:'Shape and angle of attack curve flow, making low pressure above the wing.',prereq:['fluid-dynamics'],links:['lift','bernoulli','stall'],sim:'airfoil'}),
  N('civil','engineering','structural-eng',{kind:'field',level:2,tldr:'Infrastructure: geotechnics, hydraulics, transportation, concrete and steel.',prereq:['statics','fluid-dynamics'],links:['dam','water-works','urban-planning']}),
  N('chemical-eng','engineering','thermo-chem',{kind:'field',level:3,tldr:'Scaling reactions: reactors, separation, heat integration, safety.',prereq:['thermo-chem','fluid-dynamics','diff-eq'],links:['distillation','refinery','fertilizer']}),
  N('manufacturing','engineering','materials',{kind:'field',level:2,tldr:'Casting, machining, forming, additive: design into parts at tolerance and cost.',prereq:['materials'],links:['tolerance','supply-chain','3d-printing']}),
  N('cad','engineering','graphics',{level:2,tldr:'Parametric geometric models driving simulation and production.',prereq:['graphics','geometry'],links:['cam','fea','digital-twin']}),
  N('systems-eng','engineering','engineering',{level:3,tldr:'Requirements, interfaces, trade studies, verification across whole programs.',prereq:['optimization','probability'],links:['failure-mode','apollo']}),
  N('chip-fab','engineering','semiconductor',{kind:'field',level:4,dynamic:true,tldr:'Lithography, etching, deposition: printing billions of transistors at nanometre scale.',prereq:['semiconductor','optics','chemical-eng'],links:['euv','supply-chain-chips','smartphone-chain']}),
  N('vlsi','engineering','digital-logic',{level:4,tldr:'Designing complete chips: RTL, placement, routing, timing closure.',prereq:['digital-logic','computer-arch'],links:['asic','fpga','eda']}),
  N('materials','engineering','chemistry',{kind:'field',level:2,tldr:'Structure ↔ processing ↔ properties: metals, ceramics, polymers, composites.',prereq:['bonding','crystallography'],links:['alloy','composite','semiconductor']}),
  N('thermodynamic-eng','engineering','thermo',{level:3,tldr:'Cycles and efficiency limits: Carnot as the ceiling.',prereq:['thermo'],links:['engine','refrigeration','power-generation']}),

  // ================= ASTRONOMY =================
  N('celestial-mech','astro','orbital',{level:2,tldr:'Newton plus Kepler predict planetary motion; perturbations explain exceptions.',prereq:['gravity','diff-eq'],links:['three-body','ephemeris']}),
  N('stellar-evolution','astro','nuclear',{kind:'field',level:3,tldr:'Gas → protostar → main sequence → giant → remnant; fusion forges elements.',prereq:['thermo','nuclear'],links:['hr-diagram','supernova','black-hole'],sim:'star'}),
  N('main-sequence','astro','stellar-evolution',{level:3,tldr:'Hydrostatic balance of gravity against fusion pressure; mass sets colour and lifespan.',prereq:['stellar-evolution'],links:['hydrostatic']}),
  N('sun','astro','stellar-evolution',{level:2,dynamic:true,tldr:'A G-type star; convection, magnetic cycles, and the fusion powering Earth.',prereq:['stellar-evolution'],links:['solar-flare','photosynthesis','space-weather']}),
  N('black-hole','astro','general-relativity',{kind:'field',level:5,tldr:'A region of spacetime from which no causal path escapes; described by mass, spin, charge.',prereq:['general-relativity','stellar-evolution','thermo','qm'],links:['event-horizon','hawking','gravitational-waves','information-paradox'],status:'established',sim:'geodesic',unknown:'Interior singularity requires quantum gravity; the information paradox is unresolved.'}),
  N('event-horizon','astro','black-hole',{level:5,tldr:'Boundary of no return: locally unremarkable, globally decisive.',prereq:['black-hole'],links:['hawking','redshift']}),
  N('hawking','astro','black-hole',{level:6,status:'emerging',tldr:'QFT in curved spacetime implies black holes radiate thermally and evaporate.',prereq:['black-hole','qm','thermo'],links:['information-paradox','entropy']}),
  N('cosmology','astro','general-relativity',{kind:'field',level:4,dynamic:true,tldr:'The universe as a whole: expansion, CMB, nucleosynthesis, dark sector.',prereq:['general-relativity','thermo','gravity'],links:['big-bang','dark-matter','dark-energy'],sim:'expansion'}),
  N('big-bang','astro','cosmology',{level:4,tldr:'A hot dense early phase inferred from expansion, the CMB, and light-element abundances.',prereq:['cosmology'],links:['nucleosynthesis','cmb'],evidence:{claim:'CMB is a 2.725 K blackbody with the predicted anisotropy spectrum.',source:'Fixsen, ApJ 507 (1998); Planck 2018 results',strength:'strong'}}),
  N('cmb','astro','big-bang',{level:4,tldr:'Fossil light from recombination, ~380,000 years after the hot big bang.',prereq:['big-bang','thermo'],links:['anisotropy','inflation']}),
  N('dark-matter','astro','cosmology',{kind:'problem',level:6,status:'frontier',tldr:'Gravitation effects require ~5× more matter than luminous matter provides.',prereq:['cosmology','gravity','particle'],links:['rotation-curves','bullet-cluster','modified-gravity'],unknown:'Its fundamental nature has never been detected non-gravitationally.'}),
  N('dark-energy','astro','cosmology',{kind:'problem',level:6,status:'frontier',tldr:'Accelerating expansion behaves like a tiny constant energy density of space.',prereq:['cosmology','general-relativity'],links:['supernova-ia','cosmological-constant','hubble-tension'],unknown:'Why vacuum energy is ~120 orders of magnitude below naive QFT estimates.'}),
  N('exoplanet','astro','orbital',{kind:'field',level:3,dynamic:true,tldr:'Detection by transit dips and radial-velocity wobble; atmospheres by spectroscopy.',prereq:['orbital','spectroscopy'],links:['transit-method','habitable-zone','biosignature']}),
  N('galaxy','astro','gravity',{level:3,tldr:'Bound star systems with rotation curves, mergers, and central black holes.',prereq:['gravity','celestial-mech'],links:['milky-way','spiral-arms','dark-matter']}),
  N('gravitational-waves','astro','general-relativity',{level:5,tldr:'Ripples in curvature from accelerating masses, detected by laser interferometry.',prereq:['general-relativity','waves','oscillation'],links:['ligo','binary-merger'],evidence:{claim:'GW150914 matched numerical-relativity waveforms.',source:'Abbott et al., PRL 116 (2016)',strength:'strong'}}),
  N('scale-universe','astro','cosmology',{kind:'object',level:2,tldr:'A powers-of-ten tour: 10⁻¹⁸ m quark to 10²⁶ m observable universe.',prereq:[],links:['orders-of-magnitude'],sim:'scale'}),

  // ================= GEOGRAPHY =================
  N('physical-geo','geo','geo',{kind:'field',level:2,tldr:'Landforms, plate tectonics, climate systems, hydrology, biomes.',prereq:['classical-mech','thermo'],links:['plate-tectonics','weather','rivers']}),
  N('plate-tectonics','geo','physical-geo',{level:3,tldr:'Lithospheric plates drift on the mantle; quakes, volcanoes, mountains follow boundaries.',prereq:['physical-geo','material-stress'],links:['earthquake','subduction','mountain-building'],evidence:{claim:'Seafloor spreading rates match magnetic stripe ages.',source:'Vine & Matthews, Nature 179 (1957)',strength:'strong'}}),
  N('cartography','geo','geometry',{level:2,tldr:'Projecting a sphere onto a plane always distorts something.',prereq:['geometry'],links:['mercator','gis','great-circle']}),
  N('gis','geo','cartography',{kind:'field',level:2,dynamic:true,tldr:'Layered spatial data: coordinates, attributes, topology, remote sensing.',prereq:['cartography','data-science'],links:['remote-sensing','urban-planning']}),
  N('climate','geo','thermo',{kind:'field',level:2,dynamic:true,tldr:'Statistics of weather over decades: energy balance, circulation, feedbacks.',prereq:['thermo','fluid-dynamics','statistics'],links:['greenhouse','climate-model','carbon-cycle'],sim:'climate',status:'established',unknown:'Cloud-feedback magnitude and regional extremes projections remain active research.'}),
  N('weather','geo','climate',{level:2,dynamic:true,tldr:'Chaotic fluid dynamics of the atmosphere; forecast skill decays within days.',prereq:['fluid-dynamics','chaos'],links:['forecast','jet-stream','hurricane']}),
  N('human-geo','geo','society',{kind:'field',level:2,tldr:'Where people live, why, and how place shapes economy and culture.',prereq:['history','econ'],links:['urbanization','migration','trade-routes']}),
  N('oceans','geo','fluid-dynamics',{level:2,tldr:'Salinity, currents, tides, pressure: the planet’s heat and carbon buffer.',prereq:['fluid-dynamics','thermo'],links:['thermohaline','sea-level','fisheries']}),
  N('countries','geo','human-geo',{kind:'object',level:2,dynamic:true,tldr:'Polities with territory, population, institutions, economy — explorable knowledge hubs.',prereq:['human-geo','law'],links:['gdp','jurisdiction','culture']}),
  N('japan','geo','countries',{kind:'object',level:2,dynamic:true,tldr:'Archipelagic case study: geography → history → technology → culture.',prereq:['countries'],links:['meiji-restoration','semiconductor-materials','urban-rail']}),
  N('hong-kong','geo','countries',{kind:'object',level:2,dynamic:true,tldr:'Deep harbour, common-law legacy, financial hub, dense vertical urbanism.',prereq:['countries'],links:['finance-hub','basic-law','container-shipping']}),

  // ================= HISTORY =================
  N('prehistory','history','history',{level:2,status:'historical',tldr:'The deep human past from stone tools to agriculture, read via archaeology and genetics.',prereq:[],links:['human-migration','domestication']}),
  N('mesopotamia','history','ancient',{level:2,status:'historical',tldr:'Cities, cuneiform writing, law codes, irrigation — record-keeping begins.',prereq:['prehistory'],links:['cuneiform','code-of-hammurabi','accounting-origins']}),
  N('ancient-egypt','history','ancient',{level:2,status:'historical',tldr:'River-state bureaucracy, monumental engineering, hieroglyphic writing.',prereq:['prehistory'],links:['pyramids','nil-flood','calendar']}),
  N('greece','history','ancient',{level:2,status:'historical',tldr:'Polis politics, philosophy, geometry-as-proof, historiography, drama.',prereq:[],links:['euclid','aristotle','democracy-athens','thucydides']}),
  N('rome','history','ancient',{level:2,status:'historical',tldr:'Law, roads, concrete, citizenship: administrative scale across three continents.',prereq:['greece'],links:['roman-law','aqueduct','republic','fall-of-rome']}),
  N('islamic-golden-age','history','medieval',{level:2,status:'historical',tldr:'Translation movement plus original work: algebra, optics, medicine, method.',prereq:['greece'],links:['al-khwarizmi','al-haytham','ibn-sina','algebra']}),
  N('renaissance','history','early-modern',{level:2,status:'historical',tldr:'Perspective, patronage, humanism, printing: art and inquiry fuse.',prereq:[],links:['printing-press','perspective','scientific-method']}),
  N('industrial-revolution','history','early-modern',{kind:'field',level:2,status:'historical',tldr:'Steam, coal, factories — the first sustained per-capita growth in history.',prereq:['thermo','manufacturing'],links:['steam-engine','factory-system','urbanization','living-standards-debate'],sim:'growth'}),
  N('enlightenment','history','early-modern',{level:2,status:'historical',tldr:'Reason, rights, empiricism turned into political programmes.',prereq:['renaissance'],links:['social-contract','empiricism','revolutions']}),
  N('ww1','history','modern',{level:2,status:'historical',tldr:'Industrialized trench warfare, alliance collapse, pandemic aftermath.',prereq:['industrial-revolution'],links:['trench-warfare','versailles','spanish-flu']}),
  N('ww2','history','modern',{level:2,status:'historical',tldr:'Total war, ideology, atomic weapons, and the postwar institutional order.',prereq:['ww1'],links:['manhattan-project','holocaust','un-founded','decolonization']}),
  N('cold-war','history','modern',{level:2,status:'historical',tldr:'Bipolar deterrence, proxy wars, space race, computational origins.',prereq:['ww2'],links:['mutually-assured-destruction','space-race','arpnet','game-theory']}),
  N('bronze-age-collapse','history','ancient',{level:3,status:'historical',tldr:'c.1177 BCE systems collapse: drought, migration, severed trade, lost literacy.',prereq:[],links:['sea-peoples','palace-economy','iron-age'],evidence:{claim:'Layered destruction horizons c.1200–1150 BCE across the eastern Mediterranean.',source:'Kaniewski et al., PLOS ONE (2013) pollen/climate data',strength:'moderate'}}),
  N('black-death','history','medieval',{level:2,status:'historical',tldr:'Y. pestis killed a third of Europe; labour scarcity reshaped wages and power.',prereq:['microbe'],links:['y-pestis','wage-shock','quarantine-origin']}),
  N('printing-press','history','renaissance',{level:2,status:'historical',tldr:'Movable type collapsed the cost of copying; Reformation, science, literacy followed.',prereq:[],links:['information-economics','reformation','standardized-spelling'],sim:'growth'}),
  N('silk-road','history','ancient',{level:2,status:'historical',tldr:'Continent-spanning relay trade in goods, ideas, pathogens, technologies.',prereq:[],links:['paper','buddhism-diffusion','plague-routes']}),
  N('alexandria-300bce','history','ancient',{kind:'object',level:3,status:'historical',tldr:'Snapshot of humanity’s intellectual state in 300 BCE: Euclid, Eratosthenes’ Earth circumference, Herophilus’ anatomy, the Stoics.',prereq:[],links:['euclid','eratosthenes','library-of-alexandria'],sim:'snapshot'}),
  N('knowledge-timeline','history','history',{kind:'object',level:1,tldr:'Humanity’s master timeline: discoveries, wars, books, inventions, crises — connected.',prereq:[],links:['idea-tree','electricity'],sim:'timeline'}),
  N('idea-tree','history','knowledge-timeline',{kind:'object',level:1,tldr:'The historical lineage of major ideas: what had to exist before this could.',prereq:[],links:['computer-lineage','electricity'],sim:'ideatree'}),
  N('computer-lineage','history','idea-tree',{kind:'object',level:2,status:'historical',tldr:'Calculators → Boolean logic → Turing machines → transistors → ICs → CPUs → internet → deep learning → generative AI.',prereq:[],links:['boole','turing','transistor','integrated-circuit','microprocessor','arpnet','deep-learning'],sim:'ideatree'}),

  // ================= SOCIETY / LAW =================
  N('political-science','society','society',{kind:'field',level:2,dynamic:true,tldr:'How power is acquired, legitimated, constrained, and exercised.',prereq:['history','econ'],links:['state','legitimacy','elections']}),
  N('democracy','society','political-science',{level:2,dynamic:true,tldr:'Rule with consent: competitive elections, civil liberties, accountability.',prereq:['political-science'],links:['republic','rule-of-law','vote-methods']}),
  N('institutions','society','political-science',{level:3,dynamic:true,tldr:'Rules of the game: norms and organizations shaping incentives over time.',prereq:['political-science','econ'],links:['property-rights','corruption']}),
  N('international-relations','society','political-science',{kind:'field',level:3,dynamic:true,tldr:'Anarchy among states: balance of power, alliances, interdependence, deterrence.',prereq:['political-science','game-theory'],links:['realism','un','deterrence','sanctions']}),
  N('sociology','society','society',{kind:'field',level:2,tldr:'Patterns in groups: stratification, networks, norms, collective behaviour.',prereq:['statistics','history'],links:['social-mobility','collective-action']}),
  N('anthropology','society','sociology',{kind:'field',level:2,tldr:'Human variation via ethnography, kinship, ritual, material culture.',prereq:['evolution','sociology'],links:['kinship','gift-economy','cultural-relativism']}),
  N('urban-planning','society','human-geo',{level:2,dynamic:true,tldr:'Zoning, transit, density, public space: design decisions allocating opportunity.',prereq:['human-geo','civil','econ'],links:['transit','gentrification','housing-supply']}),
  N('public-health','society','medicine',{kind:'field',level:2,dynamic:true,tldr:'Population-level prevention: epidemiology, sanitation, vaccination policy.',prereq:['epidemiology','statistics'],links:['sanitation','vaccine','health-economics'],sim:'epidemic'}),
  N('gender','society','sociology',{level:3,dynamic:true,status:'emerging',tldr:'Socially organized roles and identities studied across biology, psychology, law, culture.',prereq:['sociology','psych'],links:['socialization','law-equality']}),
  N('media','society','communication',{level:2,dynamic:true,tldr:'Channels, incentives, gatekeeping, attention markets, propaganda.',prereq:['communication'],links:['information-economics','journalism-ethics','platform']}),
  N('education','society','psych',{kind:'field',level:2,dynamic:true,tldr:'Deliberate cultivation of knowledge and skill: pedagogy, assessment, access.',prereq:['psych','memory'],links:['spaced-repetition','testing-effect','literacy']}),
  N('war','society','strategy',{level:2,dynamic:true,tldr:'Organized violence as policy: logistics, morale, technology, law of war.',prereq:['strategy','tech-history'],links:['logistics','deterrence','just-war']}),

  N('law','law','society',{kind:'field',level:2,dynamic:true,tldr:'Enforceable rules: sources, interpretation, remedies, procedure.',prereq:['ethics','history'],links:['contract','constitutional','criminal-law']}),
  N('contract','law','law',{level:2,dynamic:true,tldr:'Promises the state will enforce: terms, breach, damages, risk allocation.',prereq:['law','econ'],links:['enforcement','transaction-cost','ip']}),
  N('property','law','law',{level:2,dynamic:true,tldr:'Bundles of rights in things and ideas; registration makes credit possible.',prereq:['law','econ'],links:['land-title','ip','enclosure']}),
  N('criminal-law','law','law',{level:2,dynamic:true,tldr:'Acts the community punishes: mens rea, actus reus, proportionality, procedure.',prereq:['law','ethics'],links:['punishment-theory','due-process']}),
  N('constitutional','law','law',{level:3,dynamic:true,tldr:'Founding rules that allocate and limit government power, usually reviewable.',prereq:['law','political-science'],links:['separation-of-powers','judicial-review']}),
  N('international-law','law','law',{level:3,dynamic:true,tldr:'Treaties, custom, courts among sovereigns — enforcement is collective.',prereq:['law','international-relations'],links:['un-charter','law-of-sea']}),
  N('ip','law','contract',{level:3,dynamic:true,tldr:'Patents, copyright, trademarks: artificial scarcity to incentivize creation.',prereq:['law','econ'],links:['patent-thickets','copyright-term','open-source']}),
  N('tort','law','law',{level:2,dynamic:true,tldr:'Civil wrongs and negligence: duty, breach, causation, damages.',prereq:['law'],links:['liability','insurance','externalities']}),

  // ================= ECONOMICS =================
  N('micro','econ','econ',{kind:'field',level:2,tldr:'Individual and firm choice under scarcity: marginal thinking, prices, elasticity.',prereq:['calculus','statistics'],links:['supply-demand','opportunity-cost','game-theory'],sim:'supply-demand'}),
  N('supply-demand','econ','micro',{level:2,tldr:'Prices coordinate buyers and sellers; shortages and surpluses self-correct with lags.',prereq:['micro'],links:['price-controls','elasticity'],sim:'supply-demand'}),
  N('opportunity-cost','econ','micro',{level:1,tldr:'The value of the best option you gave up — the true cost of every choice.',prereq:[],links:['trade-offs','sunk-cost'],sim:'oneidea'}),
  N('marginal-thinking','econ','micro',{level:1,tldr:'Decisions happen at the margin: compare the next unit’s benefit and cost.',prereq:['derivatives'],links:['diminishing-returns','pricing']}),
  N('macro','econ','econ',{kind:'field',level:2,dynamic:true,tldr:'Aggregates: output, unemployment, inflation, growth, business cycles.',prereq:['micro','statistics','diff-eq'],links:['gdp','inflation','monetary-policy','growth'],sim:'macro'}),
  N('gdp','econ','macro',{level:2,dynamic:true,tldr:'Market value of final goods and services produced; measures activity, not welfare.',prereq:['macro'],links:['gnp','purchasing-power','growth-accounting'],evidence:{claim:'Modern national accounts developed in the 1930s–40s.',source:'Kuznets, National Income 1929–1935 (NBER, 1937)',strength:'strong'}}),
  N('inflation','econ','macro',{level:2,dynamic:true,tldr:'A sustained rise in the price level; erodes cash, redistributes debt.',prereq:['macro','money'],links:['hyperinflation','phillips-curve','monetary-policy'],sim:'macro',unknown:'Short-run drivers, expectations anchoring, and pass-through magnitudes are debated.'}),
  N('money','econ','macro',{level:1,tldr:'Unit of account, store of value, medium of exchange — a social technology of trust.',prereq:['opportunity-cost'],links:['credit','bank','gold-standard','inflation']}),
  N('bank','econ','money',{level:1,dynamic:true,tldr:'Take deposits, make loans, transform maturities — creating broad money.',prereq:['money'],links:['fractional-reserve','deposit-insurance','bank-run'],sim:'bank'}),
  N('interest','econ','money',{level:2,dynamic:true,tldr:'The price of time: compensation for deferred consumption and risk.',prereq:['money','time-value'],links:['discounting','bond-yields','mortgage']}),
  N('trade','econ','micro',{kind:'field',level:2,dynamic:true,tldr:'Comparative advantage: gains from exchange even when one side is better at everything.',prereq:['opportunity-cost','supply-demand'],links:['tariff','supply-chain','balance-of-payments'],sim:'trade'}),
  N('game-theory','econ','strategy',{kind:'field',level:3,tldr:'Strategic interaction: payoffs depend on others’ choices; equilibria predict stable outcomes.',prereq:['probability','optimization'],links:['nash','prisoner-dilemma','auctions','international-relations'],sim:'gametheory'}),
  N('nash','econ','game-theory',{level:4,tldr:'A profile where no player gains by unilateral deviation; existence via fixed point.',prereq:['game-theory','topology'],links:['equilibrium'],evidence:{claim:'Nash proved existence of equilibrium in finite games.',source:'Nash, PNAS 36 (1950)',strength:'strong'}}),
  N('growth','econ','macro',{kind:'field',level:3,dynamic:true,tldr:'Why some economies compound productivity and others plateau.',prereq:['macro','diff-eq'],links:['solow','endogenous-growth','total-factor-productivity'],sim:'growth'}),
  N('inequality','econ','macro',{level:2,dynamic:true,tldr:'Distribution of income and wealth; Lorenz curves and Gini coefficients.',prereq:['statistics','macro'],links:['gini','piketty','taxation','mobility']}),
  N('behavioural-econ','econ','psych',{kind:'field',level:3,tldr:'Real humans deviate systematically from rational-agent models.',prereq:['micro','psych'],links:['prospect-theory','nudge','biases'],evidence:{claim:'Loss aversion and framing widely replicated, with heterogeneity.',source:'Kahneman & Tversky, Econometrica 47 (1979)',strength:'moderate'}}),
  N('financial-markets','econ','bank',{level:2,dynamic:true,tldr:'Trading venues pricing risk via discounted expectations; bubbles and crashes follow.',prereq:['bank','probability'],links:['efficient-market','asset-bubbles','derivatives','valuation'],sim:'markets'}),
  N('economic-systems','econ','econ',{kind:'field',level:2,dynamic:true,status:'disputed',tldr:'Capitalism, socialism, communism, mixed economies differ in ownership, planning, price signals.',prereq:['micro','political-science'],links:['market-socialism','calculation-problem','welfare-state'],unknown:'Outcomes vary enormously by institution and history; comparisons remain contested.'}),
  N('labor','econ','micro',{level:2,dynamic:true,tldr:'Wage determination, bargaining, human capital, automation displacement.',prereq:['micro','statistics'],links:['minimum-wage','unemployment','unions']}),
  N('public-econ','econ','macro',{level:3,dynamic:true,tldr:'Taxation, spending, externalities, insurance, redistribution and their distortions.',prereq:['macro'],links:['tax-incidence','deadweight-loss','social-insurance']}),
  N('economic-development','econ','growth',{kind:'field',level:3,dynamic:true,tldr:'Why poverty persists and what interventions actually work; RCTs transformed the field.',prereq:['growth','statistics'],links:['randomized-trials','aid-effectiveness','capability-approach']}),
  N('metrics','econ','statistics',{level:2,dynamic:true,tldr:'Causal inference from observational data: identification, IV, DiD, RDD.',prereq:['statistics','regression'],links:['correlation-causation','confounders','experiment']}),

  // ================= BUSINESS =================
  N('accounting','business','business',{kind:'field',level:1,dynamic:true,tldr:'Double-entry bookkeeping: assets = liabilities + equity — a standardized language of economic reality.',prereq:['arithmetic'],links:['auditing','cashflow','valuation']}),
  N('bookkeeping','business','accounting',{level:1,tldr:'Every transaction hits two sides; errors reveal themselves as imbalance.',prereq:['accounting'],links:['ledger','trial-balance']}),
  N('cashflow','business','accounting',{level:2,dynamic:true,tldr:'Profit is opinion, cash is fact: timing mismatches kill solvent-looking firms.',prereq:['accounting'],links:['working-capital','liquidity','insolvency']}),
  N('valuation','business','financial-markets',{level:3,dynamic:true,tldr:'Present value of expected future cash flows adjusted for risk.',prereq:['interest','financial-markets'],links:['dcf','multiples','discount-rate']}),
  N('venture','business','financial-markets',{level:2,dynamic:true,tldr:'Portfolio bets on illiquid startups: power-law returns, staged financing, dilution.',prereq:['valuation','probability'],links:['term-sheet','cap-table','exit']}),
  N('management','business','business',{kind:'field',level:1,dynamic:true,tldr:'Coordinating people and resources under uncertainty: strategy, org design, incentives.',prereq:['psych','econ'],links:['principal-agent','org-design','moat']}),
  N('marketing','business','psych',{level:1,dynamic:true,tldr:'Segmentation, positioning, measured response; attention is scarce inventory.',prereq:['psych','statistics'],links:['funnel','brand','ad-auction']}),
  N('supply-chain','business','logistics',{kind:'field',level:2,dynamic:true,tldr:'Flows of material, information, money; the bullwhip amplifies small demand noise.',prereq:['inventory','statistics'],links:['bullwhip','just-in-time','reshoring'],sim:'bullwhip'}),
  N('entrepreneurship','business','management',{level:1,dynamic:true,tldr:'Bear uncertainty to exploit arbitrage: validation, runway, distribution beats product.',prereq:['management','accounting'],links:['lean-startup','unit-economics']}),
  N('negotiation','business','strategy',{level:1,tldr:'Create value then split it: BATNA, ZOPA, credible commitments.',prereq:['game-theory','psych'],links:['batna','anchoring','deal-structure']}),
  N('strategy-business','business','management',{level:2,dynamic:true,tldr:'Positioning, moats, trade-offs: choosing what not to do.',prereq:['management','econ'],links:['five-forces','competitive-advantage']}),
  N('risk-management','business','statistics',{level:2,dynamic:true,tldr:'Identify, quantify, hedge, monitor tail exposure: VaR and stress tests.',prereq:['statistics','financial-markets'],links:['value-at-risk','hedging','tail-risk']}),
  N('operations','business','management',{level:2,tldr:'Queues, throughput, bottlenecks, quality control.',prereq:['statistics','queueing'],links:['six-sigma','lean','throughput']}),

  // ================= PSYCHOLOGY =================
  N('cognition','psych','psych',{kind:'field',level:2,tldr:'Attention, memory, perception, reasoning, decision-making.',prereq:['neuro-core'],links:['memory','biases','decision-theory']}),
  N('memory','psych','cognition',{level:2,tldr:'Encoding, consolidation, retrieval; recall is reconstructive, not playback.',prereq:['cognition'],links:['spaced-repetition','false-memory','forgetting-curve'],sim:'flashcards'}),
  N('spaced-repetition','psych','memory',{level:2,tldr:'Spacing practice across time dramatically beats cramming.',prereq:['memory'],links:['forgetting-curve','testing-effect','learning-sci'],evidence:{claim:'The distributed-practice effect is robust across decades of study.',source:'Cepeda et al., Psychological Bulletin 133 (2006)',strength:'strong'}}),
  N('biases','psych','cognition',{level:2,status:'emerging',tldr:'Systematic judgment deviations; many classic effects replicate weakly.',prereq:['cognition','statistics'],links:['heuristics','prospect-theory','replication-crisis'],unknown:'Effect sizes and universality of many named biases are contested.'}),
  N('emotion','psych','psych',{level:2,tldr:'Evaluated responses with physiology, expression, appraisal, and function.',prereq:['cognition','evolution'],links:['stress','constructed-emotion-debate']}),
  N('development','psych','psych',{kind:'field',level:2,tldr:'Lifespan change: attachment, language acquisition, adolescence, aging.',prereq:['cognition','evolution'],links:['language-acquisition','attachment','critical-period']}),
  N('psych-disorders','psych','psych',{kind:'field',level:3,dynamic:true,status:'emerging',tldr:'Clinically significant distress/dysfunction patterns; DSM categories are contested constructs.',prereq:['psych','medicine'],links:['dsm-critique','cbt','comorbidity'],unknown:'Category boundaries and biological bases remain disputed.'}),
  N('consciousness','psych','brain',{kind:'problem',level:6,status:'frontier',tldr:'Why is there subjective experience at all?',prereq:['neuro-core','phil-mind','cognition'],links:['hard-problem','global-workspace','anesthesia'],unknown:'No agreed explanation of phenomenal experience; theories compete.'}),
  N('intelligence-psych','psych','cognition',{level:3,dynamic:true,status:'disputed',tldr:'General factor g, heritability, test validity, Flynn effects.',prereq:['statistics','cognition'],links:['psychometrics','iq-controversy'],unknown:'Interpretation of group differences and causes of g are scientifically and ethically contested.'}),
  N('social-psych','psych','sociology',{level:2,status:'emerging',tldr:'How others shape judgement: conformity, attribution, groupthink, situationism.',prereq:['psych'],links:['conformity','replication-crisis'],unknown:'Several canonical studies failed direct replication.'}),
  N('learning-sci','psych','memory',{kind:'field',level:2,tldr:'Retrieval practice, spacing, interleaving, elaboration beat rereading.',prereq:['memory','cognition'],links:['testing-effect','deliberate-practice','metacognition'],sim:'flashcards'}),
  N('decision-theory','psych','probability',{level:3,tldr:'Expected utility, priors, value of information, paradoxes of rationality.',prereq:['probability'],links:['bayes','game-theory','behavioural-econ']}),
  N('exp-design','psych','statistics',{level:3,tldr:'Random assignment, controls, blinding, power, preregistration.',prereq:['statistics'],links:['randomized-trials','internal-validity','p-hacking']}),
  N('neuroscience','psych','neuro-core',{kind:'field',level:3,tldr:'Nervous systems from molecules to behaviour, imaged and perturbed.',prereq:['neuron','statistics'],links:['brain','fmri','connectome']}),
  N('behavioral-eco','psych','evolution',{level:3,tldr:'Fitness-maximising strategies: foraging, mating, cooperation, signalling.',prereq:['evolution','game-theory'],links:['optimal-foraging','signalling','kin-selection']}),

  // ================= PHILOSOPHY =================
  N('epistemology','phil','phil',{kind:'field',level:3,tldr:'What knowledge is, how it is justified, where scepticism bites.',prereq:['logic'],links:['skepticism','truth-theories','phil-science'],status:'disputed'}),
  N('ontology','phil','phil',{level:3,tldr:'What exists: objects, properties, numbers, possibilities.',prereq:['logic'],links:['universals','mereology']}),
  N('ethics','phil','phil',{kind:'field',level:2,tldr:'Normative theory: consequences, duties, virtues, contracts.',prereq:['logic'],links:['utilitarianism','deontology','virtue','metaethics','alignment']}),
  N('metaethics','phil','ethics',{level:4,status:'disputed',tldr:'Are moral claims truth-apt? Realism vs anti-realism.',prereq:['ethics'],links:['moral-realism','is-ought']}),
  N('logic-phil','phil','logic',{level:3,tldr:'Validity, paradox, conditionals, modal logic, inference’s limits.',prereq:['logic'],links:['paradox','godel']}),
  N('phil-science','phil','epistemology',{kind:'field',level:3,tldr:'Demarcation, explanation, confirmation, theory change, realism.',prereq:['epistemology','statistics'],links:['falsifiability','paradigm','bayes'],status:'disputed'}),
  N('falsifiability','phil','phil-science',{level:3,tldr:'Popper: a theory is scientific if it forbids something observable.',prereq:['phil-science'],links:['demarcation','replication']}),
  N('paradigm','phil','phil-science',{level:3,status:'disputed',tldr:'Kuhn: normal science inside frameworks, punctuated by revolutions.',prereq:['phil-science'],links:['incommensurability','progress']}),
  N('phil-mind','phil','consciousness',{kind:'field',level:4,status:'disputed',tldr:'Mind–body relations, intentionality, qualia, functionalism.',prereq:['phil','neuroscience'],links:['consciousness','ai']}),
  N('free-will','phil','ethics',{level:4,status:'disputed',tldr:'Compatibilism, libertarianism, hard incompatibilism.',prereq:['phil-mind','neuroscience'],links:['determinism','responsibility']}),
  N('aesthetics','phil','arts',{level:3,tldr:'Judgement of taste, expression, form, institutional theories of art.',prereq:['phil'],links:['criticism','art-market']}),
  N('political-phil','phil','society',{kind:'field',level:3,tldr:'Justice, liberty, authority, legitimacy.',prereq:['ethics','political-science'],links:['justice-theory','social-contract','equality']}),
  N('phil-language','phil','lang',{level:4,tldr:'Reference, meaning, use, truth conditions.',prereq:['logic','linguistics'],links:['semantics','sapir-whorf']}),
  N('existentialism','phil','phil-mind',{level:3,status:'historical',tldr:'Existence precedes essence: freedom, anxiety, authenticity.',prereq:['phil-mind'],links:['absurd','bad-faith','meaning']}),
  N('eastern-phil','phil','phil',{kind:'field',level:3,status:'historical',tldr:'Confucian role ethics, Daoist non-coercion, Buddhist no-self and dependent origination.',prereq:['phil'],links:['buddhism','confucianism','daoism']}),
  N('godel','phil','logic',{level:5,tldr:'Any consistent sufficiently strong system contains truths it cannot prove.',prereq:['logic','cs-theory'],links:['self-reference','church-turing'],evidence:{claim:'Two incompleteness theorems.',source:'Gödel, Monatshefte für Mathematik und Physik 38 (1931)',strength:'strong'}}),
  N('paradox','phil','logic',{level:2,tldr:'Valid reasoning to contradictory conclusions: liar, sorites, Newcomb, Theseus.',prereq:['logic'],links:['self-reference','vagueness','decision-theory']}),
  N('great-questions','phil','phil',{kind:'object',level:1,tldr:'Each field’s founding question: reality, life, computation, knowledge, allocation, consciousness.',prereq:[],links:['epistemology','consciousness','what-is-computation','origin-of-life']}),

  // ================= PRACTICAL WORLD =================
  N('financial-system','practical','econ',{kind:'field',level:1,dynamic:true,tldr:'Banks, markets, payments, insurance, regulation: the plumbing of modern allocation.',prereq:['money','accounting'],links:['stock-exchange','insurance','credit-card','bank'],sim:'bank'}),
  N('stock-exchange','practical','financial-system',{level:1,dynamic:true,tldr:'Continuous double auction with clearing, settlement, disclosure rules.',prereq:['financial-system'],links:['ipo','market-maker','settlement']}),
  N('insurance','practical','financial-system',{level:1,dynamic:true,tldr:'Pool independent risks; adverse selection and moral hazard constrain it.',prereq:['probability','risk-management'],links:['actuarial','adverse-selection','catastrophe-bond']}),
  N('credit-card','practical','financial-system',{level:1,dynamic:true,tldr:'A four-party interchange network: issuer, merchant, network, acquirer.',prereq:['financial-system'],links:['interchange','revolving-credit','fraud-scoring']}),
  N('tax-authority','practical','public-econ',{level:1,dynamic:true,tldr:'Assessment, collection, enforcement; compliance costs shape effective rates.',prereq:['public-econ','law'],links:['withholding','transfer-pricing','vat']}),
  N('airport','practical','logistics',{level:1,dynamic:true,tldr:'Slots, runways, screening, ground handling: throughput constrained airside.',prereq:['logistics','queueing'],links:['slot-allocation','runway-capacity','hub-spoke']}),
  N('shipping','practical','logistics',{level:1,dynamic:true,tldr:'Containerization collapsed handling costs; schedules and demurrage govern trade.',prereq:['logistics','trade'],links:['container','panamax','freight-index','chokepoints']}),
  N('power-generation','practical','power-grid',{level:1,dynamic:true,tldr:'Convert primary energy to AC at 50/60 Hz; dispatch by marginal cost, hold reserve.',prereq:['power-grid','thermodynamic-eng'],links:['turbine','load-following','curtailment','storage']}),
  N('water-works','practical','civil',{level:1,dynamic:true,tldr:'Catchment → treatment → pressurized distribution → sewerage → wastewater return.',prereq:['fluid-dynamics','chemistry'],links:['chlorination','desalination','cholera']}),
  N('internet-backbone','practical','internet',{level:1,dynamic:true,tldr:'Submarine cables, IXPs, BGP, CDNs: the latency and capacity economics of the physical net.',prereq:['internet','networking'],links:['submarine-cables','bgp','cdn']}),
  N('satellite','practical','orbital',{level:1,dynamic:true,tldr:'Orbit choice trades altitude against coverage, latency, resolution, debris risk.',prereq:['orbital','em'],links:['leo','gps','remote-sensing','debris']}),
  N('supply-of-objects','practical','supply-chain',{kind:'object',level:1,dynamic:true,tldr:'Follow one object end-to-end: mining → refining → fabrication → assembly → logistics → retail.',prereq:['supply-chain','manufacturing'],links:['smartphone-chain','coffee-trail'],sim:'trace'}),
  N('smartphone-chain','practical','supply-of-objects',{level:1,dynamic:true,tldr:'Sand → silicon wafers → EUV lithography → SoC → camera/battery/display → SMT assembly → global freight.',prereq:['chip-fab','supply-chain'],links:['euv','cobalt','battery','assembly'],sim:'trace'}),
  N('coffee-trail','practical','supply-of-objects',{level:1,dynamic:true,tldr:'One bean: botany, terroir, labour economics, futures, roasting chemistry, café culture.',prereq:['supply-chain','agriculture'],links:['arabica-robusta','futures','maillard','caffeine']}),
  N('how-airplanes-fly','practical','aerospace',{level:1,tldr:'Wings deflect air downward to make lift; engines provide thrust; surfaces trim.',prereq:['airfoil','fluid-dynamics'],links:['lift','stall','autopilot'],sim:'airfoil'}),
  N('why-sky-blue','practical','optics',{level:0,tldr:'Rayleigh scattering removes blue from direct sunlight more than red; sunsets finish the job.',prereq:['optics','waves'],links:['scattering','sunset']}),

  // ================= MEDICINE =================
  N('anatomy','medicine','physiology',{kind:'field',level:2,tldr:'The structural map of the body: systems, regions, variation, imaging correlates.',prereq:['cell'],links:['organ-systems','surgery','imaging']}),
  N('physiology-med','medicine','physiology',{kind:'field',level:3,tldr:'Organ function and feedback control: cardiovascular, renal, endocrine, neural.',prereq:['physiology','diff-eq'],links:['homeostasis','blood-pressure']}),
  N('diagnosis','medicine','statistics',{level:2,dynamic:true,tldr:'Updating disease probability from signs, tests, and priors (likelihood ratios).',prereq:['bayes','statistics'],links:['sensitivity-specificity','screening'],sim:'bayes'}),
  N('epidemiology','medicine','statistics',{kind:'field',level:3,dynamic:true,tldr:'Disease incidence in populations: R₀, confounding, study designs, causal criteria.',prereq:['statistics','populations'],links:['r-naught','confounder','cohort'],sim:'epidemic'}),
  N('pharmacology','medicine','biochem',{kind:'field',level:3,dynamic:true,tldr:'Dose–response, receptors, ADME, toxicity, interactions.',prereq:['biochem','reactions'],links:['dose-response','half-life','clinical-trial'],sim:'pk'}),
  N('surgery','medicine','anatomy',{level:3,dynamic:true,tldr:'Instrument-mediated correction; asepsis changed everything.',prereq:['anatomy','sterilization'],links:['antisepsis','anaesthesia','complication']}),
  N('imaging','medicine','radiation',{kind:'field',level:3,dynamic:true,tldr:'X-ray, CT, MRI, ultrasound, PET: each trades resolution, contrast, dose, cost.',prereq:['waves','nuclear'],links:['xray','mri','ct','contrast']}),
  N('mental-health','medicine','psych-disorders',{kind:'field',level:2,dynamic:true,status:'emerging',tldr:'Prevention, therapy, pharmacotherapy, social determinants; huge treatment gaps.',prereq:['psych','medicine'],links:['cbt','ssri','access']}),
  N('longevity','medicine','cell',{kind:'problem',level:5,status:'frontier',tldr:'Aging as accumulated damage and dysregulated maintenance.',prereq:['cell','genetics','evolution'],links:['telomere','senescence','caloric-restriction'],unknown:'Whether human lifespan can be substantially extended is unresolved.'}),
  N('pain','medicine','neuron',{level:3,status:'emerging',tldr:'Nociception plus brain interpretation: gate control, sensitization, placebo.',prereq:['neuron','psych'],links:['opioid','nociceptor','chronic-pain']}),
  N('virus','medicine','microbe',{level:2,dynamic:true,tldr:'Genetic material in a protein coat that hijacks host replication; evolves fast.',prereq:['microbe','genetics'],links:['zoonosis','mutation-rate','vaccine','antiviral']}),
  N('bacteria','medicine','microbe',{level:2,tldr:'Free-living single cells; some pathogenic, most indifferent, many essential.',prereq:['microbe'],links:['antibiotic-resistance','gut-microbiome']}),
  N('sterilization','medicine','microbe',{level:2,status:'historical',tldr:'Aseptic technique (Semmelweis, Lister) cut puerperal fever and wound sepsis.',prereq:['microbe'],links:['germ-theory','handwashing'],evidence:{claim:'Hand disinfection sharply reduced maternity-ward mortality.',source:'Semmelweis, Die Aetiologie… (1861)',strength:'strong'}}),
  N('clinical-trial','medicine','exp-design',{level:4,dynamic:true,tldr:'Phased randomized controlled trials with blinding, endpoints, safety monitoring.',prereq:['exp-design','statistics'],links:['phase-iii','placebo','intention-to-treat','publication-bias']}),
  N('rare-disease','medicine','genetics',{kind:'problem',level:5,status:'frontier',tldr:'Thousands of monogenic disorders; diagnostic odysseys; few therapies.',prereq:['genetics','medicine'],links:['orphan-drug','gene-therapy'],unknown:'Most rare diseases lack approved treatments.'}),

  // ================= LANGUAGE / LITERATURE / MUSIC / ARTS / ARCHITECTURE =================
  N('linguistics','lang','lang',{kind:'field',level:2,tldr:'Scientific study of language: phonology, morphology, syntax, semantics, pragmatics.',prereq:['logic','statistics'],links:['phonetics','sapir-whorf','nlp','language-change']}),
  N('phonetics','lang','linguistics',{level:2,tldr:'Speech sounds as articulation and acoustics; IPA as notation.',prereq:['linguistics','acoustics'],links:['accent','formant']}),
  N('language-change','lang','linguistics',{level:3,status:'historical',tldr:'Sound shift, grammaticalization, borrowing: regularity and exceptions.',prereq:['linguistics','history'],links:['grim-law','creole','proto-language']}),
  N('language-family','lang','language-change',{kind:'object',level:2,status:'historical',tldr:'Trees of descent: Indo-European, Sino-Tibetan, Austronesian, Niger-Congo, Japonic.',prereq:['language-change'],links:['comparative-method','mandarin'],sim:'tree'}),
  N('mandarin','lang','language-family',{level:2,dynamic:true,tldr:'Tonal Sino-Tibetan language; logographic writing decouples spelling from pronunciation.',prereq:['language-family'],links:['tones','hanzi','pinyin']}),
  N('writing-system','lang','language-change',{level:2,status:'historical',tldr:'Logographic, syllabic, alphabetic: the alphabet’s economy transformed literacy.',prereq:['language-change'],links:['cuneiform','alphabet','hanzi']}),
  N('second-language','lang','development',{level:2,tldr:'Critical periods, transfer, comprehensible input, spaced vocabulary practice.',prereq:['linguistics','memory'],links:['immersion','spaced-repetition']}),
  N('translation','lang','linguistics',{level:3,dynamic:true,tldr:'Preserving meaning, register, terminology, and equations across languages.',prereq:['linguistics'],links:['machine-translation','untranslatable','localization']}),
  N('narrative','lit','lit',{kind:'field',level:2,tldr:'Selecting and ordering events into meaning: plot, voice, tension, theme.',prereq:[],links:['story-structure','myth','fiction']}),
  N('poetry','lit','narrative',{level:2,tldr:'Meter, compression, ambiguity: language foregrounded.',prereq:['narrative','phonetics'],links:['meter','haiku','oral-tradition']}),
  N('fiction','lit','narrative',{level:2,tldr:'Imaginative prose: focalization, free indirect style, worldbuilding.',prereq:['narrative'],links:['novel','genre','realism']}),
  N('literary-theory','lit','phil',{level:4,status:'disputed',tldr:'Formalism, structuralism, reader-response: rival accounts of interpretation.',prereq:['phil','narrative'],links:['hermeneutics','canon-debate']}),
  N('music-theory','music','music',{kind:'field',level:2,tldr:'Scales, intervals, harmony, rhythm, form: the grammar of organized sound.',prereq:['oscillation','ratios'],links:['harmony','rhythm','fourier'],sim:'harmony'}),
  N('harmony','music','music-theory',{level:2,tldr:'Consonance from simple frequency ratios; tension and resolution drive form.',prereq:['music-theory','waves'],links:['interval','circle-of-fifths','chord'],sim:'harmony'}),
  N('rhythm','music','music-theory',{level:2,tldr:'Patterned time: meter, syncopation, polyrhythm, groove as prediction.',prereq:['oscillation'],links:['polyrhythm','tempo','entrainment']}),
  N('composition','music','harmony',{level:3,tldr:'Developing motifs across form: counterpoint, orchestration, production.',prereq:['harmony'],links:['sonata','orchestration','production']}),
  N('audio-engineering','music','acoustics',{level:2,dynamic:true,tldr:'Microphones, mixing, dynamic range, psychoacoustics, loudness wars.',prereq:['acoustics'],links:['mixing','compression','mastering']}),
  N('drawing','arts','arts',{level:2,tldr:'Mark-making: contour, value, perspective, gesture; seeing trained by doing.',prereq:[],links:['perspective','anatomy-drawing','shading']}),
  N('painting','arts','drawing',{level:3,status:'historical',tldr:'Pigment, binder, layering: tempera to oils to acrylic; colour theory.',prereq:['drawing'],links:['colour-theory','impressionism','pigment-trade']}),
  N('perspective','arts','geometry',{level:2,status:'historical',tldr:'Linear perspective as projective geometry, invented in Renaissance Florence.',prereq:['geometry','optics'],links:['vanishing-point','camera-obscura']}),
  N('photography','arts','optics',{level:2,dynamic:true,tldr:'Lens plus medium plus the exposure triangle; documentation and the decisive moment.',prereq:['optics'],links:['exposure','film-grain','depth-of-field']}),
  N('film','arts','photography',{level:2,dynamic:true,tldr:'Editing creates time: montage, continuity, sound design, distribution economics.',prereq:['photography','narrative'],links:['montage','shot-grammar','streaming']}),
  N('sculpture','arts','material-stress',{level:2,tldr:'Volume in space: subtractive vs additive; structural limits of material.',prereq:['material-stress','geometry'],links:['marble','casting','kinetic']}),
  N('design','arts','hci',{kind:'field',level:2,dynamic:true,tldr:'Constraints, hierarchy, typography, affordances: usability and meaning together.',prereq:['drawing','hci'],links:['grid','typography','ux','accessibility']}),
  N('architecture','arch','structural-eng',{kind:'field',level:2,tldr:'Buildings as structure, climate response, social script, and symbol.',prereq:['structural-eng','design','climate'],links:['arch','dome','acoustics','urban-planning']}),
  N('arch','arch','architecture',{level:2,status:'historical',tldr:'Compression-only spans: thrust must be contained at the base.',prereq:['statics'],links:['dome','gothic','voussoir'],sim:'arch'}),
  N('dome','arch','architecture',{level:3,status:'historical',tldr:'A revolving arch; the Pantheon’s unreinforced concrete dome still holds its span record.',prereq:['arch','material-stress'],links:['pantheon','thin-shell'],evidence:{claim:'Pantheon dome span is 43.3 m of unreinforced concrete.',source:'Adam, Roman Building (1994)',strength:'strong'}}),
  N('skyscraper','arch','structural-eng',{level:3,dynamic:true,tldr:'Steel frame plus core plus wind bracing plus elevators: height as economic threshold.',prereq:['structural-eng','wind-load'],links:['tube-frame','tuned-mass-damper','core-wall']}),
  N('urban-form','arch','urban-planning',{level:2,dynamic:true,tldr:'Street grids, density, zoning, mixed use: walkability as emergent property.',prereq:['urban-planning','human-geo'],links:['grid-plan','walkability','sprawl']}),

  // ================= STRATEGY =================
  N('strategy-core','strategy','strategy',{kind:'field',level:1,tldr:'The discipline of winning when the opponent also chooses.',prereq:[],links:['game-theory','war','chess']}),
  N('strategy','strategy','strategy-core',{kind:'field',level:2,tldr:'Allocating resources under adversarial uncertainty: ends, ways, means.',prereq:['game-theory','history'],links:['manoeuvre','attrition','grand-strategy']}),
  N('chess','strategy','game-theory',{level:2,tldr:'Perfect-information sequential game: evaluation, search, endgame technique.',prereq:['strategy-core'],links:['minimax','opening-theory','zugzwang'],sim:'minimax'}),
  N('minimax','strategy','game-theory',{level:3,tldr:'Opponent-optimal worst-case search; alpha-beta pruning makes it tractable.',prereq:['algorithm','game-theory'],links:['alpha-beta','game-tree']}),
  N('poker','strategy','decision-theory',{level:2,tldr:'Imperfect information plus betting: ranges, pot odds, balanced bluffing.',prereq:['probability','game-theory'],links:['bluffing','expected-value','gto']}),
  N('diplomacy-game','strategy','international-relations',{level:3,tldr:'Negotiated alliance with betrayal incentives: credibility is the whole game.',prereq:['game-theory','international-relations'],links:['credible-commitment','two-front']}),
  N('logistics','strategy','operations',{level:2,tldr:'Amateurs talk tactics; professionals study supply: throughput, stockpiles, ports, fuel.',prereq:['operations','supply-chain'],links:['port-throughput','campaign-distance','shipping']}),
  N('intelligence-studies','strategy','cybersecurity',{level:3,dynamic:true,tldr:'Collection, analysis, deception, counterintelligence: signal versus noise.',prereq:['probability','political-science'],links:['analysis-of-competing-hypotheses','sigint','mirror-imaging']}),

  // ================= COMPUTING LINEAGE EXTRAS =================
  N('integrated-circuit','computing','transistor',{level:3,status:'historical',tldr:'Many transistors on one crystal (Kilby/Noyce 1958–59): cost per function collapsed.',prereq:['transistor','materials'],links:['moore-law','chip-fab']}),
  N('microprocessor','computing','integrated-circuit',{level:3,status:'historical',tldr:'A CPU on a chip (Intel 4004, 1971): programmable hardware becomes software.',prereq:['integrated-circuit','computer-arch'],links:['cpu','soc']}),
  N('arpnet','computing','internet',{level:2,status:'historical',tldr:'Packet-switched research network (1969) → TCP/IP (1983) → web (1991).',prereq:['networking'],links:['tcp-ip','packet-switching']}),
  N('deep-learning','ai','dl',{level:3,status:'historical',tldr:'Backprop (1986) → deep belief nets (2006) → AlexNet/GPU era (2012) → transformer (2017) → LLMs.',prereq:['dl'],links:['gpu','transformer']}),

  // ================= THE UNKNOWN =================
  N('p-vs-np','unknown','complexity',{kind:'problem',level:7,status:'frontier',tldr:'Does every quickly-checkable solution have a quickly-findable one?',prereq:['complexity'],links:['np-complete','crypto','optimization'],unknown:'Unsolved; most theorists expect P ≠ NP but no proof exists.'}),
  N('riemann','unknown','number-theory',{kind:'problem',level:7,status:'frontier',tldr:'Do all nontrivial zeros of ζ(s) lie on the critical line? Governs prime distribution.',prereq:['complex','number-theory'],links:['prime-number-theorem'],unknown:'Unsolved since 1859; one of the seven Millennium Problems.'}),
  N('collatz','unknown','number-theory',{kind:'problem',level:5,status:'frontier',tldr:'Iterate n→n/2 or 3n+1: does every positive integer reach 1?',prereq:['number-theory'],links:['undecidability'],unknown:'No proof exists; Tao showed almost all orbits are eventually small.'}),
  N('quantum-gravity','unknown','qm',{kind:'problem',level:7,status:'frontier',tldr:'Unify GR with QM: strings, loops, asymptotic safety, causal sets.',prereq:['general-relativity','qm','diff-geometry'],links:['black-hole','planck-scale'],unknown:'No experimental discrimination among candidate theories yet.'}),
  N('measurement-problem','unknown','qm',{kind:'problem',level:6,status:'disputed',tldr:'Why definite outcomes? Copenhagen, many-worlds, Bohm, objective collapse.',prereq:['qm'],links:['decoherence','born-rule'],unknown:'Empirically indistinguishable interpretations proliferate.'}),
  N('hard-problem','unknown','consciousness',{kind:'problem',level:7,status:'frontier',tldr:'Why does physical processing feel like something from the inside?',prereq:['consciousness','phil-mind'],links:['qualia','global-workspace'],unknown:'No accepted explanatory framework; even the methodology is disputed.'}),
  N('abiogenesis','unknown','origin-of-life',{kind:'problem',level:6,status:'frontier',tldr:'From chemistry to the first replicator: RNA world, metabolism-first, compartments.',prereq:['biochem','evolution'],links:['rna-world','LUCA'],unknown:'No demonstrated complete pathway.'}),
  N('aging-cause','unknown','longevity',{kind:'problem',level:6,status:'disputed',tldr:'Programmatic versus damage-accumulation theories of senescence.',prereq:['cell','evolution'],links:['disposable-soma','hallmarks-of-aging'],unknown:'Which interventions generalize from rodents to humans is unresolved.'}),
  N('hubble-tension','unknown','cosmology',{kind:'problem',level:6,status:'disputed',tldr:'Early-universe (CMB) and late-universe (Cepheid/SN) measurements of H₀ disagree ~5σ.',prereq:['cosmology','statistics'],links:['supernova-ia','cepheid'],unknown:'Unknown whether this is systematics or new physics.'}),
  N('fast-radio-bursts','unknown','astro-high-energy',{kind:'problem',level:6,status:'frontier',tldr:'Millisecond cosmic radio flashes; magnetars or jets; emission mechanism unclear.',prereq:['em','plasma'],links:['magnetar','afterglow'],unknown:'Source physics unresolved.'}),
  N('matrix-mult-exp','unknown','algo-design',{kind:'problem',level:6,status:'frontier',tldr:'Can matrix multiplication be done in essentially O(n²)?',prereq:['linear-algebra','algorithm'],links:['strassen','group-theory'],unknown:'Best proven exponent is still above 2.'}),
  N('room-temp-superconductor','unknown','superconductivity',{kind:'problem',level:6,status:'disputed',tldr:'Ambient-pressure superconductivity claims have repeatedly been retracted.',prereq:['superconductivity','materials'],links:['hydrides','high-pressure'],unknown:'No verified ambient-condition superconductor exists.'}),
  N('cognitive-architecture','unknown','agi',{kind:'problem',level:6,status:'frontier',tldr:'What components beyond scale: memory, planning, world models, continual learning?',prereq:['ai','cognition'],links:['world-model','neurosymbolic','embodiment'],unknown:'Whether the gap is principles rather than compute is an open hypothesis.'}),
  N('unknown-map','unknown','unknown',{kind:'object',level:1,tldr:'The edge of the map: unsolved maths, the dark sector, consciousness, origin of life, alignment.',prereq:[],links:['p-vs-np','riemann','dark-matter','hard-problem','alignment','origin-of-life'],sim:'unknown'}),

// ================= BRIDGE & DEPTH NODES =================
N('vectors','math','linear-algebra',{level:2,tldr:'Arrows with magnitude and direction — displacement, force, velocity.',prereq:['algebra'],links:['linear-algebra','classical-mech']}),
N('ratios','math','arithmetic',{level:1,tldr:'Proportional comparison: the bridge from counting to continuous quantity.',prereq:['arithmetic'],links:['supply-demand','harmony']}),
N('logs','math','arithmetic',{level:1,tldr:'The inverse of exponentiation: turns multiplication into addition, scales into straight lines.',prereq:['arithmetic'],links:['ph','decibel','information-theory']}),
N('time-value','econ','interest',{level:2,tldr:'A dollar today beats a dollar tomorrow: discounting is arithmetic applied to patience.',prereq:['interest'],links:['valuation','interest']}),
N('convolution','math','fourier',{level:3,tldr:'Blend two signals by sliding one across the other: filtering, CNNs, probability sums.',prereq:['integrals','fourier'],links:['convnet','signal-proc']}),
N('signal-proc','physics','waves',{level:3,tldr:'Sampling, filtering, and transforming real-world signals; Nyquist sets the ceiling.',prereq:['fourier'],links:['audio-engineering','imaging']}),
N('softmax','math','probability',{level:3,tldr:'Turn any score vector into a probability distribution by exponentiating and normalising.',prereq:['probability'],links:['attention','supervised']}),
N('graph-theory','math','discrete-math',{level:2,tldr:'Nodes and edges: networks, dependencies, shortest paths, colourings.',prereq:['logic'],links:['networking','data-structures','version-control']}),
N('discrete-math','math','logic',{kind:'field',level:2,tldr:'Counting, logic, graphs, recurrences — mathematics for computation.',prereq:['logic'],links:['algorithm','combinatorics']}),
N('markov','math','probability',{level:3,tldr:'Memoryless chains where the future depends only on the present state.',prereq:['probability','matrix-algebra'],links:['reinforcement-learning','weather','llm']}),
N('stochastic-process','math','markov',{level:4,tldr:'Families of random variables evolving in time: walks, queues, prices.',prereq:['probability'],links:['diffusion','financial-markets']}),
N('dynamic-programming','math','optimization',{level:3,tldr:'Solve big problems by caching optimal answers to overlapping subproblems.',prereq:['algorithm','optimization'],links:['reinforcement-learning','algo-design']}),
N('recursion','computing','programming',{level:1,tldr:'Definitions that refer to themselves; base case plus reduction.',prereq:['functions'],links:['fractals','divide-and-conquer']}),
N('measure-theory','math','set-theory',{level:5,tldr:'Rigorous size for wild sets — the foundation probability actually rests on.',prereq:['real-analysis'],links:['functional-analysis']}),
N('real-analysis','math','calculus',{level:4,tldr:'Proofs for why calculus works: epsilon-delta, completeness, convergence.',prereq:['limits','logic'],links:['numerical-methods']}),
N('regression','math','statistics',{level:2,tldr:'Fit the relationship between variables; the workhorse of empirical science.',prereq:['statistics','linear-algebra'],links:['metrics','ml']}),
N('probability-dist','math','probability',{level:2,tldr:'Normal, binomial, Poisson: shapes uncertainty takes in the real world.',prereq:['probability'],links:['llm','statistics']}),
N('radiation','physics','nuclear',{level:3,tldr:'Energy carried by particles or waves: ionizing versus non-ionizing dose.',prereq:['nuclear','waves'],links:['imaging','nuclear']}),
N('solid-state','physics','condensed-matter',{level:5,tldr:'Crystals, bands, and defects: why metals conduct and insulators don’t.',prereq:['qm','crystallography'],links:['semiconductor','materials']}),
N('lattice','chemistry','crystallography',{level:4,tldr:'Repeating atomic arrangements; unit cells tile all of crystal space.',prereq:['geometry','bonding'],links:['crystallography','minerals']}),
N('enzyme','biology','biochem',{level:3,tldr:'Biological catalysts that lower activation energy with exquisite specificity.',prereq:['kinetics','biochem'],links:['metabolism','pharmacology']}),
N('protein','biology','biochem',{level:3,tldr:'Amino-acid chains folded into machines; sequence predicts function imperfectly.',prereq:['dna','bonding'],links:['protein-folding','enzyme']}),
N('populations','medicine','epidemiology',{level:2,tldr:'Counting people by risk: incidence, prevalence, denominators.',prereq:['statistics'],links:['epidemiology','population']}),
N('microscope','physics','optics',{level:2,tldr:'Lenses bend light to defeat the eye’s resolution limit; diffraction sets the floor.',prereq:['optics'],links:['cell','microbe']}),
N('laser','physics','light',{level:3,tldr:'Stimulated emission makes coherent light: surgery, fibre optics, lithography.',prereq:['light','qm'],links:['chip-fab','optics']}),
N('radio','physics','em',{level:2,tldr:'Modulating electromagnetic waves to carry information through space.',prereq:['em','fourier'],links:['maxwell','signal-proc']}),
N('wind-load','engineering','structural-eng',{level:3,tldr:'Tall structures are designed against pressure, vortex shedding, and resonance.',prereq:['fluid-dynamics','material-stress'],links:['skyscraper']}),
N('queueing','math','probability',{level:2,tldr:'Waiting-line mathematics: arrival rates, service rates, variability.',prereq:['probability'],links:['operations','airport']}),
N('inventory','business','operations',{level:2,tldr:'Stock as buffer against randomness: reorder points, safety stock, holding cost.',prereq:['statistics'],links:['supply-chain']}),
N('agriculture','geo','human-geo',{level:2,dynamic:true,tldr:'Soil, water, genetics, and markets: how food systems actually produce calories.',prereq:['ecology','physical-geo'],links:['coffee-trail','agriculture']}),
N('soil','geo','physical-geo',{level:2,tldr:'Living mineral substrate: structure, microbiology, nutrients, erosion.',prereq:['chemistry','ecology'],links:['agriculture']}),
N('communication','society','media',{kind:'field',level:2,tldr:'Encoding, channel, noise, feedback: how meaning travels between minds and machines.',prereq:['information-theory'],links:['media','language-change']}),
N('tech-history','history','idea-tree',{kind:'field',level:2,tldr:'Technology as accumulated lineage, not isolated invention.',prereq:['history'],links:['idea-tree','computer-lineage']}),
]

// ================= PERIOD & SUBFIELD ROOTS =================
N('ancient','history','history',{kind:'field',level:1,tldr:'From the first cities and writing to the fall of Rome: records begin, knowledge becomes cumulative in a new way.',prereq:['prehistory'],links:['greece','rome']}),
N('medieval','history','history',{kind:'field',level:1,tldr:'Post-Roman fragmentation, faith-based learning institutions, plague, and slow reconnection.',prereq:['ancient'],links:['islamic-golden-age','black-death']}),
N('early-modern','history','history',{kind:'field',level:1,tldr:'Print, probe, Reformation, empire: authority shifts from tradition to evidence.',prereq:['medieval'],links:['scientific-method','industrial-revolution']}),
N('modern','history','history',{kind:'field',level:1,dynamic:true,tldr:'The 20th–21st centuries: world wars, computing, decolonization, globalization, climate.',prereq:['early-modern'],links:['ww1','cold-war','internet']}),
N('story','lit','lit',{kind:'field',level:1,tldr:'Narrative as a technology of memory and simulation: humans think in stories.',prereq:[],links:['myth','narrative']}),
N('visual-core','arts','arts',{kind:'field',level:1,tldr:'Seeing deliberately: form, colour, line, composition, contrast.',prereq:[],links:['drawing','design']}),

N('population','math','statistics',{level:2,tldr:'Counts, rates, growth: the denominator behind every claim about people.',prereq:['statistics'],links:['demography','epidemiology']}),
N('demography','geo','human-geo',{level:2,dynamic:true,tldr:'Population structure over time: births, deaths, migration, age pyramids.',prereq:['statistics','populations'],links:['population','migration']}),
N('protein-folding','biology','protein',{level:4,status:'emerging',tldr:'Sequence → 3D shape; predicted at scale by learned models, still unsolved in general.',prereq:['protein','dl'],links:['drug-design','ai']}),
N('migration','geo','human-geo',{level:2,dynamic:true,tldr:'Movement of people under pressure and opportunity: economics, politics, culture.',prereq:['human-geo','trade'],links:['demography','labor']}),
N('drug-design','chemistry','organic',{level:4,dynamic:true,status:'emerging',tldr:'Shape, binding, pharmacokinetics: turning molecular insight into medicine.',prereq:['organic','biochem'],links:['pharmacology','protein-folding']}),
N('metabolism','biology','biochem',{level:3,tldr:'The network of chemical reactions that keeps a cell alive and powered.',prereq:['biochem','enzyme'],links:['respiration','photosynthesis']}),

// ---------------- indices ----------------
export const BY_ID = Object.fromEntries(NODES.map(n => [n.id, n]))
export const DOMAIN_BY_ID = Object.fromEntries(DOMAINS.map(d => [d.id, d]))

export const CHILDREN = {}
for (const n of NODES) if (n.parent) (CHILDREN[n.parent] ||= []).push(n.id)
for (const d of DOMAINS) {
  const kids = NODES.filter(n => n.parent === d.id).map(n => n.id)
  if (kids.length) CHILDREN[d.id] = [...new Set(kids)]
}

export const UNLOCKS = {}
for (const n of NODES) for (const p of n.prereq) (UNLOCKS[p] ||= []).push(n.id)

export const LINKS = {}
for (const n of NODES) {
  LINKS[n.id] ||= []
  for (const l of n.links) {
    if (!BY_ID[l]) continue
    LINKS[n.id].push(l)
    ;(LINKS[l] ||= []).push(n.id)
  }
}
for (const k in LINKS) LINKS[k] = [...new Set(LINKS[k])]

const NAMES = {
  'economic-development':'Development Economics',
  'alexandria-300bce':'Alexandria, 300 BCE — What Did They Know?',
  'thermodynamic-eng':'Engineering Thermodynamics',
  'functional-analysis':'Functional Analysis',
  'deep-learning':'The Deep Learning Revolution',
}

export function displayName(id) {
  if (DOMAIN_BY_ID[id]) return DOMAIN_BY_ID[id].name
  if (NAMES[id]) return NAMES[id]
  const n = BY_ID[id]
  if (n && DOMAIN_BY_ID[n.domain] && n.parent === n.domain && !n.tldr) return DOMAIN_BY_ID[n.domain].name
  return id.split(/[-_]/).map(w => (w.length <= 2 && ['of','to','vs','a','in','the'].includes(w)) ? w : w[0].toUpperCase() + w.slice(1)).join(' ')
}

export function nodeDomain(id) {
  if (DOMAIN_BY_ID[id]) return id
  const n = BY_ID[id]
  return n ? n.domain : null
}
export function nodeColor(id) {
  const d = nodeDomain(id)
  return d ? DOMAIN_BY_ID[d].color : '#8899aa'
}
export function nodeGlyph(id) {
  const d = nodeDomain(id)
  return d ? DOMAIN_BY_ID[d].glyph : '·'
}

export function ancestors(id) {
  const out = []
  let cur = BY_ID[id]
  while (cur && cur.parent) {
    const p = BY_ID[cur.parent] || (DOMAIN_BY_ID[cur.parent] ? { id: cur.parent } : null)
    if (!p) break
    out.push(p.id)
    cur = BY_ID[p.id]
  }
  if (cur && DOMAIN_BY_ID[cur.domain] && !out.includes(cur.domain)) out.push(cur.domain)
  return out
}

export function prereqClosure(target, maxDepth = 8) {
  const seen = new Map()
  function visit(id, depth) {
    if (depth > maxDepth) return
    const n = BY_ID[id]
    for (const p of (n?.prereq || [])) {
      if (!BY_ID[p]) continue
      if (!seen.has(p) || seen.get(p) < depth + 1) { seen.set(p, depth + 1); visit(p, depth + 1) }
    }
  }
  visit(target, 0)
  return [...seen.entries()].map(([id, tier]) => ({ id, tier })).sort((a, b) => a.tier - b.tier)
}

export function distanceTo(target, known) {
  const k = new Set(known)
  const need = prereqClosure(target).filter(x => !k.has(x.id))
  const tiers = need.length ? Math.max(...need.map(x => x.tier)) : 0
  return { missing: need.map(x => x.id), hops: tiers + 1, count: need.length }
}

export function searchNodes(q) {
  q = (q || '').toLowerCase().trim()
  if (!q) return []
  const words = q.split(/\s+/)
  const score = (n) => {
    const nm = displayName(n.id).toLowerCase()
    let s = 0
    if (nm.startsWith(q)) s += 8
    if (nm.includes(q)) s += 5
    if ((n.tldr || '').toLowerCase().includes(q)) s += 3
    if ((n.tag || '').toLowerCase().includes(q)) s += 2
    for (const w of words) {
      if (nm.split(/[\s&]+/).some(x => x.startsWith(w))) s += 3
      if ((n.tldr || '').toLowerCase().includes(w)) s += 1
    }
    if (nodeDomain(n.id) === n.id) s += 2
    return s - (n.level || 0) * 0.06
  }
  const domHits = DOMAINS.filter(d => d.name.toLowerCase().includes(q)).map(d => d.id)
  const nodeHits = NODES.map(n => ({ n, s: score(n) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).map(x => x.n.id)
  return [...new Set([...domHits, ...nodeHits])].slice(0, 14)
}
