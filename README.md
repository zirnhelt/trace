# TRACE — Content Accountability Standard

**v1.0 · May 2026**

TRACE is a framework for evaluating whether content about a community meets minimum conditions of accountability. It addresses a structural gap: communities are routinely the subjects of content they didn't commission, don't control, and can't correct — and the proliferation of AI-generated content has made this problem dramatically worse.

TRACE gives communities and producers a shared language and a measurable standard.

**Live site and scorecard:** [tracestandard.org](https://tracestandard.org)

---

## The Five Conditions

| Letter | Condition | What it requires |
|--------|-----------|-----------------|
| **T** | Transparency | Disclose who made the content, how, and why — at point of encounter, in plain language |
| **R** | Representation | Reflect the community's actual diversity and complexity, not a simplified narrative |
| **A** | Accountability | A real feedback mechanism with genuine power to change outcomes, not a comment form |
| **C** | Consent | Explicit, informed, revocable consent for any attributed statements or cultural knowledge |
| **E** | Engagement | Honest assessment of competition with community creators; active collaboration where possible |

---

## Two Tracks

TRACE uses two scoring tracks based on who is producing the content and why.

### Track A — Community Insider (20 points)

For content produced by community members themselves: self-funded, non-commercial, insider perspective. Six categories: Transparency, Representation, Accountability, Consent, Engagement, Community Benefit.

| Score | Verdict |
|-------|---------|
| 18–20 | Exemplary |
| 14–17 | Sound |
| 10–13 | Developing |
| 0–9 | Non-Compliant |

### Track B — External / Institutional (35 points)

For content produced by external organizations, commercial outlets, platforms, researchers, or AI operators about a community. Seven categories: adds Structural Benefit and Data Rights to the Track A categories, with more rigorous requirements across the board — especially around AI disclosure, community editorial authority, and data sovereignty.

| Score | Verdict |
|-------|---------|
| 31–35 | Exemplary |
| 24–30 | Sound |
| 17–23 | Developing |
| 0–16 | Non-Compliant |

---

## How to Use It

1. **Score content** using the interactive scorecard at [tracestandard.org/scorecard](https://tracestandard.org/scorecard). Select the appropriate track, work through each criterion, and generate a shareable accountability card.

2. **Endorse the Compact.** The [Community Content Compact](https://tracestandard.org/compact) is the foundation document — a statement of conditions for ethical content production, open for endorsement by communities and producers.

3. **Adapt it.** TRACE is offered for adaptation and use by any organization working on these questions. Fork this repo, modify the criteria, apply it to your context.

---

## Foundation and Background

TRACE was developed through [Cariboo Signals](https://cariboosignals.ca), a community journalism project serving rural British Columbia. The accompanying [policy brief](https://tracestandard.org/policy-brief) — *Who Gets to Tell a Community's Story?* — makes the case for mandatory disclosure, governance funding, and community data rights.

---

## How to Cite

> Cariboo Signals. (2026). *TRACE Content Accountability Standard, v1.0*. https://tracestandard.org

**APA:**
Cariboo Signals. (2026). *TRACE Content Accountability Standard* (Version 1.0). https://tracestandard.org

**Chicago:**
Cariboo Signals. "TRACE Content Accountability Standard." Version 1.0. May 2026. https://tracestandard.org.

---

## Repository

| File | Purpose |
|---|---|
| `index.html` | TRACE landing page |
| `scorecard.html` | Interactive scoring tool |
| `compact.html` | Community Content Compact |
| `policy-brief.html` | Policy brief for funders and policymakers |
| `worker.js` | Cloudflare Worker router |
| `wrangler.toml` | Worker configuration |
| `.github/workflows/deploy.yml` | Auto-deploy on push to main |

**Deploying:** Push to `main` — GitHub Actions deploys via Wrangler. Requires a `CF_API_TOKEN` secret (Settings → Secrets) with Cloudflare Workers edit permissions.

---

## License

Offered for adaptation and use by any organization working on these questions.
