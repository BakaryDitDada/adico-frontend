'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { Linkedin, Mail, Users } from 'lucide-react';

import { SectionContainer, SectionContent, SectionTitle, SectionSubtitle } from '@/core/styles/pages/about.styles';
import * as S from "./TeamSection.styles";
import { teamData } from '@/core/data/aboutContent';

export default function TeamSection() {
  const theme = useTheme();

  const teamMembers = teamData?.members;

  return (
    <SectionContainer style={{ backgroundColor: theme.colors.background.secondary }}>
      <SectionContent>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <SectionTitle>
            Notre <span>Équipe</span> d&apos;Experts
          </SectionTitle>

          <SectionSubtitle>
            Des professionnels passionnés et expérimentés dédiés au développement durable.
          </SectionSubtitle>

          <S.TeamGrid>
            {teamMembers.map((member, index) => (
              <S.TeamCard
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >

                <S.CardHeader>
                  <S.TeamImage>
                    <Users size={64} />
                  </S.TeamImage>

                  <S.CardOverlay>
                    <S.SocialButton href={`mailto:${member.social.email}`}>
                      <Mail size={18} />
                    </S.SocialButton>

                    <S.SocialButton href={member.social.linkedin} target="_blank">
                      <Linkedin size={18} />
                    </S.SocialButton>
                  </S.CardOverlay>
                </S.CardHeader>

                <S.CardBody>
                  <S.MemberName>{member.name}</S.MemberName>
                  <S.MemberRole>{member.role}</S.MemberRole>
                  <S.MemberBio>{member.bio}</S.MemberBio>

                  <S.ExpertiseList>
                    {member.expertise.map((skill, idx) => (
                      <S.ExpertiseTag key={idx}>{skill}</S.ExpertiseTag>
                    ))}
                  </S.ExpertiseList>
                </S.CardBody>

              </S.TeamCard>
            ))}
          </S.TeamGrid>

        </motion.div>

      </SectionContent>
    </SectionContainer>
  );
}