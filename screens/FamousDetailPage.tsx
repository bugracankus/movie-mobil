import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from '../constants/Layout';
import { background } from '../constants/Color';
import { HStack, NativeBaseProvider, VStack } from 'native-base';




const FamousDetailPage: React.FC = () => {
    return (
        <NativeBaseProvider>
            <View style={styles.main}>
                <ScrollView>
                    <SafeAreaView>
                        {/* ---Title-- */}
                        <View>
                            <View style={styles.title}>
                                <HStack>
                                    <TouchableOpacity>
                                        <View style={styles.tGround}>
                                            <Image
                                                source={require("../assets/icon/goBack.png")}
                                                alt=""
                                                style={[styles.icon, { width: 50, height: 50 }]}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={styles.text}></View>
                                    <TouchableOpacity>
                                        <View style={styles.tGround}>
                                            <Image
                                                source={require("../assets/icon/hearthicon.png")}
                                                alt=""
                                                style={styles.icon}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </HStack>
                            </View>
                        </View>
                        <View>
                            {/* ---Image--- */}
                            {/*// TODO shadow eklenecek  */}
                            <View style={styles.iGround}>
                                <Image
                                    source={require("../assets/topCast/image1.jpeg")}
                                    style={styles.image}
                                    alt=''
                                />
                            </View>
                            <View style={{ alignSelf: "center", marginTop: 10, justifyContent:"center", alignItems:"center",  }}>
                                {/*---Famous Info---*/}
                                <Text style={styles.fText}>Robert Downey Jr.</Text>
                                <Text style={[styles.fText,{fontSize:17, fontWeight:"normal", opacity:0.5, marginTop:5}]}> America</Text>
                            </View>
                            <View style={styles.gGround}>
                                {/*---General Info--- */}
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}
export default FamousDetailPage;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        height: Layout.window.height,
        backgroundColor: background,
    },
    title: {
        height: 50,
        width: Layout.window.width * 0.95,
        alignSelf: "center",
        // marginTop: 50,
        justifyContent: "center"
    },
    tGround: {
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eab308",
        borderRadius: 10,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    text: {
        width: Layout.window.width * 0.72
    },
    iGround: {
        height: 300,
        width: 300,
        backgroundColor: "white",
        borderRadius: 200,
        alignSelf: "center",
        marginTop: 50,
        borderWidth: 3,
        borderColor: "#303030",
        justifyContent: "center",
        alignItems: "center"

    },
    image: {
        height: 290,
        width: 290,
        borderRadius: 200,
    },
    fText: {
        fontSize: 27,
        fontWeight: "500",
        color: "white",
        letterSpacing: 0.5,
    },
    gGround:{
        height:60,
        width:Layout.window.width*0.85,
        alignSelf:"center",
        marginTop:20,
        borderRadius:25,
        backgroundColor:"#313431"
    }
});