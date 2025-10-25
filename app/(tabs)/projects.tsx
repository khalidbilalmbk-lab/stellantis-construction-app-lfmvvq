
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
    title: 'Skyline Commercial Tower',
    category: 'Commercial',
    location: 'London, UK',
    budget: '£15M',
    size: '50,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'Modern 20-story commercial tower with state-of-the-art facilities',
  },
  {
    id: '2',
    title: 'Riverside Residential Complex',
    category: 'Residential',
    location: 'Manchester, UK',
    budget: '£8M',
    size: '35,000 sq ft',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    description: 'Luxury residential complex with 120 apartments and amenities',
  },
  {
    id: '3',
    title: 'TechHub Data Centre',
    category: 'Data Centres',
    location: 'Birmingham, UK',
    budget: '£25M',
    size: '80,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    description: 'Tier III data centre with advanced cooling and security systems',
  },
  {
    id: '4',
    title: 'Green Valley Development',
    category: 'Developments',
    location: 'Leeds, UK',
    budget: '£12M',
    size: '60,000 sq ft',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800',
    description: 'Mixed-use development with residential and commercial spaces',
  },
  {
    id: '5',
    title: 'Heritage Office Refurbishment',
    category: 'Commercial',
    location: 'Edinburgh, UK',
    budget: '£5M',
    size: '25,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'Complete refurbishment of historic building into modern offices',
  },
  {
    id: '6',
    title: 'Parkside Villas',
    category: 'Residential',
    location: 'Bristol, UK',
    budget: '£6M',
    size: '30,000 sq ft',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    description: 'Exclusive collection of 15 luxury villas with private gardens',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Data Centres', 'Developments'];

export default function ProjectsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <SafeAreaView style={commonStyles.safeArea} edges={['top']}>
      <View style={commonStyles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Our Projects</Text>
          <Text style={commonStyles.textSecondary}>
            Showcasing excellence in construction and development
          </Text>
        </View>

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Projects List */}
        <ScrollView
          style={styles.projectsList}
          contentContainerStyle={[
            styles.projectsContent,
            Platform.OS !== 'ios' && commonStyles.scrollContentWithTabBar,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {filteredProjects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <Image source={{ uri: project.image }} style={styles.projectImage} />
              <View style={styles.projectDetails}>
                <View style={styles.projectHeader}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          project.status === 'Completed' ? colors.secondary : colors.primary,
                      },
                    ]}
                  >
                    <Text style={styles.statusText}>{project.status}</Text>
                  </View>
                </View>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <View style={styles.projectInfo}>
                  <View style={styles.infoRow}>
                    <IconSymbol name="location.fill" size={16} color={colors.textSecondary} />
                    <Text style={styles.infoText}>{project.location}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <IconSymbol name="square.grid.2x2.fill" size={16} color={colors.textSecondary} />
                    <Text style={styles.infoText}>{project.size}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <IconSymbol name="banknote.fill" size={16} color={colors.textSecondary} />
                    <Text style={styles.infoText}>{project.budget}</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <IconSymbol name="tag.fill" size={16} color={colors.textSecondary} />
                    <Text style={styles.infoText}>{project.category}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
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
  categoryScroll: {
    maxHeight: 50,
  },
  categoryContent: {
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryButtonActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  categoryTextActive: {
    color: colors.white,
  },
  projectsList: {
    flex: 1,
  },
  projectsContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  projectCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectDetails: {
    padding: 16,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  projectInfo: {
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.text,
  },
});
