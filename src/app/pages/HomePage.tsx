import React from "react";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Services } from "../components/Services";
import { TargetAudience } from "../components/TargetAudience";
import { DemoBanner } from "../components/DemoBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <DemoBanner />
      <TargetAudience />
    </>
  );
}