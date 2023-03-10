import { Image, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { styles } from "./DetailsTransaction.style";
import SimpleHeader from "../../components/atoms/header/SimpleHeader";
import LargeButton from "../../components/atoms/button/LargeButton";
import { images } from "../../constant/images.contant";
import { globalStyle } from "../../theme/global.style";

const DetailsTransaction = () => {
  return (
    <Fragment>
      <View style={styles.headerSection}>
        <SimpleHeader theme="light" back title="Detail Transaction" />
        <View style={styles.headerContentSection}>
          <Text style={styles.priceText}>$120</Text>
          <Text style={styles.detailsText}>Buy some grocery</Text>
          <Text style={styles.dateText}>Saturday 4 June 2021 16:20</Text>
        </View>
        <View style={styles.boxSection}>
          <View style={styles.contentSection}>
            <Text style={styles.boxKey}>Type</Text>
            <Text style={styles.boxValue}>Expense</Text>
          </View>
          <View style={styles.contentSection}>
            <Text style={styles.boxKey}>Category</Text>
            <Text style={styles.boxValue}>Shopping</Text>
          </View>
          <View style={styles.contentSection}>
            <Text style={styles.boxKey}>Wallet</Text>
            <Text style={styles.boxValue}>Wallet</Text>
          </View>
        </View>
      </View>
      <View style={[globalStyle.mainContainer]}>
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </View>
        <View style={styles.ImageSection}>
          <Text style={styles.descriptionTitle}>Attachment</Text>
          <View style={styles.imageWrapper}>
          <Image source={images.DETAIL_TRANSACTION.CAPTURE_IMAGE} resizeMode="cover" />

          </View>
        </View>
      </View>
      <View style={[styles.buttonWrapper]}>
        <LargeButton title="Detail Transaction" onPress={() => {}} />
      </View>
    </Fragment>
  );
};

export default DetailsTransaction;
