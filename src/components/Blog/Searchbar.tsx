import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField, useTheme } from '@mui/material';
import { textFieldSx } from '../../utils/styles';

interface SearchBarProps {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  const theme = useTheme();

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={onChange}
      sx={textFieldSx}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon style={{ color: theme.palette.secondary.main }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
