import React from "react";
import { StyleSheet } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  Divider,  Icon,  Layout,  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";  

 
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;  
 

export const MessegeScreen = ({route, navigation }) => {
 
  const [valor]= React.useState(route.params.index);

      const navigateBack = () => {
        navigation.goBack();
      }; 
  
      const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}  /> 
      );
 
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Publicidade"
        accessoryLeft={renderBackAction} 
       />
      
      <Divider />
      <Layout level='4'  style={{flex:1}}>
        <Text>{valor}</Text>
      </Layout>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "auto",
    height: "100%",
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
