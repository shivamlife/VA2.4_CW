console.log('Hello!');

const username = document.getElementById('username');
const address = document.getElementById('address');
const submit = document.getElementById('submit');
const color = document.getElementById('color');
const interest = document.getElementsByName('interest');
const outputUserDetails = document.getElementById('outputUserDetails');
submit.addEventListener('click', () => {
  const arr = [];
  const uName = username.value;
  const uAddress = address.value;
  const ugender = document.querySelector('input[name="gender"]:checked').value;
  for (let i = 0; i < interest.length; i++) {
    if (interest[i].checked) {
      arr.push(interest[i].value);
    }
  }
  const ucolor = color.value;
  console.log(arr);
  console.log(uName, uAddress, ugender, ucolor);
  const usd = `<h2>User Information</h2>
  <p><strong>Name:</
  strong>${uName}</p>
  <p><strong>Address:</
  strong>${uAddress}</p>
  <p><strong>Gender:</
  strong>${ugender}</p>
  <p><strong>Interest:</
  strong>${arr}</p>
  <p><strong>Color:</
  strong>${ucolor}</p>
  `;
  outputUserDetails.innerHTML = usd;
});
