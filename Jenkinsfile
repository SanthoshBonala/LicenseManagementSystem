node('master') {
    def payload = readJSON text:"$payload"
    env.APPLICATION_SERVER = '188.166.81.26'
    echo payload.ref
    stage('Preparation') {
        // Maven
        git url: 'https://github.com/primetrain/LicenseManagementSystem'
    }

    stage("install dependencies") {
        sh "cd frontend && npm install"
    }

    // stage('Run Angular Tests') {
    //     sh "cd frontend && npm test"
    // }

    stage("Build Angular Project") {
        sh "ls && cd frontend && npm run-script build"
    }

    stage('Compile') {
        // Run the maven compile
        sh "mvn clean compile -P env-dev"
    }

    stage('Test') {
        // Run the maven test
        sh "mvn test -P env-dev"
    }

    if (payload.ref == 'refs/heads/master') {
        stage('Package') {
            // Run the maven package
            sh "mvn package -P env-dev"
        }

        stage('Install') {
            // Run the maven package
            sh "mvn install -P env-dev"
        }

        stage('copy files'){
            sh "sudo scp -i ~/.ssh/id_rsa target/*jar root@$APPLICATION_SERVER"
        }
    }
}
