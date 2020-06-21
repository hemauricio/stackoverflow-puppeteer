# Stack Overflow - Puppeteer

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
- Create your new cronjob by running `crontab -e`, selecting the editor of your choice, adding a line with the following format, and finally saving the file. I chose an hour that I'm sure I'll be using my computer, so I ensure the script's execution. [Crontab Guru](https://crontab.guru/) is a good place to edit the expression in case you have doubts.
  ```
  00 16 * * * node /path/to/stackoverflow_puppeteer/src/stackoverflow.js
  ```
- Double check your cron by running `crontab -l`

All this runs locally, and I couldn't find an API that could allow me to authenticate with any other method than a hard-coded password in a configuration file.
