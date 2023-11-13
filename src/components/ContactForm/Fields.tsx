import { TextField } from '@mui/material';
import { EmailRequestType } from '../../utils/types';

type FieldsProps = {
  formState: EmailRequestType;
  setFormState: React.Dispatch<React.SetStateAction<EmailRequestType>>;
};

const Fields: React.FC<FieldsProps> = ({ formState, setFormState }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const textFieldSx = {
    '& label': { color: 'white' }, // Non-focused label color
    '& label.Mui-focused': { color: 'secondary.main' }, // Focused label color
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'secondary.main' },
      '&:hover fieldset': { borderColor: 'secondary.main' },
      '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
      '& input, & textarea': { color: 'white' }, // Set color for both input and textarea
      '& .MuiInputBase-input::placeholder': {
        color: 'white',
        opacity: 1,
      },
    },
    marginBottom: 2,
  };

  return (
    <>
      <TextField
        label="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
        required
        fullWidth
        sx={textFieldSx}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        required
        fullWidth
        sx={textFieldSx}
      />
      <TextField
        label="Message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
        sx={textFieldSx}
      />
    </>
  );
};

export default Fields;
