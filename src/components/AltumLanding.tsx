import React from "react";

const AltumLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-neutral-800 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            {/* Logo NERVA */}
            <img 
              src="/logo.svg" 
              alt="Nerva logo" 
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-tight">Nerva</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#architecture" className="hover:text-white">
              Architecture
            </a>
            <a href="#security" className="hover:text-white">
              Security
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-medium text-white hover:border-neutral-500 md:inline-flex">
              Talk to the team
            </button>
            <a
              href="https://www.nerva.link/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-4 py-1.5 text-sm font-semibold text-black hover:bg-[#185fcc]"
            >
              Start earning
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section className="border-b border-neutral-800 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-14 md:flex-row md:items-center md:gap-16 md:pt-20">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-3 py-1 text-xs font-medium text-neutral-300">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1A73E8]" />
                Cross-chain yield · Single Nerva vault
              </div>

              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Cross-chain yield.{" "}
                <span className="block">
                  One vault.{" "}
                  <span className="text-[#1A73E8]">Unified performance.</span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm text-neutral-300 sm:text-base">
                Nerva is a decentralized investment platform that allocates your
                capital across chains and protocols through a single vault. You
                deposit USDC once — the Curator engine handles allocation,
                optimization and accounting behind the scenes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.nerva.link/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-6 py-2 text-sm font-semibold text-black hover:bg-[#185fcc]"
                >
                  Start earning
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("architecture")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-full border border-neutral-700 px-5 py-2 text-sm font-medium text-white hover:border-neutral-500"
                >
                  Explore the architecture
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-400">
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Single ERC-4626 Nerva vault
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Cross-chain capital allocation
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Risk-aware automation
                </span>
              </div>
            </div>

            {/* HERO RIGHT – Nerva Global Vault card */}
            <div className="flex-1">
              <div className="rounded-2xl border border-neutral-800 bg-black p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-neutral-300">
                  <span>Nerva Global Vault</span>
                  <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-300">
                    Overview
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Metrics */}
                  <div className="space-y-3 rounded-xl border border-neutral-800 bg-black p-4">
                    <div className="text-xs uppercase tracking-wide text-neutral-400">
                      Vault metrics
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">
                        Total value locked
                      </div>
                      <div className="text-lg font-semibold text-white">
                        $123,456,789
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">
                        Vault share price
                      </div>
                      <div className="text-base font-semibold text-white">
                        1.0342 USDC
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">
                        30d indicative APY
                      </div>
                      <div className="text-base font-semibold text-[#1A73E8]">
                        7.4%
                      </div>
                    </div>
                  </div>

                  {/* Allocation */}
                  <div className="space-y-3 rounded-xl border border-neutral-800 bg-black p-4">
                    <div className="text-xs uppercase tracking-wide text-neutral-400">
                      Allocation snapshot
                    </div>

                    <div className="space-y-2 text-xs text-neutral-300">
                      <div className="flex items-center justify-between">
                        <span>Hub chain · Global Vault</span>
                        <span>40%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-neutral-900">
                        <div className="h-1.5 w-[40%] rounded-full bg-white" />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span>Investment Zone A</span>
                        <span>30%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-neutral-900">
                        <div className="h-1.5 w-[30%] rounded-full bg-white" />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span>Investment Zone B</span>
                        <span>30%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-neutral-900">
                        <div className="h-1.5 w-[30%] rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-neutral-400">
                      Single entry point · cross-chain allocation governed by
                      the Nerva Curator engine.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPS */}
        <section className="border-b border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                One vault. All chains. Unified yield.
              </h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                Users interact with a single Nerva vault, while capital is
                deployed across chains and strategies. The result: one balance,
                one share price, cross-chain performance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">
                  One vault, many chains
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Deposit and withdraw on the primary chain. Nerva routes
                  capital towards selected investment zones while maintaining
                  unified accounting.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">
                  Curator-driven allocation
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  The Curator engine allocates dynamically based on yield,
                  liquidity, stability and diversification constraints, with
                  explicit risk limits per chain and strategy.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">
                  Unified, transparent yield
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Rewards are collected, converted when needed and reinvested
                  into the vault. All performance is reflected in the global
                  share price — no extra positions to track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-b border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                How Nerva works
              </h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                A simple user experience on the surface, powered by a structured
                hub-and-spoke architecture under the hood.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Deposit into the Global Vault",
                  text: "Users deposit USDC into the Nerva Global Vault on the Hub chain. One chain, one interaction, one balance."
                },
                {
                  title: "Curator allocates capital",
                  text: "The Curator engine distributes liquidity across investment zones based on yield, risk limits, liquidity and diversification rules."
                },
                {
                  title: "Cross-chain execution",
                  text: "Canonical bridges and chain-specific modules invest into approved strategies while keeping each zone isolated at the smart-contract level."
                },
                {
                  title: "Rewards reinvested, yield unified",
                  text: "Rewards are harvested and reinvested, increasing the vault’s value per share. Users simply see their position evolve over time."
                }
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-neutral-800 bg-black p-5"
                >
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="border-b border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Architecture overview
              </h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                Nerva is structured as a hub-and-spoke system: a single global
                vault at the center, with investment zones and local execution
                modules at the edge.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Global Vault (Hub)
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The canonical ERC-4626 vault on the Hub chain. It holds user
                    deposits, maintains global accounting and orchestrates
                    cross-chain capital allocation.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Investment Zones
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Secondary chains hosting local strategies. Each zone is
                    connected to the Hub through lightweight adapters that
                    deploy capital, harvest rewards and report value back.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Curator engine &amp; controls
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The Curator engine manages target allocations, risk
                    parameters and emergency controls. It can reduce exposure,
                    freeze zones or recall capital in response to market
                    conditions.
                  </p>
                </div>
              </div>

              {/* Schematic */}
              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  High-level schematic
                </div>
                <div className="space-y-4 text-xs text-neutral-300">
                  <div className="rounded-xl border border-neutral-800 bg-black p-3 text-center">
                    Users deposit USDC on Hub chain
                  </div>

                  <div className="flex justify-center">
                    <div className="h-px w-10 bg-neutral-700" />
                  </div>

                  <div className="rounded-xl border border-neutral-800 bg-black p-3 text-center">
                    Nerva Global Vault (Hub)
                    <div className="mt-1 text-[11px] text-neutral-400">
                      Accounting · Shares · Policy
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-px w-10 bg-neutral-700" />
                  </div>

                  <div className="grid gap-2 text-[11px]">
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">
                      Investment Zone A · Lending / vaults
                    </div>
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">
                      Investment Zone B · Liquidity / rewards
                    </div>
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">
                      Investment Zone C · Future strategies
                    </div>
                  </div>

                  <p className="pt-2 text-[11px] text-neutral-400">
                    Value flows back into a single global share price. Users
                    remain on the Hub; Nerva handles cross-chain execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section id="security" className="border-b border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Security &amp; risk management
              </h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                Nerva is built for institutional-grade capital, with isolation,
                conservative assumptions and explicit controls at every layer.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Canonical USDC transfers
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Nerva relies on native USDC mechanisms (such as CCTP) to
                    move value between chains via burn-and-mint, avoiding
                    synthetic wrapped assets whenever possible.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Isolated zones and strategies
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Each investment zone and strategy is isolated with explicit
                    caps. Exposure can be frozen, reduced or unwound without
                    shutting down the entire system.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Non-custodial by design
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The protocol cannot arbitrarily withdraw user funds.
                    Withdrawals follow deterministic vault logic and remain
                    proportional to each user’s share of the system.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">
                    Audits &amp; observability
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Core smart contracts are structured for audits, with clear
                    invariants and on-chain observability to support continuous
                    risk monitoring over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                A single vault, multiple chains and structured automation.
                Here’s the high-level view.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Do I need to interact with multiple chains?",
                  a: "No. You deposit and withdraw on the Hub chain only. Nerva handles cross-chain execution and accounting under the hood."
                },
                {
                  q: "Where does yield come from?",
                  a: "Yield comes from curated on-chain strategies, such as lending markets, yield vaults, liquidity provision and reward programs across supported chains."
                },
                {
                  q: "Do I receive rewards directly?",
                  a: "No. Rewards are harvested and reinvested into the Nerva vault, increasing the global value per share. You benefit through the growth of your position."
                },
                {
                  q: "Is Nerva custodial?",
                  a: "Nerva is non-custodial. Assets are held in smart contracts governed by deterministic vault logic. Operators cannot arbitrarily withdraw user funds."
                },
                {
                  q: "What happens if a chain or protocol becomes risky?",
                  a: "The Curator can freeze allocations, reduce exposure or migrate capital away from the affected chain or protocol while keeping the Global Vault operational."
                }
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-neutral-800 bg-black p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                    <span>{item.q}</span>
                    <span className="text-neutral-500 group-open:hidden">+</span>
                    <span className="hidden text-neutral-500 group-open:inline">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Nerva. All rights reserved.</span>
          <div className="flex gap-4">
            <button className="hover:text-neutral-300">Docs</button>
            <button className="hover:text-neutral-300">Security</button>
            <button className="hover:text-neutral-300">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AltumLanding;
