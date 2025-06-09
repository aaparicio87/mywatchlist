import React from 'react'
import { Keyboard, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button } from '@rneui/themed';
import { KeyboardAvoidingView } from "react-native-keyboard-controller";


import { useLogin } from './hooks/useLogin';
import { loginStyles } from './styled'
import { useGlobalThemeContextContext } from '@/contexts/ThemeContext/ThemeContext';
import { InputTextControlled } from '@/components/InputTextControlled/InputTextControlled';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const { colors, colorScheme } = useGlobalThemeContextContext();
    const styles = loginStyles(colors)
    const {
        control,
        displayPassword,
        handleDisplayPassword,
        onLoginSubmit,
        errors,
        isSubmitting,
    } = useLogin()

    const hideKeyBoard = () => {
        Keyboard.dismiss()
    }

    return (
        <LinearGradient
            colors={colorScheme === 'dark' ? [colors.surface, colors.background] : [colors.primary, colors.secondary]}
            style={styles.container}
        >

            <TouchableWithoutFeedback onPress={hideKeyBoard}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <View style={[styles.content]}>
                        <InputTextControlled
                            placeholder='jdoe@mail.com'
                            errorStyle={styles.error}
                            errorMessage={errors.email?.message}
                            leftIcon={{ type: 'ionicon', name: 'mail-outline', color: colors.textSecondary, size: 20 }}
                            keyboardType='email-address'
                            returnKeyType='next'
                            renderErrorMessage={!!errors.email}
                            control={control}
                            name='email'
                            disabled={isSubmitting}
                        />

                        <InputTextControlled
                            placeholder="Password"
                            errorStyle={styles.error}
                            secureTextEntry={displayPassword}
                            leftIcon={{ type: 'feather', name: 'key', color: colors.textSecondary, size: 20 }}
                            rightIcon={{ type: 'feather', name: displayPassword ? 'eye-off' : 'eye', color: colors.textSecondary, onPress: handleDisplayPassword, size: 20 }}
                            returnKeyType='done'
                            control={control}
                            name='password'
                            errorMessage={errors.password?.message}
                            renderErrorMessage={!!errors.password}
                            disabled={isSubmitting}
                        />

                        <Button
                            title="Log in"
                            loading={isSubmitting}
                            loadingProps={{ size: 'small', color: 'white' }}
                            buttonStyle={styles.button}
                            titleStyle={styles.buttonText}
                            containerStyle={styles.buttonContainer}
                            onPress={onLoginSubmit}
                        />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </LinearGradient>
    )
}

export default LoginScreen