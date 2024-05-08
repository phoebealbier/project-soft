import { View, Text } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10,margin :10}}>
      <Link  href={'/(users)'} asChild>
        <Button  text="User" />

      </Link>
      <Link href={'/(admin)'} asChild>
        <Button   text="Admin" />
      </Link>
      <Link href={'/sign-in'}style={{padding:10,margin :10}} asChild>
  <Button  text="Sign in" />
</Link>

    </View>
  );
};

export default index;