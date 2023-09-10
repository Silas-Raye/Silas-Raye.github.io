const fs = require('fs');
const Docxtemplater = require('docxtemplater');

function generateResume(resumeData) {
  // // Load the template file
  // const template = fs.readFileSync('resume_template.docx');

  // // Create a new Docxtemplater instance
  // const doc = new Docxtemplater(template);

  const PizZip = require('pizzip');
  const Docxtemplater = require('docxtemplater');

  const template = fs.readFileSync('resume_template.docx');
  const zip = new PizZip(template);
  const doc = new Docxtemplater(zip);

  // Set the data for the template
  doc.setData(resumeData);

  // Render the document
  doc.render();

  // Get the generated document as a buffer
  const buffer = doc.getZip().generate({ type: 'nodebuffer' });

  // Save the document to a file
  fs.writeFileSync('resume.docx', buffer);
}

// Example usage
const resumeData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  // Add more data fields as needed
};

generateResume(resumeData);