//Import Firebase
var pFirebase = new Firebase("https://kamesh.firebaseio.com/portfolio");

var aFirebase = new Firebase("https://kamesh.firebaseio.com/about");




//Portfolio Section
pFirebase.on('child_added', function(itemData) {
	var id = itemData.key();
	var item = itemData.val();


	$('#portfolio').append(

		'<div class="work">' + 
			'<a href="' + item.link + '" target="_blank">' +
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


//About Section
aFirebase.on('child_added', function(itemData) {
	var id = itemData.key();
	var item = itemData.val();


	$('#about').append(

		'<div class="work">' +
			'<a href="'+ item.link +'">' +
				'<img src="img/' + item.image + '" class="media" alt=""/>' +
				'<div class="caption">' +
					'<div class="work_title">' +
						'<h1>' + item.name + '</h1>' +
					'</div>' +
				'</div>' +
			'</a>' +
		'</div>' 
		);
	
});











