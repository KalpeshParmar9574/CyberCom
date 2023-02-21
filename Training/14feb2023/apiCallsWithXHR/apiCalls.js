let xhr = new XMLHttpRequest();
xhr.open("GET", "/public/v2/users/733/posts", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) {
        console.log(xhr.responseText);
    }
}
xhr.send();