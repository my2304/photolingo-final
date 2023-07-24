import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { View, TouchableOpacity,  KeyboardAvoidingView, StyleSheet } from "react-native";
import { Text, TextInput, ActivityIndicator } from 'react-native-paper';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async () => {
        if (email == '') {
            setErrMsg("email cannot be empty")
            return;
        }
        if (password == '') {
            setErrMsg("password cannot be empty")
            return;
        }
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setLoading(false);
        if (error) {
            setErrMsg(error.message);
            return;
        }
    }
    return(
        <KeyboardAvoidingView style = {styles.container} behavior='padding'>
    
            <View style={styles.inputContainer}>
                <Text style={styles.PhotoLingo}> PhotoLingo </Text>
                <Text style={styles.tagline}> Tagline </Text>
                
                
                <TextInput
                placeholder='Email'
                value={ email}
                onChangeText={text => setEmail(text)}
                style= {styles.input}
                />
                 <TextInput
                placeholder='Password'
                value={ password}
                onChangeText={text => setPassword(text)}
                style= {styles.input}
                secureTextEntry
                />
            </View>
    
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleSubmit}
                style= {styles.button}>
                    <Text style= {styles.buttonText}>Register</Text>
                </TouchableOpacity>
                {errMsg !== "" && <Text>{errMsg}</Text>}
                {loading && <ActivityIndicator />}
            </View>
        </KeyboardAvoidingView>
      )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#083E5C'
    
        },
        inputContainer:{ 
            width: '80%'
        },
        input:{ 
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10, 
            borderRadius: 10, 
            marginTop: 5,
        },
        buttonContainer:{ 
            width: '60%', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: 40,
        },
               
        button:{ 
            backgroundColor: '#456e84',
            width: '100%', 
            padding: 15, 
            borderRadius: 10, 
            alignItems: 'center',
            //opacity: 0.25, 
    
        },
        buttonText:{
            //color: '#083E5C', 
            color: 'white',
            opacity: 1,
            fontWeight: 700, 
            fontSize: 16,
            //color: '#C2F2FD',
            //fontSize: 13,
            
           
        },
        buttonOutline:{ 
            backgroundColor: '#083E5C', 
            marginTop: 5, 
            borderColor: '#083E5C',
            borderWidth:2,
    
        },
        buttonOutlineText:{ 
            color: '#456e84', 
            fontWeight: '700', 
            fontSize: 16,
    
        },
        image:{
            flex :1, 
            justifyContent: 'center'
        },
        PhotoLingo: {
            color: 'white',
            fontSize: 40,
            fontWeight: '400',
            alignItems: 'center', 
            textAlign: 'center',
            padding: 15
        }, 
        tagline: {
            color: 'white',
            fontSize: 13,
            fontWeight: '400',
            alignItems: 'center', 
            textAlign: 'center', 
            padding: 10
        }
    
    })
    