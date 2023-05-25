pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "M3"
    }

    stages {
        stage('Git Checkout') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', credentialsId: 'GitCreds', url: 'https://github.com/RahulPG/DS.git'
            }
        }
            
        stage('MVN install clean') {
            steps {
                bat "mvn clean install"
            }
        }
    }
}
