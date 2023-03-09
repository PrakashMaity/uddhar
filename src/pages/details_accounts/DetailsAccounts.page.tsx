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

const DetailsAccounts = () => {
  return (
    <Fragment>
      <SimpleHeader back title={"Account"} />
      <View style={styles.heroSection}>
        <SquareBox icon={"wallet"} />
        <Text style={styles.title}>Paypal</Text>
        <Text style={styles.price}>$2400</Text>
      </View>
      <View style={globalStyle.mainContainer}>
        <Text style={styles.dateText}>Today</Text>
        <View style={styles.listContainer}>
          <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "normal",
            }}
          />
           <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "normal",
            }}
          />
           <ListIcon2
            content={{
              title: "Wallet",
              icon: "wallet",
              route: "",
              theme: "normal",
            }}
          />
        </View>
        {/* <View style={styles.listSection}>
        {
          List.map((item,index)=>(
            <ListIcon1 key={index} content={item} bottomBorder={List.length-1 <= index ? false : true} />
          ))
        }
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="+ Add new wallet" onPress={() => {}} />
        </View> */}
      </View>
    </Fragment>
  );
};

export default DetailsAccounts;
