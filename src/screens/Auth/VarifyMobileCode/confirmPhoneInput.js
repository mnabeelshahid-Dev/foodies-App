import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
const styles = StyleSheet.create({
  root: {flex: 1},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: 20,
    height: 20,
    borderRadius:20,
    lineHeight: 18,
    fontSize: 10,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    justifyContent:'space-between',

  },
  focusCell: {
    borderColor: '#000',
  },
});
 
const CELL_COUNT = 4;
 
const ConfirmPhoneInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        secureTextEntry={true}
        // textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
 
export default ConfirmPhoneInput;