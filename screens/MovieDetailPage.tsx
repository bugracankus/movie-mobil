import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Layout from '../constants/Layout';
import { HStack, NativeBaseProvider, VStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import SimilarMovies from '../component/SimilarMovies';

const castData = [
    {
        id: 0,
        topCastImage: require("../assets/topCast/image1.jpeg")
    },
    {
        id: 1,
        topCastImage: require("../assets/topCast/image2.jpeg")
    },
    {
        id: 2,
        topCastImage: require("../assets/topCast/image3.jpeg")
    },
    {
        id: 3,
        topCastImage: require("../assets/topCast/image4.jpeg")
    },
    {
        id: 5,
        topCastImage: require("../assets/topCast/image5.jpeg")
    }
]


const MovieDetailPage: React.FC = () => {
    return (
        <NativeBaseProvider>
            <View>
                <ScrollView>
                    <View style={{ flex: 1, height: Layout.window.height, }}>
                        {/* ---Movie Poster--- */}
                        <ImageBackground
                            source={require("../assets/poster/moviePoster1.png")}
                            alt=""
                            style={styles.poster}
                        >
                            {/* --Title--- */}
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
                            <LinearGradient
                                colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                                style={{ width: Layout.window.width, height: Layout.window.height * 0.9, marginTop: Layout.window.height * 0.2 }}
                                start={{ x: 0.5, y: 0.1 }}
                                end={{ x: 0.5, y: 1 }}
                            />
                        </ImageBackground>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 170 }}>
                            <View style={styles.content}>
                                <Text style={styles.mName}>Captan Marvel</Text>
                                <HStack style={{ justifyContent: "center", alignItems: "center" }} space={2}>
                                    <Text style={styles.cText}>Released</Text>
                                    <Text style={styles.cText}>•</Text>
                                    <Text style={styles.cText}>2023</Text>
                                    <Text style={styles.cText}>•</Text>
                                    <Text style={styles.cText}>100 Min</Text>
                                </HStack>
                                <HStack style={{ justifyContent: "center", alignItems: "center" }} space={2}>
                                    <Text style={[styles.cText, { fontSize: 13 }]}>Action</Text>
                                    <Text style={[styles.cText, { fontSize: 13 }]}>•</Text>
                                    <Text style={[styles.cText, { fontSize: 13 }]}>Drama</Text>
                                    <Text style={[styles.cText, { fontSize: 13 }]}>•</Text>
                                    <Text style={[styles.cText, { fontSize: 13 }]}>War</Text>
                                </HStack>
                                <View style={styles.iGround}>
                                    <Text style={styles.iText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                                </View>
                                <View>
                                    {/* ---Top Cast--- */}
                                    <Text style={styles.tText}>Top Cast</Text>
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ paddingHorizontal: 15, marginTop: 10 }}
                                    >
                                        {
                                            castData.map((item, index) => {
                                                return (
                                                    <TouchableWithoutFeedback
                                                        key={index}
                                                    >
                                                        <TouchableOpacity>
                                                            <View style={styles.cGround}>
                                                                <Image
                                                                    source={item.topCastImage}
                                                                    alt=""
                                                                    style={styles.img}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </TouchableWithoutFeedback>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                    <View style={{ marginBottom: 80 }}>
                                        <Text style={styles.tText}>Similar Movies</Text>
                                        <SimilarMovies />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    )
}
export default MovieDetailPage;

const styles = StyleSheet.create({

    poster: {
        width: Layout.window.width,
        height: Layout.window.height * 0.55,
    },
    content: {
        width: Layout.window.width,
        position: "absolute",
    },
    title: {
        height: 50,
        width: Layout.window.width * 0.95,
        alignSelf: "center",
        marginTop: 50,
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
    mName: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center"
    },
    cText: {
        fontSize: 18,
        color: "white",
        letterSpacing: 0.5
    },
    iGround: {
        width: Layout.window.width * 0.95,
        height: 70,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    iText: {
        fontSize: 14,
        color: "white",
        fontWeight: "500",
        letterSpacing: 0.5
    },
    tText: {
        fontSize: 20,
        fontWeight: "500",
        color: "white",
        letterSpacing: 0.5,
        marginLeft: 12,
        marginTop: 10
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 100,
    },
    cGround: {
        height: 70,
        width: 70,
        borderRadius: 100,
        marginRight: 15
    }
});