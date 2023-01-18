import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button } from 'native-base'

const HomeSrc = ({ navigation }) => {
    return (
        <Box>
            <Text>Home</Text>
            <Button accessibilityLabel='navigate_to_Login' onPress={() => navigation.navigate('LoginSrc')} >Login</Button>
            <Button accessibilityLabel='navigate_to_Form' onPress={() => navigation.navigate('FormSrc')}>Form</Button>
        </Box>
    )
}
export default HomeSrc;