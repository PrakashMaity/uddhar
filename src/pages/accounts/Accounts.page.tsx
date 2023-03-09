import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { globalStyle } from "../../theme/global.style";
import SimpleHeader from "../../components/atoms/header/SimpleHeader";
import { styles } from "./Account.style";
import { images } from "../../constant/images.contant";
import ListIcon1 from "../../components/molecules/listIcon/ListIcon1.molecules";
import LargeButton from "../../components/atoms/button/LargeButton";
import { List } from "./accountData/ListData";

const Accounts = () => {
  return (
    <Fragment>
      <SimpleHeader back title={"Account"} />
      <ImageBackground
        source={images.ACCOUNTS.HERO_BANNER}
        resizeMode="cover"
        style={styles.heroSection}
      >
        <Text style={styles.title}>Account Balance</Text>
        <Text style={styles.price}>$9400</Text>
      </ImageBackground>
      <View style={globalStyle.mainContainer}>
        <View style={styles.listSection}>
        {
          List.map((item,index)=>(
            <ListIcon1 key={index} content={item} bottomBorder={List.length-1 <= index ? false : true} />
          ))
        }
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="+ Add new wallet" onPress={() => {}} />
        </View>
      </View>
    </Fragment>
  );
};

export default Accounts;
