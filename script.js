const query = new URLSearchParams(window.location.search);
const url = query.get('page');
console.log('This is the', url, 'page');

async function fetch_source(file_name) {
    try{
        console.log('Fetching:','pages/'+ file_name +'.html');
        const res = await fetch('./pages/'+ file_name +'.html');
        if(!res.ok){
            throw new Error('Response Status:', res.status);
        }
        const res_html = await res.text();
        return res_html;

    } catch (error) {
        console.error(error.message);
    }
}

(async () => {
    const source = await fetch_source(url);
    const page = document.getElementById('page');
    if (url == undefined){
        page.innerHTML = `<h1>No page is selected</h1>
<a href="?page=hello">Visit the Hello page?</a>`
    } else {
        page.innerHTML = "";
        page.innerHTML = `${source}`;
    }
})();
