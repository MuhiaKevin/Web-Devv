function get_comment() {
	var get_text_commenting = document.getElementById('comment_section').value;
	var comment_div = document.getElementById('pple_comment');	
	var p_tag = document.createElement('p');
	p_tag.innerHTML = get_text_commenting;

	document.body.appendChild(p_tag);


}

addEventListener('click',get_comment);
