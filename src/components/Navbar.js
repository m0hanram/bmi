import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div style={{textAlign:'center',width:'100%'}}>
                        <h3>
                            BMI CALCULATOR
                        </h3>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
} 

export default Navbar