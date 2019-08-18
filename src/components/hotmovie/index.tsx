import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import Moviecard from '../moviecard';
import "./index.scss";
Moviecard.total = 10;

type HotmovieProps = {}

type HotmovieOwnProps = {}

export default class Hotmovie extends Component<HotmovieOwnProps, HotmovieProps> {
    render() {
        return (
            <View className="HotmovieBox">
                <View className="Hotmovie_title">
                    <Text>影院热映</Text>
                    <Text>查看更多</Text>
                </View>
                <ScrollView scrollX={true} scrollWithAnimation={false}>
                    <View className="Movie_list">
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                        <Moviecard
                            src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2565751382.webp"
                            name="送我上青云"
                            score={7.9}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}