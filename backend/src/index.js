import Bootstrap from './boot/Bootstrap.js'

const app = new Bootstrap();

app.start();

// listens for CTRL-C, and then closes application gracefully
process.on('SIGINT', () => {
    console.log('App closing!');
    app.close();
});