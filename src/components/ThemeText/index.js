import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

const ThemeText = ({text, style, numberOfLines}) => {
  const {theme} = useSelector(state => state.root.core);
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[style, {color: theme === 'dark' ? 'white' : '#212121'}]}>
      {text}
    </Text>
  );
};

export default ThemeText;
