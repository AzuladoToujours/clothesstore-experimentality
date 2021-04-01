pipeline {
    agent any

    environment {
        ARTIFACT_ID = 'azuladotoujours/clothesstore'
        STACK_NAME = 'clothes_store'
        SERVICE_NAME = 'clothes-store'
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
    stage('Schedule Deployment') {
        steps {
          build job: 'Express-CD', parameters: [string(name: 'ARTIFACT_ID', value:"${env.ARTIFACT_ID}"), 
                                                string(name: 'SERVICE_NAME', value: "${SERVICE_NAME}"), 
                                                string(name: 'STACK_NAME', value: "${STACK_NAME}")], wait: false
        }
      }
    }
}