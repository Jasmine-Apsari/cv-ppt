import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSpring,
  Easing 
} from 'react-native-reanimated';

interface PowerMeterProps {
  label: string;
  percentage: number;
  color?: string;
  compact?: boolean;
}

const PowerMeter: React.FC<PowerMeterProps> = ({ 
  label, 
  percentage, 
  color = '#FF2D55',
  compact = false
}) => {
  const progress = useSharedValue(0);
  const hoverScale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    progress.value = withTiming(percentage, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
    backgroundColor: withTiming(isHovered ? '#FFFFFF' : color),
  }));

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(hoverScale.value) }],
  }));

  const glowStyle = useAnimatedStyle(() => ({
    opacity: withTiming(glowOpacity.value),
    backgroundColor: withTiming(isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)'),
  }));

  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverScale.value = 1.02;
    glowOpacity.value = 0.8;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    hoverScale.value = 1;
    glowOpacity.value = 0.2;
  };

  return (
    <Animated.View 
      style={[styles.container, containerStyle]}
      // @ts-ignore
      onMouseEnter={Platform.OS === 'web' ? handleMouseEnter : undefined}
      onMouseLeave={Platform.OS === 'web' ? handleMouseLeave : undefined}
    >
      <View style={styles.header}>
        <Text style={[styles.label, { fontFamily: 'Poppins_600SemiBold' }, isHovered && { color: '#FFFFFF' }]}>
          {label}
        </Text>
        <Text style={[styles.percentage, { color: isHovered ? '#FFFFFF' : color, fontFamily: 'Poppins_700Bold' }]}>
          {percentage}%
        </Text>
      </View>
      <View style={[styles.track, compact && { height: 4 }]}>
        <Animated.View style={[styles.bar, animatedStyle]}>
          <Animated.View style={[styles.glow, glowStyle]} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  percentage: {
    fontSize: 13,
  },
  track: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 3,
    position: 'relative',
  },
  glow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 30,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default PowerMeter;
