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
      <AboutHero />
      <MissionVision />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
    </PageContainer>
  );
}