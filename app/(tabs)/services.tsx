
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '1',
    title: 'Construction',
    icon: 'hammer.fill',
    description: 'Full-scale construction services for residential, commercial, and industrial projects.',
    features: [
      'New builds and extensions',
      'Structural work',
      'Foundation and groundwork',
      'Quality materials and craftsmanship',
    ],
  },
  {
    id: '2',
    title: 'Design & Build',
    icon: 'pencil.and.ruler.fill',
    description: 'Comprehensive design and build solutions from concept to completion.',
    features: [
      'Architectural design',
      'Planning permission support',
      'Interior design',
      'Turnkey solutions',
    ],
  },
  {
    id: '3',
    title: 'Project Management',
    icon: 'chart.bar.fill',
    description: 'Expert project management ensuring on-time and on-budget delivery.',
    features: [
      'Timeline planning',
      'Budget management',
      'Quality control',
      'Stakeholder coordination',
    ],
  },
  {
    id: '4',
    title: 'Consultancy',
    icon: 'person.2.fill',
    description: 'Professional construction consultancy and advisory services.',
    features: [
      'Feasibility studies',
      'Cost estimation',
      'Risk assessment',
      'Technical advice',
    ],
  },
  {
    id: '5',
    title: 'Refurbishment',
    icon: 'paintbrush.fill',
    description: 'Complete refurbishment and renovation services for existing properties.',
    features: [
      'Interior renovation',
      'Exterior upgrades',
      'Modernization',
      'Heritage restoration',
    ],
  },
  {
    id: '6',
    title: 'Extensions & Lofts',
    icon: 'house.fill',
    description: 'Expert home extension and loft conversion services.',
    features: [
      'Single and double-story extensions',
      'Loft conversions',
      'Basement conversions',
      'Planning and design',
    ],
  },
  {
    id: '7',
    title: 'Data Centres',
    icon: 'server.rack',
    description: 'Specialized construction of high-tech data centre facilities.',
    features: [
      'Critical infrastructure',
      'Cooling systems',
      'Power distribution',
      'Security systems',
    ],
  },
  {
    id: '8',
    title: 'Commercial Projects',
    icon: 'building.2.fill',
    description: 'Large-scale commercial construction and development projects.',
    features: [
      'Office buildings',
      'Retail spaces',
      'Industrial facilities',
      'Mixed-use developments',
    ],
  },
];

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200' }}
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
              <Text style={[commonStyles.title, styles.titleLight]}>Our Services</Text>
              <Text style={[commonStyles.textSecondary, styles.subtitleLight]}>
                Comprehensive construction solutions
              </Text>
            </View>

            {/* Services List */}
            <View style={styles.servicesSection}>
              {services.map((service) => (
                <View key={service.id} style={[commonStyles.card, styles.cardWithBackground, styles.serviceCard]}>
                  <View style={styles.serviceHeader}>
                    <View style={[commonStyles.iconContainer, { backgroundColor: colors.background }]}>
                      <IconSymbol name={service.icon as any} size={28} color={colors.secondary} />
                    </View>
                    <View style={styles.serviceTitleContainer}>
                      <Text style={styles.serviceTitle}>{service.title}</Text>
                    </View>
                  </View>

                  <Text style={styles.serviceDescription}>{service.description}</Text>

                  <View style={styles.featuresContainer}>
                    {service.features.map((feature, index) => (
                      <View key={index} style={styles.featureRow}>
                        <IconSymbol name="checkmark.circle.fill" size={18} color={colors.secondary} />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity
                    style={styles.quoteButton}
                    onPress={() => router.push('/(tabs)/contact')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.quoteButtonText}>Get a Quote</Text>
                    <IconSymbol name="arrow.right" size={16} color={colors.secondary} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            {/* CTA Section */}
            <View style={styles.ctaSection}>
              <Text style={styles.ctaTitle}>Need a Custom Solution?</Text>
              <Text style={styles.ctaText}>
                Contact us to discuss your specific requirements and get a tailored quote
              </Text>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => router.push('/(tabs)/contact')}
                activeOpacity={0.8}
              >
                <Text style={styles.ctaButtonText}>Contact Us</Text>
                <IconSymbol name="phone.fill" size={18} color={colors.white} />
              </TouchableOpacity>
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
  cardWithBackground: {
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    backdropFilter: 'blur(10px)',
  },
  servicesSection: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  serviceCard: {
    marginBottom: 20,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  quoteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  quoteButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.secondary,
  },
  ctaSection: {
    marginHorizontal: 20,
    marginTop: 32,
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    boxShadow: '0px 4px 16px rgba(30, 58, 138, 0.3)',
    elevation: 6,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.9,
    lineHeight: 20,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
