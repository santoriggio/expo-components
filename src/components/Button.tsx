import { StyleSheet, TouchableOpacity } from 'react-native';
import useStyles, { spacingSizes } from '../hooks/useStyles';
import Box, { SpacingProps } from './Box';
import { useMemo } from 'react';
import Text from './Text';

type ButtonProps = {
  title: string;
  onPress: (button: ButtonProps) => void;
  //optional
  icon?: string;
  role?: 'primary' | 'danger' | 'info' | 'warning' | 'success';
  type?: 'plain' | 'filled' | 'gray' | 'tinted';
  active?: boolean;
  loading?: boolean;
} & SpacingProps;

export default function Button(props: ButtonProps) {
  const { title, role = 'primary', type = 'filled' } = props;
  const { radius, colors } = useStyles();
  const tint = colors[role] || colors.primary;

  const onPress = () => {
    if (props.loading || props.active === false) return;

    if (typeof props.onPress === 'function') {
      return props.onPress(props);
    }
  };

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        borderRadius: radius,
        overflow: 'hidden',
        padding: spacingSizes.m,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: props.margin && spacingSizes[props.margin],
        marginBottom: props.marginBottom && spacingSizes[props.marginBottom],
        marginTop: props.marginTop && spacingSizes[props.marginTop],
        marginLeft: props.marginLeft && spacingSizes[props.marginLeft],
        marginRight: props.marginRight && spacingSizes[props.marginRight],
      },
      bg: {
        ...StyleSheet.absoluteFillObject,
        opacity: type === 'filled' ? 1 : 0.25,
      },
    });
  }, [tint]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
    >
      {type !== 'plain' && <Box backgroundColor={tint} style={styles.bg} />}
      <Text bold size="l" color="#fff">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
