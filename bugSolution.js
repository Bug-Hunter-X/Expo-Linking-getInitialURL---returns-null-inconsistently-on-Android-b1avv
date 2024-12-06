// bugSolution.js
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getDeepLink = async () => {
      let url = await Linking.getInitialURL();
      if (url == null) {
        //Try again
        setTimeout( async () => {
          url = await Linking.getInitialURL();
          setInitialUrl(url);
        }, 2000)
      } else {
        setInitialUrl(url);
      }
    };
    getDeepLink();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Process the initial URL
      console.log('Initial URL:', initialUrl);
      // Handle deep link logic
      // ...
    }
  }, [initialUrl]);

  return (
    <View>
      {/* Your app content here */}
    </View>
  );
};
export default App;