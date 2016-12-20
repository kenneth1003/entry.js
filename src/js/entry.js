var Entry = function(config) {
  var checkNext     = true, 
      elemsToShow   = [],
      windowScrollY = 0,
      theshold        = (config && config.theshold) ? config.theshold : 200,
      duration      = (config && config.duration) ? config.duration : '.5',
      transition    = 'all ' + duration + 's';

  Entry.prototype.init = function() {
    theshold -= window.innerHeight;
    _initElemsToShow();
    elemsToShow.sort(_compare);
    window.addEventListener('scroll', _handleScroll);
    window.addEventListener('resize', _handleResize);
    _handleScroll();
  };

  function _initElemsToShow() {
    var doms = document.querySelectorAll('.entryjs');
        windowScrollY = window.scrollY;
    doms.forEach(function(elem){
      var yOffset = _getComputedTranslateY(elem) || 0;
      elem.style.transition = transition;
      elemsToShow.push({
        dom: elem,
        position: elem.getClientRects()[0].top + windowScrollY + theshold - yOffset,
        yOffset: yOffset
      });
    });
  }
  function _handleScroll() {
    windowScrollY = window.scrollY;
    checkNext = true;
    for(var i = elemsToShow.length - 1; i >= 0; i--) {
      _checkPosition(windowScrollY, elemsToShow[i], i);
      if (!checkNext) break;
    }
    if (!elemsToShow.length) {
      window.removeEventListener('scroll', _handleScroll);
    } 
  }
  function _handleResize() {
    elemsToShow.forEach(function(elem){
      var newPos = elem.dom.getClientRects()[0].top + windowScrollY + theshold - elem.yOffset;
      elem.position = newPos;
    });
  }
  function _handleElemActive(elem) {
    var _elem = elem.dom,
        attr = _elem.getAttribute('data-entryjs-delay');
    if (attr) {
      setTimeout(_elem.classList.add.bind(_elem.classList, 'entryjs-active'), attr);
    } else {
      elem.dom.classList.add('entryjs-active');
    }
  }
  function _compare(a, b) {
    return b.position - a.position;
  }
  function _checkPosition(windowScrollY, elem, idx) {
    if (windowScrollY > elem.position) {
      _handleElemActive(elem);
      elemsToShow.splice(idx, 1);
    } else {
      checkNext = false;
    }
  }
  function _getComputedTranslateY(obj) {
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }
};