import React from 'react';
import { Button, Typography, Paper } from '@material-ui/core';

function CopyableParagraph({ title, message }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">
        {message}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={copyToClipboard}
      >
        Copy
      </Button>
    </Paper>
  );
}

function YourComponent() {
  return (
    <div>
      <CopyableParagraph
        title="Paragraph 1"
        message="This is the content of paragraph 1."
      />
      <CopyableParagraph
        title="Paragraph 2"
        message="This is the content of paragraph 2."
      />
    </div>
  );
}

export default YourComponent;
