import React from "react";
import { StyleSheet } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Divider, 
  List,
  ListItem, Icon,  Layout, MenuItem, OverflowMenu, 
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components"; 

 import { ThemeContext } from '../theme-context'; 


const BackIcon = (props) => <Icon {...props} name="arrow-back" />; 
const SettingsIcon = (props) => <Icon {...props} name="settings" />; 
//const EditIcon = (props) => (<Icon {...props} name='edit'/>);
//const MenuIcon = (props) => (<Icon {...props} name='more-vertical'/>);
const InfoIcon = (props) => (<Icon {...props} name='info'/>); 
const ThemaDark = (props) => (<Icon {...props} name='moon-outline'/>); 
const ThemaLight = (props) => (<Icon {...props} name='sun-outline'/>);
 


const data = new Array(7).fill({
  title: "Mensagem ",
  description: "Mensagem",
});

export const OptionScreen = ({ navigation }) => {

  const themeContext = React.useContext(ThemeContext);
  const [menuVisible, setMenuVisible] = React.useState(false); 
      const navigateBack = () => {
        navigation.goBack();
      };
      const navigateMessege = (index) => {
        navigation.navigate('Messege',{index});
      }; 
     
    
      const renderSettingsAction = ( ) => (
        <React.Fragment>  
        <Layout style={styles.content2}>
          <OverflowMenu 
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}> 
            <MenuItem accessoryLeft={themeContext.theme === 'light'?ThemaDark:ThemaLight}onPress={themeContext.toggleTheme} title='Tema'/>
            <MenuItem accessoryLeft={InfoIcon} title='Sobre'/>
          </OverflowMenu>
          </Layout>
        </React.Fragment>      
      );


      const toggleMenu = () => {
        setMenuVisible(!menuVisible); 
      };
    
      const renderMenuAction = () => (
        <TopNavigationAction icon={SettingsIcon} onPress={toggleMenu} />
      ); 

    
      const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}  /> 
      );

      const renderItemAccessory = (index) => ( 
        <Button size="tiny"  onPress={()=>navigateMessege(index)}   >Abrir Mensagem</Button>
      );

      const renderItemIcon = (props) => (
        <Icon {...props} name="message-square-outline" />
      );

  const dataa = {
  function :(n)=> {
    let agora = new Date();
     if(n ===0){
         agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()  ));
     }else if(n === 1){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+1  ));
    }else if(n === 2){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+2  ));
    }else if(n === 3){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+3  ));
    }else if(n === 4){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+4  ));
    }else if(n === 5){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+5  ));
    }else if(n === 6){
        agora =   new Date(new Date().setDate(new Date().getDate() - new Date().getDay()+6  ));
    }       
    let hoje = agora.toISOString().substring(0,10).split("-").reverse().join("/");
    return  hoje 
  },
  }
 

  const renderItem = ({ item, index }) =>(
    index == 0 ? (
      <ListItem
        title={`Domingo`}
        
        description={dataa.function(index)} 
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : index == 1 ? (
      <ListItem
        title={`Segunda-Feira`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : index == 2 ? (
      <ListItem
        title={`Terça-Feira`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : index == 3 ? (
      <ListItem
        title={`Quarta-Feira`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : index == 4 ? (
      <ListItem
        title={`Quinta-Feira`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : index == 5 ? (
      <ListItem
        title={`Sexta-Feira`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    ) : (
      <ListItem
        title={`Sábado`}
        description={dataa.function(index)}
        accessoryLeft={renderItemIcon}
        accessoryRight={()=>renderItemAccessory(index)}
      />
    )  
    )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Mensagem-check"
        accessoryLeft={renderBackAction}
        accessoryRight={renderSettingsAction} 
       />
      
      <Divider />
      <Layout
       level='3'
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <List style={styles.container} data={data} renderItem={renderItem} />
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
