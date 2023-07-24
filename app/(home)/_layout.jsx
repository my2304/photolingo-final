import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
    return (
        <Tabs options={{ headerShown: false }}>
          {/* gallery page */}
            <Tabs.Screen name="gallery"  options={{headerShown: false ,tabBarLabel: 'Gallery',tabBarIcon: ({ size }) => (
        <Ionicons name="book" color={'#083E5C'} size={size} /> ),
            }} />
            {/* camera page */}
            <Tabs.Screen name="index"   options={{headerShown: false ,tabBarLabel: 'Profile',tabBarIcon: ({ size }) => (
        <Ionicons name="person" color={'#083E5C'} size={size} /> ),
            }} />
            {/* profile page */}
            <Tabs.Screen name="camera" options={{headerShown: false ,tabBarLabel: 'Camera',tabBarIcon: ({ size }) => (
        <Ionicons name="camera" color={'#083E5C'} size={size} /> ),
            }} />
        </Tabs>
    );
}