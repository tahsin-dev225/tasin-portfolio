"use client";

import React from "react";
import JourneyBanner from "./Journey1";
import JourneyThree from "./Journey3";
import Journey2 from "./Journey2";
import Journey4 from "./Journey4";

export default function MyLearningJourney() {
  return (
    <section className="relative lg:mt-14">
      <JourneyBanner></JourneyBanner>

      <Journey2 />

      <JourneyThree />

      <Journey4 />
    </section>
  );
}
