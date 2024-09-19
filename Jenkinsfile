pipeline{
    agent any
    tools{
        nodejs "node"
    }
    stages{
        stage("node version"){
            steps{
                sh 'node --version'
            }
        }
        stage("Clone repo"){
            steps{
                git(
                   url: "https://github.com/ChepkemoiPeris/jenkins-node-demo.git",
                   branch: "master"
               )

            }
        }
         
        stage("Install npm"){
            steps{
                sh 'npm install'
            }
        }
      stage('Tests'){
           steps{
                echo "Running tests"
           }
       }
       stage('Run app locally'){
           steps{
                sh 'nohup node index.js &'
           }
       }
    stage('Deploy to Heroku'){
      steps{
              withCredentials([usernameColonPassword(credentialsId: '21f405c0-3c9b-4ae5-8370-4c610b17ced8', variable: 'HEROKU_CREDENTIALS')]) {
                   sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/jenkins-demo-moringa.git main' }
           }
       }



    }
}