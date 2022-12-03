import React from 'react';
import { Text, Button } from 'react-native';

import { Context } from '../database_handler/context';


export function Test() {
    //Access state and dispatch data
    const [state, dispatch] = React.useContext(Context);

  
    return (
        <>
        {
            state.tables.classes.map((item) =>{
                return <Text key={item.id}>{item.type}</Text>
            })
        }
        </>
    );
  }