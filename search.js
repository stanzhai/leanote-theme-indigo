(function () {

    var G = window || this,
        even = G.BLOG.even,
        select = G.BLOG.$,
        searchIco = select('#search'),
        searchWrap = select('#search-wrap'),
        keyInput = select('#key'),
        back = select('#back');

    var noop = G.BLOG.noop;
    var root = select('html');

    function regtest(raw, regExp) {
        regExp.lastIndex = 0;
        return regExp.test(raw);
    }

    function matcher(post, regExp) {
        return regtest(post.title, regExp) || post.tags.some(function (tag) {
            return regtest(tag.name, regExp);
        }) || regtest(post.text, regExp);
    }

    function search(e) {
        var key = this.value.trim();
        if (!key) {
            return;
        }

        e.preventDefault();
    }


    searchIco.addEventListener(even, function () {
        searchWrap.classList.toggle('in');
        keyInput.value = '';
        searchWrap.classList.contains('in') ? keyInput.focus() : keyInput.blur();
    });

    back.addEventListener(even, function () {
        searchWrap.classList.remove('in');
    });

    document.addEventListener(even, function (e) {
        if (e.target.id !== 'key' && even === 'click') {
        }
    });

    keyInput.addEventListener('input', search);
    keyInput.addEventListener(even, search);

}).call(this);
