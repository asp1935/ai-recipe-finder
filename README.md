# AI Recipe Finder

AI Recipe Finder is an intelligent web application that helps users discover recipes based on the ingredients they have or by searching for a recipe name. The application uses machine learning models trained on a large recipe dataset to suggest recipes accordingly. It provides a seamless user experience with a frontend built using **React** and **Tailwind CS**S and a backend using **Express.js**, with a **Python Flask** app running the ML model.

---

## 🛠️ Features

- **Search Recipes by Name or Ingredients**: Allows users to find recipes by providing either the recipe name or the ingredients they have.
- **Machine Learning Integration**: Utilizes a Python Flask app that runs an ML model trained on a large recipe dataset for accurate suggestions.
- **Responsive Design**: Fully responsive UI, designed to work seamlessly across desktop, tablet, and mobile devices.
- **Dockerized Backend**: Ensures consistent environment setup for the backend using Docker.
- **CI/CD Pipeline**: Automated testing, building, and deployment through the CI/CD pipeline for smoother updates.
- **User Recipe Management (Future Feature)**: Users will be able to save their favorite recipes and add new ones to the system.

---

## 🔧 Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Express.js (Node.js),Webpack
- **Machine Learning Model**: Python Flask running the trained ML model
- **Docker**: For containerizing the backend
- **CI/CD**: Automated deployment pipeline using GitHub Actions (or similar)
- **AWS EC2**: Hosting the backend

---

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   > git clone https://github.com/asp1935/ai-recipe-finder.git
   > cd ai-recipe-finder
2. **Frontend Setup**:
   ```bash
   > cd frontend
   > npm install
3. **Backend Setup**

   ### a. ****Express App (Without Docker)****
   1. Navigate to the backend directory and install dependencies:
      ```bash
      cd backend/express
      npm install
      ```

   2. **Setup `.env` File** (Express Local)
      Create a `.env` file in the `backend/express` directory with the following variables:
      ```bash
      EX_PORT='Express APP PORT'
      ORIGIN_ACCESS_URL='Frontend App URL'
      MODEL_API_URL='Python App URL'
      ```

   3. **Build & Run**
      - **For Development**:
        ```bash
        npm run dev
        ```
      - **For Deployment**:
        ```bash
        npm run build
        npm run start

  ### b. ****Python Flask App (Without Docker)****
   1. Navigate to the backend directory and install dependencies:
      ```bash
      cd backend/python
      pip install -r requiremt.txt
      ```

   2. **Setup `.env` File** (Express Local)
      Create a `.env` file in the `backend/express` directory with the following variables:
      ```bash
      PY_PORT='Flask App Port'
      PY_CORS_ORIGIN='Express App URL'
      ```

   3. **Build & Run**
      - **For Development**:
        ```bash
        python app.py
        ```
      - **For Deployment**:
        ```bash
        gunicon src.app:app --workers 4      #Specify workers as per you choice 
        ```
  ####  ***_With Docker_***
  Install Docker Desktop (for windows)
  ```bash
       > cd backend
       > docker-compose up -d --build
  ```
  ```bash
    # Monitor Logs:
    > docker-compose logs -f
  
    # Stopping the Services
    > docker-compose down
  ```

---
4. CI/CD Pipeline Setup

The CI/CD pipeline has been set up using **GitHub Actions**. The configuration files are located in the `ai-recipe-finder/.github` directory.

#### Setting Up GitHub Secrets
1. Navigate to **Repository Settings**:
   - Go to your GitHub repository.
   - Click on the **Settings** tab.

2. Go to **Secrets and Variables**:
   - Under the **Security** section, click on **Secrets and variables**.
   - Select **Actions**.

3. Add the required secrets:
   - Click **New repository secret**.
   - Add each secret by specifying the **Name** and **Value**.
     ```bash
     EC2_HOST = 'EC2 Public IP'
     EC2_SSH_KEY = 'EC2 SSH Key'             #Whole file Content
     EC2_USER = 'EC2 User Name'              #ex. ec2-user,ubuntu

     #Environment Varible (You can also use Secret Manager)
     EX_PORT = 'Express App Port'
     PY_PORT = 'Flask App Port
     MODEL_API_URL = 'Flask App Port'
     ORIGIN_ACCESS_URL = 'Frontend URL'
     PY_CORS_ORIGIN = 'Express App URL'
     ```
Just push your code and you can observe logs in `Action Tab' of repository. 


## 🎮 Future Features

User Recipe Management: Save favorite recipes and add new ones to the system.
Personalized Recommendations: Enhanced AI-powered recipe suggestions based on user preferences and history.


  
