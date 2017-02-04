# there-is-in-it

#####USE NODE 6.9.*

##Fork this shit
1. click the magic fork button at the top
2. clone you own copy `git clone https://github.com/<YOUR_USER>/there-is-in-it.git`
3. edit the words that have in them list file in `./data/wordsThatHaveInThem.txt`

##Setup this shit
\- Step I - add words to the list -  
The file `data/wordsThatHaveInThem.txt` is `newline` separated list of all words that have in them, add as many as you can.  
\- Step II - create a slack bot in your account
 - go here https://<YOUR_ORGANIZATION>.slack.com/services/new/bot
 - enter the bot user name
 - scroll down to set up name and avatar and shit
 - we will need to use the API Token so keep the page open

##Deploy this shit (local also works)
There are 2 environment variables you need to set before using:  
#####`SLACK_BOT_API_TOKEN` - The API Token of the bot we just created
#####`SLACK_BOT_NAME` - The name of the bot (no spaces allowed so probably something like `there_is_in_it`)

To run locally run `node index.js`  
If you need to set env vars you can use  
`SLACK_BOT_API_TOKEN=<YOUR_API_TOKEN> SLACK_BOT_NAME=<YOUR_BOT_NAME> node index.js`

As long as the process is running the bot will run.

You can deploy to [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) or [aws](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)

