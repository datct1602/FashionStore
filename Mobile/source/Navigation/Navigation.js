import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import  UserNavigation  from '../user/UserNavigation'
import UserContext from '../user/UserContext'
import ProductNavigation from '../product/ProductNavigation'

export default function Navigation(props) {

  const { isLogin } = useContext(UserContext); 

  return (
    <NavigationContainer>
        
          {
            isLogin == true ? 
            <ProductNavigation/> : <UserNavigation/>
          }
        
    </NavigationContainer>
  )
}
