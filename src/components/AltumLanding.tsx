import React from "react";



const AltumLanding: React.FC = () => {

  return (

    <div className="min-h-screen bg-slate-950 text-slate-50">

      {/* NAVBAR */}

      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">

              <span className="text-lg font-semibold leading-none">A</span>

            </div>

            <span className="text-lg font-semibold tracking-tight">Altum</span>

          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

            <a href="#how" className="hover:text-slate-50">

              How it works

            </a>

            <a href="#architecture" className="hover:text-slate-50">

              Architecture

            </a>

            <a href="#security" className="hover:text-slate-50">

              Security

            </a>

            <a href="#faq" className="hover:text-slate-50">

              FAQ

            </a>

          </nav>

          <div className="flex items-center gap-3">

            <button className="hidden rounded-full border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-slate-500 md:inline-flex">

              Talk to the team

            </button>

            <a 
              href="https://alex-client-ui-production.up.railway.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-sky-400 inline-flex items-center justify-center"
            >

              Start earning

            </a>

          </div>

        </div>

      </header>



      {/* HERO */}

      <main>

        <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-14 md:flex-row md:items-center md:gap-16 md:pt-20">

            <div className="flex-1">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">

                <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />

                Cross-chain yield · Single entry point

              </div>

              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">

                Next-generation cross-chain yield.

                <span className="block text-slate-300">

                  One vault. Unlimited reach.

                </span>

              </h1>

              <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-base">

                Altum is a unified yield engine that allocates your capital

                across the best opportunities on every chain — while you deposit

                and withdraw from one place.

              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">

                <a 
                  href="https://alex-client-ui-production.up.railway.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-sky-400 inline-flex items-center justify-center"
                >

                  Start earning

                </a>

                <button

                  onClick={() =>

                    document

                      .getElementById("architecture")

                      ?.scrollIntoView({ behavior: "smooth" })

                  }

                  className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500"

                >

                  Explore the architecture

                </button>

              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">

                <span className="rounded-full border border-slate-800 px-3 py-1">

                  Cross-chain allocation

                </span>

                <span className="rounded-full border border-slate-800 px-3 py-1">

                  Curated strategies

                </span>

                <span className="rounded-full border border-slate-800 px-3 py-1">

                  Institutional-grade design

                </span>

              </div>

            </div>



            {/* HERO RIGHT – schematic card */}

            <div className="flex-1">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">

                <div className="mb-4 flex items-center justify-between text-xs text-slate-300">

                  <span>Altum Global Vault</span>

                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">

                    Live preview

                  </span>

                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900 p-4">

                    <div className="text-xs uppercase tracking-wide text-slate-400">

                      Vault metrics

                    </div>

                    <div>

                      <div className="text-[11px] text-slate-400">

                        Total value locked

                      </div>

                      <div className="text-lg font-semibold text-slate-50">

                        $123,456,789

                      </div>

                    </div>

                    <div>

                      <div className="text-[11px] text-slate-400">

                        Vault share price

                      </div>

                      <div className="text-base font-semibold text-slate-50">

                        1.0342 USDC

                      </div>

                    </div>

                    <div>

                      <div className="text-[11px] text-slate-400">

                        30d indicative APY

                      </div>

                      <div className="text-base font-semibold text-emerald-400">

                        7.4%

                      </div>

                    </div>

                  </div>



                  <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900 p-4">

                    <div className="text-xs uppercase tracking-wide text-slate-400">

                      Allocation snapshot

                    </div>

                    <div className="space-y-2 text-xs text-slate-300">

                      <div className="flex items-center justify-between">

                        <span>Hub chain</span>

                        <span>42%</span>

                      </div>

                      <div className="h-1.5 w-full rounded-full bg-slate-800">

                        <div className="h-1.5 w-[42%] rounded-full bg-sky-500" />

                      </div>

                      <div className="flex items-center justify-between pt-2">

                        <span>Chain A (Morpho · Vaults)</span>

                        <span>33%</span>

                      </div>

                      <div className="h-1.5 w-full rounded-full bg-slate-800">

                        <div className="h-1.5 w-[33%] rounded-full bg-emerald-400" />

                      </div>

                      <div className="flex items-center justify-between pt-2">

                        <span>Chain B (Euler · Others)</span>

                        <span>25%</span>

                      </div>

                      <div className="h-1.5 w-full rounded-full bg-slate-800">

                        <div className="h-1.5 w-[25%] rounded-full bg-indigo-400" />

                      </div>

                    </div>

                    <div className="pt-2 text-[11px] text-slate-400">

                      Single entry point · multi-chain allocation managed by

                      Altum Curator.

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* VALUE PROPS */}

        <section className="border-b border-slate-800 bg-slate-950">

          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">

              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">

                One vault. All chains. Unified yield.

              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">

                Deposit USDC on a single chain. Altum handles cross-chain

                allocation, execution, and optimization behind the scenes.

              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <h3 className="text-sm font-semibold text-slate-50">

                  One Vault. All Chains.

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                  Deposit and withdraw on the Hub chain. Altum routes capital to

                  the highest-performing opportunities across multiple chains.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <h3 className="text-sm font-semibold text-slate-50">

                  Smart, Curated Allocation

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                  A dedicated Curator engine allocates across Morpho, Euler,

                  vaults, lending markets, and emerging protocols based on yield

                  and risk.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <h3 className="text-sm font-semibold text-slate-50">

                  Unified Yield Experience

                </h3>

                <p className="mt-2 text-sm text-slate-300">

                  All performance flows back into a single ERC-4626 vault. No

                  manual bridging, no multiple positions to manage.

                </p>

              </div>

            </div>

          </div>

        </section>



        {/* HOW IT WORKS */}

        <section id="how" className="border-b border-slate-800 bg-slate-950">

          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">

              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">

                How Altum works

              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">

                A simple user experience on the surface, powered by a structured

                cross-chain architecture under the hood.

              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-4">

              {[

                {

                  title: "Deposit on the Hub chain",

                  text: "Users deposit USDC into the Altum Global Vault on the Hub chain. One chain, one interaction, one balance.",

                },

                {

                  title: "Curator allocates smarter",

                  text: "The Curator engine distributes liquidity based on yield, risk limits, liquidity constraints, and diversification rules.",

                },

                {

                  title: "Cross-chain execution",

                  text: "Capital moves through secure, canonical bridges. Chain-specific adapters invest into approved strategies.",

                },

                {

                  title: "Rewards reinvested, yield unified",

                  text: "Rewards are harvested and reinvested, increasing the vault's value per share. Users simply see their position grow.",

                },

              ].map((step, idx) => (

                <div

                  key={step.title}

                  className="relative rounded-2xl border border-slate-800 bg-slate-900 p-5"

                >

                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-100">

                    {idx + 1}

                  </div>

                  <h3 className="text-sm font-semibold text-slate-50">

                    {step.title}

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">{step.text}</p>

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* ARCHITECTURE */}

        <section

          id="architecture"

          className="border-b border-slate-800 bg-slate-950"

        >

          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">

              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">

                Architecture overview

              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">

                Altum is structured as a hub-and-spoke system: a single global

                vault at the center, with chain-specific execution modules at

                the edge.

              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">

              <div className="space-y-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Altum Hub (Global Vault)

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    The canonical ERC-4626 vault on the Hub chain. It maintains

                    global accounting, holds user deposits, and orchestrates

                    cross-chain allocation.

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Altum Spokes (Chain Adapters)

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    Lightweight modules deployed on each supported chain.

                    Adapters invest into local strategies (Morpho, Euler, vaults

                    and more) and report value back to the Hub.

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Altum Curator &amp; Pulse

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    The Curator engine optimizes allocation and risk, while

                    Pulse automates claims, reinvestments, and rebalancing

                    across chains.

                  </p>

                </div>

              </div>



              {/* Simple architecture diagram */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">

                  High-level schematic

                </div>

                <div className="space-y-4 text-xs text-slate-300">

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-center">

                    Users deposit USDC on Hub chain

                  </div>

                  <div className="flex justify-center">

                    <div className="h-px w-10 bg-slate-700" />

                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-center">

                    Altum Global Vault (Hub)

                    <div className="mt-1 text-[11px] text-slate-400">

                      Accounting · Shares · Policy

                    </div>

                  </div>

                  <div className="flex justify-center">

                    <div className="h-px w-10 bg-slate-700" />

                  </div>

                  <div className="grid gap-2 text-[11px]">

                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-2">

                      Chain A Adapter · Morpho / vaults

                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-2">

                      Chain B Adapter · Euler / lending

                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-2">

                      Chain C Adapter · Future strategies

                    </div>

                  </div>

                  <p className="pt-2 text-[11px] text-slate-400">

                    Value flows back into a single share price. Users stay on

                    the Hub; Altum handles cross-chain execution.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* SECURITY */}

        <section

          id="security"

          className="border-b border-slate-800 bg-slate-950"

        >

          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">

              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">

                Security &amp; risk management

              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">

                Altum is designed for institutional-grade capital, with

                isolation, risk controls, and conservative assumptions built-in.

              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="space-y-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Canonical USDC transfers

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    Altum relies on native USDC mechanisms (such as CCTP) to

                    move value between chains via burn-and-mint, rather than

                    synthetic wrapped assets.

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Isolated strategy adapters

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    Each strategy and chain is isolated, with per-strategy and

                    per-chain caps. Exposure can be frozen or unwound without

                    impacting the entire system.

                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Non-custodial by design

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    The protocol cannot arbitrarily withdraw user funds.

                    Withdrawals follow deterministic vault logic and are always

                    proportional to the user's share of the system.

                  </p>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                  <h3 className="text-sm font-semibold text-slate-50">

                    Audits &amp; continuous monitoring

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    Core smart contracts are designed to be audit-friendly, with

                    clear invariants and observability for ongoing risk

                    monitoring.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* FAQ */}

        <section id="faq" className="bg-slate-950">

          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">

              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">

                Frequently asked questions

              </h2>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">

                A single vault, multiple chains, and a lot of moving pieces.

                Here's the high-level view.

              </p>

            </div>

            <div className="space-y-4">

              {[

                {

                  q: "Do I need to interact with multiple chains?",

                  a: "No. You deposit and withdraw on the Hub chain only. Altum handles cross-chain execution under the hood.",

                },

                {

                  q: "Where does yield come from?",

                  a: "Yield comes from curated on-chain strategies such as lending markets, yield vaults, liquidity provision, and reward programs on supported chains.",

                },

                {

                  q: "Do I receive rewards directly?",

                  a: "No. Rewards are harvested and reinvested into the vault, increasing the vault's value per share. You benefit through the growth of your position.",

                },

                {

                  q: "Is Altum custodial?",

                  a: "Altum is non-custodial. Assets are held in smart contracts governed by deterministic vault logic. Operators cannot arbitrarily withdraw user funds.",

                },

                {

                  q: "What happens if a chain or protocol becomes risky?",

                  a: "The Curator can freeze new allocations, reduce exposure, or migrate capital away from the affected chain or protocol while keeping the Hub vault operational.",

                },

              ].map((item) => (

                <details

                  key={item.q}

                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-4"

                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-50">

                    <span>{item.q}</span>

                    <span className="text-slate-500 group-open:hidden">+</span>

                    <span className="hidden text-slate-500 group-open:inline">

                      −

                    </span>

                  </summary>

                  <p className="mt-2 text-sm text-slate-300">{item.a}</p>

                </details>

              ))}

            </div>

          </div>

        </section>

      </main>



      {/* FOOTER */}

      <footer className="border-t border-slate-800 bg-slate-950">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row">

          <span>© {new Date().getFullYear()} Altum. All rights reserved.</span>

          <div className="flex gap-4">

            <button className="hover:text-slate-300">Docs</button>

            <button className="hover:text-slate-300">Security</button>

            <button className="hover:text-slate-300">Contact</button>

          </div>

        </div>

      </footer>

    </div>

  );

};



export default AltumLanding;

