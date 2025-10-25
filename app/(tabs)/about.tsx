
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function AboutScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1590496793907-4e0c9e1f2f8e?w=1200' }}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={commonStyles.safeArea} edges={['top']}>
          <ScrollView
            style={commonStyles.container}
            contentContainerStyle={[
              styles.scrollContent,
              Platform.OS !== 'ios' && commonStyles.scrollContentWithTabBar,
            ]}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={[commonStyles.title, styles.titleLight]}>About Us</Text>
              <Text style={[commonStyles.textSecondary, styles.subtitleLight]}>
                Building Excellence Since 2003
              </Text>
            </View>

            {/* Company Profile */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Company Profile</Text>
              <View style={[commonStyles.card, styles.cardWithBackground]}>
                <Text style={commonStyles.text}>
                  Stellantis Construction Ltd is a leading construction company specializing in
                  residential, commercial, and data centre projects. With over 20 years of experience,
                  we deliver exceptional quality and innovative solutions to our clients.
                </Text>
              </View>
            </View>

            {/* Mission & Vision */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Mission & Vision</Text>
              <View style={[commonStyles.card, styles.cardWithBackground]}>
                <View style={styles.missionItem}>
                  <IconSymbol name="target" size={24} color={colors.secondary} />
                  <View style={styles.missionContent}>
                    <Text style={commonStyles.cardTitle}>Our Mission</Text>
                    <Text style={commonStyles.cardText}>
                      To provide exceptional construction services that exceed client expectations
                      through innovation, quality, and dedication.
                    </Text>
                  </View>
                </View>
                <View style={commonStyles.divider} />
                <View style={styles.missionItem}>
                  <IconSymbol name="eye.fill" size={24} color={colors.secondary} />
                  <View style={styles.missionContent}>
                    <Text style={commonStyles.cardTitle}>Our Vision</Text>
                    <Text style={commonStyles.cardText}>
                      To be the most trusted and innovative construction company, setting new
                      standards in the industry.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Leadership */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Leadership</Text>
              <View style={[commonStyles.card, styles.cardWithBackground]}>
                <View style={styles.leaderCard}>
                  <View style={styles.leaderIcon}>
                    <IconSymbol name="person.fill" size={32} color={colors.secondary} />
                  </View>
                  <View style={styles.leaderInfo}>
                    <Text style={styles.leaderName}>Bilal Khalid</Text>
                    <Text style={styles.leaderTitle}>Chief Executive Officer</Text>
                    <Text style={commonStyles.cardText}>
                      Leading Stellantis Construction with vision and expertise, driving innovation
                      and excellence in every project.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Partnerships */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Our Partnerships</Text>
              <View style={[commonStyles.card, styles.cardWithBackground]}>
                <View style={styles.partnerItem}>
                  <IconSymbol name="building.2.fill" size={20} color={colors.secondary} />
                  <Text style={styles.partnerText}>Highka</Text>
                </View>
                <View style={styles.partnerItem}>
                  <IconSymbol name="building.2.fill" size={20} color={colors.secondary} />
                  <Text style={styles.partnerText}>Sure Architecture</Text>
                </View>
                <View style={styles.partnerItem}>
                  <IconSymbol name="building.2.fill" size={20} color={colors.secondary} />
                  <Text style={styles.partnerText}>Horizons Properties & Investment</Text>
                </View>
              </View>
            </View>

            {/* Core Values */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Core Values</Text>
              <View style={styles.valuesGrid}>
                <View style={[styles.valueCard, styles.cardWithBackground]}>
                  <IconSymbol name="star.fill" size={32} color={colors.secondary} />
                  <Text style={styles.valueTitle}>Excellence</Text>
                  <Text style={styles.valueText}>
                    Committed to delivering the highest quality in every project
                  </Text>
                </View>
                <View style={[styles.valueCard, styles.cardWithBackground]}>
                  <IconSymbol name="shield.fill" size={32} color={colors.secondary} />
                  <Text style={styles.valueTitle}>Integrity</Text>
                  <Text style={styles.valueText}>
                    Building trust through honest and ethical practices
                  </Text>
                </View>
                <View style={[styles.valueCard, styles.cardWithBackground]}>
                  <IconSymbol name="lightbulb.fill" size={32} color={colors.secondary} />
                  <Text style={styles.valueTitle}>Innovation</Text>
                  <Text style={styles.valueText}>
                    Embracing new technologies and creative solutions
                  </Text>
                </View>
                <View style={[styles.valueCard, styles.cardWithBackground]}>
                  <IconSymbol name="person.2.fill" size={32} color={colors.secondary} />
                  <Text style={styles.valueTitle}>Teamwork</Text>
                  <Text style={styles.valueText}>
                    Collaborating to achieve exceptional results
                  </Text>
                </View>
              </View>
            </View>

            {/* Statistics */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Our Achievements</Text>
              <View style={styles.statsGrid}>
                <View style={[styles.statCard, styles.cardWithBackground]}>
                  <Text style={styles.statNumber}>20+</Text>
                  <Text style={styles.statLabel}>Years Experience</Text>
                </View>
                <View style={[styles.statCard, styles.cardWithBackground]}>
                  <Text style={styles.statNumber}>500+</Text>
                  <Text style={styles.statLabel}>Projects Completed</Text>
                </View>
                <View style={[styles.statCard, styles.cardWithBackground]}>
                  <Text style={styles.statNumber}>100+</Text>
                  <Text style={styles.statLabel}>Happy Clients</Text>
                </View>
                <View style={[styles.statCard, styles.cardWithBackground]}>
                  <Text style={styles.statNumber}>50+</Text>
                  <Text style={styles.statLabel}>Team Members</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    opacity: 0.12,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  titleLight: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitleLight: {
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  sectionTitleLight: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardWithBackground: {
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    backdropFilter: 'blur(10px)',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  missionItem: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  missionContent: {
    flex: 1,
  },
  leaderCard: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  leaderIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderInfo: {
    flex: 1,
  },
  leaderName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  leaderTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 8,
  },
  partnerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  partnerText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  valueCard: {
    width: '48%',
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.secondary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
