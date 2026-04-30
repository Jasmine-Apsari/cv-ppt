import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking, useWindowDimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import PowerMeter from '../components/PowerMeter';
import { useRouter } from 'expo-router';

const SkillCard = ({ title, items, icon, iconColor, showProgress = false, progressData = [] }: { 
  title: string, 
  items?: string[], 
  icon: any, 
  iconColor: string, 
  showProgress?: boolean,
  progressData?: { label: string, percentage: number }[]
}) => (
  <View style={styles.skillCard}>
    <View style={[styles.skillIconContainer, { backgroundColor: 'rgba(255, 255, 255, 0.03)' }]}>
      <Ionicons name={icon} size={20} color={iconColor} />
    </View>
    <Text style={[styles.skillCardTitle, { fontFamily: 'Poppins_700Bold' }]}>{title}</Text>
    
    {showProgress ? (
      <View style={styles.skillList}>
        {progressData.map((data, index) => (
          <PowerMeter key={index} label={data.label} percentage={data.percentage} color={iconColor === '#B3B3B3' ? '#FF2D55' : iconColor} compact />
        ))}
      </View>
    ) : (
      <View style={styles.skillList}>
        {items?.map((item, index) => (
          <View key={index} style={styles.skillItem}>
            <View style={[styles.dot, { backgroundColor: '#FF2D55' }]} />
            <Text style={[styles.skillText, { fontFamily: 'Poppins_400Regular' }]}>{item}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

export default function ProfileScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isHovered, setIsHovered] = useState(false);

  const openGithub = () => {
    Linking.openURL('https://github.com/Jasmine-Apsari');
  };

  const ringStyle = useAnimatedStyle(() => {
    return {
      borderColor: withSpring(isHovered ? '#FF2D55' : 'rgba(255, 45, 85, 0.1)'),
      borderWidth: withSpring(isHovered ? 2 : 1),
      transform: [{ scale: withSpring(isHovered ? 1.05 : 1) }],
    };
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero Section */}
      <View style={[styles.heroSection, isMobile && styles.heroSectionMobile]}>
        <View style={[styles.heroTextContainer, isMobile && styles.heroTextContainerMobile]}>
          <Animated.View entering={FadeInDown.delay(200).duration(800)}>
            <View style={styles.badge}>
              <Text style={[styles.badgeText, { fontFamily: 'Poppins_600SemiBold' }]}>AVAILABLE FOR NEW VENTURES</Text>
            </View>
            <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile, { fontFamily: 'Poppins_800ExtraBold' }]}>
              Hi There,{"\n"}
              I'm <Text style={styles.highlightText}>Jasmine Apsari!</Text>
            </Text>
            <Text style={[styles.heroSubtext, isMobile && styles.heroSubtextMobile, { fontFamily: 'Poppins_400Regular' }]}>
              A full-stack developer and content creator who enjoys turning ideas into intuitive digital experiences and engaging content.
            </Text>
            
            <View style={[styles.buttonContainer, isMobile && styles.buttonContainerMobile]}>
              <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/projects')}>
                <Text style={[styles.primaryButtonText, { fontFamily: 'Poppins_700Bold' }]}>View Works →</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={openGithub}>
                <Text style={[styles.secondaryButtonText, { fontFamily: 'Poppins_700Bold' }]}>GitHub Profile</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>

        <Animated.View 
          entering={isMobile ? FadeInDown.delay(400).duration(800) : FadeInRight.delay(400).duration(1000)} 
          style={[styles.heroImageContainer, isMobile && styles.heroImageContainerMobile]}
          // @ts-ignore
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Animated.View style={[styles.imageOuterCircle, isMobile && styles.imageOuterCircleMobile, ringStyle]}>
            <Image 
              source={require('../assets/images/profile.jpg')} 
              style={styles.heroImage} 
            />
          </Animated.View>
        </Animated.View>
      </View>

      {/* Skills Section */}
      <Animated.View entering={FadeInDown.delay(600).duration(800)} style={[styles.skillsGrid, isMobile && styles.skillsGridMobile]}>
        <SkillCard 
          title="Technical Skills"
          showProgress
          progressData={[
            { label: 'HTML', percentage: 95 },
            { label: 'CSS', percentage: 95 },
            { label: 'Database (MySQL)', percentage: 92 },
            { label: 'JS', percentage: 85 },
            { label: 'Laravel', percentage: 80 },
            { label: 'Python', percentage: 75 },
          ]}
          icon="terminal-outline"
          iconColor="#B3B3B3"
        />
        <SkillCard 
          title="Creative & Communication"
          showProgress
          progressData={[
            { label: 'Content Creation', percentage: 90 },
            { label: 'MC', percentage: 80 },
          ]}
          icon="grid-outline"
          iconColor="#FF2D55"
        />
        <SkillCard 
          title="Tools"
          items={['GitHub', 'Figma', 'Capcut', 'Canva']}
          icon="construct-outline"
          iconColor="#00FF66"
        />
      </Animated.View>

      <View style={{ height: 150 }} />
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
    paddingTop: Platform.OS === 'web' ? 100 : 80,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  heroSectionMobile: {
    flexDirection: 'column-reverse',
    marginBottom: 60,
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: 60,
  },
  heroTextContainerMobile: {
    paddingRight: 0,
    alignItems: 'center',
    marginTop: 40,
  },
  badge: {
    backgroundColor: 'rgba(255, 45, 85, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 45, 85, 0.1)',
  },
  badgeText: {
    color: '#FF2D55',
    fontSize: 10,
    letterSpacing: 1,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 64,
    lineHeight: 76,
    marginBottom: 24,
  },
  heroTitleMobile: {
    fontSize: 36,
    lineHeight: 44,
    textAlign: 'center',
  },
  highlightText: {
    color: '#FF2D55',
    fontStyle: 'italic',
  },
  heroSubtext: {
    color: '#888888',
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 44,
    maxWidth: 550,
  },
  heroSubtextMobile: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonContainerMobile: {
    flexDirection: 'column',
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#000000',
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  heroImageContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImageContainerMobile: {
    flex: 0,
    width: '100%',
  },
  imageOuterCircle: {
    width: 380,
    height: 380,
    borderRadius: 190,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  imageOuterCircleMobile: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 1000,
  },
  skillsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
    width: '100%',
  },
  skillsGridMobile: {
    flexDirection: 'column',
  },
  skillCard: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    borderRadius: 28,
    padding: 32,
    minHeight: 320,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.03)',
  },
  skillIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  skillCardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 24,
  },
  skillList: {
    gap: 14,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  skillText: {
    color: '#B3B3B3',
    fontSize: 16,
  },
});
