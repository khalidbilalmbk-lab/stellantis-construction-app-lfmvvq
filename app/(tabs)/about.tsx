
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function AboutScreen() {
  const partnerships = [
    { name: 'Highka', description: 'Strategic construction partner' },
    { name: 'Sure Architecture', description: 'Design and architectural services' },
    { name: 'Horizons Properties & Investment', description: 'Property development partner' },
  ];

  const values = [
    {
      icon: 'star.fill',
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project',
    },
    {
      icon: 'shield.fill',
      title: 'Integrity',
      description: 'Building trust through transparency and honest communication',
    },
    {
      icon: 'lightbulb.fill',
      title: 'Innovation',
      description: 'Embracing modern techniques and sustainable practices',
    },
    {
      icon: 'person.2.fill',
      title: 'Collaboration',
      description: 'Working together with clients and partners for success',
    },
  ];

  return (
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
          <Image
            source={{ uri: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/409fdc90-ed36-4a0f-8ab7-6ff29c7868ed/assets/images/d1ef5881-b6ec-49fb-9064-db172d7034a5.jpeg?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=8dHfNRg%2Bfvya4rSv6g8WilViQg4%3D&Expires=1761495359' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={commonStyles.title}>About Stellantis Construction</Text>
          <Text style={commonStyles.textSecondary}>
            Building excellence since our inception
          </Text>
        </View>

        {/* Company Profile */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Who We Are</Text>
          <View style={commonStyles.card}>
            <Text style={styles.bodyText}>
              Stellantis Construction Ltd is a leading construction and property development company
              specializing in residential, commercial, and data centre projects. We are a turnkey
              solution provider, offering comprehensive services from design to completion.
            </Text>
            <Text style={styles.bodyText}>
              With a commitment to excellence and innovation, we have established ourselves as a
              trusted partner for clients seeking quality construction services across the UK.
            </Text>
          </View>
        </View>

        {/* Mission & Vision */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Mission & Vision</Text>
          <View style={styles.missionCard}>
            <View style={styles.missionItem}>
              <IconSymbol name="target" size={32} color={colors.secondary} />
              <Text style={styles.missionTitle}>Our Mission</Text>
              <Text style={styles.missionText}>
                To deliver exceptional construction solutions that exceed client expectations while
                maintaining the highest standards of quality, safety, and sustainability.
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.missionItem}>
              <IconSymbol name="eye.fill" size={32} color={colors.secondary} />
              <Text style={styles.missionTitle}>Our Vision</Text>
              <Text style={styles.missionText}>
                To be the most trusted and innovative construction company, recognized for
                transforming spaces and building lasting relationships with our clients and
                communities.
              </Text>
            </View>
          </View>
        </View>

        {/* Leadership */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Leadership</Text>
          <View style={styles.leaderCard}>
            <View style={styles.leaderIcon}>
              <IconSymbol name="person.circle.fill" size={64} color={colors.secondary} />
            </View>
            <Text style={styles.leaderName}>Bilal Khalid</Text>
            <Text style={styles.leaderTitle}>Chief Executive Officer</Text>
            <Text style={styles.leaderBio}>
              Leading Stellantis Construction with a vision for excellence and innovation in the
              construction industry. With extensive experience in project management and business
              development, Bilal drives the company&apos;s strategic growth and commitment to quality.
            </Text>
          </View>
        </View>

        {/* Core Values */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesGrid}>
            {values.map((value, index) => (
              <View key={index} style={styles.valueCard}>
                <View style={styles.valueIcon}>
                  <IconSymbol name={value.icon as any} size={24} color={colors.secondary} />
                </View>
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Partnerships */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Our Partnerships</Text>
          <View style={commonStyles.card}>
            <Text style={styles.bodyText}>
              We collaborate with industry-leading partners to deliver comprehensive solutions:
            </Text>
            {partnerships.map((partner, index) => (
              <View key={index} style={styles.partnerRow}>
                <IconSymbol name="building.2.fill" size={20} color={colors.secondary} />
                <View style={styles.partnerInfo}>
                  <Text style={styles.partnerName}>{partner.name}</Text>
                  <Text style={styles.partnerDescription}>{partner.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Our Impact</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100+</Text>
              <Text style={styles.statLabel}>Projects Completed</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>20+</Text>
              <Text style={styles.statLabel}>Years Experience</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>50+</Text>
              <Text style={styles.statLabel}>Team Members</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Client Satisfaction</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: colors.card,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  bodyText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 12,
  },
  missionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  missionItem: {
    alignItems: 'center',
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
  },
  missionText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  leaderCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  leaderIcon: {
    marginBottom: 16,
  },
  leaderName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  leaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: 16,
  },
  leaderBio: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  valuesGrid: {
    gap: 12,
  },
  valueCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
    flex: 1,
  },
  valueDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    flex: 1,
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 16,
  },
  partnerInfo: {
    flex: 1,
  },
  partnerName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  partnerDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
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
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
