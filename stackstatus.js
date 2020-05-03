var awsCli = require('aws-cli-js');
var Options = awsCli.Options;
var Aws = awsCli.Aws; 
//const options = new Options(
//  aws_access_key_id = ID
//aws_secret_access_key = Key2
  /* currentWorkingDirectory */ null
//);


const aws = new Aws();


aws.command('cloudformation describe-stack-events --stack-name <cloudformation-templatename-dev> --max-items 3').then((data) => {
  console.log('');
  console.log('            ******DEV Environment*************                       ');

   let cliResponse = JSON.parse(data.raw);
   // console.log(data.raw);

   cliResponse.StackEvents.forEach(event => {
   console.log('---------------------------------------');
    // console.log(`StackName : ${event.StackName}`) ;
    // console.log(`Status : ${event.ResourceStatus}`) ;

    let localtime =   new Date(`${event.Timestamp}`).toString();
    console.log(`${localtime} | ${event.StackName} | ${event.ResourceStatus} | `) ;

    //date.toString() // "Wed Jun 29 2011 09:52:48 GMT-07
    
   });
   

  //  console.log(JSON.parse(data.raw).StackEvents[0].ResourceStatus);
//  console.log(JSON.parse(data.raw).CacheClusters[0].CacheNodes[0].Endpoint.Port);
});



aws.command('cloudformation describe-stack-events --stack-name <cloudformation-templatename-qa> --max-items 3').then((data) => {
  console.log('');
  console.log('                    QA Environment                '); 

  let cliResponse = JSON.parse(data.raw);
  // console.log(data.raw);

  cliResponse.StackEvents.forEach(event => {
  console.log('---------------------------------------');
   // console.log(`StackName : ${event.StackName}`) ;
   // console.log(`Status : ${event.ResourceStatus}`) ;

   let localtime =   new Date(`${event.Timestamp}`).toString();
   console.log(`${localtime} | ${event.StackName} | ${event.ResourceStatus} | `) ;

   
  });
  

 //  console.log(JSON.parse(data.raw).StackEvents[0].ResourceStatus);
//  console.log(JSON.parse(data.raw).CacheClusters[0].CacheNodes[0].Endpoint.Port);
});


aws.command('cloudformation describe-stack-events --stack-name <cloudformation-templatename-uat> --max-items 3').then((data) => {
 
  console.log('');
  console.log('                    UAT Environment                   ');

  let cliResponse = JSON.parse(data.raw);
  // console.log(data.raw);

  cliResponse.StackEvents.forEach(event => {
  console.log('---------------------------------------');
   // console.log(`StackName : ${event.StackName}`) ;
   // console.log(`Status : ${event.ResourceStatus}`) ;

   let localtime =   new Date(`${event.Timestamp}`).toString();
   console.log(`${localtime} | ${event.StackName} | ${event.ResourceStatus} | `) ;

   //date.toString() // "Wed Jun 29 2011 09:52:48 GMT-07
   
  });
  

 //  console.log(JSON.parse(data.raw).StackEvents[0].ResourceStatus);
//  console.log(JSON.parse(data.raw).CacheClusters[0].CacheNodes[0].Endpoint.Port);
});
