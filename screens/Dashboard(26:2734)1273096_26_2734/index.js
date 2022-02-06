import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_36_2340}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7148/f91a/e2c365e183cfaf3bb306ff72a80f2e5f"
          }}
          style={styles.ImageBackground_I36_2340_36_2253}
        />
        <View style={styles.View_I36_2340_36_2254}>
          <View style={styles.View_I36_2340_36_2255}>
            <View style={styles.View_I36_2340_36_2256}>
              <View style={styles.View_I36_2340_36_2257}>
                <View style={styles.View_I36_2340_36_2258}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7208/50ef/a53c7f5a90007cd3918defe3eb4b31a3"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2259}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7cc/774a/8cc1bad8000cdf1443a941e7087e9ba0"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2261}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2262}>
            <View style={styles.View_I36_2340_36_2263}>
              <View style={styles.View_I36_2340_36_2264}>
                <View style={styles.View_I36_2340_36_2265}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66a/2e6e/5c86127ffa839756e058938af5103546"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2266}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/404f/23d1/605bc6651eaeaec99fbabf2413c498f5"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2268}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2269}>
            <View style={styles.View_I36_2340_36_2270}>
              <View style={styles.View_I36_2340_36_2271}>
                <View style={styles.View_I36_2340_36_2272}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d2/77de/1e3f5b75b529ba766b1f517ead4772e3"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2273}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca04/3eab/fae24491a3e27989c2b1d9ca1dffe2c2"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2275}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2276}>
            <View style={styles.View_I36_2340_36_2277}>
              <View style={styles.View_I36_2340_36_2278}>
                <View style={styles.View_I36_2340_36_2279}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c3b/0a84/acdc510a85656b1eb043c2d7c1c2cd63"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2280}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d549/cf44/1171448d803f752661f5ce0e55932498"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2282}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2283}>
            <View style={styles.View_I36_2340_36_2284}>
              <View style={styles.View_I36_2340_36_2285}>
                <View style={styles.View_I36_2340_36_2286}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/598d/5879/95368382c728fd076e5c6fd859c413bd"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2287}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d9a/9544/19d8588621f6e66ee27a2282eacfab29"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2289}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2290}>
            <View style={styles.View_I36_2340_36_2291}>
              <View style={styles.View_I36_2340_36_2292}>
                <View style={styles.View_I36_2340_36_2293}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cfc/74c1/197be5a4f8941f67efdf50031fd7c710"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2294}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fee8/1337/c36b49a41d81fb327aae6614d4105d3c"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2296}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2297}>
            <View style={styles.View_I36_2340_36_2298}>
              <View style={styles.View_I36_2340_36_2299}>
                <View style={styles.View_I36_2340_36_2300}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f951/f65d/75d1308bbeaa10c95288ab528d20e48e"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2301}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d286/f1bd/ce874bfeaf7ff059c20f2cdeb0949149"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2303}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2304}>
            <View style={styles.View_I36_2340_36_2305}>
              <View style={styles.View_I36_2340_36_2306}>
                <View style={styles.View_I36_2340_36_2307}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b3/eb6a/e25c09d53989534f37982d2ec9568df1"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2308}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6caa/28a8/aa25876426ca2d56a9172b3e130a6564"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2310}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2311}>
            <View style={styles.View_I36_2340_36_2312}>
              <View style={styles.View_I36_2340_36_2313}>
                <View style={styles.View_I36_2340_36_2314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/748d/53de/3283b5e2d419a2b5207430f0aac877be"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2315}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac03/e782/6d37ed694fa70a955445379aaa053be0"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2317}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2318}>
            <View style={styles.View_I36_2340_36_2319}>
              <View style={styles.View_I36_2340_36_2320}>
                <View style={styles.View_I36_2340_36_2321}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4be/9c4f/fe8f2d3a38587cc9b01fc1f689024756"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2322}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32df/1329/ec7396473c4e2e8c1070edeca27895dd"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2324}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2325}>
            <View style={styles.View_I36_2340_36_2326}>
              <View style={styles.View_I36_2340_36_2327}>
                <View style={styles.View_I36_2340_36_2328}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369a/8191/726c1efa0a1a0b8fbfe188e31952bf43"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2329}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9919/aef5/5944b9a53e34ac31221e85507747d12f"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2331}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2340_36_2332}>
            <View style={styles.View_I36_2340_36_2333}>
              <View style={styles.View_I36_2340_36_2334}>
                <View style={styles.View_I36_2340_36_2335}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaa0/41aa/66fcc1412eecc320e4e72e722e7a42ec"
                    }}
                    style={styles.ImageBackground_I36_2340_36_2336}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/612f/acda/64758c45bbe2070601b9344fe780169b"
                  }}
                  style={styles.ImageBackground_I36_2340_36_2338}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_2427}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef4/5fc2/5efe3be9434cabe6ac432682016a9df9"
          }}
          style={styles.ImageBackground_I36_2427_36_2253}
        />
        <View style={styles.View_I36_2427_36_2254}>
          <View style={styles.View_I36_2427_36_2255}>
            <View style={styles.View_I36_2427_36_2256}>
              <View style={styles.View_I36_2427_36_2257}>
                <View style={styles.View_I36_2427_36_2258}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/080f/5d02/fcf4de7e6ba40ce650163245663711c9"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2259}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8731/4f32/c61012dd7f232ad24764679bc78e19f9"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2261}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2262}>
            <View style={styles.View_I36_2427_36_2263}>
              <View style={styles.View_I36_2427_36_2264}>
                <View style={styles.View_I36_2427_36_2265}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa92/b2d9/2b2dcb867282f2cb73fb2db2bc7ef42d"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2266}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31c0/8b63/1a8c80344f2f6c1f4b5754f4d4754d80"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2268}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2269}>
            <View style={styles.View_I36_2427_36_2270}>
              <View style={styles.View_I36_2427_36_2271}>
                <View style={styles.View_I36_2427_36_2272}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34fc/5da0/61a1d22fde82f6a701f9a1e3d957a89f"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2273}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49eb/2512/7efbbf4977fe27e4e73e889dfe15c95c"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2275}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2276}>
            <View style={styles.View_I36_2427_36_2277}>
              <View style={styles.View_I36_2427_36_2278}>
                <View style={styles.View_I36_2427_36_2279}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41fb/3cfa/1893d403107cbd153e0496750b6d8794"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2280}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8975/518b/ddaa0644ae2289ea5d03766b254b2c12"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2282}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2283}>
            <View style={styles.View_I36_2427_36_2284}>
              <View style={styles.View_I36_2427_36_2285}>
                <View style={styles.View_I36_2427_36_2286}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa9c/e6c3/7cbfa12b6599370961f19ce6074df53a"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2287}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f0d/1042/18487d7b55d83f4f5d6c468387b75d08"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2289}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2290}>
            <View style={styles.View_I36_2427_36_2291}>
              <View style={styles.View_I36_2427_36_2292}>
                <View style={styles.View_I36_2427_36_2293}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdbb/e49c/17f1bc5ef6931b1f01eeb17aadf72ddd"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2294}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82b4/ad61/5f34a30ee447f39220db892d2d84b0fa"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2296}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2297}>
            <View style={styles.View_I36_2427_36_2298}>
              <View style={styles.View_I36_2427_36_2299}>
                <View style={styles.View_I36_2427_36_2300}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76e4/e26e/efee9126ee1bb93c3f9d91d4df03bd13"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2301}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b4d/a085/c9035152f3f6675f7e80fc7952709d4f"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2303}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2304}>
            <View style={styles.View_I36_2427_36_2305}>
              <View style={styles.View_I36_2427_36_2306}>
                <View style={styles.View_I36_2427_36_2307}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b0c/5630/a1fffe63129c9f7337545466644fe793"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2308}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80a3/1352/3c6caee78612b977e188abd12daf37ec"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2310}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2311}>
            <View style={styles.View_I36_2427_36_2312}>
              <View style={styles.View_I36_2427_36_2313}>
                <View style={styles.View_I36_2427_36_2314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fa5/71b2/fe612224757bd8dd836a9892bdf8a468"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2315}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8872/90f7/be34dbee213824709a4017f25169af2c"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2317}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2318}>
            <View style={styles.View_I36_2427_36_2319}>
              <View style={styles.View_I36_2427_36_2320}>
                <View style={styles.View_I36_2427_36_2321}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c18d/0fb1/94bbf0df737f9270d4f83bf206095c4f"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2322}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d3/2f05/bb7079345e3c8ff60295e29bf7c69a1f"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2324}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2325}>
            <View style={styles.View_I36_2427_36_2326}>
              <View style={styles.View_I36_2427_36_2327}>
                <View style={styles.View_I36_2427_36_2328}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3364/50bd/2013f2fdca981f304fc30d1cc3abf8af"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2329}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1b/c56b/bb860a6a89db6476359ee48b79fb05f9"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2331}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I36_2427_36_2332}>
            <View style={styles.View_I36_2427_36_2333}>
              <View style={styles.View_I36_2427_36_2334}>
                <View style={styles.View_I36_2427_36_2335}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3b/81cd/89364050b04db751406810bf8e2f5695"
                    }}
                    style={styles.ImageBackground_I36_2427_36_2336}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea8b/8b3d/d55407d43d0a41476f254732ed59ef15"
                  }}
                  style={styles.ImageBackground_I36_2427_36_2338}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_26_2735}>
        <View style={styles.View_I26_2735_23_6224}>
          <View style={styles.View_I26_2735_23_6225}>
            <Text style={styles.Text_I26_2735_23_6225}>Dashboard</Text>
          </View>
          <View style={styles.View_I26_2735_23_6226}>
            <Text style={styles.Text_I26_2735_23_6226}>Exchange</Text>
          </View>
          <View style={styles.View_I26_2735_23_6227}>
            <Text style={styles.Text_I26_2735_23_6227}>Wallet</Text>
          </View>
          <View style={styles.View_I26_2735_23_6228}>
            <Text style={styles.Text_I26_2735_23_6228}>Market</Text>
          </View>
        </View>
        <View style={styles.View_I26_2735_23_6229}>
          <Text style={styles.Text_I26_2735_23_6229}>Noel</Text>
        </View>
        <View style={styles.View_I26_2735_23_6230}>
          <View style={styles.View_I26_2735_23_6230_46_71}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ddc/c210/97552a30329ea0691fe2510c9033d9a0"
              }}
              style={styles.ImageBackground_I26_2735_23_6230_46_71_0_4173}
            />
          </View>
        </View>
        <View style={styles.View_I26_2735_23_6231}>
          <View style={styles.View_I26_2735_23_6232}>
            <View style={styles.View_I26_2735_23_6232_144_3824}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a61/d658/a407bba266c7ee1dff72e84ca32b257b"
                }}
                style={styles.ImageBackground_I26_2735_23_6232_144_3825}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/605c/a5c7/5f6da16a69e15264e7b78058ee6cec76"
            }}
            style={styles.ImageBackground_I26_2735_23_6233}
          />
        </View>
        <View style={styles.View_I26_2735_23_6234}>
          <Text style={styles.Text_I26_2735_23_6234}>Hypothese.io</Text>
        </View>
        <View style={styles.View_I26_2735_23_6235}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fefa/3ba6/1979673499f125493c5bfa268132e743"
            }}
            style={styles.ImageBackground_I26_2735_23_6236}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159c/daba/536dc024413f16ad86e040833ba4971e"
            }}
            style={styles.ImageBackground_I26_2735_23_6237}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a096/3a55/4505715a0f72236067d963c98181e528"
            }}
            style={styles.ImageBackground_I26_2735_32_2657}
          />
        </View>
        <View style={styles.View_I26_2735_23_6238}>
          <View style={styles.View_I26_2735_23_6238_275_11562}>
            <Text style={styles.Text_I26_2735_23_6238_275_11562}>Search</Text>
          </View>
          <View style={styles.View_I26_2735_23_6238_275_11563}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/562c/2110/884de66268c75eeeab718e7426d20d44"
              }}
              style={styles.ImageBackground_I26_2735_23_6238_275_11563_143_4124}
            />
          </View>
        </View>
        <View style={styles.View_I26_2735_32_3290}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5189/4368/5fb72a7d02bfe2f0a2009835ff5e59d3"
            }}
            style={styles.ImageBackground_I26_2735_32_3291}
          />
        </View>
      </View>
      <View style={styles.View_26_2739}>
        <View style={styles.View_I26_2739_23_7201}>
          <View style={styles.View_I26_2739_23_7202}>
            <View style={styles.View_I26_2739_23_7202_23_7438} />
            <View style={styles.View_I26_2739_23_7202_23_7439}>
              <Text style={styles.Text_I26_2739_23_7202_23_7439}>BTC</Text>
            </View>
            <View style={styles.View_I26_2739_23_7202_23_7440}>
              <Text style={styles.Text_I26_2739_23_7202_23_7440}>
                USD 53,260.20
              </Text>
            </View>
            <View style={styles.View_I26_2739_23_7202_23_7441}>
              <View style={styles.View_I26_2739_23_7202_23_7442}>
                <View style={styles.View_I26_2739_23_7202_23_7442_23_184}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f989/3afe/90b3329e9a147d171de9648e6b8cb41a"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7202_23_7442_23_184_0_3907
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I26_2739_23_7202_23_7443}>
                <Text style={styles.Text_I26_2739_23_7202_23_7443}>2.11%</Text>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7202_23_7444}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48bf/bdee/40d9ec2f8ccd088e8688954616804625"
                }}
                style={styles.ImageBackground_I26_2739_23_7202_23_7445}
              />
            </View>
            <View style={styles.View_I26_2739_23_7202_23_7446}>
              <Text style={styles.Text_I26_2739_23_7202_23_7446}>Bitcoin</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08da/8397/ab99c5d9c40f7f07e87b23048c1a188f"
              }}
              style={styles.ImageBackground_I26_2739_23_7202_23_7447}
            />
          </View>
          <View style={styles.View_I26_2739_23_7203}>
            <View style={styles.View_I26_2739_23_7203_23_7438} />
            <View style={styles.View_I26_2739_23_7203_23_7439}>
              <Text style={styles.Text_I26_2739_23_7203_23_7439}>ETH</Text>
            </View>
            <View style={styles.View_I26_2739_23_7203_23_7440}>
              <Text style={styles.Text_I26_2739_23_7203_23_7440}>
                USD 1,643.80
              </Text>
            </View>
            <View style={styles.View_I26_2739_23_7203_23_7441}>
              <View style={styles.View_I26_2739_23_7203_23_7442}>
                <View style={styles.View_I26_2739_23_7203_23_7442_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cab1/c5b3/c9ec5263e45ffb516f713d6fe9eb0979"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7203_23_7442_23_199_0_4180
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I26_2739_23_7203_23_7443}>
                <Text style={styles.Text_I26_2739_23_7203_23_7443}>1.53%</Text>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7203_23_7444}>
              <View style={styles.View_I26_2739_23_7203_23_7445}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c6/27bd/798daba90a5a2c3361cee0ed2edd4694"
                  }}
                  style={styles.ImageBackground_I26_2739_23_7203_23_7445_23_189}
                />
                <View style={styles.View_I26_2739_23_7203_23_7445_23_190}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9002/927d/9f999b7b8a828365d23617b7b4dd5660"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7203_23_7445_23_191
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7203_23_7446}>
              <Text style={styles.Text_I26_2739_23_7203_23_7446}>Ethereum</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2bc/503d/7d0527782c1e6b7d8450238e68d31bd4"
              }}
              style={styles.ImageBackground_I26_2739_23_7203_23_7447}
            />
          </View>
          <View style={styles.View_I26_2739_23_7204}>
            <View style={styles.View_I26_2739_23_7204_23_7438} />
            <View style={styles.View_I26_2739_23_7204_23_7439}>
              <Text style={styles.Text_I26_2739_23_7204_23_7439}>USDT</Text>
            </View>
            <View style={styles.View_I26_2739_23_7204_23_7440}>
              <Text style={styles.Text_I26_2739_23_7204_23_7440}>
                USD 0.9999
              </Text>
            </View>
            <View style={styles.View_I26_2739_23_7204_23_7441}>
              <View style={styles.View_I26_2739_23_7204_23_7442}>
                <View style={styles.View_I26_2739_23_7204_23_7442_23_184}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f989/3afe/90b3329e9a147d171de9648e6b8cb41a"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7204_23_7442_23_184_0_3907
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I26_2739_23_7204_23_7443}>
                <Text style={styles.Text_I26_2739_23_7204_23_7443}>1.12%</Text>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7204_23_7444}>
              <View style={styles.View_I26_2739_23_7204_23_7445}>
                <View style={styles.View_I26_2739_23_7204_23_7445_23_177}>
                  <View style={styles.View_I26_2739_23_7204_23_7445_23_178}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ccb/debc/e4d876b25358d3faca658c16d0328d33"
                      }}
                      style={
                        styles.ImageBackground_I26_2739_23_7204_23_7445_23_179
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7204_23_7446}>
              <Text style={styles.Text_I26_2739_23_7204_23_7446}>Tether</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9486/7a07/2af7fc53cd0e0fac723b91949a9c0224"
              }}
              style={styles.ImageBackground_I26_2739_23_7204_23_7447}
            />
          </View>
          <View style={styles.View_I26_2739_23_7205}>
            <View style={styles.View_I26_2739_23_7205_23_7438} />
            <View style={styles.View_I26_2739_23_7205_23_7439}>
              <Text style={styles.Text_I26_2739_23_7205_23_7439}>BTC</Text>
            </View>
            <View style={styles.View_I26_2739_23_7205_23_7440}>
              <Text style={styles.Text_I26_2739_23_7205_23_7440}>
                USD 247.43
              </Text>
            </View>
            <View style={styles.View_I26_2739_23_7205_23_7441}>
              <View style={styles.View_I26_2739_23_7205_23_7442}>
                <View style={styles.View_I26_2739_23_7205_23_7442_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cab1/c5b3/c9ec5263e45ffb516f713d6fe9eb0979"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7205_23_7442_23_199_0_4180
                    }
                  />
                </View>
              </View>
              <View style={styles.View_I26_2739_23_7205_23_7443}>
                <Text style={styles.Text_I26_2739_23_7205_23_7443}>1.53%</Text>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7205_23_7444}>
              <View style={styles.View_I26_2739_23_7205_23_7445}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de32/2b00/71de6a4f08ed74704945e7bd1f0591ff"
                  }}
                  style={styles.ImageBackground_I26_2739_23_7205_23_7445_23_205}
                />
                <View style={styles.View_I26_2739_23_7205_23_7445_23_206}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c7e/60f0/515097273d5cd29c8aa4465ae433e653"
                    }}
                    style={
                      styles.ImageBackground_I26_2739_23_7205_23_7445_23_207
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I26_2739_23_7205_23_7446}>
              <Text style={styles.Text_I26_2739_23_7205_23_7446}>
                Binance Coin
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b3e/b196/61de050c0d7f4f35b589ca167d562155"
              }}
              style={styles.ImageBackground_I26_2739_23_7205_23_7447}
            />
          </View>
        </View>
        <View style={styles.View_I26_2739_23_7206}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db5e/d504/736be2b6ec52a317b269ca714e239448"
            }}
            style={styles.ImageBackground_I26_2739_23_7208}
          />
          <View style={styles.View_I26_2739_23_7209}>
            <View style={styles.View_I26_2739_23_7209_143_4181}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa8a/e59e/4de9d3b2b482c80ddac6c28c3cef9213"
                }}
                style={styles.ImageBackground_I26_2739_23_7209_143_4181_0_3762}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_32_3430}>
        <View style={styles.View_I32_3430_32_3148} />
      </View>
      <View style={styles.View_46_2458}>
        <View style={styles.View_I46_2458_40_2758} />
        <View style={styles.View_I46_2458_47_2959}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/363c/b764/516f785ea106471773692a2d40cbdb0a"
            }}
            style={styles.ImageBackground_I46_2458_47_2615}
          />
          <View style={styles.View_I46_2458_47_2791}>
            <Text style={styles.Text_I46_2458_47_2791}>03:40 5m</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3d1/3a2a/f120b76d642db1df94ba9359a3fa99a8"
          }}
          style={styles.ImageBackground_I46_2458_47_3622}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3210/3245/44a3c9f5f48fdd02c6c6b769decd274b"
          }}
          style={styles.ImageBackground_I46_2458_59_4993}
        />
        <View style={styles.View_I46_2458_47_4421}>
          <Text style={styles.Text_I46_2458_47_4421}>BNBUSDT $381.470</Text>
        </View>
        <View style={styles.View_I46_2458_59_2499}>
          <View style={styles.View_I46_2458_56_3059} />
          <View style={styles.View_I46_2458_56_3060}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9f/46d1/d55bf767cbf723d98c89aba6933667e5"
              }}
              style={styles.ImageBackground_I46_2458_56_3061}
            />
            <View style={styles.View_I46_2458_56_3062} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67d/8c05/141d6d65ca3030028d1477a28709c72d"
              }}
              style={styles.ImageBackground_I46_2458_56_3063}
            />
            <View style={styles.View_I46_2458_56_3065}>
              <Text style={styles.Text_I46_2458_56_3065}>1.45x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_56_3066}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871a/27b5/30ad14c88c310fccdc3da73771e98db3"
                }}
                style={styles.ImageBackground_I46_2458_56_3067}
              />
              <View style={styles.View_I46_2458_56_3068}>
                <View style={styles.View_I46_2458_56_3068_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ffb/86a7/654dca6a9766e6a1c4fcb0f31ffe2a96"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_56_3068_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3069}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/fefe/07f601eb4c1512f8015ac7ce6dffa7ab"
              }}
              style={styles.ImageBackground_I46_2458_56_3070}
            />
            <View style={styles.View_I46_2458_56_3071} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/18da/cd90417051e618c03a09d18954e96451"
              }}
              style={styles.ImageBackground_I46_2458_56_3072}
            />
            <View style={styles.View_I46_2458_56_3074}>
              <Text style={styles.Text_I46_2458_56_3074}>1.29x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_56_3075}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b8f/00d3/dc13bb8b001cbd9e6965ecd3754804ac"
                }}
                style={styles.ImageBackground_I46_2458_56_3076}
              />
              <View style={styles.View_I46_2458_56_3077}>
                <View style={styles.View_I46_2458_56_3077_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d1/b470/fdaa572c58b7dc3c7ee7c355b59a1ab4"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_56_3077_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3078}>
            <View style={styles.View_I46_2458_56_3079}>
              <Text style={styles.Text_I46_2458_56_3079}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_56_3080}>
              <Text style={styles.Text_I46_2458_56_3080}>Last Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_2492}>
            <View style={styles.View_I46_2458_59_2493}>
              <Text style={styles.Text_I46_2458_59_2493}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_2494}>
              <Text style={styles.Text_I46_2458_59_2494}>Locked Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_2495}>
            <View style={styles.View_I46_2458_59_2496}>
              <Text style={styles.Text_I46_2458_59_2496}>16.328 BNB</Text>
            </View>
            <View style={styles.View_I46_2458_59_2497}>
              <Text style={styles.Text_I46_2458_59_2497}>Price Pool</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3087}>
            <Text style={styles.Text_I46_2458_56_3087}>$0.130</Text>
          </View>
          <View style={styles.View_I46_2458_75_6693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b98/0dcb/70ed6e3aea245a0beef34b2d304fdfee"
              }}
              style={styles.ImageBackground_I46_2458_75_6694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33b/d190/adca27994feec102c60b45d741f6e8f3"
              }}
              style={styles.ImageBackground_I46_2458_75_6695}
            />
            <View style={styles.View_I46_2458_75_6423}>
              <Text style={styles.Text_I46_2458_75_6423}>NEXT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I46_2458_59_4611}>
          <View style={styles.View_I46_2458_59_4612} />
          <View style={styles.View_I46_2458_59_4613}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bf/5662/edd6725e3c71b695202c81ebbf865ab0"
              }}
              style={styles.ImageBackground_I46_2458_59_4614}
            />
            <View style={styles.View_I46_2458_59_4615} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67d/8c05/141d6d65ca3030028d1477a28709c72d"
              }}
              style={styles.ImageBackground_I46_2458_59_4616}
            />
            <View style={styles.View_I46_2458_59_4618}>
              <Text style={styles.Text_I46_2458_59_4618}>1.45x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_4619}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6373/e900/00f2cafe955921fe600ebb7a542d03d6"
                }}
                style={styles.ImageBackground_I46_2458_59_4620}
              />
              <View style={styles.View_I46_2458_59_4621}>
                <View style={styles.View_I46_2458_59_4621_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ffb/86a7/654dca6a9766e6a1c4fcb0f31ffe2a96"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_4621_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_4622}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4db/69b7/3ae7161471b835f561ad566a35548f3d"
              }}
              style={styles.ImageBackground_I46_2458_59_4623}
            />
            <View style={styles.View_I46_2458_59_4624} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/18da/cd90417051e618c03a09d18954e96451"
              }}
              style={styles.ImageBackground_I46_2458_59_4625}
            />
            <View style={styles.View_I46_2458_59_4627}>
              <Text style={styles.Text_I46_2458_59_4627}>1.29x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_4628}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f9a/bbff/57e908dc395f365de32eacd6a2fbd325"
                }}
                style={styles.ImageBackground_I46_2458_59_4629}
              />
              <View style={styles.View_I46_2458_59_4630}>
                <View style={styles.View_I46_2458_59_4630_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d1/b470/fdaa572c58b7dc3c7ee7c355b59a1ab4"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_4630_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_4631}>
            <View style={styles.View_I46_2458_59_4632}>
              <Text style={styles.Text_I46_2458_59_4632}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_4633}>
              <Text style={styles.Text_I46_2458_59_4633}>Last Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_4634}>
            <View style={styles.View_I46_2458_59_4635}>
              <Text style={styles.Text_I46_2458_59_4635}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_4636}>
              <Text style={styles.Text_I46_2458_59_4636}>Locked Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_4637}>
            <View style={styles.View_I46_2458_59_4638}>
              <Text style={styles.Text_I46_2458_59_4638}>16.328 BNB</Text>
            </View>
            <View style={styles.View_I46_2458_59_4639}>
              <Text style={styles.Text_I46_2458_59_4639}>Price Pool</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_4640}>
            <Text style={styles.Text_I46_2458_59_4640}>$0.130</Text>
          </View>
          <View style={styles.View_I46_2458_75_6809}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b98/0dcb/70ed6e3aea245a0beef34b2d304fdfee"
              }}
              style={styles.ImageBackground_I46_2458_75_6810}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33b/d190/adca27994feec102c60b45d741f6e8f3"
              }}
              style={styles.ImageBackground_I46_2458_75_6811}
            />
            <View style={styles.View_I46_2458_75_6812}>
              <Text style={styles.Text_I46_2458_75_6812}>NEXT</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I46_2458_59_3371}>
          <View style={styles.View_I46_2458_59_3372} />
          <View style={styles.View_I46_2458_59_3373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bf/5662/edd6725e3c71b695202c81ebbf865ab0"
              }}
              style={styles.ImageBackground_I46_2458_59_3374}
            />
            <View style={styles.View_I46_2458_59_3375} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67d/8c05/141d6d65ca3030028d1477a28709c72d"
              }}
              style={styles.ImageBackground_I46_2458_59_3376}
            />
            <View style={styles.View_I46_2458_59_3378}>
              <Text style={styles.Text_I46_2458_59_3378}>1.45x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_3379}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37aa/a8d9/1c19c93d51593d516a2ae1f7085a749f"
                }}
                style={styles.ImageBackground_I46_2458_59_3380}
              />
              <View style={styles.View_I46_2458_59_3381}>
                <View style={styles.View_I46_2458_59_3381_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ffb/86a7/654dca6a9766e6a1c4fcb0f31ffe2a96"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_3381_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3382}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/fefe/07f601eb4c1512f8015ac7ce6dffa7ab"
              }}
              style={styles.ImageBackground_I46_2458_59_3383}
            />
            <View style={styles.View_I46_2458_59_3384} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/18da/cd90417051e618c03a09d18954e96451"
              }}
              style={styles.ImageBackground_I46_2458_59_3385}
            />
            <View style={styles.View_I46_2458_59_3387}>
              <Text style={styles.Text_I46_2458_59_3387}>1.29x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_3388}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cba/74d3/06bcad9f5c9d010bad7709d26b358814"
                }}
                style={styles.ImageBackground_I46_2458_59_3389}
              />
              <View style={styles.View_I46_2458_59_3390}>
                <View style={styles.View_I46_2458_59_3390_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d1/b470/fdaa572c58b7dc3c7ee7c355b59a1ab4"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_3390_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3391}>
            <View style={styles.View_I46_2458_59_3392}>
              <Text style={styles.Text_I46_2458_59_3392}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_3393}>
              <Text style={styles.Text_I46_2458_59_3393}>Last Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3394}>
            <View style={styles.View_I46_2458_59_3395}>
              <Text style={styles.Text_I46_2458_59_3395}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_3396}>
              <Text style={styles.Text_I46_2458_59_3396}>Locked Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3397}>
            <View style={styles.View_I46_2458_59_3398}>
              <Text style={styles.Text_I46_2458_59_3398}>16.328 BNB</Text>
            </View>
            <View style={styles.View_I46_2458_59_3399}>
              <Text style={styles.Text_I46_2458_59_3399}>Price Pool</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3400}>
            <Text style={styles.Text_I46_2458_59_3400}>$0.130</Text>
          </View>
          <View style={styles.View_I46_2458_75_6386}>
            <Text style={styles.Text_I46_2458_75_6386}>EXPIRED</Text>
          </View>
        </View>
        <View style={styles.View_I46_2458_59_3681}>
          <View style={styles.View_I46_2458_59_3682} />
          <View style={styles.View_I46_2458_59_3683}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9f/46d1/d55bf767cbf723d98c89aba6933667e5"
              }}
              style={styles.ImageBackground_I46_2458_59_3684}
            />
            <View style={styles.View_I46_2458_59_3685} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67d/8c05/141d6d65ca3030028d1477a28709c72d"
              }}
              style={styles.ImageBackground_I46_2458_59_3686}
            />
            <View style={styles.View_I46_2458_59_3688}>
              <Text style={styles.Text_I46_2458_59_3688}>1.45x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_3689}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871a/27b5/30ad14c88c310fccdc3da73771e98db3"
                }}
                style={styles.ImageBackground_I46_2458_59_3690}
              />
              <View style={styles.View_I46_2458_59_3691}>
                <View style={styles.View_I46_2458_59_3691_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ffb/86a7/654dca6a9766e6a1c4fcb0f31ffe2a96"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_3691_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3692}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/fefe/07f601eb4c1512f8015ac7ce6dffa7ab"
              }}
              style={styles.ImageBackground_I46_2458_59_3693}
            />
            <View style={styles.View_I46_2458_59_3694} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/18da/cd90417051e618c03a09d18954e96451"
              }}
              style={styles.ImageBackground_I46_2458_59_3695}
            />
            <View style={styles.View_I46_2458_59_3697}>
              <Text style={styles.Text_I46_2458_59_3697}>1.29x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_59_3698}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04b9/e33e/c6e71b48335573589028b2bb1fb47714"
                }}
                style={styles.ImageBackground_I46_2458_59_3699}
              />
              <View style={styles.View_I46_2458_59_3700}>
                <View style={styles.View_I46_2458_59_3700_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d1/b470/fdaa572c58b7dc3c7ee7c355b59a1ab4"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_59_3700_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3701}>
            <View style={styles.View_I46_2458_59_3702}>
              <Text style={styles.Text_I46_2458_59_3702}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_3703}>
              <Text style={styles.Text_I46_2458_59_3703}>Last Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3704}>
            <View style={styles.View_I46_2458_59_3705}>
              <Text style={styles.Text_I46_2458_59_3705}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_59_3706}>
              <Text style={styles.Text_I46_2458_59_3706}>Locked Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3707}>
            <View style={styles.View_I46_2458_59_3708}>
              <Text style={styles.Text_I46_2458_59_3708}>16.328 BNB</Text>
            </View>
            <View style={styles.View_I46_2458_59_3709}>
              <Text style={styles.Text_I46_2458_59_3709}>Price Pool</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_59_3710}>
            <Text style={styles.Text_I46_2458_59_3710}>$0.130</Text>
          </View>
          <View style={styles.View_I46_2458_75_6349}>
            <Text style={styles.Text_I46_2458_75_6349}>EXPIRED</Text>
          </View>
        </View>
        <View style={styles.View_I46_2458_59_2498}>
          <View style={styles.View_I46_2458_55_2990} />
          <View style={styles.View_I46_2458_55_2991}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9f/46d1/d55bf767cbf723d98c89aba6933667e5"
              }}
              style={styles.ImageBackground_I46_2458_56_3039}
            />
            <View style={styles.View_I46_2458_55_2983} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb99/3189/6b1ae6def72ceb52a806e9bc8e124625"
              }}
              style={styles.ImageBackground_I46_2458_55_2984}
            />
            <View style={styles.View_I46_2458_55_2989}>
              <Text style={styles.Text_I46_2458_55_2989}>1.53x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_56_3022}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a092/772e/cfa4aa6baaa7e771ef8cb6950395037a"
                }}
                style={styles.ImageBackground_I46_2458_56_3023}
              />
              <View style={styles.View_I46_2458_56_3024}>
                <View style={styles.View_I46_2458_56_3024_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1725/b5d6/51d020fbc5f62f29c5dca7d8b2b938f8"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_56_3024_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3028}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/874f/fefe/07f601eb4c1512f8015ac7ce6dffa7ab"
              }}
              style={styles.ImageBackground_I46_2458_56_3041}
            />
            <View style={styles.View_I46_2458_56_3029} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b877/05fe/4b2b74c9ae4e05f89eeeed1892803be2"
              }}
              style={styles.ImageBackground_I46_2458_56_3030}
            />
            <View style={styles.View_I46_2458_56_3032}>
              <Text style={styles.Text_I46_2458_56_3032}>2.38x Payout</Text>
            </View>
            <View style={styles.View_I46_2458_56_3033}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/085e/1643/f217421fcfac246b44d781345024dc83"
                }}
                style={styles.ImageBackground_I46_2458_56_3034}
              />
              <View style={styles.View_I46_2458_56_3035}>
                <View style={styles.View_I46_2458_56_3035_23_199}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54c/b2f7/d589891cdbc101cf5f05823dbae7015f"
                    }}
                    style={
                      styles.ImageBackground_I46_2458_56_3035_23_199_0_4180
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3051}>
            <View style={styles.View_I46_2458_56_3050}>
              <Text style={styles.Text_I46_2458_56_3050}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_56_3042}>
              <Text style={styles.Text_I46_2458_56_3042}>Last Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3052}>
            <View style={styles.View_I46_2458_56_3053}>
              <Text style={styles.Text_I46_2458_56_3053}>$298.984</Text>
            </View>
            <View style={styles.View_I46_2458_56_3054}>
              <Text style={styles.Text_I46_2458_56_3054}>Locked Price</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3055}>
            <View style={styles.View_I46_2458_56_3056}>
              <Text style={styles.Text_I46_2458_56_3056}>16.328 BNB</Text>
            </View>
            <View style={styles.View_I46_2458_56_3057}>
              <Text style={styles.Text_I46_2458_56_3057}>Price Pool</Text>
            </View>
          </View>
          <View style={styles.View_I46_2458_56_3058}>
            <Text style={styles.Text_I46_2458_56_3058}>$0.130</Text>
          </View>
          <View style={styles.View_I46_2458_57_2500}>
            <Text style={styles.Text_I46_2458_57_2500}>#544124</Text>
          </View>
          <View style={styles.View_I46_2458_57_2501}>
            <View style={styles.View_I46_2458_57_2493}>
              <Text style={styles.Text_I46_2458_57_2493}>LIVE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d05e/5596/9c0c2f7e65a92c1f2132bb1b9e3beddf"
              }}
              style={styles.ImageBackground_I46_2458_57_2494}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e1/7787/77eccfa9262cc7e8df8b33c5cfaa8e45"
          }}
          style={styles.ImageBackground_I46_2458_59_5360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0c0/f603/dbb72ebda780afadd5d871aec64cafda"
          }}
          style={styles.ImageBackground_I46_2458_59_5361}
        />
      </View>
      <View style={styles.View_68_6527}>
        <View style={styles.View_I68_6527_68_5873} />
        <View style={styles.View_I68_6527_68_5874}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c19/4138/b8fd01d33d607ecbcc60fdead506861b"
            }}
            style={styles.ImageBackground_I68_6527_68_5875}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1c8/4d4c/e99d784ef61dc82007a725a4b4c77538"
            }}
            style={styles.ImageBackground_I68_6527_68_5876}
          />
          <View style={styles.View_I68_6527_68_5877}>
            <View style={styles.View_I68_6527_68_5878}>
              <View style={styles.View_I68_6527_68_5879} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5880}
              />
            </View>
            <View style={styles.View_I68_6527_68_5881}>
              <View style={styles.View_I68_6527_68_5882} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                }}
                style={styles.ImageBackground_I68_6527_68_5883}
              />
            </View>
            <View style={styles.View_I68_6527_68_5884}>
              <View style={styles.View_I68_6527_68_5885} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                }}
                style={styles.ImageBackground_I68_6527_68_5886}
              />
            </View>
            <View style={styles.View_I68_6527_68_5887}>
              <View style={styles.View_I68_6527_68_5888} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5889}
              />
            </View>
            <View style={styles.View_I68_6527_68_5890}>
              <View style={styles.View_I68_6527_68_5891} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                }}
                style={styles.ImageBackground_I68_6527_68_5892}
              />
            </View>
            <View style={styles.View_I68_6527_68_5893}>
              <View style={styles.View_I68_6527_68_5894} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/379e/2005/c5b54eb67d6acf8112fc1f08b3117cdd"
                }}
                style={styles.ImageBackground_I68_6527_68_5895}
              />
            </View>
            <View style={styles.View_I68_6527_68_5896}>
              <View style={styles.View_I68_6527_68_5897} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                }}
                style={styles.ImageBackground_I68_6527_68_5898}
              />
            </View>
            <View style={styles.View_I68_6527_68_5899}>
              <View style={styles.View_I68_6527_68_5900} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                }}
                style={styles.ImageBackground_I68_6527_68_5901}
              />
            </View>
            <View style={styles.View_I68_6527_68_5902}>
              <View style={styles.View_I68_6527_68_5903} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                }}
                style={styles.ImageBackground_I68_6527_68_5904}
              />
            </View>
            <View style={styles.View_I68_6527_68_5905}>
              <View style={styles.View_I68_6527_68_5906} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                }}
                style={styles.ImageBackground_I68_6527_68_5907}
              />
            </View>
            <View style={styles.View_I68_6527_68_5908}>
              <View style={styles.View_I68_6527_68_5909} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                }}
                style={styles.ImageBackground_I68_6527_68_5910}
              />
            </View>
            <View style={styles.View_I68_6527_68_5911}>
              <View style={styles.View_I68_6527_68_5912} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                }}
                style={styles.ImageBackground_I68_6527_68_5913}
              />
            </View>
            <View style={styles.View_I68_6527_68_5914}>
              <View style={styles.View_I68_6527_68_5915} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                }}
                style={styles.ImageBackground_I68_6527_68_5916}
              />
            </View>
            <View style={styles.View_I68_6527_68_5917}>
              <View style={styles.View_I68_6527_68_5918} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5919}
              />
            </View>
            <View style={styles.View_I68_6527_68_5920}>
              <View style={styles.View_I68_6527_68_5921} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8640/8645/b6138bcfd729a2d092262c501d439560"
                }}
                style={styles.ImageBackground_I68_6527_68_5922}
              />
            </View>
            <View style={styles.View_I68_6527_68_5923}>
              <View style={styles.View_I68_6527_68_5924} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a35/7915/e7a24e4d3d73e2d0751a2f3ae7bf859c"
                }}
                style={styles.ImageBackground_I68_6527_68_5925}
              />
            </View>
            <View style={styles.View_I68_6527_68_5926}>
              <View style={styles.View_I68_6527_68_5927} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5928}
              />
            </View>
            <View style={styles.View_I68_6527_68_5929}>
              <View style={styles.View_I68_6527_68_5930} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                }}
                style={styles.ImageBackground_I68_6527_68_5931}
              />
            </View>
            <View style={styles.View_I68_6527_68_5932}>
              <View style={styles.View_I68_6527_68_5933} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5934}
              />
            </View>
            <View style={styles.View_I68_6527_68_5935}>
              <View style={styles.View_I68_6527_68_5936} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/2b44/5d843b437af1913059d6c51f12573fbd"
                }}
                style={styles.ImageBackground_I68_6527_68_5937}
              />
            </View>
            <View style={styles.View_I68_6527_68_5938}>
              <View style={styles.View_I68_6527_68_5939} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/2b44/5d843b437af1913059d6c51f12573fbd"
                }}
                style={styles.ImageBackground_I68_6527_68_5940}
              />
            </View>
            <View style={styles.View_I68_6527_68_5941}>
              <View style={styles.View_I68_6527_68_5942} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d4e/e27b/6149aefc83c57592f93563dd857d0885"
                }}
                style={styles.ImageBackground_I68_6527_68_5943}
              />
            </View>
            <View style={styles.View_I68_6527_68_5944}>
              <View style={styles.View_I68_6527_68_5945} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                }}
                style={styles.ImageBackground_I68_6527_68_5946}
              />
            </View>
            <View style={styles.View_I68_6527_68_5947}>
              <View style={styles.View_I68_6527_68_5948} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                }}
                style={styles.ImageBackground_I68_6527_68_5949}
              />
            </View>
            <View style={styles.View_I68_6527_68_5950}>
              <View style={styles.View_I68_6527_68_5951} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                }}
                style={styles.ImageBackground_I68_6527_68_5952}
              />
            </View>
            <View style={styles.View_I68_6527_68_5953}>
              <View style={styles.View_I68_6527_68_5954} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                }}
                style={styles.ImageBackground_I68_6527_68_5955}
              />
            </View>
            <View style={styles.View_I68_6527_68_5956}>
              <View style={styles.View_I68_6527_68_5957} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                }}
                style={styles.ImageBackground_I68_6527_68_5958}
              />
            </View>
            <View style={styles.View_I68_6527_68_5959}>
              <View style={styles.View_I68_6527_68_5960} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                }}
                style={styles.ImageBackground_I68_6527_68_5961}
              />
            </View>
            <View style={styles.View_I68_6527_68_5962}>
              <View style={styles.View_I68_6527_68_5963} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                }}
                style={styles.ImageBackground_I68_6527_68_5964}
              />
            </View>
            <View style={styles.View_I68_6527_68_5965}>
              <View style={styles.View_I68_6527_68_5966} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                }}
                style={styles.ImageBackground_I68_6527_68_5967}
              />
            </View>
            <View style={styles.View_I68_6527_68_5968}>
              <View style={styles.View_I68_6527_68_5969} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/e219/21deabfbb81dee91b1d7dbe6a2c05ab6"
                }}
                style={styles.ImageBackground_I68_6527_68_5970}
              />
            </View>
            <View style={styles.View_I68_6527_68_5971}>
              <View style={styles.View_I68_6527_68_5972} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f5b/3895/09c7870db19ae825efd13f2848980372"
                }}
                style={styles.ImageBackground_I68_6527_68_5973}
              />
            </View>
            <View style={styles.View_I68_6527_68_5974}>
              <View style={styles.View_I68_6527_68_5975} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1368/55a1/69593961e5ec903427e4d6100a992858"
                }}
                style={styles.ImageBackground_I68_6527_68_5976}
              />
            </View>
            <View style={styles.View_I68_6527_68_5977}>
              <View style={styles.View_I68_6527_68_5978} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5979}
              />
            </View>
            <View style={styles.View_I68_6527_68_5980}>
              <View style={styles.View_I68_6527_68_5981} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8640/8645/b6138bcfd729a2d092262c501d439560"
                }}
                style={styles.ImageBackground_I68_6527_68_5982}
              />
            </View>
            <View style={styles.View_I68_6527_68_5983}>
              <View style={styles.View_I68_6527_68_5984} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                }}
                style={styles.ImageBackground_I68_6527_68_5985}
              />
            </View>
            <View style={styles.View_I68_6527_68_5986}>
              <View style={styles.View_I68_6527_68_5987} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                }}
                style={styles.ImageBackground_I68_6527_68_5988}
              />
            </View>
            <View style={styles.View_I68_6527_68_5989}>
              <View style={styles.View_I68_6527_68_5990} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                }}
                style={styles.ImageBackground_I68_6527_68_5991}
              />
            </View>
            <View style={styles.View_I68_6527_68_5992}>
              <View style={styles.View_I68_6527_68_5993} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_5994}
              />
            </View>
            <View style={styles.View_I68_6527_68_5995}>
              <View style={styles.View_I68_6527_68_5996} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                }}
                style={styles.ImageBackground_I68_6527_68_5997}
              />
            </View>
            <View style={styles.View_I68_6527_68_5998}>
              <View style={styles.View_I68_6527_68_5999} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d622/1edd/51477f884722330418435dc4a8182445"
                }}
                style={styles.ImageBackground_I68_6527_68_6000}
              />
            </View>
            <View style={styles.View_I68_6527_68_6001}>
              <View style={styles.View_I68_6527_68_6002} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                }}
                style={styles.ImageBackground_I68_6527_68_6003}
              />
            </View>
            <View style={styles.View_I68_6527_68_6004}>
              <View style={styles.View_I68_6527_68_6005} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_6006}
              />
            </View>
            <View style={styles.View_I68_6527_68_6007}>
              <View style={styles.View_I68_6527_68_6008} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                }}
                style={styles.ImageBackground_I68_6527_68_6009}
              />
            </View>
            <View style={styles.View_I68_6527_68_6010}>
              <View style={styles.View_I68_6527_68_6011} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/951c/c2e7/f04e1533d552f75f80a704d6e58692ab"
                }}
                style={styles.ImageBackground_I68_6527_68_6012}
              />
            </View>
            <View style={styles.View_I68_6527_68_6013}>
              <View style={styles.View_I68_6527_68_6014} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_6015}
              />
            </View>
            <View style={styles.View_I68_6527_68_6016}>
              <View style={styles.View_I68_6527_68_6017} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_6018}
              />
            </View>
            <View style={styles.View_I68_6527_68_6019}>
              <View style={styles.View_I68_6527_68_6020} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_6021}
              />
            </View>
            <View style={styles.View_I68_6527_68_6022}>
              <View style={styles.View_I68_6527_68_6023} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                }}
                style={styles.ImageBackground_I68_6527_68_6024}
              />
            </View>
            <View style={styles.View_I68_6527_68_6025}>
              <View style={styles.View_I68_6527_68_6026} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                }}
                style={styles.ImageBackground_I68_6527_68_6027}
              />
            </View>
            <View style={styles.View_I68_6527_68_6028}>
              <View style={styles.View_I68_6527_68_6029} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b6/b129/815bb0f59f70ae713c8fecac34547435"
                }}
                style={styles.ImageBackground_I68_6527_68_6030}
              />
            </View>
            <View style={styles.View_I68_6527_68_6031}>
              <View style={styles.View_I68_6527_68_6032} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ee/5466/3ea1284a2f4afe6c2564f34c9cf7ed08"
                }}
                style={styles.ImageBackground_I68_6527_68_6033}
              />
            </View>
            <View style={styles.View_I68_6527_68_6034}>
              <View style={styles.View_I68_6527_68_6035} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccca/7800/09962759ebbd6c8a50fe66a968601996"
                }}
                style={styles.ImageBackground_I68_6527_68_6036}
              />
            </View>
            <View style={styles.View_I68_6527_68_6037}>
              <View style={styles.View_I68_6527_68_6038} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce3/bbdd/151fdc48224d572c4b3218ed50810968"
                }}
                style={styles.ImageBackground_I68_6527_68_6039}
              />
            </View>
            <View style={styles.View_I68_6527_68_6040}>
              <View style={styles.View_I68_6527_68_6041} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                }}
                style={styles.ImageBackground_I68_6527_68_6042}
              />
            </View>
            <View style={styles.View_I68_6527_68_6043}>
              <View style={styles.View_I68_6527_68_6044} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bf/b090/80b4d8abfa0c01cd65cc1f452926b6be"
                }}
                style={styles.ImageBackground_I68_6527_68_6045}
              />
            </View>
            <View style={styles.View_I68_6527_68_6046}>
              <View style={styles.View_I68_6527_68_6047} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931d/f466/1fbedee9b66a1bd3da395974b36ba964"
                }}
                style={styles.ImageBackground_I68_6527_68_6048}
              />
            </View>
            <View style={styles.View_I68_6527_68_6049}>
              <View style={styles.View_I68_6527_68_6050} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/5499/5976f7453ac1068a9209738d81bd0cbc"
                }}
                style={styles.ImageBackground_I68_6527_68_6051}
              />
            </View>
            <View style={styles.View_I68_6527_68_6052}>
              <View style={styles.View_I68_6527_68_6053} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/5499/5976f7453ac1068a9209738d81bd0cbc"
                }}
                style={styles.ImageBackground_I68_6527_68_6054}
              />
            </View>
            <View style={styles.View_I68_6527_68_6055}>
              <View style={styles.View_I68_6527_68_6056} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                }}
                style={styles.ImageBackground_I68_6527_68_6057}
              />
            </View>
            <View style={styles.View_I68_6527_68_6058}>
              <View style={styles.View_I68_6527_68_6059} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                }}
                style={styles.ImageBackground_I68_6527_68_6060}
              />
            </View>
            <View style={styles.View_I68_6527_68_6061}>
              <View style={styles.View_I68_6527_68_6062} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6063}
              />
            </View>
            <View style={styles.View_I68_6527_68_6064}>
              <View style={styles.View_I68_6527_68_6065} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6066}
              />
            </View>
            <View style={styles.View_I68_6527_68_6067}>
              <View style={styles.View_I68_6527_68_6068} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6069}
              />
            </View>
            <View style={styles.View_I68_6527_68_6070}>
              <View style={styles.View_I68_6527_68_6071} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f061/8c90/53654c275b89a6b0a70e026bcb13f449"
                }}
                style={styles.ImageBackground_I68_6527_68_6072}
              />
            </View>
            <View style={styles.View_I68_6527_68_6073}>
              <View style={styles.View_I68_6527_68_6074} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6075}
              />
            </View>
            <View style={styles.View_I68_6527_68_6076}>
              <View style={styles.View_I68_6527_68_6077} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6078}
              />
            </View>
            <View style={styles.View_I68_6527_68_6079}>
              <View style={styles.View_I68_6527_68_6080} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1afb/362f/7a04830e9ef32ce4d36fcdd449ffb05b"
                }}
                style={styles.ImageBackground_I68_6527_68_6081}
              />
            </View>
            <View style={styles.View_I68_6527_68_6082}>
              <View style={styles.View_I68_6527_68_6083} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                }}
                style={styles.ImageBackground_I68_6527_68_6084}
              />
            </View>
            <View style={styles.View_I68_6527_68_6085}>
              <View style={styles.View_I68_6527_68_6086} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6087}
              />
            </View>
            <View style={styles.View_I68_6527_68_6088}>
              <View style={styles.View_I68_6527_68_6089} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6090}
              />
            </View>
            <View style={styles.View_I68_6527_68_6091}>
              <View style={styles.View_I68_6527_68_6092} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6093}
              />
            </View>
            <View style={styles.View_I68_6527_68_6094}>
              <View style={styles.View_I68_6527_68_6095} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6096}
              />
            </View>
            <View style={styles.View_I68_6527_68_6097}>
              <View style={styles.View_I68_6527_68_6098} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6099}
              />
            </View>
            <View style={styles.View_I68_6527_68_6100}>
              <View style={styles.View_I68_6527_68_6101} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6102}
              />
            </View>
            <View style={styles.View_I68_6527_68_6103}>
              <View style={styles.View_I68_6527_68_6104} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                }}
                style={styles.ImageBackground_I68_6527_68_6105}
              />
            </View>
            <View style={styles.View_I68_6527_68_6106}>
              <View style={styles.View_I68_6527_68_6107} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                }}
                style={styles.ImageBackground_I68_6527_68_6108}
              />
            </View>
            <View style={styles.View_I68_6527_68_6109}>
              <View style={styles.View_I68_6527_68_6110} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                }}
                style={styles.ImageBackground_I68_6527_68_6111}
              />
            </View>
          </View>
          <View style={styles.View_I68_6527_75_5874}>
            <View style={styles.View_I68_6527_75_4454} />
            <View style={styles.View_I68_6527_75_5166}>
              <View style={styles.View_I68_6527_75_5167}>
                <View style={styles.View_I68_6527_75_5168} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5169}
                />
              </View>
              <View style={styles.View_I68_6527_75_5170}>
                <View style={styles.View_I68_6527_75_5171} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5172}
                />
              </View>
              <View style={styles.View_I68_6527_75_5173}>
                <View style={styles.View_I68_6527_75_5174} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5175}
                />
              </View>
              <View style={styles.View_I68_6527_75_5176}>
                <View style={styles.View_I68_6527_75_5177} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5178}
                />
              </View>
              <View style={styles.View_I68_6527_75_5179}>
                <View style={styles.View_I68_6527_75_5180} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5181}
                />
              </View>
              <View style={styles.View_I68_6527_75_5182}>
                <View style={styles.View_I68_6527_75_5183} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/379e/2005/c5b54eb67d6acf8112fc1f08b3117cdd"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5184}
                />
              </View>
              <View style={styles.View_I68_6527_75_5185}>
                <View style={styles.View_I68_6527_75_5186} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5187}
                />
              </View>
              <View style={styles.View_I68_6527_75_5188}>
                <View style={styles.View_I68_6527_75_5189} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5190}
                />
              </View>
              <View style={styles.View_I68_6527_75_5191}>
                <View style={styles.View_I68_6527_75_5192} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5193}
                />
              </View>
              <View style={styles.View_I68_6527_75_5194}>
                <View style={styles.View_I68_6527_75_5195} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5196}
                />
              </View>
              <View style={styles.View_I68_6527_75_5197}>
                <View style={styles.View_I68_6527_75_5198} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5199}
                />
              </View>
              <View style={styles.View_I68_6527_75_5200}>
                <View style={styles.View_I68_6527_75_5201} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d12/a241/84c412ed5cd6a652314efaa78a5e99de"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5202}
                />
              </View>
              <View style={styles.View_I68_6527_75_5203}>
                <View style={styles.View_I68_6527_75_5204} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1f/7039/bdf619cc37d85fd385d24fa634c47127"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5205}
                />
              </View>
              <View style={styles.View_I68_6527_75_5206}>
                <View style={styles.View_I68_6527_75_5207} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5208}
                />
              </View>
              <View style={styles.View_I68_6527_75_5209}>
                <View style={styles.View_I68_6527_75_5210} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8640/8645/b6138bcfd729a2d092262c501d439560"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5211}
                />
              </View>
              <View style={styles.View_I68_6527_75_5212}>
                <View style={styles.View_I68_6527_75_5213} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a35/7915/e7a24e4d3d73e2d0751a2f3ae7bf859c"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5214}
                />
              </View>
              <View style={styles.View_I68_6527_75_5215}>
                <View style={styles.View_I68_6527_75_5216} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5217}
                />
              </View>
              <View style={styles.View_I68_6527_75_5218}>
                <View style={styles.View_I68_6527_75_5219} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5220}
                />
              </View>
              <View style={styles.View_I68_6527_75_5221}>
                <View style={styles.View_I68_6527_75_5222} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5223}
                />
              </View>
              <View style={styles.View_I68_6527_75_5224}>
                <View style={styles.View_I68_6527_75_5225} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/2b44/5d843b437af1913059d6c51f12573fbd"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5226}
                />
              </View>
              <View style={styles.View_I68_6527_75_5227}>
                <View style={styles.View_I68_6527_75_5228} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/2b44/5d843b437af1913059d6c51f12573fbd"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5229}
                />
              </View>
              <View style={styles.View_I68_6527_75_5230}>
                <View style={styles.View_I68_6527_75_5231} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d4e/e27b/6149aefc83c57592f93563dd857d0885"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5232}
                />
              </View>
              <View style={styles.View_I68_6527_75_5233}>
                <View style={styles.View_I68_6527_75_5234} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5235}
                />
              </View>
              <View style={styles.View_I68_6527_75_5236}>
                <View style={styles.View_I68_6527_75_5237} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5238}
                />
              </View>
              <View style={styles.View_I68_6527_75_5239}>
                <View style={styles.View_I68_6527_75_5240} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5241}
                />
              </View>
              <View style={styles.View_I68_6527_75_5242}>
                <View style={styles.View_I68_6527_75_5243} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5244}
                />
              </View>
              <View style={styles.View_I68_6527_75_5245}>
                <View style={styles.View_I68_6527_75_5246} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/0284/0257f6448c8d3dee991d4887533bbf19"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5247}
                />
              </View>
              <View style={styles.View_I68_6527_75_5248}>
                <View style={styles.View_I68_6527_75_5249} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5250}
                />
              </View>
              <View style={styles.View_I68_6527_75_5251}>
                <View style={styles.View_I68_6527_75_5252} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5253}
                />
              </View>
              <View style={styles.View_I68_6527_75_5254}>
                <View style={styles.View_I68_6527_75_5255} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ab1/220f/ad72ed8e8c10842372f57a4c2dcf2b5e"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5256}
                />
              </View>
              <View style={styles.View_I68_6527_75_5257}>
                <View style={styles.View_I68_6527_75_5258} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2264/e219/21deabfbb81dee91b1d7dbe6a2c05ab6"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5259}
                />
              </View>
              <View style={styles.View_I68_6527_75_5260}>
                <View style={styles.View_I68_6527_75_5261} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f5b/3895/09c7870db19ae825efd13f2848980372"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5262}
                />
              </View>
              <View style={styles.View_I68_6527_75_5263}>
                <View style={styles.View_I68_6527_75_5264} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1368/55a1/69593961e5ec903427e4d6100a992858"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5265}
                />
              </View>
              <View style={styles.View_I68_6527_75_5266}>
                <View style={styles.View_I68_6527_75_5267} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5268}
                />
              </View>
              <View style={styles.View_I68_6527_75_5269}>
                <View style={styles.View_I68_6527_75_5270} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8640/8645/b6138bcfd729a2d092262c501d439560"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5271}
                />
              </View>
              <View style={styles.View_I68_6527_75_5272}>
                <View style={styles.View_I68_6527_75_5273} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc9c/d2d4/ef28581d12300c267d5242cdc13f7649"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5274}
                />
              </View>
              <View style={styles.View_I68_6527_75_5275}>
                <View style={styles.View_I68_6527_75_5276} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2717/7cc6/81699352dd9bb0e90603852105170a8c"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5277}
                />
              </View>
              <View style={styles.View_I68_6527_75_5278}>
                <View style={styles.View_I68_6527_75_5279} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5280}
                />
              </View>
              <View style={styles.View_I68_6527_75_5281}>
                <View style={styles.View_I68_6527_75_5282} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5283}
                />
              </View>
              <View style={styles.View_I68_6527_75_5284}>
                <View style={styles.View_I68_6527_75_5285} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5286}
                />
              </View>
              <View style={styles.View_I68_6527_75_5287}>
                <View style={styles.View_I68_6527_75_5288} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d622/1edd/51477f884722330418435dc4a8182445"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5289}
                />
              </View>
              <View style={styles.View_I68_6527_75_5290}>
                <View style={styles.View_I68_6527_75_5291} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5292}
                />
              </View>
              <View style={styles.View_I68_6527_75_5293}>
                <View style={styles.View_I68_6527_75_5294} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5295}
                />
              </View>
              <View style={styles.View_I68_6527_75_5296}>
                <View style={styles.View_I68_6527_75_5297} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5298}
                />
              </View>
              <View style={styles.View_I68_6527_75_5299}>
                <View style={styles.View_I68_6527_75_5300} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/951c/c2e7/f04e1533d552f75f80a704d6e58692ab"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5301}
                />
              </View>
              <View style={styles.View_I68_6527_75_5302}>
                <View style={styles.View_I68_6527_75_5303} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5304}
                />
              </View>
              <View style={styles.View_I68_6527_75_5305}>
                <View style={styles.View_I68_6527_75_5306} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5307}
                />
              </View>
              <View style={styles.View_I68_6527_75_5308}>
                <View style={styles.View_I68_6527_75_5309} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5310}
                />
              </View>
              <View style={styles.View_I68_6527_75_5311}>
                <View style={styles.View_I68_6527_75_5312} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c97/e0df/8773bd3e98d26707810974753ed31e11"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5313}
                />
              </View>
              <View style={styles.View_I68_6527_75_5314}>
                <View style={styles.View_I68_6527_75_5315} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f2/0dd9/d0b4a16c3403bf9dabbcfd1b2015a0b5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5316}
                />
              </View>
              <View style={styles.View_I68_6527_75_5317}>
                <View style={styles.View_I68_6527_75_5318} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b6/b129/815bb0f59f70ae713c8fecac34547435"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5319}
                />
              </View>
              <View style={styles.View_I68_6527_75_5320}>
                <View style={styles.View_I68_6527_75_5321} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1ee/5466/3ea1284a2f4afe6c2564f34c9cf7ed08"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5322}
                />
              </View>
              <View style={styles.View_I68_6527_75_5323}>
                <View style={styles.View_I68_6527_75_5324} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccca/7800/09962759ebbd6c8a50fe66a968601996"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5325}
                />
              </View>
              <View style={styles.View_I68_6527_75_5326}>
                <View style={styles.View_I68_6527_75_5327} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce3/bbdd/151fdc48224d572c4b3218ed50810968"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5328}
                />
              </View>
              <View style={styles.View_I68_6527_75_5329}>
                <View style={styles.View_I68_6527_75_5330} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5331}
                />
              </View>
              <View style={styles.View_I68_6527_75_5332}>
                <View style={styles.View_I68_6527_75_5333} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bf/b090/80b4d8abfa0c01cd65cc1f452926b6be"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5334}
                />
              </View>
              <View style={styles.View_I68_6527_75_5335}>
                <View style={styles.View_I68_6527_75_5336} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931d/f466/1fbedee9b66a1bd3da395974b36ba964"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5337}
                />
              </View>
              <View style={styles.View_I68_6527_75_5338}>
                <View style={styles.View_I68_6527_75_5339} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/5499/5976f7453ac1068a9209738d81bd0cbc"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5340}
                />
              </View>
              <View style={styles.View_I68_6527_75_5341}>
                <View style={styles.View_I68_6527_75_5342} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/5499/5976f7453ac1068a9209738d81bd0cbc"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5343}
                />
              </View>
              <View style={styles.View_I68_6527_75_5344}>
                <View style={styles.View_I68_6527_75_5345} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5346}
                />
              </View>
              <View style={styles.View_I68_6527_75_5347}>
                <View style={styles.View_I68_6527_75_5348} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c5e/8bec/aef2456cdbf76a7f664e9c4cf99f6b40"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5349}
                />
              </View>
              <View style={styles.View_I68_6527_75_5350}>
                <View style={styles.View_I68_6527_75_5351} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5352}
                />
              </View>
              <View style={styles.View_I68_6527_75_5353}>
                <View style={styles.View_I68_6527_75_5354} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5355}
                />
              </View>
              <View style={styles.View_I68_6527_75_5356}>
                <View style={styles.View_I68_6527_75_5357} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5358}
                />
              </View>
              <View style={styles.View_I68_6527_75_5359}>
                <View style={styles.View_I68_6527_75_5360} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f061/8c90/53654c275b89a6b0a70e026bcb13f449"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5361}
                />
              </View>
              <View style={styles.View_I68_6527_75_5362}>
                <View style={styles.View_I68_6527_75_5363} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5364}
                />
              </View>
              <View style={styles.View_I68_6527_75_5365}>
                <View style={styles.View_I68_6527_75_5366} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5367}
                />
              </View>
              <View style={styles.View_I68_6527_75_5368}>
                <View style={styles.View_I68_6527_75_5369} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1afb/362f/7a04830e9ef32ce4d36fcdd449ffb05b"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5370}
                />
              </View>
              <View style={styles.View_I68_6527_75_5371}>
                <View style={styles.View_I68_6527_75_5372} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5373}
                />
              </View>
              <View style={styles.View_I68_6527_75_5374}>
                <View style={styles.View_I68_6527_75_5375} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5376}
                />
              </View>
              <View style={styles.View_I68_6527_75_5377}>
                <View style={styles.View_I68_6527_75_5378} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5379}
                />
              </View>
              <View style={styles.View_I68_6527_75_5380}>
                <View style={styles.View_I68_6527_75_5381} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5382}
                />
              </View>
              <View style={styles.View_I68_6527_75_5383}>
                <View style={styles.View_I68_6527_75_5384} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5385}
                />
              </View>
              <View style={styles.View_I68_6527_75_5386}>
                <View style={styles.View_I68_6527_75_5387} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5388}
                />
              </View>
              <View style={styles.View_I68_6527_75_5389}>
                <View style={styles.View_I68_6527_75_5390} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5391}
                />
              </View>
              <View style={styles.View_I68_6527_75_5392}>
                <View style={styles.View_I68_6527_75_5393} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ac/13f0/a1eff7961dda935ebeca6d169dab85f0"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5394}
                />
              </View>
              <View style={styles.View_I68_6527_75_5395}>
                <View style={styles.View_I68_6527_75_5396} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5397}
                />
              </View>
              <View style={styles.View_I68_6527_75_5398}>
                <View style={styles.View_I68_6527_75_5399} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213f/c5c0/37f1ae535225c2c3906549937e74e0d5"
                  }}
                  style={styles.ImageBackground_I68_6527_75_5400}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I68_6527_68_6347}>
          <View style={styles.View_I68_6527_68_6348}>
            <View style={styles.View_I68_6527_68_6349} />
            <View style={styles.View_I68_6527_68_6350} />
            <View style={styles.View_I68_6527_68_6351} />
            <View style={styles.View_I68_6527_68_6352} />
            <View style={styles.View_I68_6527_68_6353} />
            <View style={styles.View_I68_6527_68_6354} />
            <View style={styles.View_I68_6527_68_6355} />
            <View style={styles.View_I68_6527_68_6356} />
            <View style={styles.View_I68_6527_68_6357} />
            <View style={styles.View_I68_6527_68_6358} />
            <View style={styles.View_I68_6527_68_6359} />
            <View style={styles.View_I68_6527_68_6360} />
            <View style={styles.View_I68_6527_68_6361} />
            <View style={styles.View_I68_6527_68_6362} />
            <View style={styles.View_I68_6527_68_6363} />
            <View style={styles.View_I68_6527_68_6364} />
            <View style={styles.View_I68_6527_68_6365} />
            <View style={styles.View_I68_6527_68_6366} />
            <View style={styles.View_I68_6527_68_6367} />
            <View style={styles.View_I68_6527_68_6368} />
            <View style={styles.View_I68_6527_68_6369} />
            <View style={styles.View_I68_6527_68_6370} />
            <View style={styles.View_I68_6527_68_6371} />
            <View style={styles.View_I68_6527_68_6372} />
            <View style={styles.View_I68_6527_68_6373} />
            <View style={styles.View_I68_6527_68_6374} />
            <View style={styles.View_I68_6527_68_6375} />
            <View style={styles.View_I68_6527_68_6376} />
            <View style={styles.View_I68_6527_68_6377} />
            <View style={styles.View_I68_6527_68_6378} />
            <View style={styles.View_I68_6527_68_6379} />
            <View style={styles.View_I68_6527_68_6380} />
            <View style={styles.View_I68_6527_68_6381} />
            <View style={styles.View_I68_6527_68_6382} />
            <View style={styles.View_I68_6527_68_6383} />
            <View style={styles.View_I68_6527_68_6384} />
            <View style={styles.View_I68_6527_68_6385} />
            <View style={styles.View_I68_6527_68_6386} />
            <View style={styles.View_I68_6527_68_6387} />
            <View style={styles.View_I68_6527_68_6388} />
            <View style={styles.View_I68_6527_68_6389} />
            <View style={styles.View_I68_6527_68_6390} />
            <View style={styles.View_I68_6527_68_6391} />
            <View style={styles.View_I68_6527_68_6392} />
            <View style={styles.View_I68_6527_68_6393} />
            <View style={styles.View_I68_6527_68_6394} />
            <View style={styles.View_I68_6527_68_6395} />
            <View style={styles.View_I68_6527_68_6396} />
            <View style={styles.View_I68_6527_68_6397} />
            <View style={styles.View_I68_6527_68_6398} />
            <View style={styles.View_I68_6527_68_6399} />
            <View style={styles.View_I68_6527_68_6400} />
            <View style={styles.View_I68_6527_68_6401} />
            <View style={styles.View_I68_6527_68_6402} />
            <View style={styles.View_I68_6527_68_6403} />
            <View style={styles.View_I68_6527_68_6404} />
            <View style={styles.View_I68_6527_68_6405} />
            <View style={styles.View_I68_6527_68_6406} />
            <View style={styles.View_I68_6527_68_6407} />
            <View style={styles.View_I68_6527_68_6408} />
            <View style={styles.View_I68_6527_68_6409} />
            <View style={styles.View_I68_6527_68_6410} />
            <View style={styles.View_I68_6527_68_6411} />
            <View style={styles.View_I68_6527_68_6412} />
            <View style={styles.View_I68_6527_68_6413} />
            <View style={styles.View_I68_6527_68_6414} />
            <View style={styles.View_I68_6527_68_6415} />
          </View>
          <View style={styles.View_I68_6527_68_6416}>
            <View style={styles.View_I68_6527_68_6417} />
            <View style={styles.View_I68_6527_68_6418} />
            <View style={styles.View_I68_6527_68_6419} />
            <View style={styles.View_I68_6527_68_6420} />
            <View style={styles.View_I68_6527_68_6421} />
            <View style={styles.View_I68_6527_68_6422} />
            <View style={styles.View_I68_6527_68_6423} />
            <View style={styles.View_I68_6527_68_6424} />
            <View style={styles.View_I68_6527_68_6425} />
            <View style={styles.View_I68_6527_68_6426} />
            <View style={styles.View_I68_6527_68_6427} />
            <View style={styles.View_I68_6527_68_6428} />
            <View style={styles.View_I68_6527_68_6429} />
            <View style={styles.View_I68_6527_68_6430} />
            <View style={styles.View_I68_6527_68_6431} />
            <View style={styles.View_I68_6527_68_6432} />
            <View style={styles.View_I68_6527_68_6433} />
            <View style={styles.View_I68_6527_68_6434} />
            <View style={styles.View_I68_6527_68_6435} />
            <View style={styles.View_I68_6527_68_6436} />
            <View style={styles.View_I68_6527_68_6437} />
            <View style={styles.View_I68_6527_68_6438} />
            <View style={styles.View_I68_6527_68_6439} />
            <View style={styles.View_I68_6527_68_6440} />
            <View style={styles.View_I68_6527_68_6441} />
            <View style={styles.View_I68_6527_68_6442} />
            <View style={styles.View_I68_6527_68_6443} />
            <View style={styles.View_I68_6527_68_6444} />
            <View style={styles.View_I68_6527_68_6445} />
            <View style={styles.View_I68_6527_68_6446} />
            <View style={styles.View_I68_6527_68_6447} />
            <View style={styles.View_I68_6527_68_6448} />
            <View style={styles.View_I68_6527_68_6449} />
            <View style={styles.View_I68_6527_68_6450} />
            <View style={styles.View_I68_6527_68_6451} />
            <View style={styles.View_I68_6527_68_6452} />
            <View style={styles.View_I68_6527_68_6453} />
            <View style={styles.View_I68_6527_68_6454} />
            <View style={styles.View_I68_6527_68_6455} />
            <View style={styles.View_I68_6527_68_6456} />
            <View style={styles.View_I68_6527_68_6457} />
            <View style={styles.View_I68_6527_68_6458} />
            <View style={styles.View_I68_6527_68_6459} />
            <View style={styles.View_I68_6527_68_6460} />
            <View style={styles.View_I68_6527_68_6461} />
            <View style={styles.View_I68_6527_68_6462} />
            <View style={styles.View_I68_6527_68_6463} />
            <View style={styles.View_I68_6527_68_6464} />
            <View style={styles.View_I68_6527_68_6465} />
            <View style={styles.View_I68_6527_68_6466} />
            <View style={styles.View_I68_6527_68_6467} />
            <View style={styles.View_I68_6527_68_6468} />
            <View style={styles.View_I68_6527_68_6469} />
            <View style={styles.View_I68_6527_68_6470} />
            <View style={styles.View_I68_6527_68_6471} />
            <View style={styles.View_I68_6527_68_6472} />
            <View style={styles.View_I68_6527_68_6473} />
            <View style={styles.View_I68_6527_68_6474} />
            <View style={styles.View_I68_6527_68_6475} />
            <View style={styles.View_I68_6527_68_6476} />
            <View style={styles.View_I68_6527_68_6477} />
            <View style={styles.View_I68_6527_68_6478} />
            <View style={styles.View_I68_6527_68_6479} />
            <View style={styles.View_I68_6527_68_6480} />
            <View style={styles.View_I68_6527_68_6481} />
            <View style={styles.View_I68_6527_68_6482} />
            <View style={styles.View_I68_6527_68_6483} />
          </View>
        </View>
        <View style={styles.View_I68_6527_75_10071}>
          <View style={styles.View_I68_6527_68_6507}>
            <Text style={styles.Text_I68_6527_68_6507}>SOL/USDC</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/815d/f7d9/7ee31623ce0d45cb0579b11751f0a5fc"
            }}
            style={styles.ImageBackground_I68_6527_75_7556}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d60c/e35a/553c3a90c6193864e186b5378a464933"
            }}
            style={styles.ImageBackground_I68_6527_75_8175}
          />
          <View style={styles.View_I68_6527_75_9438}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc8/a9f1/8cc38f38a68a95c8a7116c970cdf0326"
              }}
              style={styles.ImageBackground_I68_6527_75_8795}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc8/a9f1/8cc38f38a68a95c8a7116c970cdf0326"
              }}
              style={styles.ImageBackground_I68_6527_75_8798}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc8/a9f1/8cc38f38a68a95c8a7116c970cdf0326"
              }}
              style={styles.ImageBackground_I68_6527_75_8801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc8/a9f1/8cc38f38a68a95c8a7116c970cdf0326"
              }}
              style={styles.ImageBackground_I68_6527_75_8804}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_69_3435}>
        <View style={styles.View_I69_3435_69_3349} />
        <View style={styles.View_I69_3435_69_3350} />
        <View style={styles.View_I69_3435_69_3351} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26e6/8bf4/7c9e12079b31db035a6d1a66df8988eb"
          }}
          style={styles.ImageBackground_I69_3435_69_3352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdcc/90a2/022eaa8fb2ff5aad1b3f66d99cf4222a"
          }}
          style={styles.ImageBackground_I69_3435_69_3357}
        />
        <View style={styles.View_I69_3435_69_3423}>
          <View style={styles.View_I69_3435_69_3370}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2016/f31a/77684d543f2eac5c86a6e301e2fd1928"
              }}
              style={styles.ImageBackground_I69_3435_69_3359}
            />
            <View style={styles.View_I69_3435_69_3366}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961f/c55a/80eb6ce95dca7612c7606a8d22f85a02"
                }}
                style={styles.ImageBackground_I69_3435_69_3367}
              />
            </View>
            <View style={styles.View_I69_3435_69_3360}>
              <Text style={styles.Text_I69_3435_69_3360}>Varti Branco</Text>
            </View>
            <View style={styles.View_I69_3435_69_3361}>
              <Text style={styles.Text_I69_3435_69_3361}>16:20</Text>
            </View>
            <View style={styles.View_I69_3435_69_3362} />
            <View style={styles.View_I69_3435_69_3369}>
              <Text style={styles.Text_I69_3435_69_3369}>Good luck all</Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2016/f31a/77684d543f2eac5c86a6e301e2fd1928"
              }}
              style={styles.ImageBackground_I69_3435_69_3425}
            />
            <View style={styles.View_I69_3435_69_3426}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961f/c55a/80eb6ce95dca7612c7606a8d22f85a02"
                }}
                style={styles.ImageBackground_I69_3435_69_3427}
              />
            </View>
            <View style={styles.View_I69_3435_69_3429}>
              <Text style={styles.Text_I69_3435_69_3429}>Varti Branco</Text>
            </View>
            <View style={styles.View_I69_3435_69_3430}>
              <Text style={styles.Text_I69_3435_69_3430}>16:25</Text>
            </View>
            <View style={styles.View_I69_3435_69_3431} />
            <View style={styles.View_I69_3435_69_3432}>
              <Text style={styles.Text_I69_3435_69_3432}>Good luck all</Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3371}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e855/63cb/207809df699d13fda0d0756cde86fbbb"
              }}
              style={styles.ImageBackground_I69_3435_69_3372}
            />
            <View style={styles.View_I69_3435_69_3373} />
            <View style={styles.View_I69_3435_69_3376}>
              <Text style={styles.Text_I69_3435_69_3376}>Ellen Rocha</Text>
            </View>
            <View style={styles.View_I69_3435_69_3377}>
              <Text style={styles.Text_I69_3435_69_3377}>16:21</Text>
            </View>
            <View style={styles.View_I69_3435_69_3378} />
            <View style={styles.View_I69_3435_69_3379}>
              <Text style={styles.Text_I69_3435_69_3379}>
                You never replied back what happen?
              </Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3399}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e855/63cb/207809df699d13fda0d0756cde86fbbb"
              }}
              style={styles.ImageBackground_I69_3435_69_3400}
            />
            <View style={styles.View_I69_3435_69_3401} />
            <View style={styles.View_I69_3435_69_3402}>
              <Text style={styles.Text_I69_3435_69_3402}>Ellen Rocha</Text>
            </View>
            <View style={styles.View_I69_3435_69_3403}>
              <Text style={styles.Text_I69_3435_69_3403}>16:24</Text>
            </View>
            <View style={styles.View_I69_3435_69_3404} />
            <View style={styles.View_I69_3435_69_3405}>
              <Text style={styles.Text_I69_3435_69_3405}>
                I wan to start my new real life
              </Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3406}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e855/63cb/207809df699d13fda0d0756cde86fbbb"
              }}
              style={styles.ImageBackground_I69_3435_69_3407}
            />
            <View style={styles.View_I69_3435_69_3408} />
            <View style={styles.View_I69_3435_69_3409}>
              <Text style={styles.Text_I69_3435_69_3409}>Ellen Rocha</Text>
            </View>
            <View style={styles.View_I69_3435_69_3410}>
              <Text style={styles.Text_I69_3435_69_3410}>16:25</Text>
            </View>
            <View style={styles.View_I69_3435_69_3411} />
            <View style={styles.View_I69_3435_69_3412}>
              <Text style={styles.Text_I69_3435_69_3412}>😂😂😂😂😂😂</Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3380}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0577/f944/46d69922597c17fcd85ac37a4cc20697"
              }}
              style={styles.ImageBackground_I69_3435_69_3381}
            />
            <View style={styles.View_I69_3435_69_3382} />
            <View style={styles.View_I69_3435_69_3385}>
              <Text style={styles.Text_I69_3435_69_3385}>Cagezinho</Text>
            </View>
            <View style={styles.View_I69_3435_69_3386}>
              <Text style={styles.Text_I69_3435_69_3386}>16:23</Text>
            </View>
            <View style={styles.View_I69_3435_69_3387} />
            <View style={styles.View_I69_3435_69_3388}>
              <Text style={styles.Text_I69_3435_69_3388}>😂😂😂😂😂😂</Text>
            </View>
          </View>
          <View style={styles.View_I69_3435_69_3413}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0577/f944/46d69922597c17fcd85ac37a4cc20697"
              }}
              style={styles.ImageBackground_I69_3435_69_3414}
            />
            <View style={styles.View_I69_3435_69_3415} />
            <View style={styles.View_I69_3435_69_3416}>
              <Text style={styles.Text_I69_3435_69_3416}>Cagezinho</Text>
            </View>
            <View style={styles.View_I69_3435_69_3417}>
              <Text style={styles.Text_I69_3435_69_3417}>16:23</Text>
            </View>
            <View style={styles.View_I69_3435_69_3418} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a0/ca09/4fdf8361b2fedbdd5f662cb4fbfa2b8a"
              }}
              style={styles.ImageBackground_I69_3435_69_3422}
            />
          </View>
          <View style={styles.View_I69_3435_69_3389}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2016/f31a/77684d543f2eac5c86a6e301e2fd1928"
              }}
              style={styles.ImageBackground_I69_3435_69_3390}
            />
            <View style={styles.View_I69_3435_69_3391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961f/c55a/80eb6ce95dca7612c7606a8d22f85a02"
                }}
                style={styles.ImageBackground_I69_3435_69_3392}
              />
            </View>
            <View style={styles.View_I69_3435_69_3394}>
              <Text style={styles.Text_I69_3435_69_3394}>Varti Branco</Text>
            </View>
            <View style={styles.View_I69_3435_69_3395}>
              <Text style={styles.Text_I69_3435_69_3395}>16:23</Text>
            </View>
            <View style={styles.View_I69_3435_69_3396} />
            <View style={styles.View_I69_3435_69_3397}>
              <Text style={styles.Text_I69_3435_69_3397}>
                I see rich people 🤑
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(20, 21, 24, 1)" },
  View_2: { height: hp("150%") },
  View_36_2340: {
    width: wp("125%"),
    minWidth: wp("125%"),
    height: hp("265%"),
    minHeight: hp("265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-45%"),
    top: hp("-46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_2340_36_2253: {
    flexGrow: 1,
    width: wp("122%"),
    height: hp("243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_I36_2340_36_2254: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("51%")
  },
  View_I36_2340_36_2255: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2256: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2257: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2258: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2259: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2261: {
    width: wp("83%"),
    height: hp("151%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2262: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I36_2340_36_2263: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2264: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2265: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2266: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2268: {
    width: wp("77%"),
    height: hp("139%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2269: {
    width: wp("70%"),
    height: hp("128%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I36_2340_36_2270: {
    width: wp("70%"),
    height: hp("128%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2271: {
    width: wp("70%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2272: {
    width: wp("70%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2273: {
    width: wp("70%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2275: {
    width: wp("70%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2276: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I36_2340_36_2277: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2278: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2279: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2280: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2282: {
    width: wp("64%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2283: {
    width: wp("58%"),
    height: hp("105%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I36_2340_36_2284: {
    width: wp("58%"),
    height: hp("104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2285: {
    width: wp("58%"),
    height: hp("104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2286: {
    width: wp("58%"),
    height: hp("104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2287: {
    width: wp("58%"),
    height: hp("104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2289: {
    width: wp("58%"),
    height: hp("104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2290: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I36_2340_36_2291: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2292: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2293: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2294: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2296: {
    width: wp("51%"),
    height: hp("93%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2297: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I36_2340_36_2298: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2299: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2300: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2301: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2303: {
    width: wp("45%"),
    height: hp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2304: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_I36_2340_36_2305: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2306: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2307: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2308: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2310: {
    width: wp("38%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2311: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I36_2340_36_2312: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2313: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2314: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2315: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2317: {
    width: wp("32%"),
    height: hp("59%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2318: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_I36_2340_36_2319: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2320: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2321: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2322: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2324: {
    width: wp("26%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2325: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_I36_2340_36_2326: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2327: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2328: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2329: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2331: {
    width: wp("20%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2332: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_I36_2340_36_2333: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2334: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2340_36_2335: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2336: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2340_36_2338: {
    width: wp("15%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_36_2427: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("210%"),
    minHeight: hp("210%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("-73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I36_2427_36_2253: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I36_2427_36_2254: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("48%")
  },
  View_I36_2427_36_2255: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2256: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2257: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2258: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2259: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2261: {
    width: wp("59%"),
    height: hp("142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2262: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I36_2427_36_2263: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2264: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2265: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2266: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2268: {
    width: wp("54%"),
    height: hp("131%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2269: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I36_2427_36_2270: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2271: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2272: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2273: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2275: {
    width: wp("50%"),
    height: hp("120%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2276: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I36_2427_36_2277: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2278: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2279: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2280: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2282: {
    width: wp("45%"),
    height: hp("109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2283: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I36_2427_36_2284: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2285: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2286: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2287: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2289: {
    width: wp("41%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2290: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I36_2427_36_2291: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2292: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2293: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2294: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2296: {
    width: wp("36%"),
    height: hp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2297: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I36_2427_36_2298: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2299: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2300: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2301: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2303: {
    width: wp("32%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2304: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I36_2427_36_2305: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2306: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2307: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2308: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2310: {
    width: wp("27%"),
    height: hp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2311: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I36_2427_36_2312: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2313: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2314: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2315: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2317: {
    width: wp("23%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2318: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_I36_2427_36_2319: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2320: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2321: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2322: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2324: {
    width: wp("18%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2325: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I36_2427_36_2326: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2327: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2328: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2329: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2331: {
    width: wp("14%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2332: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_I36_2427_36_2333: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2334: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I36_2427_36_2335: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2336: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I36_2427_36_2338: {
    width: wp("11%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_2735: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(20, 21, 24, 0.800000011920929)"
  },
  View_I26_2735_23_6224: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2735_23_6225: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6226: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6226: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6227: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6227: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6228: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6228: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6229: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6230: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2735_23_6230_46_71: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2735_23_6230_46_71_0_4173: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I26_2735_23_6231: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("4%")
  },
  View_I26_2735_23_6232: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I26_2735_23_6232_144_3824: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_2735_23_6232_144_3825: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_2735_23_6233: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I26_2735_23_6234: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6235: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("3%")
  },
  ImageBackground_I26_2735_23_6236: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_2735_23_6237: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I26_2735_32_2657: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I26_2735_23_6238: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("3%"),
    backgroundColor: "rgba(47, 50, 65, 0.5)"
  },
  View_I26_2735_23_6238_275_11562: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I26_2735_23_6238_275_11562: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2735_23_6238_275_11563: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2735_23_6238_275_11563_143_4124: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2735_32_3290: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_2735_32_3291: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_26_2739: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7201: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7202: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7202_23_7438: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)",
    opacity: 0.800000011920929
  },
  View_I26_2739_23_7202_23_7439: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7202_23_7439: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7202_23_7440: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7202_23_7440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18.91826820373535,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7202_23_7441: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7202_23_7442: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7202_23_7442_23_184: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2739_23_7202_23_7442_23_184_0_3907: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7202_23_7443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7202_23_7443: {
    color: "rgba(0, 198, 235, 1)",
    fontSize: 14.221153259277344,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7202_23_7444: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I26_2739_23_7202_23_7445: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_2739_23_7202_23_7446: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7202_23_7446: {
    color: "rgba(165, 173, 207, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I26_2739_23_7202_23_7447: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_I26_2739_23_7203: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7203_23_7438: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)"
  },
  View_I26_2739_23_7203_23_7439: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7203_23_7439: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7203_23_7440: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7203_23_7440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18.91826820373535,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7203_23_7441: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7203_23_7442: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7203_23_7442_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2739_23_7203_23_7442_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7203_23_7443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7203_23_7443: {
    color: "rgba(250, 34, 86, 1)",
    fontSize: 14.221153259277344,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7203_23_7444: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_I26_2739_23_7203_23_7445: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_2739_23_7203_23_7445_23_189: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7203_23_7445_23_190: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I26_2739_23_7203_23_7445_23_191: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_2739_23_7203_23_7446: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7203_23_7446: {
    color: "rgba(165, 173, 207, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I26_2739_23_7203_23_7447: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_I26_2739_23_7204: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7204_23_7438: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)"
  },
  View_I26_2739_23_7204_23_7439: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7204_23_7439: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7204_23_7440: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7204_23_7440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18.91826820373535,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7204_23_7441: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7204_23_7442: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7204_23_7442_23_184: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2739_23_7204_23_7442_23_184_0_3907: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7204_23_7443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7204_23_7443: {
    color: "rgba(0, 198, 235, 1)",
    fontSize: 14.221153259277344,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7204_23_7444: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_I26_2739_23_7204_23_7445: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I26_2739_23_7204_23_7445_23_177: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7204_23_7445_23_178: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I26_2739_23_7204_23_7445_23_179: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_2739_23_7204_23_7446: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7204_23_7446: {
    color: "rgba(165, 173, 207, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I26_2739_23_7204_23_7447: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_I26_2739_23_7205: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7205_23_7438: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)"
  },
  View_I26_2739_23_7205_23_7439: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7205_23_7439: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7205_23_7440: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7205_23_7440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18.91826820373535,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7205_23_7441: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7205_23_7442: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7205_23_7442_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2739_23_7205_23_7442_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7205_23_7443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7205_23_7443: {
    color: "rgba(250, 34, 86, 1)",
    fontSize: 14.221153259277344,
    fontWeight: "900",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I26_2739_23_7205_23_7444: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_I26_2739_23_7205_23_7445: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I26_2739_23_7205_23_7445_23_205: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_2739_23_7205_23_7445_23_206: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I26_2739_23_7205_23_7445_23_207: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_2739_23_7205_23_7446: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I26_2739_23_7205_23_7446: {
    color: "rgba(165, 173, 207, 1)",
    fontSize: 12.30769157409668,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I26_2739_23_7205_23_7447: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_I26_2739_23_7206: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("9%")
  },
  ImageBackground_I26_2739_23_7208: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I26_2739_23_7209: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_2739_23_7209_143_4181: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I26_2739_23_7209_143_4181_0_3762: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_32_3430: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("149%"),
    minHeight: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I32_3430_32_3148: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_46_2458: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_40_2758: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)",
    opacity: 0.699999988079071
  },
  View_I46_2458_47_2959: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("4%")
  },
  ImageBackground_I46_2458_47_2615: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I46_2458_47_2791: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I46_2458_47_2791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.310192108154297,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I46_2458_47_3622: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%")
  },
  ImageBackground_I46_2458_59_4993: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("5%")
  },
  View_I46_2458_47_4421: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_47_4421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.496307373046875,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2499: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("15%")
  },
  View_I46_2458_56_3059: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 35, 41, 1)"
  },
  View_I46_2458_56_3060: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_I46_2458_56_3061: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_I46_2458_56_3062: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_56_3063: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I46_2458_56_3065: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3065: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3066: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I46_2458_56_3067: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_56_3068: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_56_3068_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_56_3068_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_56_3069: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  ImageBackground_I46_2458_56_3070: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I46_2458_56_3071: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_56_3072: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I46_2458_56_3074: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3074: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3075: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_56_3076: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_56_3077: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_56_3077_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_56_3077_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_56_3078: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%")
  },
  View_I46_2458_56_3079: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3079: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.339712142944336,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3080: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3080: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 9.97409725189209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2492: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  View_I46_2458_59_2493: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_2493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2494: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_2494: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2495: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%")
  },
  View_I46_2458_59_2496: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_2496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2497: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_2497: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3087: {
    width: wp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3087: {
    color: "rgba(212, 50, 89, 1)",
    fontSize: 8.341264724731445,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_75_6693: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I46_2458_75_6694: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_75_6695: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_75_6423: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_75_6423: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 9.030904769897461,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4611: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("15%")
  },
  View_I46_2458_59_4612: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 35, 41, 1)"
  },
  View_I46_2458_59_4613: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_I46_2458_59_4614: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_I46_2458_59_4615: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_4616: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I46_2458_59_4618: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4618: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4619: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I46_2458_59_4620: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_4621: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_4621_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_4621_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_4622: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  ImageBackground_I46_2458_59_4623: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I46_2458_59_4624: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_4625: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I46_2458_59_4627: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4628: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_59_4629: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_4630: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_4630_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_4630_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_4631: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%")
  },
  View_I46_2458_59_4632: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.339712142944336,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4633: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4633: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 9.97409725189209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4634: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  View_I46_2458_59_4635: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4635: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4636: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4636: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4637: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%")
  },
  View_I46_2458_59_4638: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4638: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4639: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4639: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_4640: {
    width: wp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_4640: {
    color: "rgba(212, 50, 89, 1)",
    fontSize: 8.341264724731445,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_75_6809: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I46_2458_75_6810: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_75_6811: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_75_6812: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_75_6812: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 9.030904769897461,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3371: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%")
  },
  View_I46_2458_59_3372: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 35, 41, 1)"
  },
  View_I46_2458_59_3373: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_I46_2458_59_3374: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_I46_2458_59_3375: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_3376: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I46_2458_59_3378: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3378: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3379: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I46_2458_59_3380: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_3381: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_3381_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_3381_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_3382: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  ImageBackground_I46_2458_59_3383: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I46_2458_59_3384: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_3385: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I46_2458_59_3387: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3388: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_59_3389: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_3390: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_3390_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_3390_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_3391: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%")
  },
  View_I46_2458_59_3392: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.339712142944336,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3393: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3393: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 9.97409725189209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3394: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  View_I46_2458_59_3395: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3395: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3396: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3396: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3397: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%")
  },
  View_I46_2458_59_3398: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3399: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3399: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3400: {
    width: wp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3400: {
    color: "rgba(212, 50, 89, 1)",
    fontSize: 8.341264724731445,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_75_6386: {
    width: wp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_75_6386: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 9.030904769897461,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3681: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_I46_2458_59_3682: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 35, 41, 1)"
  },
  View_I46_2458_59_3683: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_I46_2458_59_3684: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_I46_2458_59_3685: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_3686: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I46_2458_59_3688: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3688: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3689: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I46_2458_59_3690: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_3691: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_3691_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_3691_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_3692: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  ImageBackground_I46_2458_59_3693: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I46_2458_59_3694: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_59_3695: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I46_2458_59_3697: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3698: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_59_3699: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_59_3700: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_59_3700_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_59_3700_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_59_3701: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%")
  },
  View_I46_2458_59_3702: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.339712142944336,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3703: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3703: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 9.97409725189209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3704: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  View_I46_2458_59_3705: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3705: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3706: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3706: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3707: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%")
  },
  View_I46_2458_59_3708: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3708: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3709: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3709: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_3710: {
    width: wp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_59_3710: {
    color: "rgba(212, 50, 89, 1)",
    fontSize: 8.341264724731445,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_75_6349: {
    width: wp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_75_6349: {
    color: "rgba(125, 131, 150, 1)",
    fontSize: 9.030904769897461,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_59_2498: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("15%")
  },
  View_I46_2458_55_2990: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 35, 41, 1)"
  },
  View_I46_2458_55_2991: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_I46_2458_56_3039: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_I46_2458_55_2983: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_55_2984: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I46_2458_55_2989: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_55_2989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3022: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I46_2458_56_3023: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_56_3024: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_56_3024_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_56_3024_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_56_3028: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  ImageBackground_I46_2458_56_3041: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I46_2458_56_3029: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 36.769683837890625,
    borderBottomLeftRadius: 36.769683837890625,
    borderBottomRightRadius: 0
  },
  ImageBackground_I46_2458_56_3030: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I46_2458_56_3032: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3032: {
    color: "rgba(125, 132, 150, 1)",
    fontSize: 10.063544273376465,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3033: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_56_3034: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I46_2458_56_3035: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_2458_56_3035_23_199: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I46_2458_56_3035_23_199_0_4180: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I46_2458_56_3051: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_I46_2458_56_3050: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3050: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.339712142944336,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3042: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3042: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 9.97409725189209,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3052: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%")
  },
  View_I46_2458_56_3053: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3053: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3054: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3054: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3055: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%")
  },
  View_I46_2458_56_3056: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3056: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.766298294067383,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3057: {
    width: wp("3%"),
    minWidth: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3057: {
    color: "rgba(93, 101, 136, 1)",
    fontSize: 6.431464195251465,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_56_3058: {
    width: wp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_56_3058: {
    color: "rgba(1, 244, 200, 1)",
    fontSize: 8.341264724731445,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_57_2500: {
    width: wp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_57_2500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.560116767883301,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_2458_57_2501: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I46_2458_57_2493: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_2458_57_2493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.030904769897461,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I46_2458_57_2494: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I46_2458_59_5360: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("5%")
  },
  ImageBackground_I46_2458_59_5361: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%")
  },
  View_68_6527: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_6527_68_5873: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(29, 31, 37, 1)",
    opacity: 0.800000011920929
  },
  View_I68_6527_68_5874: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("-1%")
  },
  ImageBackground_I68_6527_68_5875: {
    width: wp("60%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I68_6527_68_5876: {
    width: wp("60%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5877: {
    width: wp("39%"),
    height: hp("32%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5878: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5879: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5880: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5881: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I68_6527_68_5882: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5883: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5884: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I68_6527_68_5885: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5886: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5887: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I68_6527_68_5888: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5889: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5890: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I68_6527_68_5891: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5892: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5893: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_I68_6527_68_5894: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5895: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5896: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I68_6527_68_5897: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5898: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5899: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I68_6527_68_5900: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5901: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5902: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I68_6527_68_5903: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5904: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5905: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_I68_6527_68_5906: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5907: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5908: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I68_6527_68_5909: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5910: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5911: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_I68_6527_68_5912: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5913: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5914: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_I68_6527_68_5915: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5916: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5917: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I68_6527_68_5918: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5919: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5920: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I68_6527_68_5921: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5922: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5923: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_I68_6527_68_5924: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5925: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5926: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_I68_6527_68_5927: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5928: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5929: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I68_6527_68_5930: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5931: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5932: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I68_6527_68_5933: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5934: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5935: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I68_6527_68_5936: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5937: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5938: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I68_6527_68_5939: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5940: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5941: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_I68_6527_68_5942: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5943: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5944: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I68_6527_68_5945: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5946: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5947: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I68_6527_68_5948: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5949: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5950: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I68_6527_68_5951: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5952: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5953: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I68_6527_68_5954: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5955: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5956: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I68_6527_68_5957: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5958: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5959: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I68_6527_68_5960: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5961: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5962: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I68_6527_68_5963: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5964: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5965: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I68_6527_68_5966: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5967: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5968: {
    width: wp("0%"),
    height: hp("14%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I68_6527_68_5969: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5970: {
    width: wp("0%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5971: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_I68_6527_68_5972: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5973: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5974: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_6527_68_5975: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5976: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5977: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I68_6527_68_5978: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5979: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5980: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I68_6527_68_5981: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5982: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5983: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I68_6527_68_5984: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5985: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5986: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I68_6527_68_5987: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5988: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5989: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I68_6527_68_5990: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5991: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5992: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I68_6527_68_5993: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5994: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5995: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I68_6527_68_5996: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_5997: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_5998: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I68_6527_68_5999: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6000: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6001: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I68_6527_68_6002: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6003: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6004: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I68_6527_68_6005: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6006: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6007: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I68_6527_68_6008: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6009: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6010: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I68_6527_68_6011: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6012: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6013: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I68_6527_68_6014: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6015: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6016: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_I68_6527_68_6017: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6018: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6019: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_I68_6527_68_6020: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6021: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6022: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I68_6527_68_6023: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6024: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6025: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_I68_6527_68_6026: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6027: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6028: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I68_6527_68_6029: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6030: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6031: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_6527_68_6032: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6033: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6034: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I68_6527_68_6035: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6036: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6037: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I68_6527_68_6038: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6039: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6040: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I68_6527_68_6041: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6042: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6043: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I68_6527_68_6044: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6045: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6046: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_I68_6527_68_6047: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6048: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6049: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_I68_6527_68_6050: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6051: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6052: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I68_6527_68_6053: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6054: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6055: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I68_6527_68_6056: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6057: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6058: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I68_6527_68_6059: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6060: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6061: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I68_6527_68_6062: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6063: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6064: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I68_6527_68_6065: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6066: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6067: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_I68_6527_68_6068: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6069: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6070: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_I68_6527_68_6071: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6072: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6073: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_I68_6527_68_6074: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6075: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6076: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I68_6527_68_6077: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6078: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6079: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I68_6527_68_6080: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6081: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6082: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_I68_6527_68_6083: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6084: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6085: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_I68_6527_68_6086: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6087: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6088: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I68_6527_68_6089: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6090: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6091: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I68_6527_68_6092: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6093: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6094: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_I68_6527_68_6095: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6096: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6097: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_I68_6527_68_6098: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6099: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6100: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I68_6527_68_6101: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6102: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6103: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I68_6527_68_6104: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6105: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6106: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I68_6527_68_6107: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6108: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6109: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I68_6527_68_6110: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_68_6111: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5874: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  View_I68_6527_75_4454: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I68_6527_75_5166: {
    width: wp("18%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5167: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5168: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5169: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5170: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I68_6527_75_5171: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5172: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5173: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I68_6527_75_5174: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5175: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5176: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I68_6527_75_5177: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5178: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5179: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I68_6527_75_5180: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5181: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5182: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_I68_6527_75_5183: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5184: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5185: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I68_6527_75_5186: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5187: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5188: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_I68_6527_75_5189: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5190: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5191: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I68_6527_75_5192: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5193: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5194: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_I68_6527_75_5195: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5196: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5197: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I68_6527_75_5198: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5199: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5200: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_I68_6527_75_5201: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5202: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5203: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_I68_6527_75_5204: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5205: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5206: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I68_6527_75_5207: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5208: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5209: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I68_6527_75_5210: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5211: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5212: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_I68_6527_75_5213: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5214: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5215: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_I68_6527_75_5216: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5217: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5218: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I68_6527_75_5219: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5220: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5221: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I68_6527_75_5222: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5223: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5224: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I68_6527_75_5225: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5226: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5227: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I68_6527_75_5228: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5229: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5230: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_I68_6527_75_5231: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5232: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5233: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I68_6527_75_5234: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5235: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5236: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I68_6527_75_5237: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5238: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5239: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I68_6527_75_5240: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5241: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5242: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I68_6527_75_5243: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5244: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5245: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I68_6527_75_5246: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5247: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5248: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I68_6527_75_5249: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5250: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5251: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_I68_6527_75_5252: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5253: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5254: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I68_6527_75_5255: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5256: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5257: {
    width: wp("0%"),
    height: hp("14%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I68_6527_75_5258: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5259: {
    width: wp("0%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5260: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_I68_6527_75_5261: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5262: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5263: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_6527_75_5264: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5265: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5266: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I68_6527_75_5267: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5268: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5269: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I68_6527_75_5270: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5271: {
    width: wp("0%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5272: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I68_6527_75_5273: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5274: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5275: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_I68_6527_75_5276: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5277: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5278: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I68_6527_75_5279: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5280: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5281: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I68_6527_75_5282: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5283: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5284: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I68_6527_75_5285: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5286: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5287: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I68_6527_75_5288: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5289: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5290: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I68_6527_75_5291: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5292: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5293: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I68_6527_75_5294: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5295: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5296: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I68_6527_75_5297: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5298: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5299: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I68_6527_75_5300: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5301: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5302: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I68_6527_75_5303: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5304: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5305: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_I68_6527_75_5306: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5307: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5308: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_I68_6527_75_5309: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5310: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5311: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I68_6527_75_5312: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5313: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5314: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_I68_6527_75_5315: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5316: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5317: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_I68_6527_75_5318: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5319: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5320: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_6527_75_5321: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5322: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5323: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I68_6527_75_5324: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5325: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5326: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I68_6527_75_5327: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5328: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5329: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I68_6527_75_5330: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5331: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5332: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I68_6527_75_5333: {
    width: wp("0%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5334: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5335: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_I68_6527_75_5336: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5337: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5338: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_I68_6527_75_5339: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5340: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5341: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_I68_6527_75_5342: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5343: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5344: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_I68_6527_75_5345: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5346: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5347: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_I68_6527_75_5348: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5349: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5350: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I68_6527_75_5351: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5352: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5353: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I68_6527_75_5354: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5355: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5356: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_I68_6527_75_5357: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5358: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5359: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_I68_6527_75_5360: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5361: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5362: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_I68_6527_75_5363: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5364: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5365: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I68_6527_75_5366: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5367: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5368: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I68_6527_75_5369: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5370: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5371: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_I68_6527_75_5372: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5373: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5374: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_I68_6527_75_5375: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5376: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5377: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I68_6527_75_5378: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5379: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5380: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_I68_6527_75_5381: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5382: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5383: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_I68_6527_75_5384: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5385: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5386: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_I68_6527_75_5387: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5388: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5389: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_I68_6527_75_5390: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5391: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5392: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I68_6527_75_5393: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 34, 86, 1)",
    borderColor: "rgba(250, 34, 86, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5394: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5395: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_I68_6527_75_5396: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5397: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_75_5398: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I68_6527_75_5399: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(17, 202, 190, 1)",
    borderColor: "rgba(17, 202, 190, 1)",
    borderWidth: 0.7014994621276855
  },
  ImageBackground_I68_6527_75_5400: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_6527_68_6347: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("31%")
  },
  View_I68_6527_68_6348: {
    width: wp("29%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_6527_68_6349: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6350: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6351: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6352: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6353: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6354: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6355: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6356: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6357: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6358: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6359: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6360: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6361: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6362: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6363: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6364: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6365: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6366: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6367: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6368: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6369: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6370: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6371: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6372: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6373: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6374: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6375: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6376: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6377: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6378: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6379: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6380: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6381: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6382: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6383: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6384: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6385: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6386: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6387: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6388: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6389: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6390: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6391: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6392: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6393: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6394: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6395: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6396: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6397: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6398: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6399: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6400: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6401: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6402: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6403: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6404: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6405: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6406: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6407: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6408: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6409: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6410: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6411: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6412: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6413: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6414: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6415: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6416: {
    width: wp("29%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_6527_68_6417: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6418: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6419: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6420: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6421: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6422: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6423: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6424: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6425: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6426: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6427: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6428: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6429: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6430: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6431: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6432: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6433: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6434: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6435: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6436: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6437: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6438: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6439: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6440: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6441: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6442: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6443: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6444: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6445: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6446: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6447: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6448: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6449: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6450: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6451: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6452: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6453: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6454: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6455: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6456: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6457: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6458: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6459: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6460: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6461: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6462: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6463: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6464: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6465: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6466: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6467: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6468: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6469: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6470: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6471: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6472: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6473: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6474: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6475: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6476: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6477: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6478: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6479: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6480: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6481: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6482: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_68_6483: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%"),
    backgroundColor: "rgba(52, 56, 76, 1)"
  },
  View_I68_6527_75_10071: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%")
  },
  View_I68_6527_68_6507: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_6527_68_6507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20.719026565551758,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I68_6527_75_7556: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  ImageBackground_I68_6527_75_8175: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I68_6527_75_9438: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I68_6527_75_8795: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I68_6527_75_8798: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I68_6527_75_8801: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I68_6527_75_8804: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_69_3435: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("150%"),
    minHeight: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_3435_69_3349: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("150%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 31, 37, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 9.6936674118042,
    borderBottomLeftRadius: 9.6936674118042,
    borderBottomRightRadius: 0
  },
  View_I69_3435_69_3350: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("136%"),
    backgroundColor: "rgba(53, 56, 65, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 9.6936674118042,
    borderBottomRightRadius: 0
  },
  View_I69_3435_69_3351: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("139%"),
    backgroundColor: "rgba(29, 31, 37, 1)",
    borderColor: "rgba(10, 221, 255, 1)",
    borderWidth: 0.807805597782135
  },
  ImageBackground_I69_3435_69_3352: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("141%")
  },
  ImageBackground_I69_3435_69_3357: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("140%")
  },
  View_I69_3435_69_3423: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%")
  },
  View_I69_3435_69_3370: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3359: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3366: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I69_3435_69_3367: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3360: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3361: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3361: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3362: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3369: {
    width: wp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3424: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3425: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3426: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I69_3435_69_3427: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3429: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3429: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3430: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3431: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3432: {
    width: wp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3371: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3372: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3373: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I69_3435_69_3376: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3377: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3378: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3379: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3399: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3400: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3401: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I69_3435_69_3402: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3402: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3403: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3404: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3405: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3406: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3407: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3408: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I69_3435_69_3409: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3410: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3411: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3412: {
    width: wp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3380: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3381: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3382: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I69_3435_69_3385: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3386: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3387: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3388: {
    width: wp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3388: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3413: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3414: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3415: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I69_3435_69_3416: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3417: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3417: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3418: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  ImageBackground_I69_3435_69_3422: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    resizeMode: "cover"
  },
  View_I69_3435_69_3389: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I69_3435_69_3390: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3391: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I69_3435_69_3392: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I69_3435_69_3394: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.947793960571289,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3395: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3395: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I69_3435_69_3396: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(53, 56, 65, 1)"
  },
  View_I69_3435_69_3397: {
    width: wp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I69_3435_69_3397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.642411231994629,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
