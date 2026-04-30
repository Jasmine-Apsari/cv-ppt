import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import ExperienceCard from '../components/ExperienceCard';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(200).duration(800)} style={styles.header}>
        <Text style={[styles.title, { fontFamily: 'Poppins_800ExtraBold' }]}>Education & Experience</Text>
        <View style={styles.titleUnderline} />
      </Animated.View>

      <View style={styles.mainContent}>
        <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.section}>
          <Text style={[styles.sectionTitle, { fontFamily: 'Poppins_700Bold' }]}>Education</Text>
          <View style={styles.cardContainer}>
            <ExperienceCard 
              title="Binus University"
              subtitle="Computer Science Student"
              date="2024 - 2028"
              description="Focusing on software engineering, algorithms, and web development. Active member in technology communities."
              icon="school-outline"
            />
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(600).duration(800)} style={styles.section}>
          <Text style={[styles.sectionTitle, { fontFamily: 'Poppins_700Bold' }]}>Experience</Text>
          <View style={styles.cardContainer}>
            <ExperienceCard 
              title="Bina Nusantara Computer Club"
              subtitle="Public Relation Staff"
              date="2025 - 2026"
              description="Managing external communications and fostering relationships within the tech community."
              icon="people-outline"
            />
            <ExperienceCard 
              title="Bina Nusantara Computer Club"
              subtitle="Public Relation Activist as Content Creator"
              date="2024 - 2025"
              description="Creating engaging digital content to promote club activities and tech knowledge."
              icon="videocam-outline"
            />
            <ExperienceCard 
              title="Google Developer Group"
              subtitle="Product and Curriculum Division"
              date="2024 - 2025"
              description="Collaborating on educational materials and organizing workshops for developers."
              icon="logo-google"
            />
          </View>
        </Animated.View>
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 120,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: Platform.OS === 'web' ? 48 : 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#FF2D55',
    borderRadius: 2,
  },
  mainContent: {
    gap: 40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 14,
    marginBottom: 24,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  cardContainer: {
    gap: 16,
  },
});
