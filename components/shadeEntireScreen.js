import { View, StyleSheet } from 'react-native';

const ScreenShade = (props) => {
    return (
        <View style={{...defaultStyle, ...props.style}}>
            {props.children}
        </View>
    );
};

export default ScreenShade;

const defaultStyle = StyleSheet.create({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000090"
})