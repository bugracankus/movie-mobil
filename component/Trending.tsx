import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Layout from '../constants/Layout';
const movieData = [
    {
        id: 0,
        moviePoster: require("../assets/poster/moviePoster1.png"),
    },
    {
        id: 1,
        moviePoster: require("../assets/poster/moviePoster2.png"),
    },
    {
        id: 2,
        moviePoster: require("../assets/poster/moviePoster1.png"),
    },
];
const Trending: React.FC = () => {
    return (
        <View style={styles.main}>
            <Carousel
                data={movieData}
                renderItem={({ item }: any) => (
                    <TouchableOpacity style={{width:Layout.window.width*0.4, alignSelf:"center"}}>
                        <Image
                            source={item.moviePoster}
                            alt=''
                            style={styles.poster}
                        />
                    </TouchableOpacity>

                )}
                sliderWidth={Layout.window.width}
                itemWidth={Layout.window.width * 0.65}
                loop
                inactiveSlideOpacity={0.3}
            />
        </View>
    )
}
export default Trending;

const styles = StyleSheet.create({
    main: {
        width: Layout.window.width,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    poster: {
        width: Layout.window.width * 0.6,
        height: 400,
        alignSelf: "center",
        marginTop: 5,
        borderRadius: 20,
    }
});