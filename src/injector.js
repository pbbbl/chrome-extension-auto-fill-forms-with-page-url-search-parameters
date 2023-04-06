
// // var windowLocationSearch = ${intValue} // do not un-comment, this is passed in from action.js
const issuesURL = "https://www.github.com/pbbbl/chrome-extension-auto-form-fill-with-url-query-params/issues"
const handleError = (error, code) => {
    const message = `Custom Error: @ Chrome Extension: Auto-Fill Form with URL Query Parameters.

Please try again. If the problem persists, please contact the developer or submit a GitHub Issue for this error.

You can Report this Error Here: ${issuesURL}

Error:
- Code: ${errorCode}
- Details: See next console warning (below) 
`;
    console.warn(message)
    console.warn(error);
}
(function () {
    try {
        const $search = window.location.search === '' ? null : window.location.search;
        if (!$search) return;
        const params = new URLSearchParams($search);
        const inputs = document.querySelectorAll('input, select, radio, textarea');
        const hasInputs = inputs?.length > 0;
        if (!hasInputs) return;
        inputs.forEach(input => {
            const paramName = `${input.id}`;
            try {


                const paramValue = params.get(paramName);
                if (paramValue !== null) {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        input.checked = (paramValue == 'true');
                    } else {
                        input.value = paramValue;
                    }
                }
            } catch (setInputError) {
                handleError(setInputError, 'x-set-input-error')
            }
        });


    } catch (unknownError) {
        handleError(unknownError, 'x-unknown-error')
    }
})();




//you may not need cors
//fetch('https://yourapi').then(function (response) {
// fetch("https://localhost:44320/sampleformdata/book", {mode: 'cors'}).then(function (response) {
// //fetch(`https://localhost:44320/sampleformdata/?value=${value}`, {mode: 'cors'}).then(function (response) {
// 	// The API call was successful!
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (data) {
//     // This is the JSON from our response
//     fillforms(data);
// 	console.log(data);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });
// function fillforms(data){

//     fillField(document.querySelector('input[name="fullname"]'), data.title);
//     fillField(document.querySelector('input[name="email"]'), data.author);
//     fillField(document.querySelector('input[name="city"]'), data.pages);

//     //form2
//     fillField(document.getElementById('field1'), data.title);
//     fillField(document.querySelector('input[aria-label="field2"]'), data.author);
//     fillField(document.querySelector('input[class="field3"]'), data.pages);
// }

// function fillField(selector, value)
// {
//     var field = selector();
//     fillField(field, value);
// }


// function fillField(field, value){
//     if(field){
//         field.value = value;
//     }  
// }

// function fillforms1(data){
//     //form1
//     var fullname = document.querySelector('input[name="fullname"]');
//     fillField(fullname, data[0]);

//     var email = document.querySelector('input[name="email"]');
//     fillField(email, data[1]);

//     //city
//     var city = document.querySelector('input[name="city"]');
//     fillField(city, data[2]);

//     //form2
//     var field1 = document.getElementById('field1');
//     fillField(field1, data[0]);

//     var field2 = document.querySelector('input[aria-label="field2"]');
//     fillField(field2, data[1]);

//     //probably terrible to look for a class like this.. 
//     var field3 = document.querySelector('input[class="field3"]');
//     fillField(field3, data[2]);
// }




// {
//     "title":"The Cat in the Hat",
//     "author":"Dr. Seuss",
//     "pages":"48"
// }
// function fillforms2(data){
//     //form1
//     var title = document.querySelector('input[name="fullname"]');
//     fillField(title, data.title);

//     var author = document.querySelector('input[name="email"]');
//     fillField(author, data.author);

//     //form2
//     var field1 = document.getElementById('field1');
//     fillField(field1, data.title);

//     //probably terrible to look for a class like this.. 
//     var field3 = document.querySelector('input[class="field3"]');
//     fillField(field3, data.pages)
// }








