import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SigIn from '../../pages/login/login';
import FirstAccess from '../../pages/login/firstAccess';
import RecoverPassword from '../../pages/login/recoverPassword';

const AppStack = createStackNavigator();
const PublicRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#00635B"
      }
    }}>
    <AppStack.Screen name="Login" component={SigIn} options={{
      headerTintColor:"white",
      
    }}/>
    <AppStack.Screen name="Primeiro Acesso" component={FirstAccess} options={{
      headerTintColor:"white"
    }}/>
    <AppStack.Screen name="Recuperar Senha" component={RecoverPassword} options={{
      headerTintColor:"white"
    }}/>
    </AppStack.Navigator>
  )
}
export default PublicRoutes