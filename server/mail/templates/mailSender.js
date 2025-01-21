exports.getInternshipInquiry = (recipientName, recipientCompany) => {
    const linkedinUrl = "https://www.linkedin.com/in/rishav-kumar-a96175190/";
    const resumeUrl = "https://drive.google.com/file/d/1myrH9blbnZ06gFsS0_-XkJpzcax5LH7z/view";
    const githubUrl = "https://github.com/rishav9631";
  
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Inquiry About Internship Opportunities</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
            }
  
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
  
            .header {
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #007BFF;
            }
  
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
  
            .link {
                color: #007BFF;
                text-decoration: none;
                font-weight: bold;
            }
  
            .footer {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
  
            .bold {
                font-weight: bold;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="body">
                <p>Dear <span class="bold">${recipientName}</span>,</p>
  
                <p>I hope this email finds you well. My name is <span class="bold">Rishav Kumar</span>, and I am a final-year <span class="bold">B.Tech student at NIT Jamshedpur</span>, specializing in <span class="bold">Electronics and Communications Engineering</span>.</p>
  
                <p>I am reaching out to inquire about <span class="bold">Internship Opportunities</span> at <span class="bold">${recipientCompany}</span>. With hands-on experience in <span class="bold">MERN-Stack development</span> using the <span class="bold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) and a strong foundation in <span class="bold">Data structures and Algorithms</span>, I am eager to contribute to impactful projects and learn from your esteemed team.</p>
  
                <p>You can find more details about my background and projects on my <span class="bold">LinkedIn Profile</span>: <a href="${linkedinUrl}" class="link">${linkedinUrl}</a>.</p>
  
                <p>Additionally, here is the link to my <span class="bold">Resume</span> for your reference: <a href="${resumeUrl}" class="link" target="_blank">${resumeUrl}</a>.</p>
  
                <p>You can also explore my <span class="bold">GitHub Profile</span> for a closer look at my work: <a href="${githubUrl}" class="link" target="_blank">${githubUrl}</a>.</p>
  
                <p>Thank you for your time and consideration. I would be grateful if you could let me know about any available opportunities or guide me through the application process.</p>
  
                <p>Looking forward to hearing from you.</p>
  
                <p class="bold">Best regards,</p>
                <p>Rishav Kumar</p>
                <p>Email: <a href="mailto:rishavjha771@gmail.com" class="link">rishavjha771@gmail.com</a></p>
            </div>
        </div>
    </body>
    
    </html>`;
};
