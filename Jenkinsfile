pipeline {
  agent any
  environment {
    DOCKER_IMAGE = "test"
  }
  stages {
    stage("Verify tooling") {
      steps {
        sh '''
          docker --version
          docker info
          curl --version
          jq --version
        '''
      }
    }
    stage("Java build") {
      steps {
        sh '''
          npm --version
        '''
      }
    }
  }
  post {
    always {
      sh 'docker ps'
    }
  }
}