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


    }
}