import React, {Component} from 'react';
import axios from "axios";
import qs from 'qs';

class Post extends Component {

    state = {
        data: null,
        component: this.props.loading || ''
    }

    async componentDidMount() {
        const { url, data, children, delay, error } = this.props;
        try {
            const result = await axios.post(url, qs.stringify(data));
            this.setState({
                data: result.data
            }, () => {
                setTimeout(() => {
                    this.setState({
                        component: children(this.state.data)
                    })
                }, delay || 0)
            })
        } catch (e) {
            this.setState({
                component: error || 'Error'
            })
            throw e;
        }
    }
    render() {
        return this.state.component;
    }
}

export default Post;
