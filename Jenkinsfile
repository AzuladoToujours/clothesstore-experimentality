pipeline {
    agent any

    options {
        timeout(time:2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = 'azuladotoujours/clothestore'
        
    }
    stages {
        stage('Build'){
            steps {    
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }

        stage('Running Tests') {
      steps {
        sh "docker run--env TEST_DATABASE_URL=${TEST_URL} ${dockerImage.id} npm test"
      }
    }
    }
}