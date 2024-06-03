import {
  Alert,
  Button,
  Image,
  Linking,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  Accordion,
  AsyncImage,
  AudioPlayer,
  BarCodeView,
  BarGraphView,
  BlurWrapper,
  BorderPill,
  ButtonOne,
  ButtonTwo,
  CSVtoJSONConverter,
  CSVtoJSONConverterView,
  CalendarView,
  CameraPicker,
  CameraView,
  ChangeOrderView,
  CheckboxOne,
  ClockView,
  ConfettiView,
  CreditCardScanner,
  DatePicker,
  DateTime,
  DebitCreditCardScanner,
  Divider,
  DropdownOne,
  FadeWrapper,
  FullProgressBar,
  GradientView,
  Grid,
  HHMMtoDate,
  Icon,
  IconButtonOne,
  IconButtonThree,
  IconButtonTwo,
  IconSegmentedPicker,
  ImageBackground,
  ImagesView,
  InteractiveMap,
  LinkOne,
  Loading,
  LocalNotification,
  Map,
  MenuBar,
  ModalView,
  NotificationCircle,
  NumberPad,
  OptionsView,
  PaymentView,
  PlayButton,
  ProgressBar,
  ProgressCircle,
  PulsingView,
  QRCodeView,
  QRReader,
  RecordingButton,
  RoundedCorners,
  SafeArea,
  SegmentedPicker,
  SegmentedPickerTwo,
  SelectedButton,
  SeparatedView,
  ShowMoreView,
  SideBySide,
  SlideWrapper,
  SliderCircleView,
  SmallBubble,
  Spacer,
  SplitView,
  SwitchOne,
  TextAreaOne,
  TextFieldOne,
  TextIconPill,
  TextPill,
  TextView,
  TimePicker,
  TimedView,
  TimerView,
  VideoPlayer,
  auth_IsUserSignedIn,
  auth_SignIn,
  auth_SignOut,
  backgrounds,
  checkDate,
  colors,
  copyToClipboard,
  createDate,
  dateToHHMM,
  dateToTime24,
  firebase_CreateDocument,
  firebase_DeleteDocument,
  firebase_GetAllDocuments,
  firebase_GetAllDocumentsListener,
  firebase_GetAllDocumentsListenerByDistance,
  firebase_GetDocument,
  firebase_UpdateDocument,
  format,
  formatDate,
  formatDateTime,
  formatLongDate,
  function_AlgoliaCreateRecord,
  function_AlgoliaDeleteRecord,
  function_AlgoliaSearch,
  function_AsyncString,
  function_ChooseFile,
  function_GetLocation,
  function_OpenFile,
  function_OpenLink,
  function_PickImage,
  function_PlaySound,
  function_QuickBooksNewSale,
  function_SendEmail,
  function_StripeConnect,
  function_TimedFunction,
  function_UploadFile,
  getDaysOfMonth,
  getDistanceInKilometers,
  getDistanceInMiles,
  getFirstDateOfMonth,
  getInDevice,
  getIndividualPages,
  height,
  layout,
  monthLongtoNum,
  monthNumToLong,
  playSound,
  randomString,
  reduceArray,
  removeDuplicates,
  removeDuplicatesByProperty,
  secondaryThemedBackgroundColor,
  secondaryThemedTextColor,
  setInDevice,
  setupSound,
  shopify_AddDiscountItemCheckout,
  shopify_AddItemCheckout,
  shopify_CreateCheckout,
  shopify_GetAdminKey,
  shopify_GetAllCollections,
  shopify_GetAllProducts,
  shopify_GetCheckOut,
  shopify_GetCollection,
  shopify_GetOrders,
  shopify_GetProduct,
  shopify_GetStorefrontKey,
  shopify_RemoveDiscountItemCheckout,
  shopify_RemoveItemCheckout,
  shopify_UpdateAddressCheckout,
  shopify_UpdateItemCheckout,
  sizes,
  storage_DownloadFile,
  storage_UploadFile,
  storage_UploadImage,
  themedBackgroundColor,
  themedTextColor,
  width,
} from "./EVERYTHING/BAGEL/Things";
import { useEffect, useState } from "react";
import { LoginScreen } from "./SCREENS/LoginScreen";
import {
  TopFive,
  TopFour,
  TopOne,
  TopThree,
  TopTwo,
} from "./SCREEN_COMPONENTS/Top";
import { SignUpScreen } from "./SCREENS/SignUpScreen";
import { GetStarted } from "./SCREENS/GetStarted";

function Test({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [thing, setThing] = useState("");
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState("light");
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setInDevice("theme", "light");
    getInDevice("theme", setTheme);
    getIndividualPages("https://firebasestorage.googleapis.com/v0/b/iic-appline-template.appspot.com/o/PDF%2Fvolume1.pdf?alt=media&token=f0198923-408b-458a-862e-2461b010b6c7", setPages)
  }, []);

  return (
    <SafeArea loading={loading} theme={theme}>
      <View>
        {pages.map((page, i) => {
          return (
            <Image
              key={i}
              source={{ uri: page }}
              style={[{ width: "100%", height: height * 0.8 }]}
            />
          );
        })}
      </View>
    </SafeArea>
  );
}

export default Test;
