import { Image, Text, TouchableOpacity, View } from "react-native";

import Header from "./component/Header";

const Xpresspay = () => {
  return (
    <View
      style={{
        backgroundColor: "#E8E8E8",
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          paddingVertical: 20,
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314370/close_wtai75.png",
          }}
          width={35}
          height={35}
          style={{
            position: "absolute",
            top: -40,
            right: 0,
          }}
        />
        <Header />
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#656565",
              fontWeight: 600,
            }}
          >
            PAYMENT OPTIONS
          </Text>
          <View
            style={{
              borderColor: "#E8E8E8",
              borderWidth: 1,
              marginVertical: 20,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                padding: 15,
                borderBottomColor: "#E8E8E8",
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314371/card_u4j6he.png",
                }}
                width={40}
                height={40}
              />
              <Text
                style={{
                  color: "#656565",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Card
              </Text>
            </View>
            <View
              style={{
                padding: 15,
                borderBottomColor: "#E8E8E8",
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314371/ussd_apuuos.png",
                }}
                width={40}
                height={40}
              />
              <Text
                style={{
                  color: "#656565",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                USSD
              </Text>
            </View>
            <View
              style={{
                padding: 15,
                borderBottomColor: "#E8E8E8",
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314372/bank_cqizv9.png",
                }}
                width={40}
                height={40}
              />
              <Text
                style={{
                  color: "#656565",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Bank
              </Text>
            </View>
            <View
              style={{
                padding: 15,
                borderBottomColor: "#E8E8E8",
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314371/transfer_eu0kfn.png",
                }}
                width={40}
                height={40}
              />
              <Text
                style={{
                  color: "#656565",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Transfer
              </Text>
            </View>
            <View
              style={{
                padding: 15,
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
              }}
            >
              <Image
                source={{
                  uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314369/nqr_fv0xzj.png",
                }}
                width={40}
                height={40}
              />
              <Text
                style={{
                  color: "#656565",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                NQR
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F1F1F1",
            padding: 20,
            borderRadius: 8,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#656565",
              textAlign: "center",
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Make Payment
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginHorizontal: "auto",
          marginTop: 20,
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314370/lock_xppcyf.png",
          }}
          width={15}
          height={15}
        />
        <Text
          style={{
            color: "#656565",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          SECURED BY
        </Text>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzmei5g7b/image/upload/v1719314369/logo_tbxxy0.png",
          }}
          width={15}
          height={15}
        />
        <Text
          style={{
            color: "#006F01",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          XPRESSPAYMENTS
        </Text>
      </View>
    </View>
  );
};

export default Xpresspay;
