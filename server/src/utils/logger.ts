import { appendFile } from 'fs';

const simpleLogger = (location: string, fn: string, message: string) => {
  if (process.env.LOGGER !== 'true') return;

  const time = new Date().toLocaleDateString('en-gb', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const logMessage = `\n${time} @ ${location}\nCalled ${fn} - ${message}\n**`;

  if (process.env.LOGGER_VERBOSE === 'true') {
    console.log(logMessage);
  }

  appendFile('./log.txt', logMessage, (err) => {
    if (err) throw err;
  });
};

export default simpleLogger;
