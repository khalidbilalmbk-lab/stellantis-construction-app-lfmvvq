
import React, { useState } from 'react';
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
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

const { width } = Dimensions.get('window');

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  budget: string;
  size: string;
  status: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Office Complex',
    category: 'Commercial',
    location: 'London, UK',
    budget: '£5.2M',
    size: '15,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'State-of-the-art office building with modern amenities and sustainable design.',
  },
  {
    id: '2',
    title: 'Luxury Residential Tower',
    category: 'Residential',
    location: 'Manchester, UK',
    budget: '£8.5M',
    size: '25,000 sq ft',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    description: 'Premium residential complex with 50 luxury apartments and world-class facilities.',
  },
  {
    id: '3',
    title: 'Enterprise Data Centre',
    category: 'Data Centre',
    location: 'Birmingham, UK',
    budget: '£12M',
    size: '30,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    description: 'High-security data centre with advanced cooling and power infrastructure.',
  },
  {
    id: '4',
    title: 'Shopping Mall Renovation',
    category: 'Commercial',
    location: 'Leeds, UK',
    budget: '£3.8M',
    size: '20,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800',
    description: 'Complete renovation of existing shopping center with modern retail spaces.',
  },
  {
    id: '5',
    title: 'Residential Development',
    category: 'Residential',
    location: 'Bristol, UK',
    budget: '£6.5M',
    size: '18,000 sq ft',
    status: 'Planning',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    description: 'New residential development with 30 family homes and community facilities.',
  },
  {
    id: '6',
    title: 'Tech Campus Extension',
    category: 'Commercial',
    location: 'Cambridge, UK',
    budget: '£9.2M',
    size: '22,000 sq ft',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'Expansion of technology campus with collaborative workspaces and labs.',
  },
];

export default function ProjectsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Residential', 'Commercial', 'Data Centre'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200' }}
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
              <Text style={[commonStyles.title, styles.titleLight]}>Our Projects</Text>
              <Text style={[commonStyles.textSecondary, styles.subtitleLight]}>
                Showcasing excellence in construction
              </Text>
            </View>

            {/* Category Filter */}
            <View style={styles.filterSection}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.filterButton,
                      selectedCategory === category && styles.filterButtonActive,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.filterButtonText,
                        selectedCategory === category && styles.filterButtonTextActive,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Projects Grid */}
            <View style={styles.projectsSection}>
              {filteredProjects.map((project) => (
                <View key={project.id} style={[styles.projectCard, styles.cardWithBackground]}>
                  <Image source={{ uri: project.image }} style={styles.projectImage} />
                  <View style={styles.projectContent}>
                    <View style={styles.projectHeader}>
                      <Text style={styles.projectTitle}>{project.title}</Text>
                      <View
                        style={[
                          styles.statusBadge,
                          project.status === 'Completed' && styles.statusCompleted,
                          project.status === 'In Progress' && styles.statusInProgress,
                          project.status === 'Planning' && styles.statusPlanning,
                        ]}
                      >
                        <Text style={styles.statusText}>{project.status}</Text>
                      </View>
                    </View>

                    <Text style={styles.projectDescription}>{project.description}</Text>

                    <View style={styles.projectDetails}>
                      <View style={styles.detailRow}>
                        <IconSymbol name="mappin.circle.fill" size={16} color={colors.secondary} />
                        <Text style={styles.detailText}>{project.location}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <IconSymbol name="square.grid.2x2.fill" size={16} color={colors.secondary} />
                        <Text style={styles.detailText}>{project.size}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <IconSymbol name="dollarsign.circle.fill" size={16} color={colors.secondary} />
                        <Text style={styles.detailText}>{project.budget}</Text>
                      </View>
                      <View style={styles.detailRow}>
                        <IconSymbol name="tag.fill" size={16} color={colors.secondary} />
                        <Text style={styles.detailText}>{project.category}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
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
  filterSection: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterButtonActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  filterButtonTextActive: {
    color: colors.white,
  },
  projectsSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  projectCard: {
    backgroundColor: 'rgba(248, 250, 252, 0.95)',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 16,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusCompleted: {
    backgroundColor: '#10B981',
  },
  statusInProgress: {
    backgroundColor: '#F59E0B',
  },
  statusPlanning: {
    backgroundColor: '#6366F1',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  projectDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailText: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },
});
