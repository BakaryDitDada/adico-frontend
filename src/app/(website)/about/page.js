'use client';

import AboutHero from '@/features/website/sections/about/AboutHero';
import MissionVision from '@/features/website/sections/about/MissionVision';
import TimelineSection from '@/features/website/sections/about/TimelineSection';
import TeamSection from '@/features/website/sections/about/TeamSection';
import ValuesSection from '@/features/website/sections/about/ValuesSection';

import PageHero from '@/features/website/sections/PageHero';

import { PageContainer } from '../Home.styles';

export default function AboutPage() {
  return (
    <PageContainer>
      {/* <AboutHero /> */}
      {/* <PageHero 
        subtitle="ADICO en Action"
        title="Engagement communautaire et gouvernance"
        bgYouTube="https://www.youtube.com/watch?v=FKJPIBqQxuc" 
        align="center"
      /> */}
      <PageHero 
        subtitle="Notre Vision"
        title="Maîtres de notre plein épanouissement"
        description="Un monde dans lequel les conditions sont réunies pour que chaque individu, chaque famille et chaque communauté, dispose des capacités et des ressources pour être le véritable maître de son plein épanouissement."
        bgImage="/images/adico-community-meeting.jpg"
        align="center"
      />
      <MissionVision />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
    </PageContainer>
  );
}