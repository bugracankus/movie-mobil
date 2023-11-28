import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from '../constants/Layout';
import { background, text } from '../constants/Color';
import { HStack, NativeBaseProvider, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const castData = [
    {
        id: 0,
        moviePoster: require("../assets/poster/moviePoster1.png"),
        movieName: "Captan Marvel"

    },
    {
        id: 1,
        moviePoster: require("../assets/poster/moviePoster2.png"),
        movieName: "Captan Marvel"


    },
    {
        id: 2,
        moviePoster: require("../assets/poster/moviePoster3.jpg"),
        movieName: "Captan Marvel"


    },
    {
        id: 3,
        moviePoster: require("../assets/poster/moviePoster4.jpg"),
        movieName: "Captan Marvel"


    },
    {
        id: 5,
        moviePoster: require("../assets/poster/moviePoster5.png"),
        movieName: "Captan Marvel"


    }
]

const SearchPage: React.FC = () => {
    const navigation: any = useNavigation();
    return (
        <NativeBaseProvider>
            <View style={styles.main}>
                <ScrollView>
                    <SafeAreaView >
                        {/* -----Title----- */}
                        <View style={styles.title}>
                            <HStack>
                                {/* ---hamburgerMenu--- */}
                                <TouchableOpacity>
                                    <View style={styles.iGround}>
                                        <Image
                                            source={require("../assets/icon/hamburger.png")}
                                            alt=""
                                            style={styles.icon}
                                        />
                                    </View>
                                </TouchableOpacity>
                                {/* ---title--- */}
                                <View style={[styles.iGround, { width: 290 }]}>
                                </View>
                                {/* ---searchicon--- */}
                                <TouchableOpacity>
                                    <View style={styles.iGround}>
                                        <Image
                                            source={require("../assets/icon/searchIcon.png")}
                                            alt=""
                                            style={styles.icon}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </HStack>
                        </View>
                    </SafeAreaView>
                    <View>
                        <VStack style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }} space={5}>
                            <HStack space={5} >
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster1.png")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster2.png")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                            </HStack>
                            <HStack space={5} >
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster3.jpg")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster4.jpg")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                            </HStack>
                            <HStack space={5} >
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster5.png")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("MovieDetailPage")}>
                                    <View style={styles.ground}>
                                        <Image
                                            source={require("../assets/poster/moviePoster2.png")}
                                            alt=''
                                            style={styles.poster}
                                        />
                                        <Text style={styles.mName}>Captan Marvel</Text>
                                    </View>
                                </TouchableOpacity>
                            </HStack>
                        </VStack>
                    </View>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}
export default SearchPage;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        height: Layout.window.height,
        backgroundColor: background,
    },
    title: {
        width: Layout.window.width * 0.95,
        height: 50,
        alignSelf: "center",
    },
    iGround: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    tText: {
        fontSize: 24,
        fontWeight: "bold",
        color: text,
        letterSpacing: 1
    },
    contentTitle: {
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
        color: text,
        letterSpacing: 0.5,
    },
    ground: {
        height: 220,
        width: 180,
        borderRadius: 10,
        backgroundColor: "rgba(66, 66, 66, 0.50)",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "white"
    },
    poster: {
        width: 130,
        height: 150,
        borderRadius: 5
    },
    mName: {
        fontSize: 16,
        color: "white",
        letterSpacing: 0.5,
        width: 150,
        textAlign: "center",
        marginTop: 15
    }
});