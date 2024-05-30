import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { SpacingProps } from './Box';
import { PropsWithChildren, useMemo } from 'react';
import useStyles, { fontSizes, spacingSizes } from '../hooks/useStyles';

type TextProps = {
  color?: string;
  size?: keyof typeof fontSizes;
  bold?: boolean;
} & SpacingProps &
  RNTextProps;

export default function Text(props: PropsWithChildren<TextProps>) {
  const { color, size = 'm', bold } = props;
  const { colors } = useStyles();

  const styles = useMemo(() => {
    return StyleSheet.create({
      style: {
        color: color || colors.text,
        fontSize: fontSizes[size] || fontSizes.m,
        fontWeight: bold ? 'bold' : undefined,
        margin: props.margin && spacingSizes[props.margin],
        marginBottom: props.marginBottom && spacingSizes[props.marginBottom],
        marginTop: props.marginTop && spacingSizes[props.marginTop],
        marginLeft: props.marginLeft && spacingSizes[props.marginLeft],
        marginRight: props.marginRight && spacingSizes[props.marginRight],

        padding: props.padding && spacingSizes[props.padding],
        paddingBottom: props.paddingBottom && spacingSizes[props.paddingBottom],
        paddingTop: props.paddingTop && spacingSizes[props.paddingTop],
        paddingLeft: props.paddingLeft && spacingSizes[props.paddingLeft],
        paddingRight: props.paddingRight && spacingSizes[props.paddingRight],
      },
    });
  }, [colors.isDark]);

  return (
    <RNText {...props} style={[styles.style, props.style]}>
      {props.children}
    </RNText>
  );
}
