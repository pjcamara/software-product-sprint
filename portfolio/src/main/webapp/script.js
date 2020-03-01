// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Adds random fun message to the page.
function addFunMessage() {
    const funMessages =
        ['Henlo', 'Nalonalotulonie', 'I eat rocks.'];

    // Randomize the fun message.
    const message = funMessages[Math.floor(Math.random() * funMessages.length)];
    
    // Add it to the page.
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = message;
}

async function getFunMessages() {
    console.log('Fetching a fun message.');
    const response = await fetch('/data');
    console.log('Handling the response.');
    const message = await response.text();
    console.log('Adding fun message to dom: ' + message);
    document.getElementById('message-container').innerText = message;
}
