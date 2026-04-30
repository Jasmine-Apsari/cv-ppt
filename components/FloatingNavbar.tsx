import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { BlurView } from 'expo-blur';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/education' },
  { name: 'Works', path: '/projects' },
];

const FloatingNavbar = () => {
  const pathname = usePathname();

  return (
    <View style={styles.outerContainer}>
      <BlurView intensity={Platform.OS === 'ios' ? 20 : 50} tint="dark" style={styles.navbar}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={[styles.logoText, { fontFamily: 'Poppins_700Bold' }]}>JA</Text>
          </View>
        </View>

        {/* Links */}
        <View style={styles.linksContainer}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} asChild>
                <TouchableOpacity style={styles.navItem}>
                  <Text style={[styles.navText, { fontFamily: isActive ? 'Poppins_600SemiBold' : 'Poppins_400Regular' }, isActive && styles.activeNavText]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </Link>
            );
          })}
        </View>

        {/* Status Indicator */}
        <View style={styles.divider} />
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={[styles.statusText, { fontFamily: 'Poppins_700Bold' }]}>AVAILABLE</Text>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
    paddingHorizontal: 20,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 20, 20, 0.6)',
    borderRadius: 40,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    ...Platform.select({
      web: {
        backdropFilter: 'blur(20px)',
      },
    }),
  },
  logoContainer: {
    marginRight: 10,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF2D55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  navText: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  activeNavText: {
    color: '#FFFFFF',
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00FF66',
    marginRight: 8,
    shadowColor: '#00FF66',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  statusText: {
    color: '#888888',
    fontSize: 10,
    letterSpacing: 0.5,
  },
});

export default FloatingNavbar;
