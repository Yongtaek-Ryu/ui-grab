const focusNotes = [
  {
    title: "Prompt placement",
    body: "Large title, small body copy, and an asymmetric hero help verify that the prompt surface stays centered on the real selection instead of drifting toward the click edge.",
  },
  {
    title: "Grouped selection",
    body: "Parallel chips, list rows, and call-to-action buttons create easy targets for Shift multi-select without relying on the existing e2e fixtures.",
  },
  {
    title: "Scroll behavior",
    body: "The lower logbook and specimen sections extend beyond the first viewport so you can inspect how frozen selections behave while the page moves.",
  },
];

const specimenRows = [
  { label: "Manifest", detail: "Three nested rows with right-aligned metadata" },
  { label: "Signal Tags", detail: "Compact pill targets for grouped capture" },
  { label: "Field Notes", detail: "Paragraph and quote styles in one section" },
  { label: "Action Rail", detail: "Mixed button sizes and emphasis levels" },
];

const timeline = [
  {
    time: "06:10",
    title: "Tide chart pinned",
    note: "Short factual row for table-like selection tests.",
  },
  {
    time: "06:42",
    title: "Beacon warmed",
    note: "Good for verifying panel centering on narrow text targets.",
  },
  {
    time: "07:15",
    title: "North deck cleared",
    note: "Grouped row selection should feel natural here.",
  },
  {
    time: "07:48",
    title: "Departure window confirmed",
    note: "The final CTA sits below this section to test long-page context.",
  },
];

export const SamplePage = () => {
  return (
    <div className="sample-page relative min-h-screen overflow-x-hidden text-[#f4efe8]">
      <div className="sample-grid absolute inset-0 opacity-60" />
      <div className="sample-vignette absolute inset-0" />
      <div className="sample-orb sample-float absolute left-[6%] top-[9rem] h-40 w-40 rounded-full" />
      <div className="sample-orb sample-drift absolute right-[14%] top-[7rem] h-64 w-64 rounded-full opacity-70" />
      <div className="sample-orb sample-float absolute bottom-[18rem] right-[8%] h-32 w-32 rounded-full opacity-60" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div>
          <div
            className="text-xs uppercase tracking-[0.42em] text-white/55"
            style={{ fontFamily: "var(--sample-sans)" }}
          >
            UI Grab Manual Surface
          </div>
          <div
            className="mt-2 text-sm text-white/72"
            style={{ fontFamily: "var(--sample-sans)" }}
          >
            Accessible at <code className="rounded bg-white/8 px-2 py-1">/sample.html</code>
          </div>
        </div>

        <a
          href="/"
          className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-sm text-white/84 transition hover:border-white/28 hover:bg-white/12"
          style={{ fontFamily: "var(--sample-sans)" }}
        >
          Back to e2e surface
        </a>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-end gap-16 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="sample-fade-up max-w-2xl">
            <div
              className="mb-6 text-xs uppercase tracking-[0.46em] text-white/56"
              style={{ fontFamily: "var(--sample-sans)" }}
            >
              Harbor Signal / sample route
            </div>
            <h1
              className="max-w-[10ch] text-[clamp(4.2rem,11vw,8.8rem)] leading-[0.88] text-[#fff8ef]"
              style={{ fontFamily: "var(--sample-display)" }}
            >
              Harbor
              <br />
              sample
              <br />
              surface
            </h1>
            <p
              className="mt-8 max-w-xl text-lg leading-8 text-white/72"
              style={{ fontFamily: "var(--sample-sans)" }}
            >
              This page is intentionally cinematic but practical. It gives you
              large text, mixed-density controls, narrow inline targets, and
              lower-page rows so you can manually exercise copy, prompt, and
              multi-select behavior without touching the default test surface.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                className="rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm text-white transition hover:border-white/28 hover:bg-white/16"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                Test prompt placement
              </button>
              <button
                className="rounded-full border border-[#d8b88a]/30 bg-[#d8b88a]/16 px-5 py-3 text-sm text-[#fff4e5] transition hover:bg-[#d8b88a]/24"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                Try grouped selection
              </button>
              <button
                className="rounded-full border border-white/12 bg-transparent px-5 py-3 text-sm text-white/74 transition hover:border-white/24 hover:text-white"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                Scroll to logbook
              </button>
            </div>
          </div>

          <div className="sample-glass sample-fade-up relative overflow-hidden rounded-[28px] border border-white/16 p-6 lg:p-8">
            <div className="sample-panel-glow absolute inset-x-8 top-0 h-px" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <div
                  className="text-xs uppercase tracking-[0.3em] text-white/46"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  manual verification brief
                </div>
                <h2
                  className="mt-3 text-3xl leading-tight text-[#fff8ef]"
                  style={{ fontFamily: "var(--sample-display)" }}
                >
                  One page, multiple target types
                </h2>
              </div>
              <div
                className="rounded-full border border-emerald-300/24 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-100"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                ready
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {focusNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-[20px] border border-white/10 bg-black/16 px-4 py-4"
                >
                  <h3
                    className="text-base text-[#fff8ef]"
                    style={{ fontFamily: "var(--sample-display)" }}
                  >
                    {note.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7 text-white/68"
                    style={{ fontFamily: "var(--sample-sans)" }}
                  >
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="sample-glass rounded-[26px] border border-white/14 p-6 lg:p-7">
              <div
                className="text-xs uppercase tracking-[0.3em] text-white/46"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                focus notes
              </div>
              <blockquote
                className="mt-5 max-w-[18ch] text-4xl leading-tight text-[#fff5ea]"
                style={{ fontFamily: "var(--sample-display)" }}
              >
                “The page should feel calm enough to read and varied enough to
                stress every selection path.”
              </blockquote>
              <p
                className="mt-6 max-w-xl text-sm leading-7 text-white/66"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                Use the paragraph, quote, and small metadata below to inspect
                how the overlay behaves when target density changes inside one
                section.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["beacon", "manifest", "north deck", "quiet UI"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/14 bg-white/6 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white/72"
                    style={{ fontFamily: "var(--sample-sans)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>

            <article className="sample-glass rounded-[26px] border border-white/14 p-6 lg:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div
                    className="text-xs uppercase tracking-[0.3em] text-white/46"
                    style={{ fontFamily: "var(--sample-sans)" }}
                  >
                    specimen grid
                  </div>
                  <h2
                    className="mt-3 text-3xl text-[#fff8ef]"
                    style={{ fontFamily: "var(--sample-display)" }}
                  >
                    Mixed targets
                  </h2>
                </div>
                <div
                  className="text-sm text-white/54"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Click rows, chips, copy, prompt
                </div>
              </div>

              <div className="mt-6 divide-y divide-white/10 rounded-[20px] border border-white/10 bg-black/14">
                {specimenRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-3 px-4 py-4 md:grid-cols-[0.8fr_1.2fr_auto] md:items-center"
                  >
                    <div
                      className="text-lg text-[#fff8ef]"
                      style={{ fontFamily: "var(--sample-display)" }}
                    >
                      {row.label}
                    </div>
                    <div
                      className="text-sm leading-7 text-white/64"
                      style={{ fontFamily: "var(--sample-sans)" }}
                    >
                      {row.detail}
                    </div>
                    <button
                      className="justify-self-start rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/78 transition hover:border-white/24 hover:bg-white/12"
                      style={{ fontFamily: "var(--sample-sans)" }}
                    >
                      inspect
                    </button>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="sample-glass rounded-[28px] border border-white/14 p-6 lg:p-7">
              <div
                className="text-xs uppercase tracking-[0.3em] text-white/46"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                field logbook
              </div>
              <div className="mt-6 space-y-4">
                {timeline.map((entry) => (
                  <div
                    key={entry.time}
                    className="grid gap-4 rounded-[20px] border border-white/10 bg-black/14 px-4 py-4 md:grid-cols-[92px_1fr]"
                  >
                    <div
                      className="text-sm uppercase tracking-[0.24em] text-[#d9b37f]"
                      style={{ fontFamily: "var(--sample-sans)" }}
                    >
                      {entry.time}
                    </div>
                    <div>
                      <h3
                        className="text-2xl text-[#fff8ef]"
                        style={{ fontFamily: "var(--sample-display)" }}
                      >
                        {entry.title}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-7 text-white/64"
                        style={{ fontFamily: "var(--sample-sans)" }}
                      >
                        {entry.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <aside className="sample-glass rounded-[28px] border border-white/14 p-6 lg:p-7">
              <div
                className="text-xs uppercase tracking-[0.3em] text-white/46"
                style={{ fontFamily: "var(--sample-sans)" }}
              >
                action rail
              </div>
              <div className="mt-6 space-y-3">
                <button
                  className="w-full rounded-[18px] border border-white/16 bg-white/10 px-4 py-4 text-left text-white transition hover:border-white/24 hover:bg-white/14"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Primary verification pass
                </button>
                <button
                  className="w-full rounded-[18px] border border-[#d9b37f]/30 bg-[#d9b37f]/14 px-4 py-4 text-left text-[#fff5e6] transition hover:bg-[#d9b37f]/20"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Multi-select stress pass
                </button>
                <button
                  className="w-full rounded-[18px] border border-white/10 bg-black/14 px-4 py-4 text-left text-white/72 transition hover:border-white/18 hover:text-white"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Scroll and retry
                </button>
              </div>
              <div className="mt-8 rounded-[22px] border border-white/10 bg-black/14 p-4">
                <div
                  className="text-xs uppercase tracking-[0.24em] text-white/42"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  quick checklist
                </div>
                <ul
                  className="mt-4 space-y-3 text-sm leading-7 text-white/68"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  <li>Try `Cmd+C` or `Ctrl+C`, then `Shift + click` two rows.</li>
                  <li>Check whether the prompt stays centered on the selection.</li>
                  <li>Verify that lower-page content behaves the same after scrolling.</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="sample-glass rounded-[32px] border border-white/14 px-6 py-8 lg:px-8 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div
                  className="text-xs uppercase tracking-[0.3em] text-white/44"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  final call
                </div>
                <h2
                  className="mt-3 max-w-[14ch] text-4xl leading-tight text-[#fff8ef]"
                  style={{ fontFamily: "var(--sample-display)" }}
                >
                  If this page feels stable, the selection UI is ready for a
                  broader manual pass.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm text-white transition hover:border-white/28 hover:bg-white/16"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Keep testing here
                </button>
                <a
                  href="/"
                  className="rounded-full border border-white/12 bg-transparent px-5 py-3 text-sm text-white/72 transition hover:border-white/24 hover:text-white"
                  style={{ fontFamily: "var(--sample-sans)" }}
                >
                  Return to root app
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
