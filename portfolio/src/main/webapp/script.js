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

// Adds comment to the page.
function addComment() {
    // Create comment.
    const comment;
    // Add it to the page.
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = comment;
}

async function getCommentHistory() {
    console.log('Fetching a comment.');
    const response = await fetch('/data');
    console.log('Handling the response.');
    const comment = await response.text();
    console.log('Adding comment to dom: ' + comment);
    document.getElementById('comment-container').innerText = comment;
}
