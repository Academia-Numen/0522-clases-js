(() => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then((json) => {
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.website}`;
                $fragment.appendChild($li);
            })
            $fetch.appendChild($fragment);
        })
        .catch((error) => {
            let message = error.statusText || 'Ocurrió un error';
            $fetch.innerHTML = `Error ${error.status}: ${message}`;
        });
})();