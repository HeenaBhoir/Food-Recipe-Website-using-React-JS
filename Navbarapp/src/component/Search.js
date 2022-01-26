import React, {useState} from 'react';
import data from './data';
import "./foods.css";
const Search = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value);
}
let dataSearch = data.foods.filter(item =>{
    return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
});
return(
    <section className="py-4 container">
        <div className="row justify-content-center">
        <br></br>

            <div className="mb-3 col-4 mx-auto">
                <div className="mb-3 col-4 mx-auto text-center">
                    <label className="search"><b>Search item name =</b> </label>
                    <input
                          type="text"
                          className="from control"
                          value={filter}
                          onChange={searchText.bind(this)}
                    />

                </div>
            </div>


            {dataSearch.map((itemname)=>{
                return(
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                <br></br>
                    <img src={itemname.itemimage} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="titles">{itemname.itemname}</h5>
                        <p className="ingredient"><b>Ingredient:-</b> {itemname.ingredient}</p>
                        
                        <a href={itemname.recipelink} class="links">
                                    Go To Recipe
                                </a>
                                <br></br>
                                <br></br>
                                <a href={itemname.recipelink} class="links">
                                    Go To Video
                                </a>
                                
                    </div>
                </div>
                <br></br>
                
            </div>
            

                )
            })}
            
        </div>
    </section>
)
        }

export default Search