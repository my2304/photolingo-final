import { Text } from 'react-native-paper';
// import { View } from 'react-native';
import { supabase } from '../../lib/supabase';
// import { Button } from 'react-native-paper';
import {  TouchableOpacity,   StyleSheet} from "react-native";


// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
export default function HomePage() {
    return (
    // <SafeAreaView> 
    //     <Button onPress={() => supabase.auth.signOut()}> Logout </Button>
    // </SafeAreaView>
    <SafeAreaView> 
    <TouchableOpacity
    onPress={() => supabase.auth.signOut()}
    style= {styles.button}>
        <Text style= {styles.buttonText}>Logout </Text>
    </TouchableOpacity>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
button:{ 
    backgroundColor: '#456e84',
    width: '100%', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center',
    //opacity: 0.25, 
    justifyContent: 'space-evenly'

},
buttonText:{
    //color: '#083E5C', 
    color: 'white',
    opacity: 1,
    fontWeight: 700, 
    fontSize: 16,
    //color: '#C2F2FD',
    //fontSize: 13,
    
   
}
})