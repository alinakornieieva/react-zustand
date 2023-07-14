import { useLocation } from "react-router-dom"

const SingleRecipe = () => {
    const location = useLocation()
    const { name, abv, attenuation_level, boil_volume, volume,
        image_url, description, ingredients, method,
        brewers_tips, contributed_by, ebc, first_brewed, ph, srm, tagline,
        food_pairing, ibu, target_fg, target_og,
    } = location.state.item
    console.log(location.state)
    return <div>
        <img src={image_url} alt={name} />
        <div>
            <h3>{name}</h3>
            <p><i>{tagline}</i></p>
            <p>{description}</p>
            <p>Ingredients: </p>
            <p>hops: </p>
            <ul>{ingredients.hops.map(({ name, add, amount, attribute }, i) => <li key={i}>
                {name} - {amount.value}{amount.unit}
                <p>add: {add}, attribute: {attribute}</p>
            </li>)}</ul>
            <p>malt: </p>
            <ul>{ingredients.malt.map(({ name, amount }, i) => <li key={i}>
                {name} - {amount.value}{amount.unit}
            </li>)}</ul>
            <p>Method: </p>
            <p>fermentation: temperature -
                {method.fermentation.temp.value}{method.fermentation.temp.unit}</p>
            <p>mash:</p>
            <p>temperature - {method.mash_temp[0].temp.value}{method.mash_temp[0].temp.unit}</p>
            {method.mash_temp[0].duration && <p>duration - {method.mash_temp[0].duration}</p>}
            <p>yeast: {ingredients.yeast}</p>
            <p>Volume: {volume.value}{volume.unit}</p>
            <p>Boil volume: {boil_volume.value}{boil_volume.unit}</p>
            <p>Abv: {abv}</p>
            <p>Attenuation level: {attenuation_level}</p>
            <p>Tip: {brewers_tips}</p>
            <p>Contributed by: {contributed_by}</p>
            <p>EBC: {ebc}</p>
            <p>First brewed: {first_brewed}</p>
            <p>Food pairing: </p>
            <ul>{food_pairing.map((pair, i) => <li key={i}>{pair}</li>)}</ul>
            <p>IBU: {ibu}</p>
            <p>PH: {ph}</p>
            <p>SRM: {srm}</p>
            <p>Target FG: {target_fg}</p>
            <p>Target OG: {target_og}</p>
        </div>

    </div>
}

export default SingleRecipe