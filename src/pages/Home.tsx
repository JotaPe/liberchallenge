/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import { client } from "./App";
import _ from "lodash";
import useAxios from "@use-hooks/axios";

export const Home: React.FC = ({ navigation: { navigate } }) => {
  const [value, onChangeText] = React.useState("");
  const [cars, setCar] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async function() {
      return await client.get("/marcas/59/modelos/5940/anos");
    };
  });
  React.useEffect(() => {
    const fetchData = async function() {
      try {
        const firstRequest = await client.get("/marcas/59/modelos/5940/anos");
        if (firstRequest.status == 200) {
          return firstRequest.data.forEach(async codigo => {
            await client
              .get(`/marcas/59/modelos/5940/anos/${codigo.codigo}`)
              .then(data => setCar([...cars, data.data]))
              .then(data => console.log(data.data))
              .catch(error => console.log(error));
          });
          /* const dataSecondRequest = _.forEach(
            firstRequest.data,
            async codigo => {
              const data = await client.get(
                
              );
              setCar([...cars, data.data]);
              console.log(cars);
            }
          ); */
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(cars);
  }, []);

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
      <TouchableHighlight
        onPress={() => navigate("Car")}
        underlayColor="rgba(255, 255, 255, 0)"
      >
        <FlatList
          data={cars}
          keyExtractor={cars.CodigoFipe}
          renderItem={({ item }) => (
            <CarListCard
              price={item.Valor}
              trademark={item.Marca}
              model={item.Modelo.substr(0, item.Modelo.indexOf(' '))}
              shiftType="Automatico"
            />
          )}
        />
      </TouchableHighlight>
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
