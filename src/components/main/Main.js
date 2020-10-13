import React, {useEffect, useState, useRef, useContext} from 'react'
import './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {Context} from './../context'


const Main = () => {

    const context = useContext(Context)

    // console.log(34)

    return (
            <Container fluid>
                <div className='firstRowHeader row'>
                    <div className='col'><span>شماره تماس : 0842248142</span></div>
                    <div className='col'><span><a href="#">ساعت کار فروشگاه</a></span></div>
                    <div className='loginBtn col'><a href='#'>ورود</a> | <a href='#'>ثبت نام</a></div>
                </div>


                <div className='secondRowHeader row'>
                    <div className='logo'><img src={require("./../../media/img/logo.png")} width={100}/></div>
                    <div className='col-sm-5'>
                        <InputGroup>
                            <FormControl
                                placeholder="جستجوی کالا ...    "
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <InputGroup.Prepend>
                                <Button style={{borderRadius: 5}}>جستجو</Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </div>
                    <div className='logo'><Link to={'/test'}>سبد خرید</Link></div>
                </div>


                <div className='row thirdRowHeader'>

                    {/*<h1>{context.name}</h1>*/}
                    {/*<h1>{context.lastName}</h1>*/}

                </div>

            </Container>
    )

}

export default Main
