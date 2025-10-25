
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const services = [
    { title: 'Construction', icon: 'hammer.fill', route: '/(tabs)/services' },
    { title: 'Design & Build', icon: 'pencil.and.ruler.fill', route: '/(tabs)/services' },
    { title: 'Project Management', icon: 'chart.bar.fill', route: '/(tabs)/services' },
    { title: 'Consultancy', icon: 'person.2.fill', route: '/(tabs)/services' },
  ];

  const quickLinks = [
    { title: 'Our Projects', icon: 'building.2.fill', route: '/(tabs)/projects', color: colors.secondary },
    { title: 'Get a Quote', icon: 'doc.text.fill', route: '/(tabs)/contact', color: colors.primary },
    { title: 'About Us', icon: 'info.circle.fill', route: '/(tabs)/about', color: colors.secondary },
    { title: 'Contact', icon: 'phone.fill', route: '/(tabs)/contact', color: colors.primary },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200' }}
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
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <Image
                source={{ uri: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/409fdc90-ed36-4a0f-8ab7-6ff29c7868ed/assets/images/d1ef5881-b6ec-49fb-9064-db172d7034a5.jpeg?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=8dHfNRg%2Bfvya4rSv6g8WilViQg4%3D&Expires=1761495359' }}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.heroTitle}>Stellantis Construction Ltd</Text>
              <Text style={styles.heroSubtitle}>Design & Build - A Turnkey Solution Provider</Text>
              <Text style={styles.heroDescription}>
                Building excellence in residential, commercial, and data centre construction
              </Text>
            </View>

            {/* Quick Navigation */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Quick Access</Text>
              <View style={styles.quickLinksGrid}>
                {quickLinks.map((link, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.quickLinkCard, { backgroundColor: link.color }]}
                    onPress={() => router.push(link.route as any)}
                    activeOpacity={0.8}
                  >
                    <IconSymbol name={link.icon as any} size={32} color={colors.white} />
                    <Text style={styles.quickLinkText}>{link.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Services Overview */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Our Services</Text>
              <View style={styles.servicesGrid}>
                {services.map((service, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.serviceCard, styles.cardWithBackground]}
                    onPress={() => router.push(service.route as any)}
                    activeOpacity={0.8}
                  >
                    <View style={[commonStyles.iconContainer, { backgroundColor: colors.card }]}>
                      <IconSymbol name={service.icon as any} size={24} color={colors.secondary} />
                    </View>
                    <Text style={styles.serviceTitle}>{service.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Featured Projects */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Featured Projects</Text>
                <TouchableOpacity onPress={() => router.push('/(tabs)/projects')}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectsScroll}>
                <View style={[styles.projectCard, styles.cardWithBackground]}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' }}
                    style={styles.projectImage}
                  />
                  <View style={styles.projectInfo}>
                    <Text style={styles.projectTitle}>Commercial Tower</Text>
                    <Text style={styles.projectLocation}>London, UK</Text>
                  </View>
                </View>
                <View style={[styles.projectCard, styles.cardWithBackground]}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' }}
                    style={styles.projectImage}
                  />
                  <View style={styles.projectInfo}>
                    <Text style={styles.projectTitle}>Residential Complex</Text>
                    <Text style={styles.projectLocation}>Manchester, UK</Text>
                  </View>
                </View>
                <View style={[styles.projectCard, styles.cardWithBackground]}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' }}
                    style={styles.projectImage}
                  />
                  <View style={styles.projectInfo}>
                    <Text style={styles.projectTitle}>Data Centre</Text>
                    <Text style={styles.projectLocation}>Birmingham, UK</Text>
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* Why Choose Us */}
            <View style={styles.section}>
              <Text style={[commonStyles.sectionTitle, styles.sectionTitleLight]}>Why Choose Us</Text>
              <View style={[commonStyles.card, styles.cardWithBackground]}>
                <View style={styles.featureRow}>
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.secondary} />
                  <Text style={styles.featureText}>20+ Years of Experience</Text>
                </View>
                <View style={styles.featureRow}>
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.secondary} />
                  <Text style={styles.featureText}>Professional Team</Text>
                </View>
                <View style={styles.featureRow}>
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.secondary} />
                  <Text style={styles.featureText}>Quality Guaranteed</Text>
                </View>
                <View style={styles.featureRow}>
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.secondary} />
                  <Text style={styles.featureText}>On-Time Delivery</Text>
                </View>
              </View>
            </View>

            {/* CTA Section */}
            <View style={styles.ctaSection}>
              <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
              <Text style={styles.ctaText}>Get in touch with us today for a free consultation</Text>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => router.push('/(tabs)/contact')}
                activeOpacity={0.8}
              >
                <Text style={styles.ctaButtonText}>Get a Quote</Text>
                <IconSymbol name="arrow.right" size={20} color={colors.white} />
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
  sectionTitleLight: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardWithBackground: {
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    backdropFilter: 'blur(10px)',
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
  },
  logo: {
    width: width * 0.8,
    height: 120,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  heroSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickLinkCard: {
    width: (width - 52) / 2,
    aspectRatio: 1.5,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 4,
  },
  quickLinkText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  serviceCard: {
    width: (width - 52) / 2,
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  projectsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  projectCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  projectInfo: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  projectLocation: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
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
