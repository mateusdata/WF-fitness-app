import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <View style={{ ...defaulStyle, ...props.style }}>
                {props.children}
            </View>
        </Pressable>
    );
}

export default Card;


const defaulStyle = StyleSheet.create({
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    width: 90,
    height: 90
});
