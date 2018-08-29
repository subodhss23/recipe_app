import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component{
    static propTypes = {
        tile: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.sting).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }
    render(){
        const {title, img, instructions} = this.props; //this.props.title
        const ingredients = this.props.ingredients.map((ing, index) => (
    <li key={index}>{ing}</li>
));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img"> 
                    <img src={img} alt={title} />
                </div>
           
                <div className="recipe-card-content">
                    <h3 className="recipe-title"> {title}</h3>
                    
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Ingredients:</h4>
                    <p>{instructions}</p>
                 </div>
            </div>
        );
    }
}


export default Recipe;