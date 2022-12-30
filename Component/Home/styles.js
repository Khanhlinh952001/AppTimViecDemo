import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  head: {
    borderBottomWidth: 1,
    borderColor: "blue",
    flexDirection: "row",
  },
  head_icon: {
    marginTop: 1,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 4,
  },
  body: {
    marginBottom: 2,
  },
  body_left_head: {
    height: 30,
    backgroundColor: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body_head_text: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 10,
  },
  body_head_left_text1: {
    color: "white",
    marginleft: 10,
  },
  body_head_left_text2: {
    color: "white",
  },
  body_right_head: {
    flexDirection: "row",
    marginRight: 10,
    marginTop: 4,
  },
  body_head_right_text1: {
    color: "white",
    marginRight: 10,
  },
  body_head_right_text2: {
    backgroundColor: "red",
    paddingTop: 2,
    marginBottom: 4,
    borderRadius: 30,
    color: "white",
  },
  body_head_right_text3: {
    color: "yellow",
    marginLeft: 10,
  },
  body_body_head: {
    backgroundColor: "#113370",
  },
  body_body1: {
    flexDirection: "row",
    marginTop: 10,
  },
  body_body1_text: {
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    width: 45,
  },
  body_body1_text1: {
    color: "white",
    marginRight: 10,
    marginLeft: 10,
    flex: 1,
  },
  footer: {
    backgroundColor: "#444",
  },
  footer_text: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
    color: "yellow",
  },
});
export { styles };
