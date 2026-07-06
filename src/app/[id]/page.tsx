"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Phone, Fuel, Settings, Gauge,
  Calendar, Car, DoorOpen, ChevronRight, Check
} from "lucide-react";
import { cars } from "../data";

const RED = "#DC2626";
const DARK = "#0A0A0A";

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [activePhoto, setActivePhoto] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="text-center">
          <p className="text-6xl font-black text-gray-800 mb-4">404</p>
          <p className="text-gray-400 mb-6">Vehicle not found.</p>
          <Link href="/demos/auto" className="text-red-500 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to inventory
          </Link>
        </div>
      </div>
    );
  }

  const related = cars.filter((c) => c.id !== car.id && c.brand === car.brand).slice(0, 2);
  const otherRelated = cars.filter((c) => c.id !== car.id && c.brand !== car.brand).slice(0, 2 - related.length);
  const relatedCars = [...related, ...otherRelated].slice(0, 3);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 w-full z-50 border-b border-white/10" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/demos/auto" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 flex items-center justify-center" style={{ backgroundColor: RED }}>
              <span className="text-white text-xs font-black">AM</span>
            </div>
            <span className="font-black text-white tracking-tight">AUTO<span className="font-light text-gray-400">MARKT</span></span>
          </Link>
          <Link href="/demos/auto"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to inventory
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-500">
          <Link href="/demos/auto" className="hover:text-gray-900 transition-colors">Inventory</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-400">{car.brand}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-semibold">{car.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">

        {/* Left: Gallery + Specs */}
        <div className="lg:col-span-2 space-y-6">

          {/* Main photo */}
          <div className="relative h-72 sm:h-96 overflow-hidden bg-gray-100 rounded-2xl">
            <Image
              src={car.photos[activePhoto]}
              alt={car.name}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
            {car.badge && (
              <span className="absolute top-4 left-4 text-xs font-black text-white px-3 py-1 uppercase"
                style={{ backgroundColor: RED }}>{car.badge}</span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {car.photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`relative h-20 overflow-hidden border-2 transition-all rounded-lg ${activePhoto === i ? "border-red-600" : "border-transparent hover:border-gray-300"}`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Full specs */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight">Full Specifications</h2>
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                { label: "Make", value: car.brand },
                { label: "Model", value: car.name },
                { label: "Year", value: String(car.year) },
                { label: "Mileage", value: `${car.mileage.toLocaleString()} km` },
                { label: "Fuel Type", value: car.fuel },
                { label: "Transmission", value: car.transmission },
                { label: "Engine", value: car.engine },
                { label: "Body Type", value: car.type },
                { label: "Doors", value: String(car.doors) },
                { label: "Colour", value: car.color },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-5 py-3 even:bg-gray-50">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm font-semibold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3 tracking-tight">About This Vehicle</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{car.description}</p>
          </div>

          {/* Guarantees */}
          <div className="bg-gray-950 p-6 rounded-2xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: RED }}>Included with every car</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "24-month warranty",
                "Full inspection report",
                "No hidden fees",
                "Financing available",
                "Trade-in accepted",
                "7-day return policy",
              ].map((g) => (
                <div key={g} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 shrink-0" style={{ color: RED }} />
                  {g}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Price + CTA (sticky) */}
        <div className="space-y-5">
          <div className="border border-gray-200 p-6 sticky top-20 bg-white rounded-2xl shadow-sm">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h1 className="text-2xl font-black text-gray-900 leading-tight">{car.name}</h1>
            </div>
            <p className="text-gray-400 text-sm mb-4">{car.year} · {car.mileage.toLocaleString()} km · {car.fuel}</p>

            <div className="text-4xl font-black text-gray-900 mb-1">
              €{car.price.toLocaleString()}
            </div>
            <p className="text-xs text-gray-400 mb-6">Price includes VAT · No registration fees</p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: <Fuel className="w-4 h-4" />, label: "Fuel", val: car.fuel },
                { icon: <Settings className="w-4 h-4" />, label: "Gearbox", val: car.transmission },
                { icon: <Gauge className="w-4 h-4" />, label: "Mileage", val: `${car.mileage.toLocaleString()} km` },
                { icon: <Calendar className="w-4 h-4" />, label: "Year", val: String(car.year) },
                { icon: <Car className="w-4 h-4" />, label: "Type", val: car.type },
                { icon: <DoorOpen className="w-4 h-4" />, label: "Doors", val: String(car.doors) },
              ].map(({ icon, label, val }) => (
                <div key={label} className="bg-gray-50 p-3 flex flex-col gap-0.5 rounded-xl">
                  <div className="text-gray-400">{icon}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                  <div className="text-sm font-bold text-gray-900">{val}</div>
                </div>
              ))}
            </div>

            <Button className="w-full text-white font-bold h-12 mb-3 text-sm uppercase tracking-wide" style={{ backgroundColor: RED }}>
              Book Test Drive
            </Button>
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-12 mb-3 text-sm">
              <Phone className="mr-2 w-4 h-4" /> +43 1 234 56 78
            </Button>
            <p className="text-xs text-gray-400 text-center">Typically responds within 1 business hour</p>
          </div>

          {/* Financing hint */}
          <div className="border border-gray-200 p-5 bg-gray-50 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Financing available</p>
            <p className="text-2xl font-black text-gray-900 mb-1">
              ~€{Math.round(car.price / 48).toLocaleString()}<span className="text-base font-normal text-gray-400">/mo</span>
            </p>
            <p className="text-xs text-gray-400">Estimated at 48 months, subject to approval</p>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedCars.length > 0 && (
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedCars.map((c) => (
                <Link key={c.id} href={`/demos/auto/${c.id}`}
                  className="group bg-white border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all rounded-2xl overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={c.img} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{c.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{c.year} · {c.mileage.toLocaleString()} km</p>
                    <p className="font-black text-lg text-gray-900">€{c.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="py-6 px-6 bg-gray-950 text-gray-600 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>© 2026 AutoMarkt GmbH. All rights reserved.</span>
          <span>Demo — <a href="/" className="text-gray-400 hover:text-white transition-colors">built by Vladimir Rusacov</a></span>
        </div>
      </footer>
    </div>
  );
}
