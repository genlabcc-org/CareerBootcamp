import React, { useState } from 'react';
import Hero from './hero';
import Problem from './problem';
import WhyJoin from './whyJoin';
import TargetAudience from './targetAudience';
import Transformation from './transformation';
import EventDetails from './eventDetails';
import RegistrationModal from './registrationModal';
import PosterModal from './posterModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <Hero
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* 01. We Know How This Feels (The Gap) */}
      <Problem onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* 02. Why Should You Join? */}
      <WhyJoin />

      {/* 03. This Day Is For You If... */}
      <TargetAudience />

      {/* 05. What Changes After This Day? (Transformation) */}
      <Transformation />

      {/* 06 & 07. Event Details & Final Call to Action */}
      <EventDetails
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Official Event Poster Modal */}
      <PosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    </div>
  );
}
