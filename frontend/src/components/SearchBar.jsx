import { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {
    Input,
    FormControl, 
    Box
  } from '@chakra-ui/react'

function SearchBar() {
    const [input, setInput] = useState(""); 
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/pokemons/name/'+input);
    };
    return (
        <FormControl onSubmit={submitHandler}>
            <Box>
                <FaSearch></FaSearch>
                <Input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input} 
                />
            </Box>
        </FormControl>
    )
}

export default SearchBar