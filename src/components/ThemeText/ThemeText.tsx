
import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { Text, type TextProps } from 'react-native'

interface IProps extends TextProps {
    variant?: 'h1' | 'h2'
}

export const ThemeText = ({ children, variant = 'h1', ...rest }: IProps) => {

    const { styledGlobal, colors } = useGlobalStyles()

    return (
        <Text
            style={[
                { color: colors.white },
                variant === 'h1' && styledGlobal.mainResult,
                variant === 'h2' && styledGlobal.subresult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            {children}
        </Text>
    )
}
