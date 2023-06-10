import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Home from '../pages/Home/Home.js'

const Stack = createNativeStackNavigator ();

function StackRoutes() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Inclusion" component={Inclusion}/>
      <Stack.Screen name="Navegacao" component={Navegacao}/>
      <Stack.Screen name="Options" component={Options}/>
      <Stack.Screen name="Sections" component={Sections}/>
    </Stack.Navigator>
  )
}

export default StackRoutes;