# TypeScript-Getting-Started

This is the official repository for my Pluralsight course titled [*TypeScript: Getting Started*](https://app.pluralsight.com/library/courses/typescript-getting-started/table-of-contents). 
The *main* branch contains code as it 
exists at the start of the course. There are separate branches named after the modules in the course that contain the code as it 
exists at the end of that module.

Thanks for watching and good luck on your TypeScript projects!

# Setup Guide

Clone or download the file and unzip it. use your favorite IDE and just run the commands below:
```
npm install
```
then to start the app:
```
npm start
```
# Problem might faced
If you encounter this error: Error message "error:0308010C:digital envelope routines::unsupported"
<br/>It just means this is an older typescript version and to run it you need to downgrade the node then rerun **npm start** again:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

#### FYI: downgrade does not downgrade your actual node on your system it is just a one-time thing, and if you close and reopen the editor and run this again you probably see the error again.
