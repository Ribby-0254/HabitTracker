import Bootstrap from './config/Bootstrap.js'

const app = new Bootstrap();

app.start();

// listens for CTRL-C, and then closes application gracefully
process.on('SIGINT', () => {
    app.close();
});