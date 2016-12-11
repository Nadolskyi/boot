var update = document.getElementsByClassName('update');
var del = document.getElementsByClassName('delete');

//DELETE
for (var i=0;i<del.length;i++){
del[i].addEventListener('click', function (event) {
 if (confirm("Впевнені що хочете видалити з бази?")) {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'quote': event.target.id
    })
  })
  .then(res => {
    if (res.ok) return res.json();
  }).
  then(data => {
    console.log(data);
    window.location.reload(true);
  });
}else{
  alert("Правильно нефіг!");
}})};