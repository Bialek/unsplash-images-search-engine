import React from 'react';


// class CategoriesList extends React.Component {

// }

const CategoriesList = ({categoriesList}) =>{ 

    return (
    <div>
        {categoriesList.map(category =>  
            <button
                
            > {category}
            </button>
        )}
    </div>
    
)} 

export default CategoriesList