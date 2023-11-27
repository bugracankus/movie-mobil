import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Text } from 'react-native'
import Layout from '../constants/Layout';
import {ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const movieData = [
    {
        id: 0,
        moviePoster: require("../assets/poster/moviePoster1.png"),
        movieName: "Captan Marvel"
    },
    {
        id: 1,
        moviePoster: require("../assets/poster/moviePoster2.png"),
        movieName: " Quantumanıa"

    },
    {
        id: 2,
        moviePoster: require("../assets/poster/moviePoster3.jpg"),
        movieName: " Avengers"

    },
    {
        id: 3,
        moviePoster: require("../assets/poster/moviePoster4.jpg"),
        movieName: "Joker"
    },
    {
        id: 4,
        moviePoster: require("../assets/poster/moviePoster5.png"),
        movieName: "Batman"
    },
];

//? SimilarMovies LIST DESIGN
const SimilarMovies: React.FC = () => {
    return (
        <View style={styles.main}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    movieData.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                            >
                                <TouchableOpacity>
                                    <View >
                                        <Image
                                            source={item.moviePoster}
                                            style={styles.poster}
                                            alt=""
                                        />
                                        <Text style={styles.movieName}>{item.movieName}</Text>
                                    </View>
                                </TouchableOpacity>

                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default SimilarMovies;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    poster: {
        width: Layout.window.width * 0.33,
        height: 150,
        alignSelf: "center",
        marginTop: 5,
        borderRadius: 20,
        marginRight: 15,
        // resizeMode:"contain"
    },
    scrolList: {
        width: Layout.window.width * 0.92,
        height: 500,
    },
    movieName: {
        marginTop: 5,
        fontSize: 17,
        color: "white",
        alignSelf: "center",
        width: 130,
        textAlign: "center",
        marginRight: 15
    }
});

