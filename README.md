# NodeMailer Email Sender

This project demonstrates how to send emails using **NodeMailer** in a Node.js environment, including sending attachments such as PDFs and images. It leverages Gmail's SMTP service and uses environment variables for secure authentication.

## Key Features
- Sends plain text and HTML emails.
- Includes file attachments (PDF and image).
- Utilizes **dotenv** for environment variable management.
- Configured for Gmail SMTP with App Password authentication.

## Technologies Used
- Node.js
- Nodemailer
- dotenv

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and configure it with your Gmail credentials:
    ```bash
    USER=your-email@gmail.com
    APP_PASSWORD=your-app-password
    ```

   - **USER**: Your Gmail address.
   - **APP_PASSWORD**: Your Google App Password (must be generated via your Google account security settings).

## How to Run the Project

After configuring the `.env` file and installing the dependencies, you can run the project with the following command:

```bash
node sendMail.js
```

Make sure to adjust the repository name in the URL for the cloning instructions, and replace `your-username` with your GitHub username if needed.


