# ShiftSBAR — Design Brief

## Brand
- **Name**: ShiftSBAR
- **Tagline**: "Speak your shift. Get a perfect handoff."
- **Domain**: shiftsbar.com

## Aesthetic: Night Shift Terminal
Dark, high-contrast utility interface inspired by vital-sign monitors. The opposite of CarePlanHQ's light clinical journal. Designed for nurses on night shifts — no bright screens at 3am.

## Fonts
| Role | Font | Weights | Rationale |
|------|------|---------|-----------|
| Headings | Chakra Petch | 600, 700 | Angular, technical, shift-clock feel |
| Body | Outfit | 300, 400, 600 | Clean, warm, highly legible at small sizes |
| Data/Timestamps | Overpass Mono | 400, 600 | Utility monospace, distinct from IBM Plex Mono |

## Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | #1E1E2E | Charcoal — dark monitor feel (60%) |
| Surface | #2A2A3C | Graphite — cards, input areas |
| Text Primary | #F0F0F5 | Near-white |
| Text Secondary | #9CA3AF | Cool grey |
| Accent (CTA) | #22C55E | Vital green — record/generate buttons only |
| Accent Hover | #16A34A | Deeper green |
| Warning | #FBBF24 | Shift amber — flagged items |
| Danger | #EF4444 | Critical priority |
| Border | #3F3F5C | Muted purple-grey |

## Unique Visual Hook
**Pulse Bar** — animated ECG-style waveform during recording and AI generation. CSS keyframe animation (no JS). Visual feedback that says "I'm listening" / "I'm thinking."

## Layout
- 720px max single-column (phone-first, works on desktop)
- Dark mode only. No light theme.
- Cards with 1px border (#3F3F5C), subtle surface background
- Priority flags: amber badges for warnings, red for critical

## Competitors
- NurseBrain (app-only, $6.99/mo) — no web presence
- NurseMagic ($7.99/mo app) — no voice-first
- Simbie AI (enterprise) — not individual nurses
- No web-based, voice-first SBAR tool exists
