'use client';

import { ArrowRight, MessageSquare, Users } from 'lucide-react';

import HeroSlider from '@/features/website/sections/HeroSlider';
import StatsSection from '@/features/website/sections/StatsSection';
import FeaturesSection from '@/features/website/sections/FeaturesSection';
// import AboutSection from '@/features/website/sections/AboutSection';
import AboutSection from '@/features/website/sections/AboutSection.new';
import AchievementsSection from '@/features/website/sections/AchievementsSection';
import ValuesSection from '@/features/website/sections/ValuesSection';
import PartnersLogos from '@/features/website/sections/PartnersLogos';
import {
  PageContainer,
} from './Home.styles';
import homeContent from '@/core/data/homeContent';
import { adicoHeroConfig } from '@/core/data/sampleHeroConfig';
import CTASection from '@/features/common/CTASection';
import TestimonialSlider from '@/core/ui/testimonials/TestimonialSlider';

const ctaContent = homeContent?.ctaSectionContent;

export default function Home() {
  return (
    <PageContainer>
      <HeroSlider config={adicoHeroConfig} />
      
      <AboutSection />

      <StatsSection />
      
      <FeaturesSection />
    
      <AchievementsSection />

      <ValuesSection />

      <PartnersLogos />

      <TestimonialSlider testimonials={homeContent?.testimonials} />

      <CTASection
        title={ctaContent?.title}
        description= {ctaContent?.description}
        actions={ctaContent?.actions}
      />
    </PageContainer>
  );
}