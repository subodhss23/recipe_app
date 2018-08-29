import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps ={
        recipes: [
            {
                title:"Pasta", 
                ingredients:['flour', 'water', 'Susage','tomato sauce'],
                instructions:"Mix ingredients",
                img:"spaghetti.jpg"
            },
            { 
                title:"Milksake" ,
                ingredients:['Milk', 'Sugar', 'Coco'],
                instructions:"Mix ingredients",
                img:"milkshake.jpg"
            },
            {
                title:"Pancake",
                ingredients:[
                    'Pastry flour', 'Sugar' ,'Malted milk powder','Baking powder','Salt'],
                instructions:"Mix ingredients",
                img:"pancake.jpg"
            }
        ]
    }

    static propTypes ={
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index}{...r} />
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;