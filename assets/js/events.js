/*

Javascript file to load event data onto website
 from JSON file in website folder.

*/

var section = document.querySelector('div.container.mtb');
var requestPath = 'events.json';
var request = new XMLHttpRequest();
request.open('GET', requestPath);
request.responseType = 'json';
request.send();

request.onload = function() {
	var events_json = request.response;
	displayEvents(events_json);
}

function displayEvents(jsonObj){
	var events_list = jsonObj['events'];

	for (i = 0; i < events_list.length; i++){
		var div_container = document.createElement('div');
		div_container.setAttribute("class", "event-container");

		var article = document.createElement('div.col-lg-4');
		var name = document.createElement('h4');
		var dateAndLocation = document.createElement('h4');
		var description = document.createElement('p');

		name.textContent = events_list[i].name;
		dateAndLocation.textContent = events_list[i].date + ' at ' + events_list[i].location;
		description.textContent = events_list[i].description;

		article.appendChild(name);
		article.appendChild(dateAndLocation);
		article.appendChild(description);

		// Carousel Pictures ------------------------------------------------
		var pictures = events_list[i].pictures;
		
		if (pictures.length != 0){
			article.setAttribute("class", "text-and-pictures");
			div_container.appendChild(article);

			var div_carousel = document.createElement('div');
			div_carousel.setAttribute("id","myCarousel"+i);
			div_carousel.setAttribute("class", "carousel slide");
			div_carousel.setAttribute("data-ride","carousel");
			
			var ol = document.createElement('ol')
			ol.setAttribute("class", "carousel-indicators");
			
			for (j = 0; j < pictures.length; j++){
				var li = document.createElement('li');
				li.setAttribute("data-target","#myCarousel");
				li.setAttribute("data-slide-to",j);

				if (j == 0)
					li.setAttribute("class", "active");

				ol.appendChild(li);
			}

			var inner = document.createElement('div');
			inner.setAttribute("class", "carousel-inner")


			for (j = 0; j < pictures.length; j++){
				var div_item = document.createElement('div');
				
				if (j == 0)
					div_item.setAttribute("class", "item active");
				
				else 
					div_item.setAttribute("class", "item");

				var img = document.createElement('img');
				img.src = pictures[j];
				div_item.appendChild(img);
				inner.appendChild(div_item);
			}

			// Left and right controls --------------------------------------

			var a_left = document.createElement('a');
			a_left.setAttribute("class", "left carousel-control");
			a_left.setAttribute("href", "#myCarousel"+i);
			a_left.setAttribute("data-slide", "prev");

			var span_left = document.createElement('span');
			span_left.setAttribute("class", "glyphicon glyphicon-chevron-left");
			var span_prev = document.createElement('span');
			span_prev.setAttribute("class", "sr-only");

			a_left.appendChild(span_left);
			a_left.appendChild(span_prev);

			var a_right = document.createElement('a');
			a_right.setAttribute("class", "right carousel-control");
			a_right.setAttribute("href", "#myCarousel"+i);
			a_right.setAttribute("data-slide", "next");

			var span_right = document.createElement('span');
			span_right.setAttribute("class", "glyphicon glyphicon-chevron-right");
			var span_next = document.createElement('span');
			span_next.setAttribute("class", "sr-only");

			a_right.appendChild(span_right);
			a_right.appendChild(span_next);
			
			div_carousel.appendChild(ol);
			div_carousel.appendChild(inner)
			div_carousel.appendChild(a_left);
			div_carousel.appendChild(a_right);

			div_container.appendChild(div_carousel);

		}
		else {
			article.setAttribute("class", "text-only");
			div_container.appendChild(article);
		}

		section.appendChild(div_container);

	}
}

