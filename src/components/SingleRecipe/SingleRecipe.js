import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import './SingleRecipe.css'

const SingleRecipe = () => {
    const location = useLocation()
    const { name, abv, attenuation_level, boil_volume, volume,
        image_url, description, ingredients, method,
        brewers_tips, contributed_by, ebc, first_brewed, ph, srm, tagline,
        food_pairing, ibu, target_fg, target_og,
    } = location.state.item
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return <div className="single-recipe">
        <div className="img-div">
            <img src={image_url} alt={name} />
        </div>
        <div className="all-details">
            <h2>{name}</h2>
            <p className="tagline"><i>{tagline}</i></p>
            <p>{description}</p>
            <p><strong>Ingredients:</strong></p>
            <p>Hops: </p>
            <ul>{ingredients.hops.map(({ name, add, amount, attribute }, i) => <li key={i}>
                {name} - {amount.value}{amount.unit}
                <p>add: {add}, attribute: {attribute}</p>
            </li>)}</ul>
            <p>Malt: </p>
            <ul>{ingredients.malt.map(({ name, amount }, i) => <li key={i}>
                {name} - {amount.value}{amount.unit}
            </li>)}</ul>
            <p><strong>Method</strong></p>
            <p>Fermentation: temperature -
                {method.fermentation.temp.value} {method.fermentation.temp.unit}</p>
            <p>Mash: temperature - {method.mash_temp[0].temp.value} {method.mash_temp[0].temp.unit}</p>
            {method.mash_temp[0].duration && <p>duration - {method.mash_temp[0].duration}</p>}
            <p>yeast: {ingredients.yeast}</p>
            <p>Tip: {brewers_tips}</p>
            <p>Contributed by: {contributed_by}</p>
            <p>First brewed: {first_brewed}</p>
            <p>Food pairing: </p>
            <ul>{food_pairing.map((pair, i) => <li key={i}>{pair}</li>)}</ul>
            <p>Volume: {volume.value} {volume.unit}</p>
            <p>Boil volume: {boil_volume.value} {boil_volume.unit}</p>
            <p>Abv: {abv}</p>
            <p>Attenuation level: {attenuation_level}</p>
            <p>EBC: {ebc}</p>
            <p>IBU: {ibu}</p>
            <p>PH: {ph}</p>
            <p>SRM: {srm}</p>
            <p>Target FG: {target_fg}</p>
            <p>Target OG: {target_og}</p>
        </div>

    </div>
}

export default SingleRecipe