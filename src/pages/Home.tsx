import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from 'react-navigation-hooks'

export const Home: React.StatelessComponent = () => {
    const [value, onChangeText] = React.useState('')
    const { navigate } = useNavigation()

    return (
        <View style={styles.homePadding}>
            <View style={styles.headerPadding}>
                <Text style={styles.headerText}>Carros</Text>
            </View>
            <View style={styles.searchCard}>
                <Icon style={styles.searchIcon} size={20} name="search" />
                <TextInput
                    style={styles.inputCars}
                    onChange={text => onChangeText(text)}
                    placeholder="Ache seu carro..."
                    placeholderTextColor="black"
                    value={value}
                />
            </View>
            <Button
                title="test please remove me"
                onPress={() => { navigate('Car')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    homePadding: {
        paddingTop: 40,
        paddingHorizontal: 40,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#003CFF1A"
    },
    headerText: {
        fontSize: 33,
        fontWeight: "bold",
        fontFamily: "Product-Sans"
    },
    headerPadding: {
        flexDirection: "row",
        paddingBottom: 40
    },
    inputCars: {
        fontFamily: "Product-Sans",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 16,
        alignSelf: "flex-start",
    },
    searchCard: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    searchIcon: {
        paddingLeft: 14
    }
})