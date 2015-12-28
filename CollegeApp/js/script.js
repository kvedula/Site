//Import Firebase
var firebase = new Firebase("https://collegeapps.firebaseio.com/colleges");




//College Section
firebase.on('child_added', function(itemData) {
	var id = itemData.key();
	var item = itemData.val();

	$('#colleges').append(

		'<div class="col s12 m6 l4 center-align">' +
        	'<div class="col s12 m12">' + 
          		'<div class="card">' +
            		'<div class="card-image">' +
              			'<img src="images/' + item.image + '">' + 
              			'<span class="card-title">' + item.name + '</span>' +
            		'</div>' +
            		'<div class="card-content">' + 
              			'<p>' + item.description + '</p>' + 
            		'</div>' + 
            		'<div class="card-action">' + 
              			'<a href="#">This is a link</a>' + 
            		'</div>' +
          		'</div>'+ 
        	'</div>' +
        '</div>'

		);
	
});
