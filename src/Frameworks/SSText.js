import * as React from 'react';
import { Text } from 'react-native';

const SSText = (props) => {
  const fontSize = props.h1
    ? global.h1Size
    : props.h2
    ? global.h2Size
    : props.h3
    ? global.h3Size
    : props.h4
    ? global.h4Size
    : props.h5
    ? global.h5Size
    : props.caption1
    ? global.caption1
    : props.caption2
    ? global.caption2
    : 10;
  const color = props.error
    ? 'red'
    : props.primary
    ? global.PrimaryColor
    : props.caption2 || props.caption1
    ? global.textColorLight
    : global.textColorDark;
  const bold = props.bold ? 'bold' : 'normal';
  const strikeThrough = props.strikeThrough ? 'line-through' : 'none';
  return (
    <Text
      style={{
        fontSize: fontSize,
        color: color,
        fontWeight: bold,
        textDecorationLine: strikeThrough,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

export default SSText;
