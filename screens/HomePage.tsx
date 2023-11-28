import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from '../constants/Layout';
import { background, text } from '../constants/Color';
import { HStack, NativeBaseProvider, VStack } from 'native-base';
import Trending from '../component/Trending';
import Upcoming from '../component/Upcoming';
import TopRated from '../component/TopRated';
import { useNavigation } from '@react-navigation/native';
const HomePage: React.FC = () => {
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
                                    <Text style={styles.tText}>Movie Box</Text>
                                </View>
                                {/* ---searchicon--- */}
                                <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
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
                    <VStack space={5}>
                        <View>
                            {/* ---Trend Title--- */}
                            <Text style={styles.contentTitle}>Trending</Text>
                            <Trending />
                        </View>
                        <View>
                            {/* ---Upcoming Title */}
                            <Text style={styles.contentTitle}>Upcoming</Text>
                            <Upcoming />
                        </View>
                        <View style={{marginBottom:50}}>
                            {/* ---Top Rated Title */}
                            <Text style={styles.contentTitle}>Top Rated</Text>
                            <TopRated />
                        </View>
                    </VStack>
                </ScrollView>
            </View>

        </NativeBaseProvider>
    )
}
export default HomePage;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
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
    }
});