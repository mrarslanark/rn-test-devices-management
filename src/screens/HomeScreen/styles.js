import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
  },
  container: {
    padding: Platform.OS !== "web" ? 0 : 24,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 6,
  },
  divider: {
    marginVertical: 12,
  },
  itemMake: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  headerWebContianer: {
    flexDirection: "row",
    display: "flex",
  },
  webHeaderContentContainer: {
    flex: 1,
  },
  webAddBtnContainer: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  webDarkModeBtnContainer: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  webAddBtnText: {
    fontWeight: "bold",
    color: "#212121",
  },
  webIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#21325E",
  },
  mobileActionContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  darkMobileActionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  lightMobileActionContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  addDeviceContainer: {
    flex: 1,
  },
  importDevicesContainer: {
    flex: 1,
  },
  addDeviceText: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 24,
  },
  listContainer: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: Platform.OS === "web" ? 0 : 12,
  },
  contentContainer: {
    flex: 1,
    marginStart: 12,
    height: 120,
    justifyContent: "space-between",
  },
  contentActionContainer: {
    flexDirection: "row",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  emptyIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  emptyText: {
    fontWeight: "bold",
    marginTop: 12,
    fontSize: 20,
  },
});

export default styles;
