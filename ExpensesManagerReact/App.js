
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/homeScreen';
import CreateExpenses from './screen/createExpenses';
import ExpensesList from "./screen/expensesList";
import ViewExpenses from './screen/viewExpenses';
import EditExpenses from './screen/editExpenses';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateExpenses" component={CreateExpenses} />
        <Stack.Screen name="ExpensesList" component={ExpensesList} />
        <Stack.Screen name="ViewExpenses" component={ViewExpenses} />
        <Stack.Screen name="EditExpenses" component={EditExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
