import React, { Component } from 'react';
import { ScrollView, View, Image, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.49; //60%
const images = [
    'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01_dino_gallery_nationalgeographic_2607091.jpg?w=1190&h=794',
    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/07/hypatia-h_b52cdf0377bddbfa9df52e783301b6ca-h_8269f26ad396d4fd2eaf30621f96d8b6.jpg?w=876&h=484&crop=1'
]


export default class Carrossel extends Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.scroll}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                <View style={style.paginacao}>
                    {
                        images.map((i, k) => (
                            <Text key={(k)} style={k == this.state.active ? style.paninacaoTextoAtivo : style.paninacaoTexto}>⬤</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 0,
        width,
        height
    },
    scroll: { width, height },
    image: { width, height, resizeMode: 'cover' },
    paginacao: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    paninacaoTexto: {
        fontSize: (width / 30),
        color: '#888',
        margin: 3
    },
    paninacaoTextoAtivo: {
        fontSize: (width / 30),
        color: 'red',
        margin: 3
    }
})