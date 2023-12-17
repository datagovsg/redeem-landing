type ThemeColorScheme =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'blue'
  | 'green'
  | 'grey'
  | 'yellow'
  | 'red'
  | 'divider'
  | 'content'

export const colors: { [key in ThemeColorScheme]: Record<string, string> } = {
  primary: {
    50: '#F7F9FE',
    100: '#F6F7FA',
    200: '#DFE1F2',
    300: '#BCBFE3',
    400: '#868AC3',
    500: '#505798',
    600: '#3B4183',
    700: '#2F3476',
    800: '#222757',
    900: '#1B1E44',
  },
  // TODO: Design pallet is off for this part here
  secondary: {
    100: '#F6F7FC',
    500: '#445072',
  },
  success: {
    100: '#F0F8F3',
    200: '#E2F1E8',
    300: '#ADD8BE',
    400: '#77BF93',
    500: '#41A669',
    600: '#0C8C3F',
    700: '#097333',
    800: '#075C29',
    900: '#05431#',
  },
  danger: {
    100: '#FFF8F8',
    200: '#F8EAEA',
    300: '#E8C1C1',
    400: '#D88888',
    500: '#C05050',
    600: '#AD4848',
    700: '#9A4040',
    800: '#733030',
    900: '#602828',
  },
  warning: {
    100: '#FDF7F0',
    200: '#FCEFE4',
    300: '#F7D2B1',
    400: '#F1B57E',
    500: '#EC984B',
    600: '#E67C18',
    700: '#BB600B',
    800: '#97510F',
    900: '#6E3B0B',
  },
  neutral: {
    100: '#FBFCFD',
    200: '#F0F0F1',
    300: '#E1E2E4',
    400: '#C9CCCF',
    500: '#ABADB2',
    600: '#999B9F',
    700: '#636467',
    800: '#48494B',
    900: '#242425',
  },
  blue: {
    100: '#E7EFFC',
  },
  green: {
    100: '#E2EEED',
  },
  grey: {
    100: '#EDEDED',
  },
  yellow: {
    50: '#FFFAE1',
  },
  red: {
    100: '#FBE9E9',
  },
  divider: {
    medium: '#E9E9E9',
  },
  content: {
    default: '#454953',
    strong: '#2C2E34',
    medium: '#666C7A',
  },
}
