import { useState } from "react";
import "./App.css";

const navItems = [
  "Your stay",
  "The house",
  "Around town",
  "Breakfast",
  "Messages",
];

const detailCards = [
  {
    id: "01",
    title: "Arrival",
    subtitle: "Check-in from 15:00",
    description:
      "Ring the brass bell by the blue door. If we are at the market, the key is in the terracotta pot by the olive tree.",
    accent: "bg-[hsl(15,69%,37%)] text-white",
    labelColor: "text-[hsl(15,69%,37%)]",
  },
  {
    id: "02",
    title: "Wi-Fi",
    subtitle: "Le Soleil · Guest",
    description: "Network · Le Soleil · Guest",
    accent: "bg-[hsl(230,49%,56%)] text-white",
    labelColor: "text-[hsl(230,49%,56%)]",
    password: "soleil-2026",
  },
  {
    id: "03",
    title: "Breakfast",
    subtitle: "Served 8 - 10:30",
    description:
      "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
    accent: "bg-[hsl(340,48%,52%)] text-white",
    labelColor: "text-[hsl(340,48%,52%)]",
  },
];

const stayRows = [
  { label: "Room", value: "La Garrigue", detail: "4 nights" },
  { label: "Breakfast", value: "2 guests", detail: "€ 96.00" },
  { label: "Tourist tax", value: "€ 14.40", detail: "" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("soleil-2026");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
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

    const blob = new Blob([calendarText], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "maison-soleil-booking.ics";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-[hsl(41,100%,93%)] px-4 py-8 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[hsl(35,60%,96%)] px-4 py-6 shadow-[0_40px_100px_-40px_rgba(40,20,10,0.12)] sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="pointer-events-none absolute -right-28 top-6 h-48 w-48 rounded-full bg-[hsl(41,100%,93%)] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-8 h-48 w-48 rounded-full bg-[hsl(42,83%,58%)] opacity-30 blur-3xl" />

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          <section className="block lg:hidden">
            <div className="flex items-center justify-between rounded-[2rem] border border-[hsl(35,60%,90%)] bg-white px-5 py-4 shadow-[0_14px_40px_-24px_rgba(40,20,10,0.12)]">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[hsl(34,40%,40%)]">Maison Soleil</p>
                <p className="text-sm font-semibold text-[hsl(33,15%,15%)]">Booking · Confirmed</p>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(35,60%,90%)] bg-[hsl(35,60%,96%)] text-[hsl(33,15%,15%)] shadow-sm transition hover:bg-[hsl(35,60%,90%)]"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </section>

          <aside className="hidden rounded-[2.1rem] bg-[hsl(15,69%,37%)] p-7 text-white shadow-[0_30px_70px_-30px_rgba(20,10,8,0.5)] lg:block">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[hsl(41,100%,93%)]/80">Guest house</p>
                <h1 className="mt-3 font-fraunces text-4xl leading-none">Maison Soleil</h1>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </div>
            </div>

            <nav className="mt-10 flex flex-col gap-3 text-sm">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`rounded-full px-4 py-3 transition ${
                    index === 0 ? "bg-white/15 text-white" : "text-[rgba(255,255,255,0.85)] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="mt-10 rounded-[1.75rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Today in Cassis</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-fraunces text-4xl leading-none">27°</p>
                  <p className="mt-2 text-sm text-[rgba(255,255,255,0.8)]">Sunny · light breeze</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3 text-sm leading-7 text-[rgba(255,255,255,0.87)]">
              <p className="font-fraunces text-2xl text-white">Est. 1987</p>
              <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
              <p>© 2026 Maison Soleil</p>
            </div>
          </aside>

          <main className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[hsl(34,40%,40%)]">Booking · Confirmed</p>
                <h1 className="mt-2 font-fraunces text-4xl leading-tight text-[hsl(33,15%,15%)] sm:text-[3.2rem]">
                  Bienvenue, Lucia.
                </h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="rounded-full border border-[hsl(35,60%,90%)] bg-white px-5 py-3 text-sm font-semibold text-[hsl(33,15%,15%)] transition hover:bg-[hsl(41,100%,93%)]"
                >
                  Print receipt
                </button>
                <button
                  type="button"
                  onClick={handleCalendar}
                  className="rounded-full bg-[hsl(33,15%,15%)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[hsl(33,15%,25%)]"
                >
                  Add to calendar
                </button>
              </div>
            </div>

            <section className="relative">
              <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
                <article className="rounded-[2rem] bg-[hsl(0,0%,98%)] p-6 shadow-[0_30px_70px_-35px_rgba(40,20,10,0.18)] sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[hsl(34,40%,40%)]">Your stay</p>
                      <h2 className="mt-3 font-fraunces text-3xl text-[hsl(33,15%,15%)]">Your stay</h2>
                    </div>
                    <div className="text-right text-sm text-[hsl(33,15%,15%)]/70">
                      <p className="font-dmmono">№ MS-2026</p>
                      <p className="font-dmmono">0421-AH</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(40,20,10,0.12)]">
                      <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">Check in</p>
                      <p className="mt-3 font-fraunces text-3xl text-[hsl(33,15%,15%)]">25 Apr</p>
                      <p className="mt-3 text-sm text-[hsl(33,15%,15%)]/70">Saturday · 15:00</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(40,20,10,0.12)]">
                      <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">Check out</p>
                      <p className="mt-3 font-fraunces text-3xl text-[hsl(33,15%,15%)]">29 Apr</p>
                      <p className="mt-3 text-sm text-[hsl(33,15%,15%)]/70">Wednesday · 11:00</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.5rem] bg-[hsl(41,100%,93%)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.75rem] uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">Room · La Garrigue</p>
                        <p className="mt-3 text-sm text-[hsl(33,15%,15%)]/80">4 nights</p>
                      </div>
                      <p className="font-fraunces text-lg text-[hsl(33,15%,15%)]">€ 620.00</p>
                    </div>
                    <div className="mt-4 border-t border-[hsl(35,60%,90%)] pt-4 text-sm text-[hsl(33,15%,15%)]/80">
                      <p>Breakfast · 2 guests</p>
                      <p className="mt-2">Tourist tax · € 14.40</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-[hsl(35,60%,90%)] pt-4">
                      <p className="text-sm uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">Total paid</p>
                      <p className="font-fraunces text-2xl text-[hsl(33,15%,15%)]">€ 730.40</p>
                    </div>
                  </div>
                </article>

                <article className="relative rounded-[2.4rem] bg-gradient-to-br from-[hsl(18,62%,47%)] to-[hsl(15,69%,37%)] p-7 text-white shadow-[0_30px_75px_-35px_rgba(40,20,10,0.45)] sm:p-8">
                  <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/15 blur-2xl" />
                  <div className="relative z-10">
                    <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[rgba(255,255,255,0.75)]">Welcome card</p>
                    <h2 className="mt-4 font-fraunces text-4xl leading-tight">A note from your host, Margaux.</h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-[rgba(255,255,255,0.92)]">
                      We&apos;re so glad you&apos;re coming. The shutters will be open, the lemonade cold, and the cat — Poivre — pretending not to notice you.
                    </p>
                    <div className="mt-8 rounded-[2rem] bg-white/10 p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.78)]">Room</p>
                      <p className="mt-3 font-fraunces text-2xl">La Garrigue</p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {detailCards.map((card) => (
                  <article key={card.id} className="rounded-[2rem] border border-[hsl(35,60%,90%)] bg-white p-5 shadow-[0_18px_40px_-24px_rgba(40,20,10,0.14)]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-3xl ${card.accent}`}>
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M4 12h16M4 18h16M4 6h16" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">{card.title}</p>
                          <h3 className="mt-2 font-fraunces text-lg text-[hsl(33,15%,15%)]">{card.subtitle}</h3>
                        </div>
                      </div>
                      <span className={`font-dmmono text-sm font-semibold ${card.labelColor}`}>{card.id}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[hsl(33,15%,15%)]/80">{card.description}</p>
                    {card.password ? (
                      <div className="mt-5 rounded-[1.4rem] bg-[hsl(41,100%,93%)] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[hsl(34,40%,40%)]">Password</p>
                            <p className="mt-1 font-dmmono text-sm text-[hsl(33,15%,15%)]">{card.password}</p>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopy}
                            className="rounded-full border border-[hsl(230,49%,56%)] px-4 py-2 text-sm font-semibold text-[hsl(230,49%,56%)] transition hover:bg-[hsl(230,49%,56%)] hover:text-white"
                          >
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>

        {menuOpen ? (
          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden">
            <div className="absolute right-0 top-0 h-full w-[90vw] max-w-[320px] rounded-l-[2rem] bg-white p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[hsl(34,40%,40%)]">Maison Soleil</p>
                  <p className="mt-1 text-sm font-semibold text-[hsl(33,15%,15%)]">Your stay</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(35,60%,90%)] bg-[hsl(41,100%,93%)] text-[hsl(33,15%,15%)]"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`rounded-[1.2rem] px-4 py-3 text-sm font-semibold transition ${
                      index === 0 ? "bg-[hsl(15,69%,37%)] text-white" : "text-[hsl(33,15%,15%)] hover:bg-[hsl(41,100%,93%)]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-[1.75rem] bg-[hsl(41,100%,93%)] p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[hsl(15,69%,37%)]">Today in Cassis</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-fraunces text-3xl text-[hsl(33,15%,15%)]">27°</p>
                    <p className="mt-1 text-xs text-[hsl(33,15%,15%)]">Sunny · light breeze</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(42,83%,58%)] text-white">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
