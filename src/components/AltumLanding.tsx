import React, { useState } from "react";

const AltumLanding: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xpwvzeop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-neutral-800 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-black">
              <span className="text-sm font-semibold leading-none">N</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Nerva</span>
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          {/* CTAS */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-medium text-white hover:border-neutral-500 md:inline-flex">
              Talk to the team
            </button>

            {/* MAIN CTA → JOIN EARLY ACCESS */}
            <button
              onClick={() =>
                document
                  .getElementById("early-access")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-[#1A73E8] px-4 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-[#185fcc] inline-flex items-center justify-center"
            >
              Join Early Access
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main>

        {/* HERO */}
        <section className="border-b border-neutral-800 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-14 md:flex-row md:items-center md:gap-16 md:pt-20">

            {/* HERO LEFT */}
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-3 py-1 text-xs font-medium text-neutral-300">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1A73E8]" />
                Cross-chain yield · Single Nerva vault
              </div>

              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Cross-chain yield.
                <span className="block">
                  One vault. <span className="text-[#1A73E8]">Unified performance.</span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm text-neutral-300 sm:text-base">
                Nerva allocates your capital across chains and strategies through
                a single vault. You deposit USDC once — the Curator engine
                handles allocation, optimization and accounting behind the scenes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("early-access")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-6 py-2 text-sm font-semibold text-black hover:bg-[#185fcc]"
                >
                  Join Early Access
                </button>

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
                  Single ERC-4626 vault
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Cross-chain allocation
                </span>
                <span className="rounded-full border border-neutral-800 px-3 py-1">
                  Risk-aware automation
                </span>
              </div>
            </div>

            {/* HERO RIGHT CARD */}
            <div className="flex-1">
              <div className="rounded-2xl border border-neutral-800 bg-black p-4">

                {/* DISCLAIMER */}
                <div className="text-[11px] text-neutral-500 uppercase tracking-wide mb-2">
                  Illustrative model · Not live data
                </div>

                <div className="mb-4 flex items-center justify-between text-xs text-neutral-300">
                  <span>Nerva Global Vault</span>
                  <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-300">
                    Overview
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  {/* METRICS */}
                  <div className="space-y-3 rounded-xl border border-neutral-800 bg-black p-4">
                    <div className="text-xs uppercase tracking-wide text-neutral-400">
                      Vault metrics (example)
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">Total value locked</div>
                      <div className="text-lg font-semibold text-white">$123,456,789</div>
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">Vault share price</div>
                      <div className="text-base font-semibold text-white">1.0342 USDC</div>
                    </div>

                    <div>
                      <div className="text-[11px] text-neutral-400">30d indicative APY</div>
                      <div className="text-base font-semibold text-[#1A73E8]">7.4%</div>
                    </div>
                  </div>

                  {/* ALLOCATION MODEL (EXAMPLE) */}
                  <div className="space-y-3 rounded-xl border border-neutral-800 bg-black p-4">
                    <div className="text-xs uppercase tracking-wide text-neutral-400">
                      Allocation model (example)
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

                    <p className="pt-2 text-[11px] text-neutral-500">
                      These values are sample configuration ranges used for demonstration. Actual allocations
                      will be determined by the Nerva Curator engine at launch.
                    </p>
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
              <h2 className="text-xl font-semibold text-white sm:text-2xl">One vault. All chains. Unified yield.</h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                Users interact with a single Nerva vault, while capital is deployed across chains and 
                strategies. One balance, one share price, multi-chain performance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">One vault, many chains</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Deposit and withdraw on the Hub chain. Nerva routes capital automatically across 
                  investment zones.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">Curator-driven allocation</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  The Curator engine allocates based on yield, liquidity, stability and diversification 
                  limits.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <h3 className="text-sm font-semibold text-white">Unified, transparent yield</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Rewards are collected and reinvested into the vault. Performance compounds directly 
                  into the global share price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="border-b border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

            <div className="mb-8 max-w-2xl">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">How Nerva works</h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                A simple user experience on the surface, powered by a structured multi-chain architecture 
                under the hood.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Deposit into the Global Vault",
                  text: "You deposit USDC on one chain. Nerva handles all routing and accounting behind the scenes."
                },
                {
                  title: "Curator allocates capital",
                  text: "The Curator engine distributes liquidity across investment zones based on yield and risk constraints."
                },
                {
                  title: "Cross-chain execution",
                  text: "Canonical bridges and adapters move capital securely across supported chains."
                },
                {
                  title: "Rewards reinvested",
                  text: "Yield is reinvested automatically, growing the global share price over time."
                }
              ].map((step, idx) => (
                <div key={step.title} className="relative rounded-2xl border border-neutral-800 bg-black p-5">
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
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
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Architecture overview</h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                A hub-and-spoke design: one global vault centralized on the Hub chain, with investment 
                zones and execution modules on secondary chains.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
              
              <div className="space-y-4">

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Global Vault (Hub)</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The canonical ERC-4626 vault managing accounting, deposits, withdrawals and target 
                    allocations.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Investment Zones</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Each supported chain hosts an isolated execution environment connected to the Hub via 
                    lightweight adapters.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Curator engine</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The Curator manages allocations, yield harvesting, and emergency actions such as 
                    zone freezes or capital recalls.
                  </p>
                </div>

              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  High-level schematic
                </div>

                <div className="space-y-4 text-xs text-neutral-300">
                  <div className="rounded-xl border border-neutral-800 bg-black p-3 text-center">
                    Users deposit USDC on Hub chain
                  </div>

                  <div className="flex justify-center"><div className="h-px w-10 bg-neutral-700"/></div>

                  <div className="rounded-xl border border-neutral-800 bg-black p-3 text-center">
                    Nerva Global Vault (Hub)
                    <div className="mt-1 text-[11px] text-neutral-400">Accounting · Shares · Policies</div>
                  </div>

                  <div className="flex justify-center"><div className="h-px w-10 bg-neutral-700"/></div>

                  <div className="grid gap-2 text-[11px]">
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">Zone A · Lending / vaults</div>
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">Zone B · Liquidity / rewards</div>
                    <div className="rounded-lg border border-neutral-800 bg-black p-2">Zone C · Future strategies</div>
                  </div>

                  <p className="pt-2 text-[11px] text-neutral-400">
                    Value flows back into a single global share price. Users remain on the Hub.
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
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Security & risk management</h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                Built for institutional-grade capital, with isolation, conservative assumptions and explicit 
                controls at every layer.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Canonical USDC transfers</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Nerva uses CCTP and native burn-and-mint flows to minimize bridge risk and avoid 
                    synthetic wrapped assets.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Isolated execution zones</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Each chain and strategy is isolated with explicit caps. Exposure can be reduced or 
                    unwound independently.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Non-custodial by design</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    The protocol cannot withdraw user funds arbitrarily. Withdrawals are governed by 
                    deterministic share logic.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-black p-5">
                  <h3 className="text-sm font-semibold text-white">Audits & observability</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Smart contracts are structured for clean audits, with invariants and monitoring to detect 
                    risk anomalies across chains.
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
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Frequently asked questions</h2>
              <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                A single vault, multiple chains and structured automation. Here’s the high-level view.
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
                  a: "Yield comes from curated on-chain strategies such as lending markets, yield vaults, liquidity provision and reward programs across supported chains."
                },
                {
                  q: "Do I receive rewards directly?",
                  a: "No. Rewards are reinvested into the Global Vault, increasing the share price of your position."
                },
                {
                  q: "Is Nerva custodial?",
                  a: "Nerva is non-custodial. Operators cannot arbitrarily withdraw funds. All logic is deterministic and share-based."
                },
                {
                  q: "What happens if a chain becomes risky?",
                  a: "The Curator can freeze allocations, reduce exposure or migrate capital without interrupting the Global Vault."
                }
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border border-neutral-800 bg-black p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                    <span>{item.q}</span>
                    <span className="text-neutral-500 group-open:hidden">+</span>
                    <span className="hidden text-neutral-500 group-open:inline">−</span>
                  </summary>
                  <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* EARLY ACCESS SECTION */}
        <section id="early-access" className="border-t border-neutral-800 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">

            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl mb-4">
                Join the Early Access list
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base mb-8">
                Receive early updates as Nerva prepares its soft launch and cross-chain 
                vault release. No spam — only key product updates.
              </p>

              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    disabled={submitting}
                    className="w-full sm:w-72 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#1A73E8] disabled:opacity-50 disabled:cursor-not-allowed"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-[#1A73E8] px-6 py-2 text-sm font-semibold text-black hover:bg-[#185fcc] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Join Early Access"}
                  </button>
                </form>
              ) : (
                <div className="rounded-2xl border border-[#1A73E8] bg-neutral-900 p-6">
                  <div className="text-[#1A73E8] text-2xl mb-2">✓</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Thank you for joining!
                  </h3>
                  <p className="text-sm text-neutral-300">
                    We've received your email. You'll be notified when Nerva launches.
                  </p>
                </div>
              )}

              {error && (
                <p className="text-red-400 text-sm mt-4">
                  Something went wrong. Please try again.
                </p>
              )}

              {!submitted && (
                <p className="text-neutral-500 text-xs mt-4">
                  Your email is safe. One-click unsubscribe anytime.
                </p>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-neutral-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Nerva. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/NervaYield" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              X
            </a>
            <a 
              href="https://www.linkedin.com/company/nervalink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
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

