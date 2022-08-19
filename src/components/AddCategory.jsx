import { useState } from "react"


export const AddCategory = ({ onNewCategory/* setCategories, categories  */}) => {
    const [inputValue, setinputValue] = useState("");

    const onInputChange = (e) => {
        setinputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let new_value = inputValue.trim();
       /*  setCategories([inputValue, ...categories]); */
       if( new_value.length <= 1) return;
/*         setCategories(categories => [inputValue, ...categories]); */
        onNewCategory(new_value);
        setinputValue("");
    }
  return (
    <form action="" onSubmit={onSubmit}>
    <input
        type='text'
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
  )
}
