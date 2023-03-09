import { Image, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../theme/global.style";
import { styles } from "./Profile.style";
import { responsiveWidth } from "../../helper/ResponsiveUI";
import { images } from "../../constant/images.contant";
import UpdateIcon from "react-native-vector-icons/Feather";
import { styleConst } from "../../theme/root.style";
import { List } from "./profileData/ListData";
import ListIcon1 from "../../components/molecules/listIcon/ListIcon1.molecules";

const Profile = () => {
  return (
    <View style={globalStyle.mainContainer}>
      <View style={styles.headerSection}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={images.ADD_ACCOUNT.BANK_LOGOS.SBI}
            style={{
              height: responsiveWidth(70),
              width: responsiveWidth(70),
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
            size={responsiveWidth(25)}
            color={styleConst.COLOR.DARK.DARK_25}
          />
        </View>
      </View>
      <View style={styles.bodyList}>
        {
          List.map((item,index)=>(
            <ListIcon1 key={index} content={item} bottomBorder={List.length-1 <= index ? false : true} />
          ))
        }
      </View>
    </View>
  );
};

export default Profile;
