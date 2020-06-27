# Stack Overflow - Puppeteer

![so_puppeteer_demo](https://user-images.githubusercontent.com/13971760/85240555-3629de00-b3fe-11ea-99fd-cb8255b21e2b.gif)

Using Puppeteer and Unix Crons I'll be getting the "Enthusiast" and "Fanatic" participation badges in Stack Overflow.

![badges](https://user-images.githubusercontent.com/13971760/85235667-8bed8e80-b3dc-11ea-9194-c18ef2434728.png)

## If you want to try it out, you should:

- Clone the repo
- [Install puppeteer](https://www.npmjs.com/package/puppeteer) inside the cloned folder
- Create the __secrets/__ folder
- Inside the __secrets/__ folder, create the __secrets.js__ file with this format and fill it with your information
  ```
  const config = {email: "email@email.com", password: "password"}

  module.exports = config;
  ```
I originally had a cron executing the script directly, or so I thought, as my cron was failing silently. While troubleshooting I ended up logging the timestamps of both the beginning and end of the execution; Then, to have a better structure, I created a bash script to call my Node.js script.

So, these are my steps:

- Create a `stackoverflow.sh` script (wherever you want), with the following:
```
#!/usr/bin/env
/path/to/node /path/to/stackoverflow_puppeteer/src/stackoverflow.js >> /path/to/stackoverflow_puppeteer/history.log
```

- Create your new cronjob by running `crontab -e`, selecting the editor of your choice, adding a line with the following format, and finally saving the file. I chose an hour that I'm sure I'll be using my computer, so I ensure the script's execution. [Crontab Guru](https://crontab.guru/) is a good place to edit the expression in case you have doubts.
  ```
  00 12 * * * bash /path/to/stackoverflow.sh
  ```

- Double check your cron by running `crontab -l`

All this runs locally, and I couldn't find an API that could allow me to authenticate with any other method than a hard-coded password in a configuration file.
