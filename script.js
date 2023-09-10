var countDownDate = new Date("Nov 18, 2023 00:00:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var totalMinutes = Math.floor(distance / (1000 * 60));
  var megaminutes = Math.floor(totalMinutes / 3);
    
  document.getElementById("megaminutes").innerHTML = megaminutes + " megaminutes till I see you ❤️";
    
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateButton').addEventListener('click', generateResume);
});

const fs = require('fs');
const Docxtemplater = require('docxtemplater');

function generateResume(resumeData) {

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
  name: 'Joe Schome',
  email: 'joeschmoe4th@gmail.com',
  // Add more data fields as needed
};
