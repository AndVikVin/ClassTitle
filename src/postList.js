import React, {Component} from 'react';
import Post from './post';

const posts = [
    {id:1, title: 'first', text:'Very happy 1', show: true, but: true},
    {id:2, title: 'second',text:'Very happy 2', show: true, but: true},
    {id:3, title: 'third',text:'Very happy 3', show: true, but: true},
    {id:4, title: 'forth',text:'Very happy 4', show: true, but: true},
    {id:5, title: 'fifths',text:'Very happy 5', show: true, but: true}
]

class PostList extends Component{
    render(){
        const list = posts.map(x => <Post key={x.id} title={x.title} text={x.text} show={x.show} but={x.but}/>)
        return(
            <section>
                {list}
            </section>
        )
    } 
    
}

export default PostList;