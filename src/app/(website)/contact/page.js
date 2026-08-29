'use client';

import ContactHero from '@/features/website/sections/contact/ContactHero';
import ContactForm from '@/features/website/sections/contact/ContactForm';
import ContactMap from '@/features/website/sections/contact/ContactMap';
import ContactSocial from '@/features/website/sections/contact/ContactSocial';
import { PageContainer as ContactPageContainer } from '../Home.styles';
import PageHero from '@/features/website/sections/PageHero';

export default function ContactPage() {
  return (
    <ContactPageContainer>
      {/* <ContactHero /> */}
       <PageHero 
          subtitle="Disponible"
          title="Contactez-nous"
          description="Une question, un projet ? Notre équipe est à votre écoute pour échanger sur vos besoins et opportunités de collaboration."
          bgImage="/images/ADICO-IMAGE.jfif"
          align="center"
        />
      <ContactForm />
      <ContactMap />
      <ContactSocial />
    </ContactPageContainer>
  );
}