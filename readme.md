installation:

1)connect to your server.
2)make sure you have nodejs by typing:
node -v
(yuo should see the version of the node)
3)make sure you have npm (node package manager) by typing:
npm -v
(yuo should see the version of the npm)
4)open terminal on the path of the project (tagit folder)
5)type 'npm install'
6)wait for all the files will downloaded and will installed automatically
7)take the nodejs server on by typing 'node server.js' (again make sure you are in the correct path)
8)make sure you see in the terminal: 'Server listening on port 3000'

that's it, the server is up and ready to serve you.

how to use it?
*you can open the browser and go to: 127.0.0.1:3000 , and you can test the screenhsots from the website.
*you can just make get request to: http://localhost:3000/downloadImage?url=YOUR_WEBSITE_HERE
 for example: http://www.arais.co.il/ -> http://localhost:3000/downloadImage?url=http://www.arais.co.il/
              google.com -> http://localhost:3000/downloadImage?url=google.com
              facebook.com -> http://localhost:3000/downloadImage?url=facebook.com




