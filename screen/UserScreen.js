import { View, Text, Button } from 'react-native';

function UserScreen() {
  
//   function openDrawerHandler() {
//     navigation.openDrawer();
//   }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Screen</Text>
      {/* <Button title="Click Me" onPress={openDrawerHandler} /> */}
    </View>
  );
}

export default UserScreen;