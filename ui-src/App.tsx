import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Stack,
} from '@mui/material';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  const onCreate = () => {
    parent.postMessage(
      { pluginMessage: { type: 'create-rectangles', count: amount } },
      '*'
    );
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <Container>
      <Stack spacing={4}>
        <Stack component="header" spacing={8}>
          <Typography variant="h4">Rectangle Creator</Typography>
        </Stack>
        <Box>
          <FormControl fullWidth>
            <InputLabel htmlFor="input">Amount</InputLabel>
            <OutlinedInput
              id="input"
              type="number"
              inputProps={{ min: 0 }}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </FormControl>
        </Box>
        <Stack component="footer" direction="row" spacing={4}>
          <Button color="primary" onClick={onCreate}>
            Create
          </Button>
          <Button color="warning" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
