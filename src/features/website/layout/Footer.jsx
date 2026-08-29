'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Linkedin, Instagram,
  Globe, Calendar, Users, Target,
  MoveUp
} from 'lucide-react';
import { 
  FooterContainer, FooterContent, FooterGrid, FooterSection, 
  FooterLinks, ContactInfo, ContactItem, LogoSection, Logo, 
  LogoImage, LogoText, Description, SocialLinks, SocialLink, 
  NewsletterForm, Input, SubmitButton, Copyright, Hours, 
  NewsletterDesc, NewsletterTitle, GoToTop 
} from './Layout.styles';
import homeContent from '@/core/data/homeContent';

const contactConfig = homeContent?.contacts;

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <LogoSection>
                <Logo href="/">
                  <LogoImage><span className="green">A</span><span className="yellow">D</span><span className="red">I</span>CO</LogoImage>
                  <LogoText>
                    <h1>{contactConfig.country}</h1>
                  </LogoText>
                </Logo>

                <Description>
                  {contactConfig.tagline}
                </Description>
                <SocialLinks>
                  <SocialLink href={contactConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={20} />
                  </SocialLink>
                  <SocialLink href={contactConfig.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={20} />
                  </SocialLink>
                  <SocialLink href={contactConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </SocialLink>
                  <SocialLink href={contactConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={20} />
                  </SocialLink>
                </SocialLinks>
              </LogoSection>
            </FooterSection>

            <FooterSection>
              <h3>Liens Rapides</h3>
              <FooterLinks>
                {contactConfig.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      {index === 0 && <Target size={16} />}
                      {index === 1 && <Users size={16} />}
                      {index === 2 && <Calendar size={16} />}
                      {index === 3 && <Globe size={16} />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </FooterLinks>
            </FooterSection>

            <FooterSection>
              <h3>Contactez-nous</h3>
              <ContactInfo $isColumn={true}>
                <ContactItem $isColumn={true}>
                  <MapPin size={18} />
                  <span>{contactConfig.address.full}</span>
                </ContactItem>
                <ContactItem $isColumn={true}>
                  <Phone size={18} />
                  <a href={`tel:${contactConfig.phone.value}`}>{contactConfig.phone.display}</a>
                </ContactItem>
                <ContactItem $isColumn={true}>
                  <Mail size={18} />
                  <a href={`mailto:${contactConfig.email.primary}`}>{contactConfig.email.primary}</a>
                </ContactItem>
                <Hours>
                  <strong>Horaires :</strong><br />
                  {contactConfig.hours.days}<br />
                  {contactConfig.hours.time}
                </Hours>
              </ContactInfo>
            </FooterSection>

            <FooterSection>
              <NewsletterTitle>Newsletter</NewsletterTitle>
              <NewsletterDesc style={{marginBottom: '20px' }}>
                Restez informé de nos actions de proximité et projets communautaires.
              </NewsletterDesc>
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  required
                  aria-label="Adresse email pour newsletter"
                />
                <SubmitButton type="submit">
                  {"S'abonner"}
                </SubmitButton>
              </NewsletterForm>
            </FooterSection>
          </FooterGrid>

          <Copyright>
            <p>&copy; {new Date().getFullYear()} {contactConfig.organizationName} {contactConfig.country}. Tous droits réservés.</p>
            <FooterLinks style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '30px', 
              marginTop: '15px',
              flexWrap: 'wrap'
            }}>
              {contactConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: '13px' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </FooterLinks>
            <p style={{ marginTop: '20px', fontSize: '12px', opacity: 0.7 }}>
              Pour le plein épanouissement des femmes, des enfants et des personnes handicapées.
            </p>
          </Copyright>
        </FooterContent>
      </motion.div>
    
      <GoToTop
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <MoveUp />  
      </GoToTop>
    </FooterContainer>
  );
}