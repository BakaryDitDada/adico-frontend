'use client';

import PageHero from '@/features/website/sections/PageHero';
import Accordion from '@/core/ui/accordions/Accordion';
import Tabs from '@/core/ui/tabs/Tabs';
import UiComponentsHeader from '@/features/common/UiComponentsHeader';
import { faqData, testimonialsData } from '@/core/data/UiComponentsSamples';
import * as S from './UiComponents.styles';
import { Heading1, Heading2 } from '@/core/styles/common/Typography.styles';
import ContentCard from '@/core/ui/cards/ContentCard';
import TestimonialSlider from '@/core/ui/testimonials/TestimonialSlider';

export default function UiComponentsPage() {
  const tabsData = [
    { label: 'Accordion', content: (
      <>
        <S.Section style={{ marginBottom: '4rem' }}>
          <Heading2>Accordion (Single Open)</Heading2>
          <Accordion items={faqData} allowMultiple={false} />
        </S.Section>

        <S.Section>
          <Heading2>Accordion (Multiple Open)</Heading2>
          <Accordion items={faqData} allowMultiple={true} />
        </S.Section>
      </>
    ) },
    {
    label: "Content Card",
    content: (
      <ContentCard
        title="Gouvernance Locale"
        description="Nous accompagnons les collectivités territoriales dans l'élaboration et la mise en œuvre de leurs plans de développement. Notre expertise en matière de gouvernance locale nous permet de proposer des solutions adaptées aux besoins spécifiques de chaque collectivité, favorisant ainsi un développement durable et inclusif."
        layout="horizontal"
        image="/images/actu-placeholder.jpg"
        height="30rem"
      />
    )
  },
  {
    label: "Testimonial Slider",
    content: (
      <TestimonialSlider testimonials={testimonialsData} />
    )
  }
  ]

  return (
    <S.PageContainer>
      <UiComponentsHeader />
      <PageHero 
        subtitle="UI/UX"
        title="UI/UX Components"
        description="Collection of reusable UI/UX components for building modern web applications."
        bgImage="/images/ADICO-IMAGE.jpg"
        align="center"
      />

      {/* UI Components Collection */}
      <S.PageContent>
        <Heading1>
          UI Components Library
        </Heading1>
        
        <Tabs tabs={tabsData} />
        
      </S.PageContent>
   
    </S.PageContainer>
  );
}