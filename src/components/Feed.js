import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

import Appearance from '../assets/Appearance.png'

export const Feed = () => {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        handlePosts()
    })

    const handlePosts = async () => {
         const response = await axios.get('localhost:3333/posts')

         return console.log(response.data)
    }

    return (
        <main className='container'>
            <section className='post'>
                <div className='header-post'>
                    <div>
                        <h3>Gustavo Evaristo</h3>
                        <h4>São Paulo</h4>
                    </div>
                    <img src={ more } alt='more' /> 
                </div>
                <div className='img-post'>
                <img src={ Appearance } alt='img-post' /> 
                </div>
                <div className='footer-post'>
                    <div className='icons'>
                        <img src={ like } alt='img-post' /> 
                        <img src={ comment } alt='img-post' /> 
                        <img src={ send } alt='img-post' /> 
                    </div>

                    <div className="description">
                        <p>Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto  Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto</p>
                    </div>
                </div>
            </section>

            <section className='post'>
                <div className='header-post'>
                    <div>
                        <h3>Gustavo Evaristo</h3>
                        <h4>São Paulo</h4>
                    </div>
                    <img src={ more } alt='more' /> 
                </div>
                <div className='img-post'>
                <img src={ Appearance } alt='img-post' /> 
                </div>
                <div className='footer-post'>
                    <div className='icons'>
                        <img src={ like } alt='img-post' /> 
                        <img src={ comment } alt='img-post' /> 
                        <img src={ send } alt='img-post' /> 
                    </div>

                    <div className="description">
                        <p>Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto  Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto</p>
                    </div>
                </div>
            </section>

            <section className='post'>
                <div className='header-post'>
                    <div>
                        <h3>Gustavo Evaristo</h3>
                        <h4>São Paulo</h4>
                    </div>
                    <img src={ more } alt='more' /> 
                </div>
                <div className='img-post'>
                <img src={ Appearance } alt='img-post' /> 
                </div>
                <div className='footer-post'>
                    <div className='icons'>
                        <img src={ like } alt='img-post' /> 
                        <img src={ comment } alt='img-post' /> 
                        <img src={ send } alt='img-post' /> 
                    </div>

                    <div className="description">
                        <p>Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto  Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto</p>
                    </div>
                </div>
            </section>

            <section className='post'>
                <div className='header-post'>
                    <div>
                        <h3>Gustavo Evaristo</h3>
                        <h4>São Paulo</h4>
                    </div>
                    <img src={ more } alt='more' /> 
                </div>
                <div className='img-post'>
                <img src={ Appearance } alt='img-post' /> 
                </div>
                <div className='footer-post'>
                    <div className='icons'>
                        <img src={ like } alt='img-post' /> 
                        <img src={ comment } alt='img-post' /> 
                        <img src={ send } alt='img-post' /> 
                    </div>

                    <div className="description">
                        <p>Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto  Aqui vai toda a descricao do texto Aqui vai toda a descricao do texto</p>
                    </div>
                </div>
            </section>
        </main>
    )
} 
