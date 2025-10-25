
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    },
    {
      name: 'projects',
      route: '/(tabs)/projects',
      icon: 'building.2.fill',
      label: 'Projects',
    },
    {
      name: 'services',
      route: '/(tabs)/services',
      icon: 'wrench.and.screwdriver.fill',
      label: 'Services',
    },
    {
      name: 'about',
      route: '/(tabs)/about',
      icon: 'info.circle.fill',
      label: 'About',
    },
    {
      name: 'contact',
      route: '/(tabs)/contact',
      icon: 'phone.fill',
      label: 'Contact',
    },
  ];

  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf="house.fill" drawable="ic_home" />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="projects">
          <Icon sf="building.2.fill" drawable="ic_projects" />
          <Label>Projects</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="services">
          <Icon sf="wrench.and.screwdriver.fill" drawable="ic_services" />
          <Label>Services</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="about">
          <Icon sf="info.circle.fill" drawable="ic_about" />
          <Label>About</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="contact">
          <Icon sf="phone.fill" drawable="ic_contact" />
          <Label>Contact</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="projects" />
        <Stack.Screen name="services" />
        <Stack.Screen name="about" />
        <Stack.Screen name="contact" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
