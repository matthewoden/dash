# Dash - Starter repo for Experiments with an Amazon Dash Button.
This is just an easily cloneable repo so I can program my dash to do a bunch of things. Comes pre-installed with with `maker-ifttt` for configuring IoT connections without having to restart the server.

(libpcap setup/installation instructions taken from [node-dash-button](https://github.com/hortinstein/node-dash-button).)

## Setup

### Install Dependancies
Project uses node 5.2.0, libpcap, and optionally, python's pypcap.

Install node dependancies:
```bash
npm install
```

Install libpcap, or the python wrapper for it, pypcap.
If on ubuntu, you can install the library directly:
```bash
sudo apt-get install libpcap-dev
```

Otherwise, use pip:
```bash
pip install pypcap
```

...or with brew, if you must:
```bash
brew install pypcap
```

### Assemble config file.
The `config.json` contains three keys for easy project customization.
1. address: Your dash's mac address(es)
1. maker: IFTTT's maker channel key
1. event: the IFTTT event name

#### 1. Get the mac address of your dash button:
```bash
cd node_modules/node-dash-button
node bin/findbutton # Note: on OSX, you'll have to use sudo.
```

Depending on your home network, you may have to press the button a few times to get the right address. Save this number to dash.json, at the root level.

#### 2. IFTTT (Optional)
If you want to use IFTTT, then create an account on [ifttt.com](http://ifttt.com), and add the maker channel. You'll get your key right away.

#### 3. Event name (Optional)
Once you have the maker channel, create a new recipe. You can choose your event name here.

## Running

On OS X:
``` bash
sudo node start
```
On linux (aka, that raspberry pi you bought that's just been collecting dust):
```bash
node index
```
