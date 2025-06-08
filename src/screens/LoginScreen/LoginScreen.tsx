import React from 'react'
import { View } from 'react-native'
import { Switch } from '@rneui/base'
import { useGlobalThemeContextContext } from '@/contexts/ThemeContext/ThemeContext'
import { useGlobalStyles } from '@/hooks/useGlobalStyled'

const LoginScreen = () => {
    const { toggleTheme } = useGlobalThemeContextContext();
    const styledGlobal = useGlobalStyles();
    const [open, setOpen] = React.useState(false);

    const toggleSwitch = () => {
        toggleTheme();
        setOpen((prevState) => !prevState);
    };

    return (
        <View style={[styledGlobal.centerConatiner]}>
            <Switch value={open} onValueChange={toggleSwitch} />
        </View>
    )
}

export default LoginScreen