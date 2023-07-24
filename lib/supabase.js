import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage'

const projectUrl = process.env.SUPABASE_PROJECT_URL
const projectKey = process.env.SUPABASE_PROJECT_KEY
export const supabase = createClient(projectUrl, projectKey, {
    auth: {
        storage: AsyncStorage,
    }
});

// // Add row-level security policy
// const setRowLevelSecurityPolicy = async () => {
//     try {
//       await supabase.rpc('create_row_level_security_policy');
//       console.log('Row-level security policy created successfully.');
//     } catch (error) {
//       console.error('Error creating row-level security policy:', error);
//     }
//   };
  
//   setRowLevelSecurityPolicy();