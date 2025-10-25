
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
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
    description: 'Full-scale construction services for residential, commercial, and industrial projects',
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
    description: 'Comprehensive design and build solutions from concept to completion',
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
    description: 'Professional project management ensuring on-time and on-budget delivery',
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
    description: 'Expert construction consultancy and advisory services',
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
    description: 'Complete refurbishment and renovation services for existing properties',
    features: [
      'Interior refurbishment',
      'Exterior renovation',
      'Heritage restoration',
      'Modernization',
    ],
  },
  {
    id: '6',
    title: 'Extensions & Lofts',
    icon: 'house.fill',
    description: 'Expert home extension and loft conversion services',
    features: [
      'Single and double-story extensions',
      'Loft conversions',
      'Garage conversions',
      'Basement conversions',
    ],
  },
  {
    id: '7',
    title: 'Data Centres',
    icon: 'server.rack',
    description: 'Specialized construction of state-of-the-art data centre facilities',
    features: [
      'Tier III & IV data centres',
      'Advanced cooling systems',
      'Security infrastructure',
      'Power redundancy',
    ],
  },
  {
    id: '8',
    title: 'Commercial Projects',
    icon: 'building.2.fill',
    description: 'Large-scale commercial construction and development',
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
    <SafeAreaView style={commonStyles.safeArea} edges={['top']}>
      <View style={commonStyles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Our Services</Text>
          <Text style={commonStyles.textSecondary}>
            Comprehensive construction solutions tailored to your needs
          </Text>
        </View>

        {/* Services List */}
        <ScrollView
          style={styles.servicesList}
          contentContainerStyle={[
            styles.servicesContent,
            Platform.OS !== 'ios' && commonStyles.scrollContentWithTabBar,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {services.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <View style={styles.iconContainer}>
                  <IconSymbol name={service.icon as any} size={28} color={colors.secondary} />
                </View>
                <View style={styles.serviceHeaderText}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                </View>
              </View>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <View style={styles.featuresContainer}>
                {service.features.map((feature, index) => (
                  <View key={index} style={styles.featureRow}>
                    <IconSymbol
                      name="checkmark.circle.fill"
                      size={18}
                      color={colors.secondary}
                    />
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
                <IconSymbol name="arrow.right" size={16} color={colors.white} />
              </TouchableOpacity>
            </View>
          ))}

          {/* Bottom CTA */}
          <View style={styles.bottomCTA}>
            <Text style={styles.ctaTitle}>Need a Custom Solution?</Text>
            <Text style={styles.ctaText}>
              We offer tailored services to meet your specific requirements
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push('/(tabs)/contact')}
              activeOpacity={0.8}
            >
              <Text style={styles.ctaButtonText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  servicesList: {
    flex: 1,
  },
  servicesContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  serviceCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceHeaderText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresContainer: {
    gap: 8,
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
  },
  quoteButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  bottomCTA: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginTop: 8,
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
  },
  ctaButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
