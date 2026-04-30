import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import ExperienceCard from '../components/ExperienceCard';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(200).duration(800)} style={styles.header}>
        <Text style={[styles.title, { fontFamily: 'Poppins_800ExtraBold' }]}>Featured Works</Text>
        <View style={styles.titleUnderline} />
      </Animated.View>

      <View style={styles.mainContent}>
        <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.section}>
          <View style={styles.cardContainer}>
            <ExperienceCard 
              title="HealthyBuddy Website"
              subtitle="Full-stack Web Platform"
              date="Featured Project"
              description="A web-based platform that helps users track their health, set reminders, and access wellness content through a simple and user-friendly interface."
              icon="fitness-outline"
              link="https://drive.google.com/file/d/1s0dQUyndtCr3xV8YHE2feDZnNEKO14Eo/view?usp=drive_link"
            />

            <ExperienceCard 
              title="TPM BNCC Front end Mini Project"
              subtitle="Web Development"
              date="Mini Project"
              description="A mini front-end project developed for BNCC training, focusing on responsive design and modern web standards."
              icon="code-slash-outline"
              link="https://github.com/Jasmine-Apsari/TPM_FE_MiniProject_Jasmine-Apsari_A"
            />
            
            <ExperienceCard 
              title="J-Vlog"
              subtitle="Content Creation & Storytelling"
              date="YouTube Content"
              description="A collection of creative vlogs showcasing my lifestyle, experiences and storytelling through engaging visual content."
              icon="videocam-outline"
              link="https://youtu.be/CyvPPTZ7wu8?si=_-LC0KY_md5Y4myd"
            />
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(600).duration(800)} style={styles.infoBox}>
          <Text style={[styles.infoText, { fontFamily: 'Poppins_400Regular' }]}>
            Want to see more? I'm always working on something new. Check out my latest experiments on GitHub.
          </Text>
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
  cardContainer: {
    gap: 24,
  },
  infoBox: {
    backgroundColor: '#111111',
    padding: 30,
    borderRadius: 24,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  infoText: {
    color: '#888888',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 500,
  },
});
