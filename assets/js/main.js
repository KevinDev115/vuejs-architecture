const url_api = 'http://...';

const el = e => document.querySelectorAll(e).length == 1 ? document.querySelectorAll(e)[0] : document.querySelectorAll(e).length == 0 ? false : document.querySelectorAll(e);
const cl = c => console.log(c);

const int = number => parseInt(number);
const float = number => parseFloat(number);
const ajax = (url, method = 'GET', data = null, headers = {}) => {
        el('body').style.overflow = 'hidden';

        if (el('.loader'))  el('.loader').style.display = 'block';

        return fetch(url_api + url, {
            method: method,
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-type': 'application/json',
                headers
            }
        }).then(r => {
            if (el('.loader')) el('.loader').style.display = 'none';
            el('body').style.overflow = 'unset';

            return r;
        });

    }


