import { useState } from "react";
import "./App.css";

const navItems = [
  "Your stay",
  "The house",
  "Around town",
  "Breakfast",
  "Messages",
];

const stayRows = [
  { label: "Room", value: "La Garrigue", detail: "4 nights" },
  { label: "Breakfast", value: "2 guests", detail: "€ 96.00" },
  { label: "Tourist tax", value: "€ 14.40", detail: "" },
];

const arrivalDetails = [
  { title: "Check-in from 15:00", body: "Sat, 25 April" },
  {
    title: "Ring the brass bell",
    body: "The key is in the terracotta pot by the olive tree.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("soleil-2026");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleCalendar = () => {
    const calendarText = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:Maison Soleil stay",
      "DTSTART:20260425T150000",
      "DTEND:20260429T110000",
      "LOCATION:Maison Soleil, Cassis",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([calendarText], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "maison-soleil-booking.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[hsl(41,100%,93%)] p-4 text-[hsl(33,15%,15%)] sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[2.25rem] border border-[#e8d9c6] bg-[#fcf6e9] shadow-[0_30px_80px_-30px_rgba(74,40,16,0.45)] lg:flex-row">
        <aside className="bg-[hsl(15,69%,37%)] px-6 py-8 text-white sm:px-8 lg:min-h-[760px] lg:w-[340px] lg:px-10 lg:py-10">
          <div className="flex items-start justify-between gap-4 lg:block">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#f4dcc4]">
                Guest house
              </p>
              <h1 className="font-fraunces text-4xl leading-none sm:text-[2.5rem]">
                Maison Soleil
              </h1>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/35 p-2 transition hover:bg-white/10 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav
            className={`mt-8 flex flex-col gap-3 text-[0.95rem] ${menuOpen ? "flex" : "hidden"} lg:flex`}
          >
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`rounded-full px-4 py-2 transition ${index === 0 ? "bg-white/16 text-white" : "text-[#f7dfc8] hover:bg-white/10 hover:text-white"}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-[1.55rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#f3d7b7]">
              Local weather
            </p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="font-fraunces text-4xl leading-none">27°</p>
                <p className="mt-2 text-sm text-[#f8e7d2]">
                  Sunny · light breeze
                </p>
              </div>
              <div className="rounded-full border border-white/30 p-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm leading-7 text-[#f6dfcb]">
            <p className="font-fraunces text-2xl text-white">Est. 1987</p>
            <p className="mt-3">Maison Soleil · 12 Rue des Oliviers · Cassis</p>
            <p className="mt-2">© 2026 Maison Soleil</p>
          </div>
        </aside>

        <main className="flex-1 bg-[hsl(35,60%,96%)] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8c5a2f]">
                Booking · Confirmed
              </p>
              <h2 className="font-fraunces text-4xl leading-tight text-[#2f2118] sm:text-[2.8rem]">
                Bienvenue, Lucia.
              </h2>
              <p className="mt-3 max-w-xl text-[1.02rem] leading-8 text-[#64513b]">
                Your seaside stay is ready and every detail has been prepared
                for a slow, beautiful arrival.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 print-hide">
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full border border-[#cf8f52] px-5 py-3 text-sm font-semibold text-[#8f5328] transition hover:bg-[#8f5328] hover:text-white"
              >
                Print receipt
              </button>
              <button
                type="button"
                onClick={handleCalendar}
                className="rounded-full bg-[#2f2118] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#493323]"
              >
                Add to calendar
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <article className="relative z-10 rounded-[2rem] border border-[#e8d8c6] bg-[#f7efe4] p-7 shadow-[0_24px_55px_-30px_rgba(74,40,16,0.35)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#8f5e35]">
                      Receipt
                    </p>
                    <h3 className="font-fraunces text-[2rem] text-[#2f2118] sm:text-[2.35rem]">
                      A warm welcome
                    </h3>
                  </div>
                  <div className="text-right text-sm text-[#6f5845]">
                    <p className="font-dmmono">№ MS-2026</p>
                    <p className="font-dmmono">0421-AH</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#e0ceb5] pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[#a06a39]">
                        Your stay
                      </p>
                      <div className="mt-3 space-y-4">
                        <div className="rounded-[1.1rem] bg-[#fdf8ef] p-4">
                          <p className="text-sm font-semibold text-[#2f2118]">
                            Check in
                          </p>
                          <p className="mt-2 font-fraunces text-2xl">25 Apr</p>
                          <p className="mt-2 text-sm text-[#6f5845]">
                            Saturday · 15:00
                          </p>
                        </div>
                        <div className="rounded-[1.1rem] bg-[#fdf8ef] p-4">
                          <p className="text-sm font-semibold text-[#2f2118]">
                            Check out
                          </p>
                          <p className="mt-2 font-fraunces text-2xl">29 Apr</p>
                          <p className="mt-2 text-sm text-[#6f5845]">
                            Wednesday · 11:00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.3rem] bg-[#fffaf2] p-5">
                      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-[#a06a39]">
                        Cost summary
                      </p>
                      <div className="mt-4 space-y-3 text-sm text-[#5d493b]">
                        {stayRows.map((row) => (
                          <div
                            key={row.label}
                            className="flex items-start justify-between gap-3"
                          >
                            <div>
                              <p className="font-semibold text-[#2f2118]">
                                {row.label}
                              </p>
                              {row.detail ? (
                                <p className="text-xs text-[#907560]">
                                  {row.detail}
                                </p>
                              ) : null}
                            </div>
                            <p className="font-semibold text-[#2f2118]">
                              {row.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-[#e6d8c5] pt-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-[#2f2118]">
                            Total paid
                          </p>
                          <p className="font-fraunces text-2xl text-[#2f2118]">
                            € 730.40
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-[#7b6654]">
                          Paid · Wise · GBP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-[1.2rem] border border-[#e5d4c0] bg-[#fdf8ef] px-4 py-3 text-sm text-[#6b5342]">
                  <span className="font-dmmono text-xs uppercase tracking-[0.25em]">
                    Bar code
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-5 w-1 rounded-full ${index % 2 === 0 ? "bg-[#2f2118]" : "bg-[#c97c39]"}`}
                      />
                    ))}
                  </div>
                </div>
              </article>

              <article className="relative -mt-4 ml-6 rounded-[2rem] border border-[#e8d7c6] bg-[#f2e1d1] p-7 shadow-[0_20px_50px_-32px_rgba(74,40,16,0.35)] sm:ml-8 sm:p-8">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#935f2c]">
                  Note from host
                </p>
                <h3 className="font-fraunces text-[2rem] text-[#2f2118]">
                  A welcome from Margaux
                </h3>
                <p className="mt-4 text-[1.01rem] leading-8 text-[#5d493b]">
                  We&apos;re so glad you&apos;re coming. The shutters will be
                  open, the lemonade cold, and the cat — Poivre — pretending not
                  to notice you.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-[1.1rem] bg-[#fcf7ed] p-4">
                  <div className="rounded-full bg-[#8d5a35] p-2 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M4 7h16M7 4v4m10-4v4M5 11h14"
                        strokeLinecap="round"
                      />
                      <rect x="5" y="7" width="14" height="11" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2f2118]">
                      Room · La Garrigue
                    </p>
                    <p className="text-sm text-[#7a6552]">
                      Sea-facing and quietly tucked away
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="grid gap-4">
              {[
                {
                  id: "01",
                  title: "Arrival",
                  eyebrow: "Check-in from 15:00",
                  body: "Ring the brass bell by the blue door. If we are at the market, the key is in the terracotta pot by the olive tree.",
                },
                {
                  id: "02",
                  title: "Wi-Fi",
                  eyebrow: "Le Soleil · Guest",
                  body: "Network · Le Soleil · Guest",
                  password: "soleil-2026",
                  action: true,
                },
                {
                  id: "03",
                  title: "Breakfast",
                  eyebrow: "Served 8 - 10:30",
                  body: "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
                },
              ].map((item) => (
                <article
                  key={item.id}
                  className="rounded-[1.7rem] border border-[#e7d8c6] bg-white/80 p-6 shadow-[0_16px_36px_-24px_rgba(74,40,16,0.32)]"
                >
                  <p className="font-dmmono text-[0.72rem] uppercase tracking-[0.3em] text-[#9c6e3c]">
                    {item.id} · {item.title}
                  </p>
                  <h3 className="mt-3 font-fraunces text-[1.8rem] text-[#2f2118]">
                    {item.eyebrow}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#665645]">
                    {item.body}
                  </p>

                  {item.action ? (
                    <div className="mt-5 rounded-[1.1rem] bg-[#f8efe5] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[#2f2118]">
                            Password
                          </p>
                          <p className="mt-1 font-dmmono text-[0.95rem] text-[#7b6654]">
                            {item.password}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopy}
                          className="rounded-full border border-[#c48c52] px-3 py-2 text-sm font-semibold text-[#8f5328] transition hover:bg-[#8f5328] hover:text-white"
                        >
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
