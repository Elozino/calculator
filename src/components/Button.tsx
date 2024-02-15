import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { useThemeContext } from '../context/ThemeContext';
import { colors } from '../styles/colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}


const Button = ({ title, onPress, isBlue, isGray }: ButtonProps) => {
  const theme = useThemeContext()
  return (
    <TouchableOpacity
      style={
        [{ backgroundColor: isBlue ? colors[theme].blue : isGray ? colors[theme].gray : colors[theme].pry_3 }, globalStyles.btn]
      }
      onPress={onPress} >
      <Text
        style={
          [globalStyles.smallText, {color: isBlue || isGray ? colors[theme].pry_3 : colors[theme].pry_4,}]
        }
      >
        {title}
      </Text>
    </TouchableOpacity >
  )
}

export default Button

const styles = StyleSheet.create({})