import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from '../constants/Layout';
import { background } from '../constants/Color';
import { HStack, NativeBaseProvider, VStack } from 'native-base';
import KnowWorks from '../component/KnowWorks';




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
                            <View style={{ alignSelf: "center", marginTop: 10, justifyContent: "center", alignItems: "center", }}>
                                {/*---Famous Info---*/}
                                <Text style={styles.fText}>Robert Downey Jr.</Text>
                                <Text style={[styles.fText, { fontSize: 17, fontWeight: "normal", opacity: 0.5, marginTop: 5 }]}> America</Text>
                            </View>
                            {/*---General Info--- */}
                            <View style={styles.gGround}>
                                <HStack space={4} style={{ justifyContent: "center", alignItems: "center" }}>
                                    <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.iText}>
                                            Gender
                                        </Text>
                                        <Text style={[styles.iText, { fontSize: 13, opacity: 0.5 }]}>
                                            Male
                                        </Text>
                                    </VStack>
                                    <View style={{ height: 45, borderWidth: 0.2, borderColor: "white" }}></View>
                                    <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.iText}>
                                            Birthday
                                        </Text>
                                        <Text style={[styles.iText, { fontSize: 13, opacity: 0.5 }]}>
                                            4 April 1965
                                        </Text>
                                    </VStack>
                                    <View style={{ height: 45, borderWidth: 0.2, borderColor: "white" }}></View>
                                    <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.iText}>
                                            Known For
                                        </Text>
                                        <Text style={[styles.iText, { fontSize: 13, opacity: 0.5 }]}>
                                            Acting
                                        </Text>
                                    </VStack>
                                    <View style={{ height: 45, borderWidth: 0.2, borderColor: "white" }}></View>
                                    <VStack style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.iText}>
                                            Popularity
                                        </Text>
                                        <Text style={[styles.iText, { fontSize: 13, opacity: 0.5 }]}>
                                            32.50 %
                                        </Text>
                                    </VStack>
                                </HStack>
                            </View>
                            {/* ---Biography--- */}
                            <Text style={styles.bTitle}>Biography</Text>
                            <View style={styles.bGround}>
                                <Text style={styles.bInfoText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                            </View>
                            <Text style={styles.bTitle}>Known works</Text>
                            <View style={styles.kGround}>
                                <KnowWorks />
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
    gGround: {
        height: 60,
        width: Layout.window.width * 0.90,
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: "#313431",
        justifyContent: "center",
        alignItems: "center"
    },
    iText: {
        fontSize: 14,
        color: "white",
    },
    bTitle: {
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 0.5,
        color: "white",
        marginLeft: 20,
        marginTop: 20
    },
    bGround: {
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 15,
    },
    bInfoText: {
        fontSize: 15,
        color: "white",
        opacity: 0.7
    },
    kGround: {
        marginBottom: 70,
    },
});