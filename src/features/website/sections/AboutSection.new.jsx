import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section, SectionTitle, SectionContent } from './Sections.styles.js';
import { homeContent } from '@/core/data/homeContent.js';
import ContentCard from '@/core/ui/cards/ContentCard.jsx';
import { Button } from '@/core/ui/Button.jsx';
import { BsPeople } from 'react-icons/bs';
import { Check, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <Section> 
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <span>Qui</span> sommes-nous ?
          </SectionTitle>
          
          {/* <div style={{ maxWidth: '1000px', margin: '0 auto' }}> */}
          <div style={{ width: '100%', margin: '0 auto' }}>
            {/* Top Level Description */}
            <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 4rem auto' }}>
              <p style={{
                fontSize: '1.6rem',
                lineHeight: '1.6',
              }}>
                {homeContent.about.description}
              </p>
            </div>
            
            {/* 
              Replaced the custom styled div with our reusable ContentCard.
              Note: You can easily add an image prop here now! e.g., image="/images/mission.jpg" 
            */}
            <ContentCard
              title={homeContent.about.mission.title}
              description={homeContent.about.mission.description}
              layout="horizontal"
              image="/images/ADICO-IMAGE.jpg"
            >
              {/* We pass the animated list as children to the card */}
              <ul style={{
                listStyle: 'none',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '12px',
                fontSize: '1.6rem',
                marginTop: '1.2rem' // Small push down from the description
              }}>
                {homeContent.about.mission.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}><CheckCircle /></span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                {/* 
                  Using our reusable Button component with the Link component from Next.js.
                  The button will navigate to the /about page when clicked.
                */}
                <Button 
                  as={Link} 
                  to="/about"
                  href="/about"
                  variant="primary" 
                  leftIcon={<BsPeople />}
                  align="left"
                  size="lg"
                >
                  En savoir plus
                </Button>
              </div>
            </ContentCard>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
};

export default AboutSection;