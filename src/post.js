import React, {Component} from 'react';

class Post extends Component{
    constructor(props){
        super(props);

        this.state ={ 
            isShow: props.show,
            isBut: props.but
        }

        this.change = this.change.bind(this);
    }

    render(){
        let visible = this.state.isShow
        ? <p style={{display:'block'}}>{this.props.text}</p>
        : undefined

        let b = this.state.isBut
        ? 'Hide'
        : 'Show'
        
        return (<section>
            <h2>{this.props.title}</h2>
            <button onClick={this.change}>{b}</button>
            {visible}
            </section>
        )
    }

    change() {
        this.setState({
            isShow: !this.state.isShow,
            isBut: !this.state.isBut
        })
    }
}

export default Post;
