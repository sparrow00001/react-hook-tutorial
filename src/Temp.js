import React from 'react';
import { Button, Typography, Paper } from '@material-ui/core';

const paragraphStyles = {
  overflow: 'hidden',
  textOverflow: 'ellipsis', // You can adjust this behavior as needed
  whiteSpace: 'nowrap',
};

function CopyableParagraph({ title, message }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" style={paragraphStyles}>
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
        message="This is a long message that may overflow, so we add CSS to prevent it from doing so."
      />
      <CopyableParagraph
        title="Paragraph 2"
        message="Another long message for demonstration."
      />
    </div>
  );
}

export default YourComponent;
