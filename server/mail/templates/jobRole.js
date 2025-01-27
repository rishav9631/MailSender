exports.getJobRoleInquiry = (recipientName, recipientCompany, jobRole) => {
    const linkedinUrl = "https://www.linkedin.com/in/rishav-kumar-a96175190/";
    const resumeUrl = "https://drive.google.com/file/d/1myrH9blbnZ06gFsS0_-XkJpzcax5LH7z/view";
    const githubUrl = "https://github.com/rishav9631";
  
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Inquiry About ${jobRole} Role</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
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
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
            }
  
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
  
            .link {
                color: #007BFF;
                text-decoration: none;
            }
  
            .footer {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">Inquiry About ${jobRole} Role</div>
            <div class="body">
                <p>Dear ${recipientName},</p>
  
                <p>I hope this email finds you well. My name is Rishav Kumar, and I am a final-year B.Tech student at NIT Jamshedpur, specializing in Electronics and Communications Engineering.</p>
  
                <p>I am reaching out to inquire about the ${jobRole} role at ${recipientCompany}. With hands-on experience in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js) and a strong foundation in data structures and algorithms, I am eager to contribute to impactful projects and learn from your esteemed team.</p>
  
                <p>You can find more details about my background and projects on my LinkedIn profile: <a href="${linkedinUrl}" class="link">${linkedinUrl}</a>.</p>
  
                <p>Additionally, here is the link to my resume for your reference: <a href="${resumeUrl}" class="link" target="_blank">${resumeUrl}</a>.</p>
  
                <p>You can also explore my GitHub profile for a closer look at my work: <a href="${githubUrl}" class="link" target="_blank">${githubUrl}</a>.</p>
  
                <p>Thank you for your time and consideration. I would be grateful if you could let me know about the next steps for this opportunity or guide me through the application process.</p>
  
                <p>Looking forward to hearing from you.</p>
  
                <p>Best regards,</p>
                <p>Rishav Kumar</p>
                <p>Email: rishavjha771@gmail.com</p>
            </div>
        </div>
    </body>
    
    </html>`;
  };
  