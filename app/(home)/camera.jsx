import  { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import {supabase} from '/Users/meenu/PhotoLingo-final/lib/supabase.js';
import { decode } from "base64-arraybuffer";
//import {getEmail} from '/Users/meenu/PhotoLingo-final/app/(auth)/login.jsx';
const API_KEY = 'b10e6d0d60b64c399d31644e0e46ee31'; // Replace with your Clarifai API key

const CameraScreen = () => {
  const [objectName, setObjectName] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      // const base64Image = `data:image/jpg;base64,${photo.base64}`;
      recognizeObject(photo.base64);
      // recognizeObject(base64Image);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (!result.cancelled) {
      // const base64Image = `data:image/jpg;base64,${result.base64}`;
      recognizeObject(result.base64);
      // recognizeObject(base64Image);
    }
  };

 
  const recognizeObject = async (base64Image) => {
    try {
      const response = await axios.post(
        'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/versions/aa9ca48295b37401f8af92ad1af0d91d/outputs',
        
        {
          inputs: [
            {
              data: {
                image: {
                  base64: base64Image,
                },
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Key ${API_KEY}`,
          },
        }
      );

      const predictions = response.data.outputs[0].data.concepts;
      if (predictions && predictions.length > 0) {
       // Find the prediction with the highest confidence score
       const mostConfidentPrediction = predictions.reduce((prev, current) => {
        return prev.value > current.value ? prev : current;
      });
      setObjectName(mostConfidentPrediction.name);
   // Upload the image and its prediction to Supabase storage
    const imageFileName = `image_${Date.now()}.jpg`;
  //  const imageBase64Data = base64Image.split(',')[1];



   const { data, error } = await supabase.storage
     .from('images')
     .upload(imageFileName, decode(base64Image), {
      contentType: 'image/jpg', 
      public: true});

   if (!error) {
     // Save the image URL and prediction to the 'predictions' table
     const imageURL =  supabase.storage.from('images').getPublicUrl(data).publicUrl;
     //const publicURL = `${imageURL}${encodeURIComponent(imageFileName)}`;
     await supabase.from('predictions').insert([
       {
         image_url: imageURL,
         prediction: mostConfidentPrediction.name,
       },

     ]);
   } else {
     console.error('Error uploading image:', error);
   }
 } else {
   setObjectName('No objects detected');
 }
} catch (error) {
 console.error('Error recognizing object:', error);
}
};




  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />
      <View style= {{flexDirection: 'row', justifyContent: 'space-around',  alignItems: 'center',
    paddingVertical: 20,}}>
      <TouchableOpacity style= {styles.button} onPress={takePicture}>
        <Text style={{color: 'white'}}>Capture Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.button} onPress={pickImage}>
        <Text style={{color: 'white'}}>Pick Image from Gallery</Text>
      </TouchableOpacity>

      {/* <Text>Object Name: {objectName}</Text> */}
      </View>
      <Text style={{justifyContent:'space-around', paddingVertical:'10%', }}>Object Name: {objectName}</Text>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  button : {
    padding: 5,
    borderRadius: 10,
    justifyContent:'space-around', 
    backgroundColor:'#083E5C'
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
})