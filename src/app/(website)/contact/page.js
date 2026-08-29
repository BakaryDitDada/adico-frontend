'use client';

import ContactHero from '@/features/website/sections/contact/ContactHero';
import ContactForm from '@/features/website/sections/contact/ContactForm';
import ContactMap from '@/features/website/sections/contact/ContactMap';
import ContactSocial from '@/features/website/sections/contact/ContactSocial';
import { PageContainer as ContactPageContainer } from '../Home.styles';

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactSocial />
    </ContactPageContainer>
  );
}