import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Friends extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
                <Button
                    title="Split Bill"
                    onPress={() =>
                        this.props.navigation.navigate('BillPrompt')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3e52',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {

    }
});