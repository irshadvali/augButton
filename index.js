import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
const CustomButton = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue', // Customize the button's background color
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white', // Customize the text color
      fontSize: 16,
    },
  });
  
  export default CustomButton;