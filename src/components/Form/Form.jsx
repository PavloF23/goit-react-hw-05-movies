import { toast } from 'react-toastify';
import { useState } from "react";
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import { SearchForm, Button, Label, Input } from "./Form.styled";


const Form = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handlChange = (evt) => {
    setQuery(evt.target.value)
  }

  const handlSubmit = (evt) => {
    evt.preventDefault()

    if (query.trim() === '') {
      toast.warn("Please, input something!")
      return
    }

      onSubmit(query.trim())
      setQuery('')
  }
   
  return (
    <SearchForm onSubmit={handlSubmit}>
      <Button type="submit">
        <IoSearchOutline size={24} />
        <Label>Search</Label>
      </Button>
        <Input
          // className="SearchForm-input"
          type="text"
          value={query}
          onChange={handlChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
      
  );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;