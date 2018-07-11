import styled from 'styled-components/native';
import {
  Icon as ElementsIcon,
  IconProps as ElementsIconProps,
} from 'react-native-elements';
import { getThemeColor } from '../../../../design-system';

interface IconProps extends ElementsIconProps {
  bg?: string;
}

export const Icon = styled(ElementsIcon).attrs<IconProps>({
  color: (props: IconProps) => getThemeColor(props, 'bg', 'red.1'),
})``;

Icon.displayName = 'Icon';
