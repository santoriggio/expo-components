import { StyleSheet, View, ColorValue, ViewProps } from 'react-native';
import { Styles, spacingSizes } from '../hooks/useStyles';
import { PropsWithChildren, useMemo } from 'react';

type BoxProps = {
  backgroundColor?: ColorValue;
  horizontal?: boolean;
} & SpacingProps &
  ViewProps;

export type SpacingProps = {
  //Margin
  margin?: keyof Styles['spacing'];
  marginBottom?: keyof Styles['spacing'];
  marginTop?: keyof Styles['spacing'];
  marginLeft?: keyof Styles['spacing'];
  marginRight?: keyof Styles['spacing'];
  //Spacing

  padding?: keyof Styles['spacing'];
  paddingBottom?: keyof Styles['spacing'];
  paddingTop?: keyof Styles['spacing'];
  paddingLeft?: keyof Styles['spacing'];
  paddingRight?: keyof Styles['spacing'];
};

export default function Box(props: PropsWithChildren<BoxProps>) {
  const { backgroundColor, horizontal } = props;
  // const { colors } = useStyles();
  const styles = useMemo(() => {
    const bg = backgroundColor || undefined;
    return StyleSheet.create({
      container: {
        flexDirection: horizontal ? 'row' : 'column',
        backgroundColor: bg,
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
  }, [backgroundColor]);
  return (
    <View {...props} style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
}
