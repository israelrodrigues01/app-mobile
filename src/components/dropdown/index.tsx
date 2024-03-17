import { useState } from "react";
import { styles } from './style'; 
import { SafeAny } from "../../utils/safe-any";

import DropDownPicker from 'react-native-dropdown-picker';

interface Dropdown {
  placeholder: string,
}

export default function Dropdown(props: Dropdown) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);

  return (
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={props.placeholder}

      placeholderStyle={{ color: '#7F7B8E' }}
      arrowIconStyle={{ tintColor: '#7F7B8E'} as SafeAny }
    />
  )
}