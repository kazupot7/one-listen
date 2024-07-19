# OneListen

## Motivation

When I listen to music, I often encounter copyright restrictions that require me to use different apps to listen to a song. My goal is to create an app that consolidates music listening into one seamless experience. This idea has been explored in [listen1](https://github.com/listen1), but I aim to reimplement it using Rust and the [Tauri](https://tauri.app/) framework for a more integrated solution.

## Development

The frontend of the app is developed with [Nuxt 3](https://nuxt.com/), so you will need Node.js and npm installed on your system. Follow the instructions on their respective websites to get set up.

### Setting Up

Before starting the app development, you need to install `tauri-cli`. This tool is essential for Tauri development. Install it using Cargo with the following command:

```bash
cargo install tauri-cli
```
### Running the App

To start developing the app on Windows, use the following command:
```bash
cargo tauri dev
```
This command initiates the development server, allowing you to test and develop the app in real-time.