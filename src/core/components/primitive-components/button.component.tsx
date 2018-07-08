import styled from 'styled-components/native';
import {
  Button as ElementsButton,
  ButtonProps as ElementsButtonProps,
} from 'react-native-elements';

import { StyleSpaceProps, getThemeColor } from 'src/design-system';

interface ButtonProps extends ElementsButtonProps, StyleSpaceProps {
  w?: number;
  bg?: string;
}

export const Button = styled(ElementsButton).attrs<ButtonProps>({
  buttonStyle: (props: ButtonProps) => ({
    backgroundColor: getThemeColor(props, 'bg', 'red.1'),
    width: props.w || 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    margin: props.m,
    marginTop: props.mt || props.my,
    marginBottom: props.mb || props.my,
    marginLeft: props.ml || props.mx,
    marginRight: props.mr || props.mx,
    padding: props.p,
    paddingTop: props.pt || props.py,
    paddingBottom: props.pb || props.py,
    paddingLeft: props.pl || props.px,
    paddingRight: props.pr || props.px,
  }),
})``;
