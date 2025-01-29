import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { Feather } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function _layout() {
  return (
    // Set up tabs at the bottom of the page
   <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />}}>
    {/* Homepage tab */}
    <Tabs.Screen name='homepage' options={{
      tabBarIcon: ({color}) => (
        <Feather name="list" size={24} color={color} />
      ),
      tabBarLabel: 'Homepage',
      headerTitle: 'Homepage'
    }} />
    {/* Map tab */}
    <Tabs.Screen name='map' options={{
      tabBarIcon: ({color}) => (
        <Feather name="list" size={24} color={color} />
      ),
      tabBarLabel: 'Map',
      headerTitle: 'Map'
    }} />
    {/* QR Code Scanner tab */}
    <Tabs.Screen name='qr' options={{
      tabBarIcon: ({color}) => (
        <Feather name="list" size={24} color={color} />
      ),
      tabBarLabel: 'QR Scan',
      headerTitle: 'QR Scan'
    }} />
   </Tabs>
  )
}