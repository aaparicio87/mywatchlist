import { Input, InputProps as RNEInputProps } from '@rneui/themed';
import React from 'react';
import {
    Control,
    FieldValues,
    Path,
    PathValue,
    useController
} from 'react-hook-form';


interface InputProps<T extends FieldValues> extends RNEInputProps {
    control: Control<T>;
    name: Path<T>;
}

export const InputTextControlled = <T extends FieldValues>(props: InputProps<T>) => {

    const { control, name, ...rest } = props
    const { field } = useController<T>({ control, defaultValue: '' as PathValue<T, Path<T>>, name })

    return (
        <Input
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            {...rest}
        />
    )
}
