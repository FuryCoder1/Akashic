// Shared node constructor used by atlas.js and bridges.js
export const N = (id, domain, parent, o) => ({
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
