import React from 'react';
import { Paper, Typography, IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy'; // Material-UI copy icon

const paragraphStyles = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '14px', // Smaller font size
};

const iconButtonStyles = {
  position: 'absolute',
  bottom: '8px',
  right: '8px',
};

function CopyableParagraph({ title, message }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', position: 'relative' }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" style={paragraphStyles}>
        {message}
      </Typography>
      <IconButton style={iconButtonStyles} onClick={copyToClipboard}>
        <FileCopyIcon />
      </IconButton>
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




$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

.container {
  display: flex;
  justify-content: center; /* Center the form horizontally */
  align-items: flex-start; /* Align the form at the top vertically */
  height: 100vh; /* Adjust the height to your preference */
}

.form-box {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form elements vertically */
  margin-right: 20px; /* Add margin for spacing between the form and custom paragraphs */
}





<div className="container">
      <div className="form-box">
        <TextField
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          label="Field 1"
        />
        {/* Add similar TextFields for field2, field3, and field4 */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {showCustomParagraphs && (
        <div className="custom-paragraphs">
          <Typography variant="body1">Custom Paragraph 1</Typography>
          <Typography variant="body1">Custom Paragraph 2</Typography>
        </div>
      )}
    </div>
