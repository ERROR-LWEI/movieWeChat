import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtRate } from 'taro-ui';
import "./index.scss";

type MovieProps = {
    src: string,
    name: string,
    score: number,
}

export default class Moviecard extends Component<MovieProps, any> {
    static total = 0;

    render() {
        const { src, name, score = 0 } = this.props;
        const rate = parseInt(String((score / Moviecard.total) * 5));
        return (
            <View className="moviecard_box">
                <Image className="movie_img" mode="scaleToFill" src={src} />
                <View className="movie_name"><Text>{name}</Text></View>
                <View className="movie_rate"><AtRate size={8} value={rate} /><Text>{ score }</Text></View>
            </View>
        )
    }
}