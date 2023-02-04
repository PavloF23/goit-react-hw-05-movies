import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import { SearchForm, Button, Label, Input } from "./Form.styled";

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryP = searchParams.get('query');

  const handlSubmit = (evt) => {
    evt.preventDefault();

    if (queryP.trim() === '') {
      toast.warn("Please, input something!")
      return
    }
      onSubmit(queryP.trim())
      setQuery('');
  }

  const handleChange = evt => {
    setSearchParams({query: evt.target.value})
    const { value } = evt.currentTarget;
    setQuery(value);
  }
   
  return (
    <SearchForm onSubmit={handlSubmit}>
      <Button type="submit">
        <IoSearchOutline size={24} />
        <Label>Search</Label>
      </Button>
        <Input
          type="text"
          value={query}
          onChange={handleChange}
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