import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

export const Home = (/* , { navigation: { navigate } } */) => {
  
  
  React.useEffect(() => {
    const carYear = getCarYear();
    console.log(carYear);
  });

  return (
    <View style={styles.homePadding}>
      <View style={styles.headerPadding}>
        <Text style={styles.headerText}>Carros</Text>
      </View>
      <View style={styles.searchCard}>
        <Icon style={styles.searchIcon} size={20} name="search" />
        <TextInput
          style={styles.inputCars}
          onChange={updateQuery}
          placeholder="Ache seu carro..."
          placeholderTextColor="black"
          value={query}
        />
      </View>
      <FlatList
        data={data.results}
        keyExtractor={cars.CodigoFipe}
        renderItem={({ item }) => (
          <CarListCard
            price={item.Valor}
            trademark={item.Marca}
            model={item.Modelo.substr(0, item.Modelo.indexOf(" "))}
            shiftType="Automatico"
          />
        )}
      />
    </View>
  );
};

const CarListCard = ({ trademark, model, shiftType, price }) => {
  return (
    <View style={styles.carList}>
      <Image
        source={require("../assets/img/car-cloud.png")}
        style={{ resizeMode: "contain", width: 150, marginLeft: 26 }}
      />
      <View style={styles.carListAbout}>
        <Text style={styles.carListAboutHeader}>{trademark}</Text>
        <Text style={styles.carListAboutModel}>{model}</Text>
        <View style={styles.carListAboutBadge}>
          <Icon name="settings" color="rgba(37, 51, 141, 1)" size={15} />
          <Text
            style={[
              styles.carListAboutHeader,
              { fontSize: 10, marginTop: 0, color: "rgba(37, 51, 141, 1)" }
            ]}
          >
            {shiftType}
          </Text>
        </View>
        <Text style={styles.carListAboutHeader}>Preços</Text>
        <Text style={styles.carListAboutPrice}>
          <Text style={{ fontSize: 12 }}>R$: </Text>
          <Text style={{ fontSize: 16 }}>{price}</Text>
        </Text>
      </View>
    </View>
  );
};

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
    alignSelf: "flex-start"
  },
  searchCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center"
  },
  searchIcon: {
    paddingLeft: 14
  },
  carList: {
    marginTop: 29,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row"
    //flex: 1,
  },
  carListAbout: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20
  },
  carListAboutHeader: {
    marginTop: 20,
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
    color: "rgba(8, 13, 45, 0.30)"
  },
  carListAboutModel: {
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    fontSize: 16
  },
  carListAboutPrice: {
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    fontSize: 20
  },
  carListAboutBadge: {
    marginTop: 10,
    paddingVertical: 3,
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: "rgba(235, 238, 251, 1)",
    justifyContent: "space-around",
    alignItems: "center",
    width: 110
  }
});
