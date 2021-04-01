pipeline {
    agent any

    environment {
        ARTIFACT_ID = 'azuladotoujours/clothesstore'

        
    }
    stages {
        stage('Build'){
            steps {    
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }

        stage('Running Unit Tests') {
      steps {
        sh "docker run --rm --env TEST_DATABASE_URL=${TEST_URL} ${dockerImage.id} npm test"
      }
    }
        stage('Publish') {
      steps {
        script {
          docker.withRegistry("", "DockerHubCredentials") {
            dockerImage.push()
          }
        }
      }
    }
    }
}