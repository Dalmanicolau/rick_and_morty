import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.jsx"
import { orderCards, filterCards } from "../Redux/action";

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="Order" disabled="disabled">Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="Filter" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                    </select>
            </div>
            {
                favorites.map(({ id, status, name, species, origin, gender, image}) => {
                    return (
                        <Card
                        id = {id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}
                        origin = {origin}
                        image = {image}
                        />

                    )
                })
            }
        </div>
    )
};

export default Favorites;