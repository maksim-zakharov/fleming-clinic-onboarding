#### 0. Install dependencies if not already installed (once)
`npm install`

#### 1. Start building server and client
`npm run build:heroku`

#### 2. Archive the following files and folders in .zip format:
- Procfile
- package.json
- dist
- node_modules
- .ebextensions

#### 2.1. When archiving, you can select "no compression" to speed up the process

#### 3. Upload build to Amazon

Go to Elastic Beanstalk
https://ap-south-1.console.aws.amazon.com/elasticbeanstalk/home?region=ap-south-1#/environment/dashboard?applicationName=fleming-hotel-onboarding&environmentId=e-fsc4wwdijy
 , click on the "Upload and Deploy" button and upload the archive for the build with an increase in the build version.
 
Example: fleming-hotel-onboarding-source-v1.0.14 -> fleming-hotel-onboarding-source-v1.0.15

