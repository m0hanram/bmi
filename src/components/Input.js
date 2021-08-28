import React,{useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Input = () => {

    const [height, setHeight] = React.useState(180);

    const changeHeight = (event, newHeight) => {
        setHeight(newHeight);
    };

    const [weight, setWeight] = React.useState(60);

    const addWeight = () => {
        setWeight(weight+1)
    }

    const subtractWeight = () => {
        setWeight(weight-1)
    }

    const [age, setAge] = React.useState(18);

    const addAge = () => {
        setAge(age+1)
    }

    const subtractAge = () => {
        setAge(age-1)
    }

    const [bmi, setBmi] = React.useState(0);
    const [verdict, setVerdict] = React.useState('')
    const [category,setCategory] = React.useState('')
    const calculateBmi = () => {
        setBmi((weight/(height/100)**2).toFixed(2))
    }

    useEffect(() => {
        console.log(bmi);
        if(bmi>=18.5 && bmi<25){
            setCategory('NORMAL');
            setVerdict('Hurray 🙌 you are absolutely fit');
        }
        else if(bmi>=15 && bmi<18.5){
            setCategory('UNDERWEIGHT');
            setVerdict('Comeon lets work on that 🍗🍴🍚');
        }
        else if(bmi<15){
            setCategory('SEVERELY UNDERWEIGHT');
            setVerdict('Comeon lets work on that 🍗🍴🍚');
        }
        else if(bmi>=25 && bmi<30){
            setCategory('OVERWEIGHT');
            setVerdict('Dont lose hope lets get those belly toned 🚴‍♀️🏋️‍♀️🥕');
        }
        else if(bmi>30){
            setCategory('SEVERELY OVERWEIGHT');
            setVerdict('Dont lose hope lets get that belly toned 🚴‍♀️🏋️‍♀️🥕');
        }
    }, [bmi])

    return(
        <>
            <div style={{display:'flex',justifyContent:'center',alignContent:'center',width:'100%',height:'90vh',marginTop:'1vh',flexDirection:'column'}}>
                <Card style={{backgroundColor:'#cfd8dc',borderRadius:'20px',width:'500px',marginLeft:'37%'}}>
                    <CardContent>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <Typography variant="h6" gutterBottom>
                                HEIGHT
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                {height} 📏
                            </Typography>
                            <div style={{width:'300px',marginLeft:'100px',marginTop:'20px',marginBottom:'20px'}}>
                                <Slider
                                    defaultValue={180}
                                    value = {height}
                                    onChange={changeHeight}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="on"
                                    step={1}
                                    min={120}
                                    max={220}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor:'#cfd8dc',borderRadius:'20px',marginTop:'30px', width:'500px',marginLeft:'37%'}}>
                    <CardContent>
                        <div>
                            <Typography variant="h6" gutterBottom>
                                WEIGHT
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                {weight} ⚖
                            </Typography>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={addWeight}>
                                <AddCircleSharpIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={subtractWeight}>
                                <RemoveCircleIcon/>
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor:'#cfd8dc',borderRadius:'20px',marginTop:'30px',width:'500px',marginLeft:'37%'}}>
                    <CardContent>
                        <div>
                            <Typography variant="h6" gutterBottom>
                                AGE
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                {age} 
                            </Typography>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={addAge}>
                                <AddCircleSharpIcon/>
                            </IconButton>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={subtractAge}>
                                <RemoveCircleIcon/>
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
                
                <Typography variant="h3" component="h2" gutterBottom style={{marginTop:'10px'}}>
                    {bmi} 🧡
                </Typography>
                <Button variant="contained" color="primary" onClick={calculateBmi} style={{width:'200px',marginLeft:'45%'}}>
                    CALCULATE
                </Button>
                <Typography variant="h6" gutterBottom>
                    {category}
                </Typography>
                <Typography variant="h4"  gutterBottom>
                    {verdict}
                </Typography>
            </div>
        </>
    )
}

export default Input