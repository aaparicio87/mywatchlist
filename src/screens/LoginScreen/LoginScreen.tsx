import {
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import { Button } from '@rneui/themed'
import { KeyboardAvoidingView } from "react-native-keyboard-controller"

import { useGlobalStyles } from '@hooks/useGlobalStyled'
import { Logo } from '@svg/Logo'
import { InputTextControlled, ThemeText } from '@/components'

import { useLogin } from './hooks/useLogin'
import { loginStyles } from './styled'


export const LoginScreen = () => {
    const { colors } = useGlobalStyles()
    const styles = loginStyles(colors)

    const {
        control,
        displayPassword,
        handleDisplayPassword,
        onLoginSubmit,
        errors,
        isLoading,
    } = useLogin()

    const hideKeyBoard = () => {
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={hideKeyBoard}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.title}>
                    <Logo />
                    <ThemeText variant='h2'>MyWatchlist</ThemeText>
                </View>

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
                        disabled={isLoading}
                        autoCapitalize='none'
                        testID='emailLogin'
                        autoCorrect={false}
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
                        disabled={isLoading}
                        autoCapitalize='none'
                        testID='passwordLogin'
                        autoCorrect={false}
                    />

                    <Button
                        title="Log in"
                        loading={isLoading}
                        loadingProps={{ size: 'small', color: colors.white }}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        containerStyle={styles.buttonContainer}
                        onPress={onLoginSubmit}
                    />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}