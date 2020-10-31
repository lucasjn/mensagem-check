import React from 'react';  
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Layout, TopNavigation, TopNavigationAction,Icon } from '@ui-kitten/components';   
import { ThemeContext } from '../theme-context';

 
const ThemaDark = (props) => (<Icon {...props} name='moon-outline'/>); 
const ThemaLight = (props) => (<Icon {...props} name='sun-outline'/>);

export const HomeScreen = ({ navigation }) => {
 
  const themeContext = React.useContext(ThemeContext);

  const navigateDetails = () => {
    navigation.navigate('Option');
  };
  const renderSettingsAction = ( ) => (
    <TopNavigationAction icon={themeContext.theme === 'light'?ThemaDark:ThemaLight} onPress={themeContext.toggleTheme} /> 
            
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Layout> 
    <TopNavigation 
        accessoryRight={renderSettingsAction} 
       />
    </Layout>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={styles.container}   onPress={navigateDetails}>Iniciar</Button> 
      </Layout>
    </SafeAreaView>
  );
};
 

const styles = StyleSheet.create({
  container: { 
    marginVertical: 1 , 
    height: 100,
    width: 100,
    borderRadius: 100,  
    borderStyle: 'dotted', 
    borderWidth: 5, 
    
  },
});