let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function () {
	event.preventDefault();
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name: commentName.value,
		body: commentBody.value,
	}

	commentName.value = '';
	commentBody.value = '';
	comments.push(comment);
	saveComments();
	showComments();
}

function saveComments() {
	localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	showComments();
}

function showComments() {
	let commentField = document.getElementById('comment-field');
	let out = '';
	comments.forEach(function (item) {
		out += `<p class="alert alert-dark">${item.name}</p>`;
		out += `<p class="alert alert-light">${item.body}</p>`;
	});
	commentField.innerHTML = out;
}