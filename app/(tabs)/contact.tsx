
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const subject = `Quote Request: ${formData.projectType || 'General Inquiry'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:info@stellantisconstruction.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch(() => {
      Alert.alert('Error', 'Could not open email client');
    });

    Alert.alert(
      'Success',
      'Your inquiry has been prepared. Please send the email from your email client.',
      [
        {
          text: 'OK',
          onPress: () => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              projectType: '',
              message: '',
            });
          },
        },
      ]
    );
  };

  const handleCall = () => {
    Linking.openURL('tel:+447541719362');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@stellantisconstruction.com');
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/447541719362');
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.stellantisconstruction.com');
  };

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
          <Text style={commonStyles.title}>Contact Us</Text>
          <Text style={commonStyles.textSecondary}>
            Get in touch for a free consultation
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Get In Touch</Text>
          <View style={commonStyles.card}>
            <TouchableOpacity style={styles.contactRow} onPress={handleCall}>
              <View style={styles.contactIcon}>
                <IconSymbol name="phone.fill" size={20} color={colors.secondary} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactValue}>+44 7541 719362</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </TouchableOpacity>

            <View style={styles.contactDivider} />

            <TouchableOpacity style={styles.contactRow} onPress={handleEmail}>
              <View style={styles.contactIcon}>
                <IconSymbol name="envelope.fill" size={20} color={colors.secondary} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>info@stellantisconstruction.com</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </TouchableOpacity>

            <View style={styles.contactDivider} />

            <TouchableOpacity style={styles.contactRow} onPress={handleWebsite}>
              <View style={styles.contactIcon}>
                <IconSymbol name="globe" size={20} color={colors.secondary} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Website</Text>
                <Text style={styles.contactValue}>www.stellantisconstruction.com</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </TouchableOpacity>

            <View style={styles.contactDivider} />

            <TouchableOpacity style={styles.contactRow} onPress={handleWhatsApp}>
              <View style={styles.contactIcon}>
                <IconSymbol name="message.fill" size={20} color={colors.secondary} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>WhatsApp</Text>
                <Text style={styles.contactValue}>Chat with us</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quote Form */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Request a Quote</Text>
          <View style={commonStyles.card}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Your full name"
                placeholderTextColor={colors.textSecondary}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                placeholder="your.email@example.com"
                placeholderTextColor={colors.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="+44 1234 567890"
                placeholderTextColor={colors.textSecondary}
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Project Type</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Residential, Commercial, Data Centre"
                placeholderTextColor={colors.textSecondary}
                value={formData.projectType}
                onChangeText={(text) => setFormData({ ...formData, projectType: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Message *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about your project..."
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                value={formData.message}
                onChangeText={(text) => setFormData({ ...formData, message: text })}
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitButtonText}>Send Inquiry</Text>
              <IconSymbol name="paperplane.fill" size={18} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Notice */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Office Location</Text>
          <View style={styles.mapNotice}>
            <IconSymbol name="map.fill" size={32} color={colors.secondary} />
            <Text style={styles.mapNoticeTitle}>Interactive Map</Text>
            <Text style={styles.mapNoticeText}>
              Interactive maps are not currently supported in this view. Please visit our website
              or contact us directly for location details.
            </Text>
            <TouchableOpacity
              style={styles.mapButton}
              onPress={handleWebsite}
              activeOpacity={0.8}
            >
              <Text style={styles.mapButtonText}>Visit Website</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Business Hours */}
        <View style={styles.section}>
          <Text style={commonStyles.sectionTitle}>Business Hours</Text>
          <View style={commonStyles.card}>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Monday - Friday</Text>
              <Text style={styles.timeText}>8:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Saturday</Text>
              <Text style={styles.timeText}>9:00 AM - 2:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Sunday</Text>
              <Text style={styles.timeText}>Closed</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  contactDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 12,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
    marginTop: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  mapNotice: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  mapNoticeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
  },
  mapNoticeText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  mapButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  mapButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayText: {
    fontSize: 15,
    color: colors.text,
  },
  timeText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
});
