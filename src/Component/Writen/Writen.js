import React from 'react';
import './Writen.css'

const Writen = () => {
    return (
        <div>
            <div className='react'>
                <h1>How to Work React</h1>
                <p>React is a flexible efficient,open source javaScript Library.It was developed by Facebook back in 2013 for building user interface
                    (font-end).It created by jordan walke .He is a facebook developer.it allows us to create a complex a UI by moving component(small and isolated pieces of code).
                    Component are reusable. A component has three things, they are HTML, CSS, JS.
                    Being a reusable component, it loads fast.External plugin can be used.Around 45% of worlds website use React major brands like Facebook,Instagram,Yahoo,NetFlix,Airbnb using React.</p>
            </div>
            <div className='useState'>
                <h1>How to Work UseState</h1>
                <p>The state of your application is bound to change at some point. This could be the value of a variable, an object, or whatever type of data exists in your component.
                    Hooks are a feature in React that allow you use state and other React features without writing classes.
                    This website provides easy to understand code examples to help you learn how hooks work and inspire you to take advantage of them in your next project.
                    Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite.
                    It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu.</p>
            </div>

        </div>
    );
};

export default Writen;