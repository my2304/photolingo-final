import { View , TouchableOpacity,  KeyboardAvoidingView, StyleSheet} from "react-native";
import { useState } from "react";
import { Text, TextInput, Button, ActivityIndicator} from "react-native-paper";
import { Link } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async () => {
        setErrMsg('');
        if (email == '') {
            setErrMsg("email cannot be empty")
            return;
        }
        if (password == '') {
            setErrMsg("password cannot be empty")
            return;
        }
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
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
            <Text style={styles.tagline}> See, Snap, Expand: Your Visual Path to English Fluency!</Text>
            
            
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
                <Text style= {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {errMsg !== "" && <Text style = {styles.error}>{errMsg}</Text>}
            {loading && <ActivityIndicator />}
            <Link href="/register">
                <Button style = {[styles.button, styles.buttonOutline]}> 
                <Text style = {styles.buttonOutlineText}> Register</Text>
                </Button>
            </Link>
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
        width: '80%', 
       // height:'20%'
    },
    input:{ 
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 7, 
        borderRadius: 7, 
        marginTop: 10,
    },
    buttonContainer:{ 
        width: '60%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 40,
        height: '10%'
    },
           
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
        
       
    },
    buttonOutline:{ 
        backgroundColor: '#083E5C', 
        
        borderColor: '#083E5C',

        width: '100%', 
        padding: 10, 
        borderRadius: 7, 
        alignItems: 'center',
      
          
        

    },
    buttonOutlineText:{ 
       // color: '#456e84', 
        fontWeight: '700', 
        fontSize: 16,
        color:'white',

    },
    image:{
        flex :1, 
        justifyContent: 'center'
    },
    PhotoLingo: {
        color: 'white',
        fontSize: 48,
        fontWeight: '900',
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
    },
    error: {
        color: 'white',
       
       
        }

})
