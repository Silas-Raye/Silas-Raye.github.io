

// ---------------------------------------------------------------------------

document.getElementById('generateButton').addEventListener('click', generateResume);

const fs = require('fs');
const Docxtemplater = require('docxtemplater');

function generateResume(resumeData) {
  console.log('started function')

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

  console.log('finsihed function')
  
}

// Example usage
const resumeData = {
  name: 'Joe Schome',
  email: 'joeschmoe4th@gmail.com',
  // Add more data fields as needed
};
