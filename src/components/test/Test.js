import React, {useEffect, useState, useRef, createContext} from 'react'
import './test.css';
import {Link} from 'react-router-dom'

class Test extends React.Component {

    render() {
        return (
            <>
                <div>
                    <p>post 1</p>
                    <Link to={'/postDetails/1'}> post details</Link>
                </div>
                <div>
                    <p>post 2</p>
                    <Link to={'/postDetails/2'}> post details</Link>
                </div>
                <div>
                    <p>post 3</p>
                    <Link to={'/postDetails/3'}> post details</Link>
                </div>
                <div>
                    <p>post 4</p>
                    <Link to={'/postDetails/4'}> post details</Link>
                </div>
                <div>
                    <p>post 5</p>
                    <Link to={'/postDetails/5'}> post details</Link>
                </div>


            </>
        );
    }
}


export default Test
