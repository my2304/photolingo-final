# PhotoLingo 

PhotoLingo is an innovative mobile application that aims to make English vocabulary learning interactive and enjoyable. By leveraging image recognition technology, the app allows users to capture images and extract words from the pictures, providing definitions, translations, and additional language learning resources.

## Motivation
The motivation behind developing PhotoLingo stems from the recognition that traditional methods of vocabulary learning can often be monotonous and detached from real-world contexts. We understand that visual stimuli play a crucial role in memory retention and language acquisition. By leveraging image recognition technology, we aim to bridge the gap between theoretical vocabulary knowledge and practical application, making the learning process more immersive and enjoyable.

## Aim
Our aim is to revolutionise English vocabulary learning by providing users with a seamless and interactive experience. Our app will empower users to easily capture images of objects, signs, or text in their surroundings and extract relevant words from them. By providing definitions and audio, we aim to enhance users' understanding and retention of new words. 

Ultimately, our goal is to make vocabulary acquisition an engaging and effortless process that can be integrated into users' daily lives.

## User Stories
As a user, I would like to easily be able to take pictures of certain items and save extracted words so that I can revisit them in the future.

I would also like to have definitions and usages of the word conveniently stored in the app itself for me to revisit them later.

## Features
### Camera Functionality
Use the built-in camera feature to capture images of objects, signs, or text in your surroundings.

### Image Recognition
The app utilizes image recognition technology to identify the captured content.

### Word Extraction
Extracts words or text from the images and provides corresponding definitions or translations.

### Gallery
Explore a collection of images associated with specific words or concepts for enhanced vocabulary learning.

### Vocabulary Management
View and save extracted words for later review.

### Additional Information
Access synonyms, example sentences, and pronunciation of the extracted words.

### Tech Stack
React Native, Firebase, Expo, React Navigation, TensorFlow

## Usage
On the home screen, explore different sections and features of the app.
Use the camera feature to capture images and extract words.
Save extracted words for later review.
Access additional information and resources for each word.
Browse the image gallery for visual vocabulary learning.

## Testing
We make use of
- User testing
- Regression testing: the interface was tested after every code change.

## Test Cases

| # | Description                                                                              | Steps                                                            | Expected Result                                              | Status |
|---|------------------------------------------------------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|--------|
| 1 | Login page does not accept logins with non-registered accounts                           | Enter unique email and password                                  | Unsuccessful login                                           | Pass   |
| 2 | Login page allows user to register new account                                           | Enter unique email and password and click “Register”             | Successful account registration                              | Pass   |
| 3 | Login page allows user to log in to existing account                                     | Enter previous email and password [see Test 1] and click “Login” | Successful login                                             | Pass   |
| 4 | Input images are successfully classified                                                 | Upload test input image                                          | Classified word is displayed                                 | Pass   |
| 5 | Hitting the “Store” button stores the current image & associated word to in-app gallery  | Click on “Store” button after Test 3                             | Image is stored to Gallery (press on Gallery button to view) | Pass   |
| 6 | Clicking on image in Gallery opens up the associated word and supplementary information. | Click on Gallery, then click on any image.                       | Classified word and supplementary information is displayed.  | Pass   |

## Conclusion
PhotoLingo provides an innovative and interactive approach to English vocabulary learning. By combining image recognition technology, word extraction, and additional language learning resources, the app aims to make the process enjoyable and engaging for users of all proficiency levels.
