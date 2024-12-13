//useState(''):

// useState é um hook do React que permite que você adicione estado a um componente funcional.
// O argumento dentro dos parênteses ('') define o valor inicial do estado. Nesse caso, o valor inicial de text é uma string vazia ('').

import { useState } from 'react';
import styles from './TextInput.module.css';
import Tweet from './Tweet';

export default function TextInput() {
    const [text, setText ] = useState(''); 
    const limiteContador = 125;
    const [tweetList, setTweetList] = useState([])
    
   /* const tweet = {
        date: new Date().toDateString(),
        text: text,
        user: {
            name: 'Luciano Olegario',
            username: '@guii_olegario'
        }
    } */

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= limiteContador) {
            setText(text);
        }
    }

    function sendTweet() {
        setTweetList([...tweetList, text]);
    }

    return(
        <div>
            <textarea 
                className={styles.input} 
                placeholder={"O que está acontecendo?"} 
                maxLength={125}
                value = {text}
                onChange={onTextChange}>
                        
            </textarea>
            <div id="buttonTwitter">
                <button 
                    className={styles.button}
                    onClick={sendTweet}>
                    Send
                </button>
            </div>
                <p >{text.length} / {limiteContador}</p>
                {tweetList.map(tweet => {
                    return(
                      
                        <Tweet>{tweet}</Tweet>
              
                    )
                })} 
        </div>
    )
}

