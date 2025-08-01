// submission_backend.js

const submissions = [];

document.getElementById('submissionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const studentName = this.student.value.trim();
  const assignmentFile = this.assignmentFile.files[0];

  if (studentName && assignmentFile) {
    const submission = {
      name: studentName,
      fileName: assignmentFile.name,
      time: new Date().toLocaleString()
    };
    submissions.push(submission);
    console.log("Submission recorded:", submission);
    alert(`Assignment submitted by ${studentName}`);
    this.reset();
  } else {
    alert("Please fill all fields");
  }
});
