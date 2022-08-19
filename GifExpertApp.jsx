import { useState } from "react"
import { AddCategory, GifGrid} from './src/components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (onAddNewCategory) => {
        if (categories.includes(onAddNewCategory))return;
        setCategories([onAddNewCategory, ...categories]);
    };

    return ( 
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory={onAddCategory}/> 

        {
            categories.map( (category) => (
                <GifGrid key={ category } category={category}/>
            ))
        }
    </>
  )
}
