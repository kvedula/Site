//Import Firebase
var firebase = new Firebase("https://kamesh.firebaseio.com/portfolio");

firebase.on('child_added', function(itemData) {
	var id = itemData.key();
	var item = itemData.val();


	$('#portfolio').append(

		'<div class="work">' + 
			'<a href="' + item.link + '" target="_blank" id="facter">' +
				'<img src="img/' + item.image + '" class="media" alt/>' +
				'<div class="caption">' +
					'<div class="work_title">' +
						'<h1>'+ item.name + '</h1>' +
					'</div>' +
				'</div>' +
			'</a>' +
		'</div>'
		);
	
});