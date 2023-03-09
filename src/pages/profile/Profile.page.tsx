import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../theme/global.style";
import { styles } from "./Profile.style";
import { responsiveHeight, responsiveWidth } from "../../helper/ResponsiveUI";
import { images } from "../../constant/images.contant";
import UpdateIcon from "react-native-vector-icons/Feather";
import { styleConst } from "../../theme/root.style";
import ListIcon from "../../components/molecules/listIcon/ListIcon.molecules";

const Profile = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <View style={styles.headerSection}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.subTitle}>Username</Text>
          <Text style={styles.Title}>Iriana Saliha</Text>
        </View>
        <View style={styles.editSection}>
          <UpdateIcon
            name="edit-2"
            size={responsiveWidth(30)}
            color={styleConst.COLOR.DARK.DARK_25}
          />
        </View>
      </View>
      <View style={styles.bodyList}>
        <ListIcon />
        <ListIcon />
        <ListIcon />
        <ListIcon />
      </View>
    </View>
  );
};

export default Profile;
