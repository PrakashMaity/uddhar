import { Image, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { styles } from "./CreateBudget.style";
import { styleConst } from "../../../theme/root.style";
import SimpleHeader from "../../../components/atoms/header/SimpleHeader";
import LargeButton from "../../../components/atoms/button/LargeButton";
import AntDesign from "react-native-vector-icons/AntDesign";
const CreateBudget = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{ flex: 1, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100 }}
    >
      <SimpleHeader theme="light" back title={"Create Budget"} />
      <View style={styles.balanceSection}>
        <Text style={styles.subTitle}>How much do yo want to spend?</Text>
        <Text style={styles.Title}>{`\u20B90`}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.inputWrapper}>
          <Text>Category</Text>
          <AntDesign name="down" />
        </View>
        <View style={styles.switchSection}>
          <View style={styles.switchSectionLeft}>
            <Text style={styles.switchSectionLeftTitle}>Receive Alert</Text>
            <Text
              style={styles.switchSectionLeftSubTitle}
            >{`Receive alert when it reaches \nsome point.`}</Text>
          </View>
          <View style={styles.switchSectionRight}>
            <Switch
              trackColor={{
                false: styleConst.COLOR.VIOLET.VIOLET_20,
                true: styleConst.COLOR.VIOLET.VIOLET_100,
              }}
              thumbColor={isEnabled ? "white" : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.sliderSection}>
          <Slider
            style={{
              width: "100%",
              height: 30,
            }}
            minimumValue={0}
            maximumValue={1}
            value={0.5}
            minimumTrackTintColor={styleConst.COLOR.VIOLET.VIOLET_100}
            thumbTintColor={styleConst.COLOR.VIOLET.VIOLET_100}
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <LargeButton title="Continue" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default CreateBudget;
