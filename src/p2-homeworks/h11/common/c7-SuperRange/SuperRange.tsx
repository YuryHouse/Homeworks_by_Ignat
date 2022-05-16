import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, createTheme, Slider, ThemeProvider} from '@mui/material';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperRangePropsType = DefaultInputPropsType & {
    onChangeRange: (newValue: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {

        value,
        onChangeRange,
    }
) => {
    const onChangeHandler = (event: Event, value: number | number[]) => {
        if (typeof value === 'number') {
            onChangeRange(value)
        }
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#a2e0fd',
            },
            secondary: {
                main: '#385d8c',
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box width={150} marginLeft={2} marginRight={2} display={'inline-flex'}>

                    <Slider
                        value={value}
                        onChange={onChangeHandler}
                        valueLabelDisplay="auto"
                        color={'primary'}
                    />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default SuperRange
