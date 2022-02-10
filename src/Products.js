import React  from 'react';
const Products = ({data}) => {
    return (
        
        <div>
            <div className="row">
                {data.map(data =>  
                data["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
                <div className="col-md-4">
                    <div className="card">
                    <img className="card-img-top" style={{"border-radius": "5px"}} src={data.recipe.image} alt="Card image cap" />
                    <div className="card-body">
                    <center>
                        <h5 className="card-title">{data.recipe.label}</h5>
                        <p className="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href={data.recipe.url} className="btn btn-primary" type="button" target="_blank">Check</a>
                        </center>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products;
