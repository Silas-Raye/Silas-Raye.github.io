// this code works localy if you reinstall the requirements using npm

// to run it sever side prompt find with the following...
// my code isn't working. the error is Uncaught ReferenceError: require is not defined. here is the code...
// give the html code and the js code 

// script.js
const fs = require('fs');
const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip');

function generateResume(resumeData) {

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
  name: 'John Dope',
  email: 'johndoe@example.com',
  // Add more data fields as needed
};

generateResume(resumeData);