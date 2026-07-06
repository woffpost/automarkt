"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  Fuel, Settings, Gauge, Calendar, SlidersHorizontal,
  X, Menu, ChevronDown
} from "lucide-react";
import { cars } from "./data";

const RED = "#DC2626";
const DARK = "#0A0A0A";

const brands = ["All", "Audi", "BMW", "Ford", "Mercedes", "Porsche", "Tesla", "Toyota", "Volkswagen"];
const types = ["All", "Sedan", "SUV", "Coupe", "Hatchback"];
const fuels = ["All", "Petrol", "Diesel", "Electric", "Hybrid"];
const budgets = [
  { label: "All prices", min: 0, max: Infinity },
  { label: "Under €30k", min: 0, max: 30000 },
  { label: "€30k – €50k", min: 30000, max: 50000 },
  { label: "Over €50k", min: 50000, max: Infinity },
];

const badgeStyles: Record<string, { backgroundColor: string }> = {
  Popular: { backgroundColor: RED },
  New: { backgroundColor: "#B91C1C" },
  EV: { backgroundColor: "#7F1D1D" },
  Premium: { backgroundColor: "#92400E" },
};

export default function AutoDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [budgetIdx, setBudgetIdx] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = cars.filter((c) => {
    const bud = budgets[budgetIdx];
    return (
      (brand === "All" || c.brand === brand) &&
      (type === "All" || c.type === type) &&
      (fuel === "All" || c.fuel === fuel) &&
      c.price >= bud.min &&
      c.price <= bud.max
    );
  });

  const navLinks = ["Inventory", "Financing", "Service", "About", "Contact"];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: RED }}>
              <span className="text-white text-xs font-black">AM</span>
            </div>
            <span className="font-black text-white text-lg tracking-tight">AUTO<span className="font-light text-gray-400">MARKT</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">{l}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+4312345678" className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" style={{ color: RED }} />
              +43 1 234 56 78
            </a>
            <Button className="text-white text-xs px-5 h-9 font-bold uppercase tracking-wide" style={{ backgroundColor: RED }}>
              Test Drive
            </Button>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: DARK }}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="font-black text-white text-lg">AUTOMARKT</span>
              <button onClick={() => setMobileOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-0 px-6 pt-6">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-black text-white py-4 border-b border-white/10 hover:text-red-400 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="mt-auto px-6 pb-8">
              <Button className="w-full text-white font-bold h-12 text-sm" style={{ backgroundColor: RED }}>
                Book a Test Drive
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-16 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1600&q=90"
          alt="AutoMarkt showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.3) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: RED }}>
            Vienna · Est. 2001 · 500+ vehicles in stock
          </p>
          <h1 className="text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6">
            Find your
            <br />
            perfect drive.
          </h1>
          <p className="text-gray-400 text-base max-w-md leading-relaxed mb-8">
            Premium pre-owned and new vehicles. Every car certified, every price transparent. No games.
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="font-bold h-12 px-8 text-sm uppercase tracking-wide text-white" style={{ backgroundColor: RED }}>
              Browse Inventory <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-sm border-white/20 text-white hover:bg-white/10">
              Get Financing
            </Button>
          </div>
        </div>
      </section>

      {/* Inventory with Filters */}
      <section id="inventory" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-gray-900">Available Inventory</h2>
              <p className="text-gray-500 text-sm mt-1">{filtered.length} vehicles found</p>
            </div>
            <button
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors rounded-xl"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Filter bar */}
          <div className={`overflow-hidden transition-all duration-300 ${filtersOpen ? "max-h-96 mb-8" : "max-h-0"}`}>
            <div className="bg-white border border-gray-200 p-6 grid md:grid-cols-4 gap-6 rounded-2xl">
              {/* Brand */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Brand</p>
                <div className="flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrand(b)}
                      className={`text-xs px-3 py-1.5 font-semibold border transition-colors rounded-full ${brand === b ? "text-white border-transparent" : "text-gray-600 border-gray-300 hover:border-gray-500"}`}
                      style={brand === b ? { backgroundColor: RED, borderColor: RED } : {}}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              {/* Type */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Body Type</p>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`text-xs px-3 py-1.5 font-semibold border transition-colors rounded-full ${type === t ? "text-white border-transparent" : "text-gray-600 border-gray-300 hover:border-gray-500"}`}
                      style={type === t ? { backgroundColor: RED, borderColor: RED } : {}}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              {/* Fuel */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Fuel Type</p>
                <div className="flex flex-wrap gap-2">
                  {fuels.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFuel(f)}
                      className={`text-xs px-3 py-1.5 font-semibold border transition-colors rounded-full ${fuel === f ? "text-white border-transparent" : "text-gray-600 border-gray-300 hover:border-gray-500"}`}
                      style={fuel === f ? { backgroundColor: RED, borderColor: RED } : {}}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              {/* Budget */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Budget</p>
                <div className="flex flex-col gap-2">
                  {budgets.map((b, i) => (
                    <button
                      key={i}
                      onClick={() => setBudgetIdx(i)}
                      className={`text-xs px-3 py-1.5 font-semibold border text-left transition-colors rounded-full ${budgetIdx === i ? "text-white border-transparent" : "text-gray-600 border-gray-300 hover:border-gray-500"}`}
                      style={budgetIdx === i ? { backgroundColor: RED, borderColor: RED } : {}}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Car grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-xl font-semibold mb-2">No vehicles match your filters</p>
              <button
                className="text-sm underline"
                onClick={() => { setBrand("All"); setType("All"); setFuel("All"); setBudgetIdx(0); }}
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((car) => (
                <div key={car.id} className="group bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-200 flex flex-col rounded-2xl overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={car.img}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {car.badge && (
                      <span
                        className="absolute top-3 left-3 text-xs font-black text-white px-2 py-0.5 uppercase rounded-full"
                        style={badgeStyles[car.badge]}
                      >
                        {car.badge}
                      </span>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-0.5 text-gray-700 rounded-full">
                      {car.year}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1">{car.name}</h3>
                    <div className="flex gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Gauge className="w-3 h-3" />{car.mileage.toLocaleString()} km</span>
                      <span className="flex items-center gap-1"><Fuel className="w-3 h-3" />{car.fuel}</span>
                      <span className="flex items-center gap-1"><Settings className="w-3 h-3" />{car.transmission}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-xl font-black text-gray-900">€{car.price.toLocaleString()}</div>
                      <Link
                        href={`/demos/auto/${car.id}`}
                        className="text-xs font-bold px-4 py-2 text-white uppercase tracking-wider transition-opacity hover:opacity-80 rounded-lg"
                        style={{ backgroundColor: RED }}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured */}
      <section className="grid lg:grid-cols-2 min-h-[500px]">
        <div className="relative min-h-64">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=90"
            alt="Featured vehicle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-6 left-6">
            <span className="bg-yellow-500 text-black text-xs font-black px-3 py-1 uppercase">Featured</span>
          </div>
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-16" style={{ backgroundColor: DARK }}>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-4">Vehicle of the Month</p>
          <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Porsche 911 Carrera</h2>
          <div className="flex gap-4 text-sm text-gray-400 mb-6">
            <span>2022</span>
            <span>·</span>
            <span>8,000 km</span>
            <span>·</span>
            <span>Petrol</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
            One previous owner. Full service history. Sport Chrono Package. This car has been inspected by our in-house Porsche specialist.
          </p>
          <div className="flex items-center gap-6">
            <div className="text-3xl font-black text-white">€119,000</div>
            <Button className="font-bold text-white h-11 px-8 text-sm" style={{ backgroundColor: RED }}>
              Request Info
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: RED }}>Why AutoMarkt</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900">Certified. Transparent. Trusted.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { n: "500+", l: "Vehicles in stock" },
              { n: "24mo", l: "Warranty on every car" },
              { n: "€0", l: "Hidden fees, guaranteed" },
              { n: "20yr", l: "Serving Vienna" },
            ].map((s, i) => (
              <div key={i} className="p-8 text-center">
                <div className="text-4xl font-black mb-2" style={{ color: RED }}>{s.n}</div>
                <div className="text-sm text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="py-20 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Flexible options</p>
            <h2 className="text-4xl font-black tracking-tight text-white">Drive now, pay smart.</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">Competitive rates from our banking partners. No hidden fees, no early repayment penalties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-14">
            {[
              { rate: "3.9%", label: "APR from", note: "New & certified vehicles" },
              { rate: "€0", label: "Deposit required", note: "On selected models" },
              { rate: "84mo", label: "Max term", note: "Flexible monthly plans" },
            ].map((s, i) => (
              <div key={i} className="p-10 text-center">
                <div className="text-4xl font-black mb-2" style={{ color: RED }}>{s.rate}</div>
                <div className="text-sm text-white font-semibold mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.note}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-black text-lg mb-6 text-center">Monthly payment estimate</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Vehicle price", placeholder: "e.g. €30,000" },
                { label: "Down payment", placeholder: "e.g. €5,000" },
                { label: "Term (months)", placeholder: "e.g. 60" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">{f.label}</label>
                  <input placeholder={f.placeholder} className="w-full h-11 rounded-xl bg-white/10 border border-white/15 px-3 text-sm text-white placeholder-gray-600 outline-none" />
                </div>
              ))}
            </div>
            <button className="w-full h-11 rounded-xl text-sm font-black uppercase tracking-wider text-white" style={{ backgroundColor: RED }}>
              Calculate Payment
            </button>
            <p className="text-xs text-gray-600 text-center mt-3">Subject to credit approval. Representative example available on request.</p>
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Authorised workshop</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900">Keep it running perfectly.</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">Our factory-trained technicians and original parts keep your vehicle in factory condition.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { title: "Service A", price: "€149", desc: "Oil change, fluid check, brake inspection, report" },
              { title: "Service B", price: "€289", desc: "Full inspection, air filter, spark plugs, DSG service" },
              { title: "Tyres", price: "€29/tyre", desc: "Fitting, balancing, storage option. All brands." },
              { title: "Body Repair", price: "Quote", desc: "Dent, scratch, paintwork. Insurance claims handled." },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-md transition-all">
                <div className="text-2xl font-black mb-1" style={{ color: RED }}>{s.price}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-6 border border-gray-200 rounded-2xl px-8 py-5 text-sm text-gray-500">
              <span><strong className="text-gray-900">Mon–Fri</strong> 7:00–18:00</span>
              <span className="text-gray-200">|</span>
              <span><strong className="text-gray-900">Sat</strong> 8:00–13:00</span>
              <span className="text-gray-200">|</span>
              <span><strong className="text-gray-900">Call</strong> +43 1 234 56 79</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Get in touch</p>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-8">We'd love to hear from you.</h2>
            <div className="space-y-5">
              {[
                { label: "Showroom", lines: ["Simmeringer Hauptstr. 24", "1110 Vienna, Austria"] },
                { label: "Sales", lines: ["+43 1 234 56 78", "sales@automarkt.at"] },
                { label: "Service", lines: ["+43 1 234 56 79", "service@automarkt.at"] },
                { label: "Hours", lines: ["Mon–Fri: 8:00–19:00", "Sat: 9:00–16:00"] },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-400 w-16 shrink-0 pt-0.5">{item.label}</div>
                  <div>
                    {item.lines.map((l) => <p key={l} className="text-sm text-gray-700">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="font-black text-gray-900 text-lg mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Name</label>
                  <input placeholder="Your name" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Email</label>
                  <input placeholder="your@email.com" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">I'm interested in</label>
                <select className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm text-gray-700 outline-none">
                  <option>A specific vehicle</option>
                  <option>Financing options</option>
                  <option>Test drive booking</option>
                  <option>Service appointment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                <textarea placeholder="Tell us more..." rows={3} className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none resize-none focus:border-gray-400" />
              </div>
              <button className="w-full h-11 rounded-xl text-sm font-black uppercase tracking-wider text-white" style={{ backgroundColor: RED }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: RED }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Book a test drive.</h2>
            <p className="text-white/70">30 minutes. No pressure. Just you and the car.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button size="lg" className="bg-white hover:bg-gray-100 font-bold h-12 px-8 text-sm uppercase" style={{ color: RED }}>
              Book Now
            </Button>
            <Button size="lg" variant="ghost" className="text-white border border-white/30 hover:bg-white/10 h-12 px-6">
              <Phone className="w-4 h-4 mr-2" /> Call Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-6 border-t border-white/10" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 flex items-center justify-center" style={{ backgroundColor: RED }}>
                <span className="text-white text-xs font-black">AM</span>
              </div>
              <span className="font-black text-white">AUTOMARKT</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Premium pre-owned and new vehicles. Serving Vienna and Austria since 2001.</p>
          </div>
          {[
            { icon: <MapPin className="w-4 h-4" />, title: "Location", lines: ["Simmeringer Hauptstr. 24", "1110 Vienna, Austria"] },
            { icon: <Clock className="w-4 h-4" />, title: "Hours", lines: ["Mon–Fri: 8:00–19:00", "Sat: 9:00–16:00"] },
            { icon: <Mail className="w-4 h-4" />, title: "Contact", lines: ["+43 1 234 56 78", "sales@automarkt.at"] },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">{item.icon}{item.title}</div>
              {item.lines.map((l, j) => <p key={j} className="text-gray-500 text-sm">{l}</p>)}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© 2026 AutoMarkt GmbH. All rights reserved.</span>
          <span>Demo site — <a href="/" className="text-gray-400 hover:text-white transition-colors">built by Vladimir Rusacov</a></span>
        </div>
      </footer>
    </div>
  );
}
