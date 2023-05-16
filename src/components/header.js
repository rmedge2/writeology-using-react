import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import writeologyLogo from "../assets/writeologyLogo.svg"


const PageHeader = () => {
    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItmes: 'center',
            borderBottom: '2px solid black',
            marginBottom: '30px'
        }
    };

    return (
        <header style={styles.header}>
            <img src={writeologyLogo} />
            <div className="headerSibling">
                <p>Cart</p>
            </div>
        </header>
    )
}


export default PageHeader