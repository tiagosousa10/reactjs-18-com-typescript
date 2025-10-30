import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    COLORS: {
        /* Application */
        primary: '#456882',
        primaryHover: '#234C6A',
        primaryBackgroundExtraLight: '#2b313a',
        background: '#222831',
        textColor400: '#D8DEE6',
        textColor500: '#F2F4F8',
        borderColor: '#2f3540',
        danger: '#D1493D',
        success: '#2B825C',
        warning: '#eba800',
        white: '#FFFFFF',

        /* Application Components */
        buttonBackground: '#456882',
        buttonColor: '#FFFFFF',
        buttonHover: '#234C6A',
        inputBackground: 'transparent',
        inputBackgroundHover: 'transparent',
        inputColor: '#D2C1B6',
        inputBorderColor: 'rgba(255, 255, 255, 0.30)',
        inputBorderColorFocus: '#456882',
        inputPlaceholderColor: '#D2C1B6',
        tableHeaderBackground: 'rgba(255, 255, 255, 0.06)',
        tableHeaderBorderColor: 'rgba(255, 255, 255, 0.12)',
        tableRowHover: 'rgba(255, 255, 255, 0.08)',

        /* Layout */
        sidebarBackground: '#234C6A',
        sidebarColor: '#D2C1B6',
        sidebarBackgroundHover: '#1B3C53',
        sidebarBorderColor: 'rgba(255, 255, 255, 0.12)',
        navbarBackground: '#234C6A',
        navbarColor: '#D2C1B6',
        navbarBackgroundHover: '#1B3C53',

        /* Pages - Auth */
        authCardTitleColor: '#D2C1B6',
        authCardSubTitleColor: '#D2C1B6',
        authErrorAlertBackground: '#961408ed',
        authErrorAlertColor: '#FFFFFF',
    },
    FONT_SIZES: {
        sm: '.9rem',
        md: '1rem',
        lg: '1.3rem',
        xl: '1.6rem',
        xxl: '2rem',
    }
}
