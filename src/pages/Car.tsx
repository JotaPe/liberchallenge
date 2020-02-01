import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

export const Car: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePadding}>
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={1}
        underlayColor="rgba(255, 255, 255, 0.5)"
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableHighlight>
      <Text style={styles.headerText}>Detalhes</Text>
      <CarCard price="100.000,00" />
    </View>
  );
};

const CarCard = (props) => {
  return (
    <View style={styles.carCard}>
      <Image
        source={require("../assets/img/car-cloud.png")}
        style={styles.carImage}
      />
      <View style={styles.carHeader}>
        <Text style={styles.carHeaderText}>Marca - Modelo (Ano)</Text>
        <Text style={styles.carSecondaryText}>
          <Text style={{ fontSize: 14 }}>R$</Text> {props.price}*
        </Text>
      </View>
      <View style={styles.carAbout}>
        <View style={styles.carIconRow}>
          <View style={styles.carAboutIcons}>
            <Image source={require("../assets/img/starter.png")} />
          </View>
          <View style={styles.carAboutIcons}>
            <Image source={require("../assets/img/cilinder.png")} />
          </View>
          <View style={styles.carAboutIcons}>
            <Image source={require("../assets/img/gauge.png")} />
          </View>
        </View>
        <View style={styles.carTextRow}>
          <Text style={[styles.carTextRowStyle, { fontSize: 10 }]}>
            GASOLINA
          </Text>
          <Text
            style={[
              styles.carTextRowStyle,
              { paddingRight: 17, paddingLeft: 50 }
            ]}
          >
            POTÊNCIA
          </Text>
          <Text style={[styles.carTextRowStyle, { paddingRight: 10 }]}>
            CILINDRADAS
          </Text>
        </View>
        <View style={styles.carTextRow}>
          <Text style={[styles.carAboutTextRowStyle]}>GASOLINA</Text>
          <Text style={[styles.carAboutTextRowStyle, { paddingLeft: 5 }]}>
            1000 cv
          </Text>
          <Text style={[styles.carAboutTextRowStyle, { paddingRight: 45 }]}>
            5000
          </Text>
        </View>
        <View style={styles.carFooter}>
          <Text style={styles.carFooterText}>Código FIPE: 56712-1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: "Product-Sans",
    marginTop: 32
  },
  homePadding: {
    paddingTop: 40,
    paddingHorizontal: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#003CFF1A"
  },
  carCard: {
    marginTop: 33,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "rgba(0, 60, 255, 0.1)",
    shadowOffset: {
      width: 9,
      height: 10
    },
    shadowOpacity: 0.3,
    shadowRadius: 30.0,
    elevation: 24,
    height: 525
    //flex: 1,
  },
  carImage: {
    resizeMode: "cover",
    alignSelf: "center"
  },
  carHeader: {
    marginTop: 11,
    paddingLeft: 20
  },
  carHeaderText: {
    color: "rgba(8, 13, 45, 0.70)",
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    opacity: 70
  },
  carSecondaryText: {
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    fontSize: 24
  },
  carAbout: {
    marginTop: 32,
    flexDirection: "column",
    backgroundColor: "white"
  },
  carIconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  carTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15
  },
  carTextRowStyle: {
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    color: "rgba(8, 13, 45, 0.5)",
    fontSize: 12
  },
  carAboutTextRowStyle: {
    fontFamily: "Product-Sans",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 14
  },
  carAboutIcons: {
    borderRadius: 20,
    backgroundColor: "rgba(49, 69, 195, 0.04)",
    height: 90,
    width: 90,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  carFooter: {
    flexDirection: "column",
    marginTop: 33,
    marginLeft: 20,
    marginBottom: 11
  },
  carFooterText: {
    fontFamily: "Product-Sans",
    textAlign: "left"
  }
});
