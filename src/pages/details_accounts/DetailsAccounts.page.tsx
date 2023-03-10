import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { globalStyle } from "../../theme/global.style";
import SimpleHeader from "../../components/atoms/header/SimpleHeader";
import { styles } from "./DetailsAccounts.style";
import { images } from "../../constant/images.contant";
import ListIcon1 from "../../components/molecules/listIcon/ListIcon1.molecules";
import LargeButton from "../../components/atoms/button/LargeButton";
import { List } from "./detailsAccountData/ListData";
import SquareBox from "../../components/atoms/squareBox/SquareBox.atom";
import ListIcon2 from "../../components/molecules/listIcon/ListIcon2.molecules";
import { responsiveHeight } from "../../helper/ResponsiveUI";

const DetailsAccounts = () => {
  return (
    <Fragment>
      <SimpleHeader back title={"Detail account"} />
      <View style={styles.heroSection}>
        <SquareBox icon={"wallet"} />
        <Text style={styles.title}>Paypal</Text>
        <Text style={styles.price}>$2400</Text>
      </View>
      <View style={[globalStyle.mainContainer, { gap: responsiveHeight(13) }]}>
        <View style={styles.dateListContainer}>
          <Text style={styles.dateText}>Today</Text>
          <View style={styles.listContainer}>
            <ListIcon2
              content={{
                title: "Wallet",
                icon: "wallet",
                route: "",
                theme: "YELLOW",
              }}
              credit={true}
            />
            <ListIcon2
              content={{
                title: "Wallet",
                icon: "wallet",
                route: "",
                theme: "VIOLET",
              }}
            />
            <ListIcon2
              content={{
                title: "Wallet",
                icon: "wallet",
                route: "",
                theme: "RED",
              }}
            />
          </View>
        </View>
        <View style={styles.dateListContainer}>
          <Text style={styles.dateText}>Yesterday</Text>
          <View style={styles.listContainer}>
            <ListIcon2
              content={{
                title: "Wallet",
                icon: "wallet",
                route: "",
                theme: "YELLOW",
              }}
              credit={true}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default DetailsAccounts;
