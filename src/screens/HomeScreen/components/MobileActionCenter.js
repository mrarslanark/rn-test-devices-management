import React from "react";
import { Pressable, Text, View } from "react-native";

const MobileActionCenter = ({ onDelete, onEdit }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 12, paddingVertical: 12 }}>
      <Pressable style={{ flex: 1 }} onPress={onDelete}>
        <Text style={{ color: "gray", textAlign: "center" }}>DELETE</Text>
      </Pressable>
      <View
        style={{
          width: 1,
          height: "100%",
          alignSelf: "center",
          backgroundColor: "#212121",
          opacity: 0.2,
        }}
      />
      <Pressable style={{ flex: 1 }} onPress={onEdit}>
        <Text style={{ color: "gray", textAlign: "center" }}>EDIT</Text>
      </Pressable>
      <View
        style={{
          width: 1,
          height: "100%",
          alignSelf: "center",
          backgroundColor: "#212121",
          opacity: 0.2,
        }}
      />
    </View>
  );
};

export default MobileActionCenter;
