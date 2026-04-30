import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  link?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  subtitle, 
  date, 
  description, 
  icon = 'briefcase-outline',
  link 
}) => {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <TouchableOpacity 
      activeOpacity={link ? 0.7 : 1} 
      onPress={handlePress}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#FF2D55" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {link && (
          <View style={styles.linkIndicator}>
            <Text style={styles.linkText}>View Project</Text>
            <Ionicons name="arrow-forward" size={14} color="#FF2D55" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 45, 85, 0.03)',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 45, 85, 0.1)',
    width: '100%',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 45, 85, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  date: {
    color: '#FF2D55',
    fontSize: 12,
    fontWeight: '600',
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  description: {
    color: '#888888',
    fontSize: 13,
    lineHeight: 18,
  },
  linkIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  linkText: {
    color: '#FF2D55',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 4,
  },
});

export default ExperienceCard;
