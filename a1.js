// Step 1  and Step 2
console.log('Hello World');

// Step 3
const serverVerbs = ['GET', 'GET', 'GET', 'POST', 'GET', 'POST'];
const serverPaths = ['/', '/about', '/contact', '/login', '/panel', '/logout'];
const serverResponses = [
  'Welcome to WEB700 Assignment 1',
  'This assignment was prepared by Sai Kamali Villa',
  'Sai Kamali Villa: skvilla@myseneca.ca',
  'User Logged In',
  'Main Panel',
  'Logout Complete',
];
// Step 4
function httpRequest(httpVerb, path) {
  const { length } = serverVerbs;
  let serverResponse = '';
  for (let i = 0; i < length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      serverResponse = '200: ' + serverResponses[i];

      break;
    } else {
      serverResponse =
        '404: Unable to process ' + httpVerb + ' request for ' + path;
    }
  }
  return serverResponse;
}

//Step 5
console.log(httpRequest('GET', '/'));
console.log(httpRequest('GET', '/about'));
console.log(httpRequest('PUT', '/'));

// Step 6

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function automateTests() {
  const testVerbs = ['GET', 'POST'];
  const testPaths = [
    '/',
    '/about',
    '/contact',
    '/login',
    '/panel',
    '/logout',
    '/randomPath1',
    '/randomPath2',
  ];
  function randomRequest() {
    const randVerb = getRandomInt(1); // max value 1
    const randPath = getRandomInt(7); // max value 7
    const serverResponse = httpRequest(
      testVerbs[randVerb],
      testPaths[randPath]
    );
    console.log(serverResponse);
  }

  // setting interval for 1 sec
  setInterval(function () {
    randomRequest();
  }, 1000);
}

// Step 7
automateTests();
console.log('Press CTRL + C to stop');
